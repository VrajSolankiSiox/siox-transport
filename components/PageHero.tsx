import type { Photo } from "@/lib/unsplash";
import { FillImage } from "./FillImage";
import { SectionLabel } from "./SectionLabel";

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
        <FillImage photo={photo} priority sizes="100vw" className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-brand/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-slate-900/50" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionLabel light>{eyebrow}</SectionLabel>
        <h1 className="mt-2 max-w-3xl text-3xl font-bold leading-tight text-white md:text-4xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-blue-100">{lede}</p>
      </div>
    </section>
  );
}
