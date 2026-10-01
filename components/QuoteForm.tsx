"use client";

import { FormEvent, useState } from "react";
import { services } from "@/lib/content";
import { Field, SelectField, TextField } from "./Field";

type Quote = {
  name: string;
  origin: string;
  destination: string;
  equipment: string;
};

export function QuoteForm() {
  const [quote, setQuote] = useState<Quote | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setQuote({
      name: String(data.get("name") || "there"),
      origin: String(data.get("origin") || ""),
      destination: String(data.get("destination") || ""),
      equipment: String(data.get("equipment") || ""),
    });
  }

  if (quote) {
    return (
      <div className="rounded-lg border border-border bg-white p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">Quote request</p>
        <h2 className="mt-2 text-xl font-bold text-ink">
          Thanks, {quote.name}. We noted {quote.origin} to {quote.destination}.
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          Equipment: {quote.equipment}. This preview keeps the request in your browser — connect it to dispatch when the
          site goes live.
        </p>
        <button
          type="button"
          className="mt-6 text-sm font-semibold text-brand hover:underline"
          onClick={() => setQuote(null)}
        >
          Start another quote
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-lg border border-border bg-white p-6 md:p-8">
      <h2 className="text-lg font-semibold text-ink">Request a freight quote</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field id="name" name="name" label="Name" required autoComplete="name" />
        <Field id="company" name="company" label="Company" autoComplete="organization" />
        <Field id="email" name="email" type="email" label="Email" required autoComplete="email" />
        <Field id="phone" name="phone" type="tel" label="Phone" autoComplete="tel" />
        <Field id="origin" name="origin" label="Origin" required placeholder="Dallas, TX" />
        <Field id="destination" name="destination" label="Destination" required placeholder="Atlanta, GA" />
        <SelectField id="equipment" name="equipment" label="Equipment" required defaultValue="Full Truckload (FTL)">
          {services.map((service) => (
            <option key={service.slug}>{service.name}</option>
          ))}
        </SelectField>
        <Field id="date" name="date" type="date" label="Pickup date" />
        <Field id="weight" name="weight" label="Weight" placeholder="42,000 lbs" />
        <Field id="commodity" name="commodity" label="Commodity" placeholder="Palletized retail goods" />
      </div>
      <div className="mt-4">
        <TextField id="notes" name="notes" label="Notes" placeholder="Appointments, temperature, or other details." />
      </div>
      <button
        type="submit"
        className="mt-5 rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
      >
        Request quote
      </button>
    </form>
  );
}
