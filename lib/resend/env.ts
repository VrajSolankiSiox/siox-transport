/** Outbound sender for contact + join-us form notifications (verify in Resend). */
export const FORM_MAIL_FROM = "dispatch@sioxtransports.com";

/** Inbox that receives all form submissions. */
export const FORM_MAIL_TO = "sales@sioxtransports.com";

export type ResendConfig = {
  apiKey: string;
  from: string;
  to: string;
};

export function getResendConfig(): ResendConfig | null {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) return null;

  return {
    apiKey,
    from: FORM_MAIL_FROM,
    to: FORM_MAIL_TO,
  };
}

export function requireResendConfig(): ResendConfig {
  const config = getResendConfig();
  if (!config) {
    throw new Error("Email is not configured. Set RESEND_API_KEY on the server.");
  }
  return config;
}
