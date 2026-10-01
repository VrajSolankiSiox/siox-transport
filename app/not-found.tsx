import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[50vh] max-w-6xl flex-col justify-center px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-wider text-brand">404</p>
      <h1 className="mt-2 text-3xl font-bold text-ink">Page not found</h1>
      <p className="mt-3 max-w-md text-sm text-slate-600">That address is not on our site. Return home or request a quote.</p>
      <div className="mt-6 flex gap-3">
        <Link href="/" className="rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark">
          Home
        </Link>
        <Link href="/quote" className="rounded-md border border-border px-4 py-2 text-sm font-semibold text-ink hover:border-brand">
          Get a Quote
        </Link>
      </div>
    </section>
  );
}
