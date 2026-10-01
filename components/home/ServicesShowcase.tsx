"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ServiceIcon } from "@/components/Icons";
import { Reveal } from "@/components/motion/Reveal";
import { services } from "@/lib/content";
import { servicePhotoMap } from "@/lib/media";

export function ServicesShowcase() {
  const [active, setActive] = useState<(typeof services)[number]["slug"]>(services[0].slug);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">Services</p>
        <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">Shipping and logistics services</h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-600">
          Select a mode to see how SIOX plans capacity around your freight.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <Reveal delay={0.05} className="divide-y divide-border rounded-xl border border-border bg-white">
          {services.map((service, index) => {
            const selected = active === service.slug;
            return (
              <button
                key={service.slug}
                type="button"
                onClick={() => setActive(service.slug)}
                className="group flex w-full items-start gap-4 px-5 py-5 text-left transition hover:bg-surface"
              >
                <span className={`text-sm font-bold ${selected ? "text-brand" : "text-slate-400"}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">
                  <span className={`block text-lg font-semibold ${selected ? "text-brand" : "text-ink"}`}>
                    {service.name}
                  </span>
                  <motion.span
                    className="mt-1 block h-0.5 rounded-full bg-brand"
                    initial={false}
                    animate={{ width: selected ? "100%" : "0%" }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  />
                </span>
              </button>
            );
          })}
        </Reveal>

        <Reveal delay={0.1} className="overflow-hidden rounded-xl border border-border bg-surface">
          <AnimatePresence mode="wait">
            {services
              .filter((service) => service.slug === active)
              .map((service) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="relative aspect-[16/10] bg-slate-100">
                    <Image
                      src={servicePhotoMap[service.photo] ?? servicePhotoMap.truck}
                      alt={service.name}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 40vw, 100vw"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                  <span className="text-brand">
                    <ServiceIcon name={service.slug} />
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-ink">{service.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.body}</p>
                  <p className="mt-4 text-sm font-medium text-ink">{service.fit}</p>
                  <Link
                    href={`/services#${service.slug}`}
                    className="mt-6 inline-flex text-sm font-semibold text-brand hover:underline"
                  >
                    View service details
                  </Link>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
