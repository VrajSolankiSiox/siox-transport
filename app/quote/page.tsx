import type { Metadata } from "next";
import { LocalPageHero } from "@/components/LocalPageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/motion/Reveal";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: "Get a Quote",
  description: "Request a freight quote from SIOX Transports for truckload, LTL, intermodal, drayage, dry van, or reefer.",
};

export default function QuotePage() {
  return (
    <>
      <LocalPageHero
        eyebrow="Get a quote"
        title="Tell us the lane"
        lede="Origin, destination, and how the freight needs to ride. The more we know about the load, the clearer the quote."
        image={media.truck}
      />
      <section className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <Reveal>
          <QuoteForm />
        </Reveal>
      </section>
    </>
  );
}
