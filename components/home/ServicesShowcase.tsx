"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ServiceIcon } from "@/components/Icons";
import { Reveal } from "@/components/motion/Reveal";
import { services } from "@/lib/content";
import { servicePhotoMap } from "@/lib/media";

const ease = [0.22, 1, 0.36, 1] as const;

export function ServicesShowcase() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const rowRefs = useRef<(HTMLElement | null)[]>([]);
  const navRef = useRef<HTMLDivElement>(null);

  const scrollToService = useCallback(
    (index: number) => {
      const el = rowRefs.current[index];
      if (!el) return;
      const navHeight = navRef.current?.offsetHeight ?? 0;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 96;
      window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
      setActiveIndex(index);
    },
    [reduceMotion],
  );

  useEffect(() => {
    const elements = rowRefs.current.filter(Boolean) as HTMLElement[];
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let best: { index: number; ratio: number } | null = null;
        for (const entry of entries) {
          const index = Number((entry.target as HTMLElement).dataset.index);
          if (Number.isNaN(index) || !entry.isIntersecting) continue;
          if (!best || entry.intersectionRatio > best.ratio) {
            best = { index, ratio: entry.intersectionRatio };
          }
        }
        if (best && best.ratio >= 0.15) {
          setActiveIndex(best.index);
        }
      },
      { threshold: [0, 0.2, 0.4, 0.6], rootMargin: "-30% 0px -45% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="border-y border-border bg-white" aria-labelledby="services-showcase-heading">
      <div className="mx-auto max-w-6xl px-6 pt-16 md:pt-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand">Services</p>
          <h2 id="services-showcase-heading" className="mt-2 text-2xl font-bold text-ink md:text-3xl">
            Shipping and logistics services
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-600">
            Four core modes — each with dedicated capacity, clear communication, and planning built around your freight.
          </p>
        </Reveal>

        <div
          ref={navRef}
          className="sticky top-[4.5rem] z-20 -mx-6 mt-8 border-b border-border bg-white/95 px-6 py-3 backdrop-blur-md md:top-20"
        >
          <div
            className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Service modes"
          >
            {services.map((service, index) => {
              const selected = activeIndex === index;
              return (
                <button
                  key={service.slug}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => scrollToService(index)}
                  className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                    selected
                      ? "text-white"
                      : "bg-surface text-slate-600 hover:bg-slate-100 hover:text-ink"
                  }`}
                >
                  {service.name}
                  {selected ? (
                    <motion.span
                      layoutId="services-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-brand shadow-sm"
                      transition={{ duration: reduceMotion ? 0 : 0.35, ease }}
                    />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-16 md:pb-20">
        {services.map((service, index) => {
          const flipped = index % 2 === 1;
          const imageSrc = servicePhotoMap[service.photo] ?? servicePhotoMap.truck;
          const imageLocal = imageSrc.startsWith("/");

          return (
            <article
              key={service.slug}
              id={`service-step-${service.slug}`}
              ref={(el) => {
                rowRefs.current[index] = el;
              }}
              data-index={index}
              className="scroll-mt-36 border-b border-border py-14 last:border-b-0 md:py-20"
            >
              <motion.div
                className={`grid items-center gap-10 md:grid-cols-2 md:gap-12 ${flipped ? "md:[&>*:first-child]:order-2" : ""}`}
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.55, ease }}
              >
                <div className="flex min-h-[240px] items-center justify-center rounded-2xl border border-border bg-surface p-6 md:min-h-[320px] md:p-10">
                  <div className="relative h-52 w-full md:h-64">
                    <Image
                      src={imageSrc}
                      alt={service.name}
                      fill
                      className={
                        imageLocal ? "object-contain object-center" : "object-cover object-center"
                      }
                      sizes="(min-width: 768px) 45vw, 100vw"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <ServiceIcon name={service.slug} />
                    </span>
                    <span className="text-xs font-bold tabular-nums text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-4 text-sm font-semibold text-brand">{service.short}</p>
                  <h3 className="mt-2 text-xl font-bold text-ink md:text-2xl">{service.name}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{service.body}</p>
                  <p className="mt-5 border-l-2 border-brand pl-4 text-sm font-medium text-ink">{service.fit}</p>
                  <Link
                    href={`/services#${service.slug}`}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
                  >
                    View service details
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </motion.div>
            </article>
          );
        })}

        <Reveal className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex rounded-md border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-brand/40 hover:text-brand"
          >
            Explore all services
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
