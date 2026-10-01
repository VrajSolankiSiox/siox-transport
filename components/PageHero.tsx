import type { Photo } from "@/lib/unsplash";
import { FillImage } from "./FillImage";

export function PageHero({
  eyebrow,
  title,
  lede,
  photo,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  photo: Photo;
}) {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <FillImage photo={photo} priority sizes="100vw" className="object-cover" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-brand/45 via-brand/20 to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
          aria-hidden
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-wider text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.85)]">
          {eyebrow}
        </p>
        <h1 className="mt-2 max-w-3xl text-3xl font-bold leading-tight text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.8),0_0_1px_rgba(0,0,0,0.9)] md:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-white [text-shadow:0_1px_14px_rgba(0,0,0,0.75)] md:text-lg">
          {lede}
        </p>
      </div>
    </section>
  );
}
