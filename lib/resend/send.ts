import { Resend } from "resend";
import { requireResendConfig } from "./env";

export type SendEmailInput = {
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
};

let client: Resend | null = null;

function getClient(apiKey: string) {
  if (!client) client = new Resend(apiKey);
  return client;
}

export async function sendInboxEmail({ subject, html, text, replyTo }: SendEmailInput) {
  const { apiKey, from, to } = requireResendConfig();
  return sendEmail({ apiKey, from, to: [to], subject, html, text, replyTo });
}

export async function sendEmail({
  apiKey,
  from,
  to,
  subject,
  html,
  text,
  replyTo,
}: SendEmailInput & { apiKey: string; from: string; to: string[] }) {
  const resend = getClient(apiKey);

  const { data, error } = await resend.emails.send({
    from,
    to,
    subject,
    html,
    text,
    replyTo: replyTo || undefined,
  });

  if (error) {
    throw new Error(error.message || "Failed to send email");
  }

  return data;
}
