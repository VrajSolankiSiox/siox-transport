import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import type { ApplyingFor, JoinEquipment } from "@/lib/careers";
import { equipmentImages } from "@/lib/careers";

export function CareerEquipmentSection({
  equipment,
  intro,
  applyRole = "Owner Operator",
}: {
  equipment: JoinEquipment[];
  intro: string;
  applyRole?: ApplyingFor;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <Reveal>
        <SectionLabel>Equipment</SectionLabel>
        <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">Equipment we hire for</h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-600">{intro}</p>
      </Reveal>
      <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {equipment.map((name) => (
          <StaggerItem key={name}>
            <Link
              href={`/join-us?role=${encodeURIComponent(applyRole)}&equipment=${encodeURIComponent(name)}`}
              className="group block overflow-hidden rounded-xl border border-border bg-white shadow-sm transition hover:border-brand/40 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              aria-label={`Apply as ${applyRole} with ${name} equipment`}
            >
              <div className="relative aspect-[16/10] bg-slate-100">
                <Image
                  src={equipmentImages[name]}
                  alt=""
                  fill
                  className="object-cover transition group-hover:scale-[1.02]"
                  sizes="(min-width:1024px) 33vw, 50vw"
                />
              </div>
              <div className="flex items-center justify-between gap-2 p-4">
                <h3 className="font-semibold text-ink">{name}</h3>
                <span className="text-xs font-semibold text-brand opacity-0 transition group-hover:opacity-100">
                  Apply →
                </span>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal className="mt-10">
        <Link
          href={`/join-us?role=${encodeURIComponent(applyRole)}`}
          className="inline-flex rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
        >
          Join us
        </Link>
      </Reveal>
    </section>
  );
}
