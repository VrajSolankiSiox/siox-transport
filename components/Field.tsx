import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

const control =
  "w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-brand focus:ring-1 focus:ring-brand";

export function Field({
  label,
  id,
  ...props
}: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block" htmlFor={id}>
      <span className="mb-1.5 block text-xs font-medium text-slate-600">
        {label}
      </span>
      <input id={id} className={control} {...props} />
    </label>
  );
}

export function TextField({
  label,
  id,
  ...props
}: { label: string } & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="block" htmlFor={id}>
      <span className="mb-1.5 block text-xs font-medium text-slate-600">
        {label}
      </span>
      <textarea id={id} className={`${control} min-h-32 resize-y`} {...props} />
    </label>
  );
}

export function SelectField({
  label,
  id,
  children,
  ...props
}: { label: string; children: ReactNode } & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="block" htmlFor={id}>
      <span className="mb-1.5 block text-xs font-medium text-slate-600">
        {label}
      </span>
      <select id={id} className={control} {...props}>
        {children}
      </select>
    </label>
  );
}
