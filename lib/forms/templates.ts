import { escapeHtml } from "./escape";

function row(label: string, value: string) {
  return `<tr><td style="padding:8px 12px;font-weight:600;color:#334155;vertical-align:top">${escapeHtml(label)}</td><td style="padding:8px 12px;color:#0f172a">${escapeHtml(value)}</td></tr>`;
}

function wrap(title: string, rows: string) {
  return `
    <div style="font-family:system-ui,sans-serif;max-width:560px">
      <h1 style="font-size:18px;color:#0f172a;margin:0 0 16px">${escapeHtml(title)}</h1>
      <table style="border-collapse:collapse;width:100%;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden">
        ${rows}
      </table>
    </div>
  `;
}

export function contactEmailHtml(data: {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}) {
  const rows = [
    row("Name", data.name),
    data.company ? row("Company", data.company) : "",
    row("Email", data.email),
    data.phone ? row("Phone", data.phone) : "",
    row("Message", data.message),
  ].join("");
  return wrap("New contact form message", rows);
}

export function contactEmailText(data: {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}) {
  return [
    "New contact form message",
    "",
    `Name: ${data.name}`,
    data.company ? `Company: ${data.company}` : null,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    "",
    "Message:",
    data.message,
  ]
    .filter(Boolean)
    .join("\n");
}

export function joinUsEmailHtml(data: {
  name: string;
  phone: string;
  email: string;
  location: string;
  equipment: string;
  applyingFor: string;
  experience: number;
}) {
  const rows = [
    row("Name", data.name),
    row("Phone", data.phone),
    row("Email", data.email),
    row("Location", data.location),
    row("Applying for", data.applyingFor),
    row("Equipment", data.equipment),
    row("Years of experience", String(data.experience)),
  ].join("");
  return wrap("New driver application", rows);
}

export function joinUsEmailText(data: {
  name: string;
  phone: string;
  email: string;
  location: string;
  equipment: string;
  applyingFor: string;
  experience: number;
}) {
  return [
    "New driver application",
    "",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Location: ${data.location}`,
    `Applying for: ${data.applyingFor}`,
    `Equipment: ${data.equipment}`,
    `Years of experience: ${data.experience}`,
  ].join("\n");
}

export function joinUsApplicantHtml(name: string) {
  return `
    <div style="font-family:system-ui,sans-serif;max-width:560px;color:#0f172a">
      <p>Hi ${escapeHtml(name)},</p>
      <p>Thank you for applying to drive with SIOX Transports. We received your application and our recruiting team will follow up with next steps.</p>
      <p style="color:#64748b;font-size:14px">SIOX Transports</p>
    </div>
  `;
}

export function joinUsApplicantText(name: string) {
  return `Hi ${name},\n\nThank you for applying to drive with SIOX Transports. We received your application and our recruiting team will follow up with next steps.\n\nSIOX Transports`;
}
