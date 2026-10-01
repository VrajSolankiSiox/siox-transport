"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { media } from "@/lib/media";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  return (
    <section className="relative flex min-h-[min(100svh,880px)] items-center overflow-hidden bg-slate-800">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={media.truck}
        aria-hidden
      >
        <source src={media.heroVideo} type="video/mp4" />
      </video>

      {/* Light overlay: darkens text side only; video stays visible on the right */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
        <motion.p
          className="text-sm font-semibold uppercase tracking-wider text-blue-100 [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          Reliable U.S. logistics
        </motion.p>
        <motion.h1
          className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.55)] md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.06, ease }}
        >
          Flexible logistics &amp; freight services for your business
        </motion.h1>
        <motion.p
          className="mt-4 max-w-xl text-base leading-relaxed text-white/95 [text-shadow:0_1px_10px_rgba(0,0,0,0.65)] md:text-lg"
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
              href="/join-us"
              className="inline-flex rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-brand shadow-lg shadow-black/20 hover:bg-slate-100"
            >
              Join us
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/services"
              className="inline-flex rounded-md border border-white/45 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20"
            >
              View Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
