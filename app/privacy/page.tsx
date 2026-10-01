import type { Metadata } from "next";
import Link from "next/link";
import { LocalPageHero } from "@/components/LocalPageHero";
import { Reveal } from "@/components/motion/Reveal";
import { contact } from "@/lib/content";
import { media } from "@/lib/media";
import { privacyPolicy } from "@/lib/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "SIOX Transports privacy policy — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <LocalPageHero
        eyebrow="Legal"
        title={privacyPolicy.title}
        lede={`Last updated: ${privacyPolicy.lastUpdated}`}
        image={media.trucksWide}
      />
      <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <Reveal>
          <p className="text-sm leading-relaxed text-slate-600">{privacyPolicy.intro}</p>
        </Reveal>

        <div className="mt-10 space-y-10">
          {privacyPolicy.sections.map((section, index) => (
            <Reveal key={section.heading} delay={index * 0.02} className="border-t border-border pt-8 first:border-t-0 first:pt-0">
              <h2 className="text-lg font-bold text-ink">{section.heading}</h2>
              {"body" in section && section.body && (
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{section.body}</p>
              )}
              {"list" in section && section.list && (
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {"paragraphs" in section &&
                section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-sm leading-relaxed text-slate-600">
                    {paragraph}
                  </p>
                ))}
              {"subsections" in section &&
                section.subsections?.map((sub) => (
                  <div key={sub.title} className="mt-5 rounded-lg border border-border bg-surface p-5">
                    <h3 className="text-sm font-semibold text-ink">{sub.title}</h3>
                    {"body" in sub && sub.body && (
                      <p className="mt-2 text-sm text-slate-600">{sub.body}</p>
                    )}
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
                      {sub.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              {"contact" in section && section.contact && (
                <ul className="mt-4 space-y-1 text-sm text-slate-600">
                  <li className="font-semibold text-ink">{section.contact.name}</li>
                  <li>
                    Email:{" "}
                    <a href={contact.emailHref} className="text-brand hover:underline">
                      {section.contact.email}
                    </a>
                  </li>
                  <li>
                    Contact:{" "}
                    <a href={contact.phoneHref} className="text-brand hover:underline">
                      {section.contact.phone}
                    </a>
                  </li>
                </ul>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <Link href="/contact" className="text-sm font-semibold text-brand hover:underline">
            Contact us with privacy questions
          </Link>
        </Reveal>
      </article>
    </>
  );
}
