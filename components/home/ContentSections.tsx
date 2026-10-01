"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { differences, directionCopy, partnerCopy, technology } from "@/lib/content";
import { media } from "@/lib/media";

export function PartnerSection() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
      <Reveal>
        <SectionLabel>About SIOX</SectionLabel>
        <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">Building connectivity, delivering value</h2>
        <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-600">
          {partnerCopy.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <Link href="/about" className="mt-6 inline-block text-sm font-semibold text-brand hover:underline">
          Learn more about us
        </Link>
      </Reveal>
      <Reveal delay={0.08} className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-slate-100">
        <Image src={media.person} alt="SIOX logistics professional" fill className="object-cover" sizes="50vw" />
      </Reveal>
    </section>
  );
}

export function DirectionSection() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-slate-100 md:order-1">
          <Image src={media.trucksWide} alt="SIOX fleet on the road" fill className="object-cover" sizes="50vw" />
        </Reveal>
        <Reveal delay={0.06} className="md:order-2">
          <SectionLabel>Our direction</SectionLabel>
          <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">Where we stand, where we&apos;re headed</h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-600">
            {directionCopy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function TechnologySection() {
  return (
    <section className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <Reveal>
          <SectionLabel>Technology</SectionLabel>
          <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">Smarter logistics, powered by technology</h2>
        </Reveal>
        <Stagger className="mt-10 grid gap-6 md:grid-cols-3">
          {technology.map((item) => (
            <StaggerItem key={item.title}>
              <article className="h-full rounded-xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-brand/30 hover:shadow-md hover:shadow-brand/5">
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function DifferencesSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <Reveal>
        <SectionLabel>Why SIOX</SectionLabel>
        <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">What makes us different</h2>
      </Reveal>
      <Stagger className="mt-10 grid gap-6 md:grid-cols-3">
        {differences.map((item) => (
          <StaggerItem key={item.title}>
            <article className="h-full rounded-xl border border-border p-6 transition hover:-translate-y-1 hover:border-brand/30">
              <h3 className="text-lg font-semibold text-brand">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.body}</p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
