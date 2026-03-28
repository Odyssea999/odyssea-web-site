import nodemailer from 'nodemailer';

function getEmailConfigFromEnv() {
  const host = process.env.EMAIL_HOST;
  const port = Number(process.env.EMAIL_PORT ?? 587);
  const user = process.env.MAIL;
  const pass = process.env.MAIL_PASS;
  const recipient = process.env.EMAIL_TO ?? user;

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

function hasMissingRequiredField(payload) {
  const requiredFields = [
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

  return requiredFields.some((field) => {
    const value = payload[field];
    return value === undefined || value === null || value === '' || (Array.isArray(value) && value.length === 0);
  });
}

async function sendBecomeCustomerEmail(payload, config) {
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

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed.' });
  }

  const config = getEmailConfigFromEnv();

  if (!config) {
    return res.status(500).json({ message: 'Email configuration is missing.' });
  }

  const payload = req.body || {};

  if (hasMissingRequiredField(payload)) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  try {
    await sendBecomeCustomerEmail(payload, config);
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Failed to send become-customer email', error);
    return res.status(500).json({ message: 'Failed to send email.' });
  }
}
