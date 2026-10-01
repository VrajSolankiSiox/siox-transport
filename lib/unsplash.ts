import { cache } from "react";

/**
 * Photography is loaded from the Unsplash API when UNSPLASH_ACCESS_KEY is set.
 * Without a key, the site uses a curated set of Unsplash CDN photos so the
 * pages still render with the same art direction.
 */
const slots = {
  hero: {
    query: "aerial highway interchange",
    id: "1465447142348-e9952c393450",
    alt: "Aerial view of a multi-level highway interchange",
  },
  truck: {
    query: "semi truck highway",
    id: "1601584115197-04ecc0da31d7",
    alt: "Semi truck driving on an open highway",
  },
  mountain: {
    query: "freight truck mountain road",
    id: "1519003722824-194d4455a60c",
    alt: "Freight truck traveling through a mountain pass",
  },
  dryvan: {
    query: "dry van trailer highway dusk",
    id: "1616432043562-3671ea2e5242",
    alt: "Dry van trailer on the highway at dusk",
  },
  reefer: {
    query: "semi truck parked desert",
    id: "1592838064575-70ed626d3a0e",
    alt: "Long-haul truck at a desert rest stop",
  },
  port: {
    query: "container ship port cranes",
    id: "1578575437130-527eed3abbec",
    alt: "Container ships docked beside port cranes",
  },
  terminal: {
    query: "shipping container terminal aerial",
    id: "1494412651409-8963ce7935a7",
    alt: "Aerial view of a container terminal",
  },
  warehouse: {
    query: "warehouse pallet racking",
    id: "1586528116311-ad8dd3c8310d",
    alt: "Warehouse filled with pallet racking and cartons",
  },
  aisle: {
    query: "warehouse aisle inventory",
    id: "1553413077-190dd305871c",
    alt: "A long warehouse aisle lined with freight",
  },
  dock: {
    query: "forklift loading delivery truck",
    id: "1532635042-a6f6ad4745f9",
    alt: "Forklift loading palletized freight into a trailer",
  },
  handshake: {
    query: "business handshake agreement",
    id: "1549923746-c502d488b3ea",
    alt: "Two professionals confirming an agreement",
  },
  handoff: {
    query: "package handover delivery",
    id: "1566576721346-d4a3b4eaeb55",
    alt: "A shipment passed carefully from one person to another",
  },
} as const;

export type SlotKey = keyof typeof slots;

export type Photo = {
  src: string;
  alt: string;
  author: string;
  authorUrl: string;
};

type UnsplashResult = {
  alt_description: string | null;
  urls?: { raw?: string };
  links?: { download_location?: string };
  user?: { name?: string; links?: { html?: string } };
};

function curated(slot: (typeof slots)[SlotKey]): Photo {
  return {
    src: `https://images.unsplash.com/photo-${slot.id}?auto=format&fit=crop&w=2000&q=80`,
    alt: slot.alt,
    author: "Unsplash",
    authorUrl: "https://unsplash.com/?utm_source=siox_transports&utm_medium=referral",
  };
}

function sized(raw: string) {
  const join = raw.includes("?") ? "&" : "?";
  return `${raw}${join}auto=format&fit=crop&w=2000&q=80`;
}

async function fromApi(
  slot: (typeof slots)[SlotKey],
  key: string,
): Promise<Photo | null> {
  const endpoint = new URL("https://api.unsplash.com/search/photos");
  endpoint.searchParams.set("query", slot.query);
  endpoint.searchParams.set("per_page", "1");
  endpoint.searchParams.set("orientation", "landscape");
  endpoint.searchParams.set("content_filter", "high");

  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Client-ID ${key}`,
      "Accept-Version": "v1",
    },
    next: { revalidate: 60 * 60 * 12 },
  });

  if (!response.ok) return null;

  const data = (await response.json()) as { results?: UnsplashResult[] };
  const photo = data.results?.[0];
  const raw = photo?.urls?.raw;
  if (!photo || !raw) return null;

  let src: string;
  try {
    src = sized(raw);
    if (new URL(src).hostname !== "images.unsplash.com") return null;
  } catch {
    return null;
  }

  if (photo.links?.download_location) {
    void fetch(photo.links.download_location, {
      headers: { Authorization: `Client-ID ${key}` },
    }).catch(() => undefined);
  }

  const authorUrl = photo.user?.links?.html
    ? `${photo.user.links.html}?utm_source=siox_transports&utm_medium=referral`
    : "https://unsplash.com/?utm_source=siox_transports&utm_medium=referral";

  return {
    src,
    alt: photo.alt_description || slot.alt,
    author: photo.user?.name || "Unsplash",
    authorUrl,
  };
}

export const getPhotos = cache(async (): Promise<Record<SlotKey, Photo>> => {
  const fallback = Object.fromEntries(
    (Object.keys(slots) as SlotKey[]).map((name) => [name, curated(slots[name])]),
  ) as Record<SlotKey, Photo>;

  const key = process.env.UNSPLASH_ACCESS_KEY;
  if (!key) return fallback;

  const resolved = await Promise.all(
    (Object.keys(slots) as SlotKey[]).map(async (name) => {
      try {
        const photo = await fromApi(slots[name], key);
        return [name, photo ?? fallback[name]] as const;
      } catch {
        return [name, fallback[name]] as const;
      }
    }),
  );

  return Object.fromEntries(resolved) as Record<SlotKey, Photo>;
});
