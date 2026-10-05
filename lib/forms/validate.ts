import { applyingForOptions, joinEquipmentOptions } from "@/lib/careers";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isHoneypotTripped(value: unknown): boolean {
  return typeof value === "string" && value.trim().length > 0;
}

export function requireString(value: unknown, field: string, maxLen = 500): string {
  const s = typeof value === "string" ? value.trim() : "";
  if (!s) throw new FieldError(field, `${field} is required`);
  if (s.length > maxLen) throw new FieldError(field, `${field} is too long`);
  return s;
}

export function optionalString(value: unknown, maxLen = 500): string {
  const s = typeof value === "string" ? value.trim() : "";
  if (s.length > maxLen) throw new FieldError("company", "Company name is too long");
  return s;
}

export function requireEmail(value: unknown): string {
  const email = requireString(value, "Email", 254).toLowerCase();
  if (!EMAIL_RE.test(email)) throw new FieldError("email", "Enter a valid email address");
  return email;
}

export class FieldError extends Error {
  constructor(
    public field: string,
    message: string,
  ) {
    super(message);
    this.name = "FieldError";
  }
}

export function parseContactBody(body: Record<string, unknown>) {
  if (isHoneypotTripped(body._gotcha)) {
    throw new Error("Invalid submission");
  }

  return {
    name: requireString(body.name, "Name", 120),
    company: optionalString(body.company, 200),
    email: requireEmail(body.email),
    phone: optionalString(body.phone, 40),
    message: requireString(body.message, "Message", 5000),
  };
}

export function parseJoinUsBody(body: Record<string, unknown>) {
  if (isHoneypotTripped(body._gotcha)) {
    throw new Error("Invalid submission");
  }

  const equipment = requireString(body.equipment, "Equipment type", 80);
  const applyingFor = requireString(body.applyingFor, "Applying for", 80);

  if (!joinEquipmentOptions.includes(equipment as (typeof joinEquipmentOptions)[number])) {
    throw new FieldError("equipment", "Select a valid equipment type");
  }
  if (!applyingForOptions.includes(applyingFor as (typeof applyingForOptions)[number])) {
    throw new FieldError("applyingFor", "Select a valid role");
  }

  const experienceRaw = requireString(body.experience, "Years of experience", 3);
  const experience = Number.parseInt(experienceRaw, 10);
  if (!Number.isFinite(experience) || experience < 0 || experience > 60) {
    throw new FieldError("experience", "Enter years of experience between 0 and 60");
  }

  return {
    name: requireString(body.name, "Name", 120),
    phone: requireString(body.phone, "Phone", 40),
    email: requireEmail(body.email),
    location: requireString(body.location, "Location", 200),
    equipment,
    applyingFor,
    experience,
  };
}
