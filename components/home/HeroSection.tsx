"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { media } from "@/lib/media";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-12 md:grid-cols-2 md:py-16 lg:py-20">
        <div>
          <motion.p
            className="text-sm font-semibold uppercase tracking-wider text-brand"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            Reliable U.S. logistics
          </motion.p>
          <motion.h1
            className="mt-3 text-3xl font-bold leading-tight text-ink md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06, ease }}
          >
            Flexible logistics &amp; freight services for your business
          </motion.h1>
          <motion.p
            className="mt-4 max-w-lg text-base leading-relaxed text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease }}
          >
            Driving freight forward with trust and technology — every mile, every time. Dependable capacity, clear
            communication, and freight that arrives on schedule.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18, ease }}
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/quote"
                className="inline-flex rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand/20 hover:bg-brand-dark"
              >
                Get a Quote
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/services"
                className="inline-flex rounded-md border border-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:border-brand hover:text-brand"
              >
                View Services
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease }}
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-slate-900 shadow-xl shadow-slate-900/10">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={media.truck}
            >
              <source src={media.heroVideo} type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
          </div>
          <motion.div
            className="absolute -bottom-4 -left-4 hidden max-w-[220px] overflow-hidden rounded-lg border border-border bg-white p-2 shadow-lg md:block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.5, ease }}
          >
            <Image src={media.truck} alt="SIOX Transports truck on the highway" width={400} height={280} className="rounded-md" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
