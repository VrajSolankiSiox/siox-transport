"use client";

import { CountUp } from "@/components/CountUp";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { stats } from "@/lib/media";

export function StatsBand() {
  return (
    <section className="border-y border-border bg-white">
      <Stagger className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <StaggerItem key={item.label}>
            <p className="text-3xl font-bold text-brand md:text-4xl">
              <CountUp value={item.value} suffix={item.suffix} />
            </p>
            <p className="mt-2 font-semibold text-ink">{item.label}</p>
            <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
