import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { LocalPageHero } from "@/components/LocalPageHero";
import { Reveal } from "@/components/motion/Reveal";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Reach SIOX Transports dispatch and support — by phone, email, or a note on this page.",
};

export default function ContactPage() {
  return (
    <>
      <LocalPageHero
        eyebrow="Contact"
        title="Talk to our team"
        lede="Call dispatch, send an email, or use the form below. We are available when your freight needs a decision."
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[1fr_1.4fr] md:py-16">
        <Reveal className="h-fit rounded-lg border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand">Contact information</p>
          <dl className="mt-5 space-y-5 text-sm">
            <div>
              <dt className="text-muted">Phone</dt>
              <dd className="mt-1 text-lg font-semibold text-ink">
                <a href={contact.phoneHref} className="hover:text-brand">
                  {contact.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted">Email</dt>
              <dd className="mt-1">
                <a href={contact.emailHref} className="font-medium text-brand hover:underline">
                  {contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted">Address</dt>
              <dd className="mt-1 text-slate-700">
                <a href={contact.mapsHref} className="hover:text-brand" target="_blank" rel="noopener noreferrer">
                  {contact.addressLine1}
                  <br />
                  {contact.addressLine2}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>
        <Reveal delay={0.06}>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
