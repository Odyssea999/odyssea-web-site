import * as nodemailer from 'nodemailer';

export type BecomeCustomerPayload = {
  firstName: string;
  lastName: string;
  workEmail: string;
  phone: string;
  institutionName: string;
  institutionType: string;
  country: string;
  city: string;
  studentsRange: string;
  staffRange: string;
  needs: string[];
  timeline: string;
  priority: string;
  demoFormat: string;
  preferredContact: string;
  comments?: string;
};

type EmailConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
  recipient: string;
};

const requiredFields: Array<keyof BecomeCustomerPayload> = [
  'firstName',
  'lastName',
  'workEmail',
  'phone',
  'institutionName',
  'institutionType',
  'country',
  'city',
  'studentsRange',
  'staffRange',
  'needs',
  'timeline',
  'priority',
  'demoFormat',
  'preferredContact'
];

export function getEmailConfigFromEnv(): EmailConfig | null {
  const host = process.env['EMAIL_HOST'];
  const port = Number(process.env['EMAIL_PORT'] ?? 587);
  const user = process.env['MAIL'];
  const pass = process.env['MAIL_PASS'];
  const recipient = process.env['EMAIL_TO'] ?? user;

  if (!host || !user || !pass || !recipient) {
    return null;
  }

  return {
    host,
    port,
    user,
    pass,
    recipient
  };
}

export function hasMissingRequiredField(payload: Partial<BecomeCustomerPayload>): boolean {
  return requiredFields.some((field) => {
    const value = payload[field];
    return value === undefined || value === null || value === '' || (Array.isArray(value) && value.length === 0);
  });
}

export async function sendBecomeCustomerEmail(
  payload: BecomeCustomerPayload,
  config: EmailConfig
): Promise<void> {
  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: false,
    requireTLS: true,
    auth: {
      user: config.user,
      pass: config.pass
    }
  });

  const needs = payload.needs.join(', ');
  const subject = `Nouvelle demande de demo - ${payload.institutionName}`;
  const text = [
    'Nouvelle demande become-customer',
    '',
    `Contact: ${payload.firstName} ${payload.lastName}`,
    `Email: ${payload.workEmail}`,
    `Telephone: ${payload.phone}`,
    `Etablissement: ${payload.institutionName}`,
    `Type: ${payload.institutionType}`,
    `Pays: ${payload.country}`,
    `Ville: ${payload.city}`,
    `Eleves / apprenants: ${payload.studentsRange}`,
    `Collaborateurs: ${payload.staffRange}`,
    `Besoins: ${needs}`,
    `Timing: ${payload.timeline}`,
    `Priorite: ${payload.priority}`,
    `Format de demo: ${payload.demoFormat}`,
    `Canal prefere: ${payload.preferredContact}`,
    `Commentaires: ${payload.comments || 'Aucun'}`
  ].join('\n');

  const html = `
    <h2>Nouvelle demande become-customer</h2>
    <p><strong>Contact:</strong> ${payload.firstName} ${payload.lastName}</p>
    <p><strong>Email:</strong> ${payload.workEmail}</p>
    <p><strong>Telephone:</strong> ${payload.phone}</p>
    <p><strong>Etablissement:</strong> ${payload.institutionName}</p>
    <p><strong>Type:</strong> ${payload.institutionType}</p>
    <p><strong>Pays:</strong> ${payload.country}</p>
    <p><strong>Ville:</strong> ${payload.city}</p>
    <p><strong>Eleves / apprenants:</strong> ${payload.studentsRange}</p>
    <p><strong>Collaborateurs:</strong> ${payload.staffRange}</p>
    <p><strong>Besoins:</strong> ${needs}</p>
    <p><strong>Timing:</strong> ${payload.timeline}</p>
    <p><strong>Priorite:</strong> ${payload.priority}</p>
    <p><strong>Format de demo:</strong> ${payload.demoFormat}</p>
    <p><strong>Canal prefere:</strong> ${payload.preferredContact}</p>
    <p><strong>Commentaires:</strong> ${payload.comments || 'Aucun'}</p>
  `;

  await transporter.sendMail({
    from: config.user,
    to: config.recipient,
    replyTo: payload.workEmail,
    subject,
    text,
    html
  });
}
