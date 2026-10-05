"use client";

import { FormEvent, useState } from "react";
import { HoneypotField } from "@/components/HoneypotField";
import { postFormJson } from "@/lib/forms/client";
import { Field, TextField } from "./Field";

export function ContactForm() {
  const [sent, setSent] = useState<{ name: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      company: String(data.get("company") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      message: String(data.get("message") || ""),
      _gotcha: String(data.get("_gotcha") || ""),
    };

    const result = await postFormJson("/api/contact", payload);
    setSubmitting(false);

    if (!result.ok) {
      setError(result.error);
      return;
    }

    setSent({ name: payload.name || "there" });
    form.reset();
  }

  if (sent) {
    return (
      <div className="rounded-lg border border-border bg-white p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">Message received</p>
        <h2 className="mt-2 text-xl font-bold text-ink">Thank you, {sent.name}.</h2>
        <p className="mt-3 text-sm text-slate-600">
          Your message was sent to our team. We will get back to you as soon as we can.
        </p>
        <button
          type="button"
          className="mt-6 text-sm font-semibold text-brand hover:underline"
          onClick={() => setSent(null)}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative rounded-lg border border-border bg-white p-6 md:p-8">
      <HoneypotField />
      <h2 className="text-lg font-semibold text-ink">Send a message</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field id="name" name="name" label="Name" required autoComplete="name" disabled={submitting} />
        <Field id="company" name="company" label="Company" autoComplete="organization" disabled={submitting} />
        <Field id="email" name="email" type="email" label="Email" required autoComplete="email" disabled={submitting} />
        <Field id="phone" name="phone" type="tel" label="Phone" autoComplete="tel" disabled={submitting} />
      </div>
      <div className="mt-4">
        <TextField id="message" name="message" label="Message" required disabled={submitting} />
      </div>
      {error && (
        <p className="mt-4 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="mt-5 rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
