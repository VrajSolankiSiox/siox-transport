"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { contact } from "@/lib/content";
import { capabilities, media } from "@/lib/media";

export function CapabilitiesSection() {
  return (
    <section className="relative overflow-hidden bg-footer text-white">
      <div className="absolute inset-0 opacity-30">
        <Image src={media.trucksWide} alt="" fill className="object-cover" sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-footer/88" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-300">Capabilities</p>
          <h2 className="mt-2 text-2xl font-bold md:text-4xl">Powering logistics across your business</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            From tender to delivery, SIOX combines carrier discipline with responsive support so your freight stays on
            plan.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {capabilities.map((item, index) => (
              <motion.li
                key={item}
                className="flex items-start gap-2 text-sm text-slate-200"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                {item}
              </motion.li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href="/about" className="rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark">
                Learn more
              </Link>
            </motion.div>
            <a href={contact.phoneHref} className="text-sm font-semibold text-blue-200 hover:text-white">
              {contact.phone}
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
          <video className="h-full w-full object-cover" autoPlay muted loop playsInline poster={media.trucksWide}>
            <source src={media.secondaryVideo} type="video/mp4" />
          </video>
        </Reveal>
      </div>
    </section>
  );
}
