import type { Metadata } from "next";
import { JoinUsForm } from "@/components/JoinUsForm";
import { LocalPageHero } from "@/components/LocalPageHero";
import { Reveal } from "@/components/motion/Reveal";
import {
  applyingForOptions,
  joinEquipmentOptions,
  type ApplyingFor,
  type JoinEquipment,
} from "@/lib/careers";

export const metadata: Metadata = {
  title: "Join Us",
  description: "Apply to drive with SIOX Transports as an owner operator or company driver.",
};

const roleFromQuery = (role?: string): ApplyingFor | undefined => {
  if (!role) return undefined;
  const decoded = decodeURIComponent(role).toLowerCase();
  return applyingForOptions.find((option) => option.toLowerCase() === decoded);
};

const equipmentFromQuery = (equipment?: string): JoinEquipment | undefined => {
  if (!equipment) return undefined;
  const decoded = decodeURIComponent(equipment).toLowerCase();
  return joinEquipmentOptions.find((option) => option.toLowerCase() === decoded);
};

export default async function JoinUsPage({
  searchParams,
}: {
  searchParams: Promise<{ role?: string; equipment?: string }>;
}) {
  const { role, equipment } = await searchParams;
  const defaultApplyingFor = roleFromQuery(role);
  const defaultEquipment = equipmentFromQuery(equipment);

  return (
    <>
      <LocalPageHero
        eyebrow="Careers"
        title="Join us"
        lede="Tell us about your experience, equipment, and the role you are applying for. Our recruiting team will follow up with next steps."
      />
      <section className="mx-auto max-w-2xl px-6 py-12 md:py-16">
        <Reveal>
          <JoinUsForm defaultApplyingFor={defaultApplyingFor} defaultEquipment={defaultEquipment} />
        </Reveal>
      </section>
    </>
  );
}
