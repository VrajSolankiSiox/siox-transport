import type { Metadata } from "next";
import { CareerEquipmentSection } from "@/components/careers/CareerEquipmentSection";
import { LocalPageHero } from "@/components/LocalPageHero";
import { Reveal } from "@/components/motion/Reveal";
import { companyDriverContent, companyDriverEquipment } from "@/lib/careers";

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
      />
      <section className="mx-auto max-w-6xl px-6 pt-12 md:pt-16">
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
      </section>
      <CareerEquipmentSection
        equipment={companyDriverEquipment}
        intro="Company driver openings are available for flatbed and dry van. Apply today to join the SIOX driving team."
        applyRole="Company Driver"
      />
    </>
  );
}
