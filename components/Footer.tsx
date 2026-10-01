"use client";

import { contact, footerNav, footerTagline } from "@/lib/content";
import { media } from "@/lib/media";
import Image from "next/image";
import Link from "next/link";
import { FooterIcon } from "./FooterIcon";

function ContactIcon({ type }: { type: "call" | "email" | "location" }) {
  const className = "h-5 w-5 shrink-0 text-brand";
  const fallback =
    type === "call" ? (
      <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ) : type === "email" ? (
      <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16v16H4z" />
        <path d="m22 6-10 7L2 6" />
      </svg>
    ) : (
      <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );

  const src =
    type === "call" ? media.icons.call : type === "email" ? media.icons.email : media.icons.location;

  return <FooterIcon src={src} alt="" fallback={fallback} />;
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-footer text-slate-300">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <Link href="/" className="inline-block">
          <Image
            src={media.footerLogo}
            alt="SIOX Transports"
            width={220}
            height={64}
            className="h-12 w-auto brightness-0 invert"
          />
        </Link>

        <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Footer">
          {footerNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-slate-300 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <ul className="mt-8 space-y-4 text-sm">
          <li className="flex items-start gap-3">
            <ContactIcon type="call" />
            <a href={contact.phoneHref} className="hover:text-white">
              {contact.phone}
            </a>
          </li>
          <li className="flex items-start gap-3">
            <ContactIcon type="email" />
            <a href={contact.emailHref} className="hover:text-white">
              {contact.email}
            </a>
          </li>
          <li className="flex items-start gap-3">
            <ContactIcon type="location" />
            <a
              href={contact.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="leading-relaxed hover:text-white"
            >
              {contact.addressLine1}
              <br />
              {contact.addressLine2}
            </a>
          </li>
        </ul>

        <p className="mt-8 max-w-xl text-sm leading-relaxed text-slate-400">{footerTagline}</p>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto px-6 py-4 text-center text-xs text-slate-500 sm:text-left">
          <p>© 2025 by SIOX TRANSPORTS</p>
        </div>
      </div>
    </footer>
  );
}
