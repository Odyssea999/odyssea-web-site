import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';
import {
  BecomeCustomerPayload,
  getEmailConfigFromEnv,
  hasMissingRequiredField,
  sendBecomeCustomerEmail
} from './src/server/become-customer-mail';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);
  server.use(express.json());

  // Example Express Rest API endpoints
  server.post('/api/become-customer', async (req, res) => {
    const config = getEmailConfigFromEnv();

    if (!config) {
      return res.status(500).json({
        message: 'Email configuration is missing.'
      });
    }

    const payload = req.body as Partial<BecomeCustomerPayload>;

    if (hasMissingRequiredField(payload)) {
      return res.status(400).json({
        message: 'Missing required fields.'
      });
    }

    try {
      await sendBecomeCustomerEmail(payload as BecomeCustomerPayload, config);

      return res.status(200).json({ ok: true });
    } catch (error) {
      console.error('Failed to send become-customer email', error);
      return res.status(500).json({
        message: 'Failed to send email.'
      });
    }
  });

  // Serve static files from /browser
  server.get('**', express.static(browserDistFolder, {
    maxAge: '1y',
    index: 'index.html',
  }));

  // All regular routes use the Angular engine
  server.get('**', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
