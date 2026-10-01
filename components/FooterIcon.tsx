"use client";

import Image from "next/image";
import { useState } from "react";

export function FooterIcon({
  src,
  alt,
  fallback,
}: {
  src: string;
  alt: string;
  fallback: React.ReactNode;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) return <>{fallback}</>;

  return (
    <Image
      src={src}
      alt={alt}
      width={20}
      height={20}
      className="mt-0.5 h-5 w-5 shrink-0 object-contain"
      onError={() => setFailed(true)}
    />
  );
}
