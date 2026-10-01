import Image from "next/image";
import type { Photo } from "@/lib/unsplash";

export function FillImage({
  photo,
  alt,
  className = "object-cover",
  priority = false,
  sizes,
}: {
  photo: Photo;
  alt?: string;
  className?: string;
  priority?: boolean;
  sizes: string;
}) {
  return (
    <Image
      src={photo.src}
      alt={alt ?? photo.alt}
      fill
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
}
