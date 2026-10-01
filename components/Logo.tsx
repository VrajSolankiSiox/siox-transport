import Image from "next/image";
import Link from "next/link";
import { media } from "@/lib/media";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="SIOX Transports home">
      <Image
        src={media.logo}
        alt="SIOX Transports"
        width={160}
        height={48}
        className={`h-9 w-auto ${light ? "brightness-0 invert" : ""}`}
        priority
      />
    </Link>
  );
}
