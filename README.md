# OdysseaWebSite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.2.

## Email setup

The `become-customer` flow sends submissions through the server route `POST /api/become-customer`.

Create your local environment from [.env.example](/Users/jeuneb/Documents/workspace/odyssea/odyssea-web-site/.env.example) and provide your SMTP credentials:

```env
EMAIL_HOST=smtp.zoho.eu
EMAIL_PORT=587
MAIL=your-zoho-address@zohomail.eu
MAIL_PASS=your-zoho-password
EMAIL_TO=your-destination-address@zohomail.eu
```

For local SSR startup, export the variables before launching the Node server. Example:

```bash
export EMAIL_HOST=smtp.zoho.eu
export EMAIL_PORT=587
export MAIL=your-zoho-address@zohomail.eu
export MAIL_PASS='your-zoho-password'
export EMAIL_TO=your-destination-address@zohomail.eu
npm run build
npm run serve:ssr:odyssea-web-site
```

## Vercel deployment

If you deploy on Vercel with a standard frontend build, the email endpoint is handled by the Vercel Function at [api/become-customer.ts](/Users/jeuneb/Documents/workspace/odyssea/odyssea-web-site/api/become-customer.ts).

The project also includes a minimal [vercel.json](/Users/jeuneb/Documents/workspace/odyssea/odyssea-web-site/vercel.json) that:

- runs `ng build`
- serves `dist/odyssea-web-site/browser` as the frontend output
- keeps `/api/*` handled by Vercel Functions
- rewrites application routes like `/features` or `/become-customer` to `index.html`

Set these environment variables in your Vercel project:

```env
EMAIL_HOST=smtp.zoho.eu
EMAIL_PORT=587
MAIL=your-zoho-address@zohomail.eu
MAIL_PASS=your-zoho-password
EMAIL_TO=your-destination-address@zohomail.eu
```

With this setup:

- the frontend can keep calling `/api/become-customer`
- Vercel runs the function securely on the server side
- your SMTP credentials stay in Vercel environment variables and are never exposed to the browser

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
