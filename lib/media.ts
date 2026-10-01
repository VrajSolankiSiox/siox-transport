export const media = {
  logo: "/logo.png",
  footerLogo: "/logo-white.png",
  icons: {
    call: "/Call.png",
    email: "/Email.png",
    location: "/Location.png",
  },
  truck: "/truck.png",
  trucksWide: "/trucks2.png",
  person: "/person.png",
  ftl: "/ftl.png",
  intermodal: "/intermodal.png",
  reefer: "/reefer.png",
  flatbed: "/flatbed.png",
  heroVideo: "/vid.mp4",
  secondaryVideo: "/vid2.mp4",
} as const;

/** Curated Unsplash CDN URLs (see lib/unsplash.ts slots). */
const unsplashPhoto = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;

export const servicePhotoMap: Record<string, string> = {
  /** Dedicated highway haul — full trailer, one move */
  ftl: unsplashPhoto("1519003722824-194d4455a60c"),
  /** Warehouse / consolidated freight — shared capacity */
  ltl: unsplashPhoto("1553413077-190dd305871c"),
  /** Enclosed dry van on the road */
  dryvan: unsplashPhoto("1616432043562-3671ea2e5242"),
  reefer: media.reefer,
  truck: media.truck,
  intermodal: media.intermodal,
  flatbed: media.flatbed,
};

export const stats = [
  { value: 50, suffix: "+", label: "States served", detail: "Nationwide freight coverage" },
  { value: 24, suffix: "/7", label: "Dispatch support", detail: "Always-on customer care" },
  { value: 6, suffix: "", label: "Service modes", detail: "FTL, LTL, Reefer & more" },
  { value: 100, suffix: "%", label: "Load commitment", detail: "Every mile, every time" },
] as const;

export const capabilities = [
  "Safety & compliance first",
  "Real-time load visibility",
  "On-time delivery focus",
  "Dedicated account support",
  "Flexible capacity planning",
  "Clear communication",
] as const;
