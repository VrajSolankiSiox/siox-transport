"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export function LocalPageHero({
  eyebrow,
  title,
  lede,
  image,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <Image src={image} alt="" fill className="object-cover opacity-35" priority sizes="100vw" />
        <div className="absolute inset-0 bg-brand/85" />
      </div>
      <Reveal className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionLabel light>{eyebrow}</SectionLabel>
        <h1 className="mt-2 max-w-3xl text-3xl font-bold leading-tight text-white md:text-4xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-blue-100">{lede}</p>
      </Reveal>
    </section>
  );
}
