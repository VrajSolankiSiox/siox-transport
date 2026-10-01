"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { careerLinks } from "@/lib/careers";
import { nav } from "@/lib/content";
import { Logo } from "./Logo";

function CareerMenu({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="min-w-[200px] rounded-lg border border-border bg-white py-1 shadow-lg shadow-slate-900/10">
      {careerLinks.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          className="block px-4 py-2.5 text-sm text-slate-700 transition hover:bg-surface hover:text-brand"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [careerOpen, setCareerOpen] = useState(false);
  const [mobileCareerOpen, setMobileCareerOpen] = useState(false);
  const careerTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { scrollY } = useScroll();
  const boxShadow = useTransform(
    scrollY,
    [0, 80],
    ["0 0 0 rgba(15, 23, 42, 0)", "0 12px 40px -24px rgba(15, 23, 42, 0.12)"],
  );

  const careerActive = pathname.startsWith("/careers");

  function openCareerMenu() {
    if (careerTimer.current) clearTimeout(careerTimer.current);
    setCareerOpen(true);
  }

  function closeCareerMenuDelayed() {
    careerTimer.current = setTimeout(() => setCareerOpen(false), 120);
  }

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-border/80 bg-white/95 backdrop-blur-md"
      style={{ boxShadow }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-brand"
                aria-current={active ? "page" : undefined}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-md bg-brand/8"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className={`relative ${active ? "font-semibold text-brand" : ""}`}>{item.label}</span>
              </Link>
            );
          })}
          <div
            className="relative"
            onMouseEnter={openCareerMenu}
            onMouseLeave={closeCareerMenuDelayed}
          >
            <button
              type="button"
              className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                careerActive ? "font-semibold text-brand" : "text-slate-600 hover:text-brand"
              }`}
              aria-expanded={careerOpen}
              aria-haspopup="true"
            >
              {careerActive && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-md bg-brand/8"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative inline-flex items-center gap-1">
                Career
                <svg viewBox="0 0 12 12" className="h-3 w-3 opacity-60" aria-hidden>
                  <path d="M3 4.5 6 7.5 9 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
            </button>
            {careerOpen && (
              <div className="absolute left-0 top-full z-50 pt-2">
                <CareerMenu />
              </div>
            )}
          </div>
        </nav>
        <div className="flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/join-us"
              className="rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-brand/25 transition hover:bg-brand-dark"
            >
              Join us
            </Link>
          </motion.div>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-md border border-border lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
              {open ? (
                <path
                  d="M6 6l12 12M18 6 6 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <motion.nav
        id="mobile-nav"
        className="overflow-hidden border-t border-border bg-white lg:hidden"
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Mobile"
      >
        <ul className="flex flex-col divide-y divide-border px-4">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block py-3 text-sm font-medium text-slate-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              type="button"
              className="flex w-full items-center justify-between py-3 text-sm font-medium text-slate-700"
              onClick={() => setMobileCareerOpen((v) => !v)}
              aria-expanded={mobileCareerOpen}
            >
              Career
              <svg viewBox="0 0 12 12" className={`h-3 w-3 transition ${mobileCareerOpen ? "rotate-180" : ""}`} aria-hidden>
                <path d="M3 4.5 6 7.5 9 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            {mobileCareerOpen && (
              <ul className="mb-2 ml-3 border-l border-border pl-3">
                {careerLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-2 text-sm text-slate-600"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </motion.nav>
    </motion.header>
  );
}
