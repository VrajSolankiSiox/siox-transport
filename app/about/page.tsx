import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { LocalPageHero } from "@/components/LocalPageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { differences, directionCopy, partnerCopy, technology } from "@/lib/content";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "SIOX Transports moves U.S. freight with integrity, precision, and a team that treats every load as a commitment.",
};

export default function AboutPage() {
  return (
    <>
      <LocalPageHero
        eyebrow="About us"
        title="A carrier that stays with the load"
        lede="SIOX Transports is a U.S. logistics partner for shippers who need dependable capacity and clear communication from pickup to delivery."
        image={media.truck}
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2 md:py-20">
        <Reveal>
          <SectionLabel>Who we are</SectionLabel>
          <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">Your trusted partner in U.S. transportation</h2>
        </Reveal>
        <Reveal delay={0.06} className="space-y-4 text-sm leading-relaxed text-slate-600">
          {partnerCopy.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-2 md:py-20">
          <Reveal className="grid grid-cols-2 gap-3">
            <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-lg border border-border bg-slate-100">
              <Image src={media.trucksWide} alt="SIOX fleet" fill className="object-cover" sizes="50vw" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg border border-border bg-slate-100">
              <Image src={media.truck} alt="SIOX truck" fill className="object-cover" sizes="25vw" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg border border-border bg-slate-100">
              <Image src={media.person} alt="SIOX team member" fill className="object-cover" sizes="25vw" />
            </div>
          </Reveal>
          <Reveal delay={0.06}>
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

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <Reveal>
          <SectionLabel>How we work</SectionLabel>
          <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">Smarter logistics, powered by technology</h2>
        </Reveal>
        <Stagger className="mt-10 grid gap-6 md:grid-cols-3">
          {technology.map((item) => (
            <StaggerItem key={item.title}>
              <article className="rounded-lg border border-border bg-white p-6">
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-2 md:py-20">
          <Reveal>
            <SectionLabel>Why SIOX</SectionLabel>
            <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">What makes us different</h2>
            <div className="mt-8 space-y-6">
              {differences.map((item) => (
                <div key={item.title}>
                  <h3 className="font-semibold text-brand">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-slate-100">
            <Image src={media.person} alt="SIOX professional" fill className="object-cover" sizes="45vw" />
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
