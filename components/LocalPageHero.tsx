"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { media } from "@/lib/media";

export function LocalPageHero({
  eyebrow,
  title,
  lede,
  image = media.trucksWide,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <Image src={image} alt="" fill className="object-cover" priority sizes="100vw" />
        {/* Darken the left where copy sits; keep the right side of the photo bright */}
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
      <Reveal className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-wider text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.85)]">
          {eyebrow}
        </p>
        <h1 className="mt-2 max-w-3xl text-3xl font-bold leading-tight text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.8),0_0_1px_rgba(0,0,0,0.9)] md:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-white [text-shadow:0_1px_14px_rgba(0,0,0,0.75)] md:text-lg">
          {lede}
        </p>
      </Reveal>
    </section>
  );
}
