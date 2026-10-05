"use client";

import { FormEvent, useState } from "react";
import { HoneypotField } from "@/components/HoneypotField";
import { applyingForOptions, joinEquipmentOptions } from "@/lib/careers";
import { postFormJson } from "@/lib/forms/client";
import { Field, SelectField } from "./Field";

export function JoinUsForm({
  defaultApplyingFor,
  defaultEquipment,
}: {
  defaultApplyingFor?: string;
  defaultEquipment?: string;
}) {
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
      phone: String(data.get("phone") || ""),
      email: String(data.get("email") || ""),
      location: String(data.get("location") || ""),
      equipment: String(data.get("equipment") || ""),
      applyingFor: String(data.get("applyingFor") || ""),
      experience: String(data.get("experience") || ""),
      _gotcha: String(data.get("_gotcha") || ""),
    };

    const result = await postFormJson("/api/join-us", payload);
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
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">Application received</p>
        <h2 className="mt-2 text-xl font-bold text-ink">Thank you, {sent.name}.</h2>
        <p className="mt-3 text-sm text-slate-600">
          Your application was submitted successfully. Check your inbox for a confirmation email from our team.
        </p>
        <button
          type="button"
          className="mt-6 text-sm font-semibold text-brand hover:underline"
          onClick={() => setSent(null)}
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative rounded-lg border border-border bg-white p-6 md:p-8">
      <HoneypotField />
      <h2 className="text-lg font-semibold text-ink">Join the SIOX team</h2>
      <p className="mt-1 text-sm text-slate-600">All fields are required.</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field id="name" name="name" label="Name" required autoComplete="name" disabled={submitting} />
        <Field id="phone" name="phone" type="tel" label="Number" required autoComplete="tel" disabled={submitting} />
        <div className="sm:col-span-2">
          <Field id="email" name="email" type="email" label="Email" required autoComplete="email" disabled={submitting} />
        </div>
        <div className="sm:col-span-2">
          <Field
            id="location"
            name="location"
            label="City, state, zip"
            required
            placeholder="Lyndon Station, WI 53944"
            disabled={submitting}
          />
        </div>
        <SelectField
          id="equipment"
          name="equipment"
          label="Equipment type"
          required
          defaultValue={defaultEquipment ?? ""}
          disabled={submitting}
        >
          <option value="" disabled>
            Select equipment
          </option>
          {joinEquipmentOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </SelectField>
        <SelectField
          id="applyingFor"
          name="applyingFor"
          label="Applying for"
          required
          defaultValue={defaultApplyingFor ?? ""}
          disabled={submitting}
        >
          <option value="" disabled>
            Select role
          </option>
          {applyingForOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </SelectField>
        <div className="sm:col-span-2">
          <Field
            id="experience"
            name="experience"
            label="Years of experience"
            type="number"
            min={0}
            max={60}
            step={1}
            required
            placeholder="5"
            disabled={submitting}
          />
        </div>
      </div>
      {error && (
        <p className="mt-4 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="mt-6 rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Submitting…" : "Submit application"}
      </button>
    </form>
  );
}
