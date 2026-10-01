import type { Metadata } from "next";
import Image from "next/image";
import { CareerEquipmentSection } from "@/components/careers/CareerEquipmentSection";
import { LocalPageHero } from "@/components/LocalPageHero";
import { Reveal } from "@/components/motion/Reveal";
import {
  careerHeroImages,
  companyDriverContent,
  companyDriverEquipment,
  ownerOperatorContent,
  ownerOperatorEquipment,
} from "@/lib/careers";

export const metadata: Metadata = {
  title: "Owner Operator Careers",
  description: "Drive with SIOX Transports as an owner operator — flatbed, dry van, reefer, stepdeck, box truck, and hotshot.",
};

export default function OwnerOperatorCareerPage() {
  return (
    <>
      <LocalPageHero
        eyebrow="Careers"
        title={ownerOperatorContent.title}
        lede={ownerOperatorContent.lede}
        image={careerHeroImages.ownerOperator}
      />
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <Reveal>
          <h2 className="text-xl font-bold text-ink">Why drive with SIOX</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {ownerOperatorContent.perks.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-slate-600">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.05} className="relative mt-10 aspect-[21/9] overflow-hidden rounded-xl border border-border bg-slate-100">
          <Image
            src={careerHeroImages.ownerOperator}
            alt="Owner operator truck on the highway"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </Reveal>
      </section>
      <CareerEquipmentSection
        equipment={ownerOperatorEquipment}
        intro="We are hiring owner operators with the following equipment types. Ready to roll? Submit an application on our Join us page."
        applyRole="Owner Operator"
      />
    </>
  );
}
