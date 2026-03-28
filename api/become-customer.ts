import {
  BecomeCustomerPayload,
  getEmailConfigFromEnv,
  hasMissingRequiredField,
  sendBecomeCustomerEmail
} from '../src/server/become-customer-mail';

export async function POST(request: Request): Promise<Response> {
  const config = getEmailConfigFromEnv();

  if (!config) {
    return Response.json(
      { message: 'Email configuration is missing.' },
      { status: 500 }
    );
  }

  const payload = await request.json() as Partial<BecomeCustomerPayload>;

  if (hasMissingRequiredField(payload)) {
    return Response.json(
      { message: 'Missing required fields.' },
      { status: 400 }
    );
  }

  try {
    await sendBecomeCustomerEmail(payload as BecomeCustomerPayload, config);
    return Response.json({ ok: true });
  } catch (error) {
    console.error('Failed to send become-customer email', error);
    return Response.json(
      { message: 'Failed to send email.' },
      { status: 500 }
    );
  }
}
