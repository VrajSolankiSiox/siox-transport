"use client";

import { FormEvent, useState } from "react";
import { Field, TextField } from "./Field";

export function ContactForm() {
  const [sent, setSent] = useState<{ name: string } | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setSent({ name: String(data.get("name") || "there") });
  }

  if (sent) {
    return (
      <div className="rounded-lg border border-border bg-white p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">Message received</p>
        <h2 className="mt-2 text-xl font-bold text-ink">Thank you, {sent.name}.</h2>
        <p className="mt-3 text-sm text-slate-600">
          We have your note in this session. Connect the form to dispatch email when you are ready to deliver messages
          to the team.
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
    <form onSubmit={onSubmit} className="rounded-lg border border-border bg-white p-6 md:p-8">
      <h2 className="text-lg font-semibold text-ink">Send a message</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field id="name" name="name" label="Name" required autoComplete="name" />
        <Field id="company" name="company" label="Company" autoComplete="organization" />
        <Field id="email" name="email" type="email" label="Email" required autoComplete="email" />
        <Field id="phone" name="phone" type="tel" label="Phone" autoComplete="tel" />
      </div>
      <div className="mt-4">
        <TextField id="message" name="message" label="Message" required />
      </div>
      <button
        type="submit"
        className="mt-5 rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
      >
        Send message
      </button>
    </form>
  );
}
