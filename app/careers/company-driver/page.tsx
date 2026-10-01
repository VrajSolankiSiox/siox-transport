import type { Metadata } from "next";
import Image from "next/image";
import { CareerEquipmentSection } from "@/components/careers/CareerEquipmentSection";
import { LocalPageHero } from "@/components/LocalPageHero";
import { Reveal } from "@/components/motion/Reveal";
import {
  careerHeroImages,
  companyDriverContent,
  companyDriverEquipment,
} from "@/lib/careers";

export const metadata: Metadata = {
  title: "Company Driver Careers",
  description: "Company driver opportunities at SIOX Transports — flatbed and dry van routes nationwide.",
};

export default function CompanyDriverCareerPage() {
  return (
    <>
      <LocalPageHero
        eyebrow="Careers"
        title={companyDriverContent.title}
        lede={companyDriverContent.lede}
        image={careerHeroImages.companyDriver}
      />
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <Reveal>
          <h2 className="text-xl font-bold text-ink">Why drive with SIOX</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {companyDriverContent.perks.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-slate-600">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.05} className="relative mt-10 aspect-[21/9] overflow-hidden rounded-xl border border-border bg-slate-100">
          <Image
            src={careerHeroImages.companyDriver}
            alt="Company driver on a long-haul route"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </Reveal>
      </section>
      <CareerEquipmentSection
        equipment={companyDriverEquipment}
        intro="Company driver openings are available for flatbed and dry van. Apply today to join the SIOX driving team."
        applyRole="Company Driver"
      />
    </>
  );
}
