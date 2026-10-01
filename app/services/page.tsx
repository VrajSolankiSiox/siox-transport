import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { LocalPageHero } from "@/components/LocalPageHero";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { services } from "@/lib/content";
import { media, servicePhotoMap } from "@/lib/media";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full truckload, LTL, intermodal, drayage, dry van, and reefer — U.S. freight capacity from SIOX Transports.",
};

export default function ServicesPage() {
  return (
    <>
      <LocalPageHero
        eyebrow="Services"
        title="Freight services for every lane"
        lede="Dedicated truckload, shared LTL, intermodal, drayage, dry van, and reefer — each move planned around your schedule and cargo."
        image={media.trucksWide}
      />
      <div className="border-b border-border bg-surface">
        <ul className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-6 py-3">
          {services.map((service) => (
            <li key={service.slug} className="shrink-0">
              <a
                href={`#${service.slug}`}
                className="block rounded-md px-3 py-1.5 text-sm text-slate-600 transition hover:bg-white hover:text-brand"
              >
                {service.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {services.map((service, index) => {
        const image = servicePhotoMap[service.photo] ?? media.truck;
        const flipped = index % 2 === 1;
        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`scroll-mt-20 border-b border-border ${index % 2 === 1 ? "bg-surface" : "bg-white"}`}
          >
            <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-12 md:grid-cols-2 md:py-16">
              <Reveal className={flipped ? "md:order-2" : ""} delay={0.04}>
                <SectionLabel>{service.name}</SectionLabel>
                <h2 className="mt-2 text-2xl font-bold text-ink">{service.name}</h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{service.body}</p>
                <p className="mt-3 text-sm font-medium text-ink">{service.fit}</p>
                <Link
                  href="/join-us"
                  className="mt-6 inline-block rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
                >
                  Join us
                </Link>
              </Reveal>
              <Reveal
                delay={0.08}
                className={`relative aspect-[5/4] overflow-hidden rounded-xl border border-border bg-slate-100 ${flipped ? "md:order-1" : ""}`}
              >
                <Image src={image} alt={service.name} fill className="object-cover" sizes="50vw" />
              </Reveal>
            </div>
          </section>
        );
      })}
      <CtaBand />
    </>
  );
}
