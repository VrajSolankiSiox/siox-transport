import { NextResponse } from "next/server";
import { FieldError } from "./validate";

export function jsonError(message: string, status = 400, field?: string) {
  return NextResponse.json({ ok: false, error: message, field }, { status });
}

export function jsonOk(message = "Sent") {
  return NextResponse.json({ ok: true, message });
}

export function handleRouteError(err: unknown) {
  if (err instanceof FieldError) {
    return jsonError(err.message, 400, err.field);
  }
  const message = err instanceof Error ? err.message : "Something went wrong";
  if (/not configured/i.test(message)) {
    return jsonError("Email delivery is not configured yet. Please call us directly.", 503);
  }
  console.error("[forms]", err);
  return jsonError("We could not send your message. Please try again or contact us by phone.", 500);
}
