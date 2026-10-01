"use client";

import { FormEvent, useState } from "react";
import { applyingForOptions, joinEquipmentOptions } from "@/lib/careers";
import { Field, SelectField } from "./Field";

export function JoinUsForm({
  defaultApplyingFor,
  defaultEquipment,
}: {
  defaultApplyingFor?: string;
  defaultEquipment?: string;
}) {
  const [sent, setSent] = useState<{ name: string } | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setSent({ name: String(data.get("name") || "there") });
  }

  if (sent) {
    return (
      <div className="rounded-lg border border-border bg-white p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">Application received</p>
        <h2 className="mt-2 text-xl font-bold text-ink">Thank you, {sent.name}.</h2>
        <p className="mt-3 text-sm text-slate-600">
          Your application is saved in this session. Connect the form to your hiring inbox when you are ready to receive
          applications live.
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
    <form onSubmit={onSubmit} className="rounded-lg border border-border bg-white p-6 md:p-8">
      <h2 className="text-lg font-semibold text-ink">Join the SIOX team</h2>
      <p className="mt-1 text-sm text-slate-600">All fields are required.</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field id="name" name="name" label="Name" required autoComplete="name" />
        <Field id="phone" name="phone" type="tel" label="Number" required autoComplete="tel" />
        <div className="sm:col-span-2">
          <Field id="email" name="email" type="email" label="Email" required autoComplete="email" />
        </div>
        <div className="sm:col-span-2">
          <Field
            id="location"
            name="location"
            label="City, state, zip"
            required
            placeholder="Lyndon Station, WI 53944"
          />
        </div>
        <SelectField
          id="equipment"
          name="equipment"
          label="Equipment type"
          required
          defaultValue={defaultEquipment ?? ""}
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
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
      >
        Submit application
      </button>
    </form>
  );
}
