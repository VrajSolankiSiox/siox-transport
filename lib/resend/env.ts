const DEFAULT_INBOX = "info@sioxtransports.com";

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
    from: process.env.RESEND_FROM_EMAIL?.trim() || DEFAULT_INBOX,
    to: process.env.RESEND_TO_EMAIL?.trim() || DEFAULT_INBOX,
  };
}

export function requireResendConfig(): ResendConfig {
  const config = getResendConfig();
  if (!config) {
    throw new Error("Email is not configured. Set RESEND_API_KEY on the server.");
  }
  return config;
}
