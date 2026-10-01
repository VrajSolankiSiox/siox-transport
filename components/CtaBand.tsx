"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";

export function CtaBand({
  title = "Ready to join our driving team?",
  lede = "Owner operators and company drivers — tell us about your experience and equipment. We will follow up with next steps.",
}: {
  title?: string;
  lede?: string;
}) {
  return (
    <section className="border-t border-brand-dark bg-brand">
      <Reveal className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between md:py-14">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-blue-100">{lede}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/join-us"
              className="inline-flex rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-brand hover:bg-slate-100"
            >
              Join us
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="inline-flex rounded-md border border-white/40 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}
