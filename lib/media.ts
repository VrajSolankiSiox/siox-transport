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
  /** Equipment & service photography */
  flatbed: "/Flatbed.jpg",
  dryVan: "/DryVan.jpg",
  reefer: "/Reefer.jpg",
  boxTruck: "/BoxTruck.jpg",
  hotshot: "/HotShot.jpg",
  heroVideo: "/vid.mp4",
  secondaryVideo: "/vid2.mp4",
} as const;

export const servicePhotoMap: Record<string, string> = {
  ftl: media.ftl,
  ltl: media.truck,
  dryvan: media.dryVan,
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
