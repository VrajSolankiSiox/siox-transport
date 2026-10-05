import { media } from "./media";

export const careerLinks = [
  { href: "/careers/owner-operator", label: "Owner Operator" },
  { href: "/careers/company-driver", label: "Company Driver" },
] as const;

export const joinEquipmentOptions = [
  "Flatbed",
  "Dryvan",
  "Reefer",
  "Stepdeck",
  "Box truck",
  "Hotshot",
] as const;

export const applyingForOptions = ["Owner Operator", "Company Driver"] as const;

export type JoinEquipment = (typeof joinEquipmentOptions)[number];
export type ApplyingFor = (typeof applyingForOptions)[number];

/** Equipment imagery — local photos from public/ */
export const equipmentImages: Record<JoinEquipment, string> = {
  Flatbed: media.flatbed,
  Dryvan: media.dryVan,
  Reefer: media.reefer,
  Stepdeck: media.stepDeck,
  "Box truck": media.boxTruck,
  Hotshot: media.hotshot,
};

export const ownerOperatorEquipment: JoinEquipment[] = [
  "Flatbed",
  "Dryvan",
  "Reefer",
  "Stepdeck",
  "Box truck",
  "Hotshot",
];

export const companyDriverEquipment: JoinEquipment[] = ["Flatbed", "Dryvan"];

export const ownerOperatorContent = {
  title: "Owner Operator",
  lede:
    "Run your business with a carrier that respects your equipment, your lane, and your time. SIOX supports owner operators across multiple equipment types with steady freight and responsive dispatch.",
  perks: [
    "Competitive rates and transparent settlements",
    "Multiple equipment programs to match your trailer",
    "24/7 dispatch when the road needs a decision",
    "Safety-first culture and compliance support",
  ],
};

export const companyDriverContent = {
  title: "Company Driver",
  lede:
    "Join a professional driving team with modern equipment, clear communication, and routes built for drivers who take pride in every delivery.",
  perks: [
    "Consistent miles on flatbed and dry van freight",
    "Professional support from dispatch and safety",
    "Equipment maintained to carrier standards",
    "A team that treats every load as a commitment",
  ],
};

export const careerHeroImages = {
  ownerOperator: media.boxTruck,
  companyDriver: media.dryVan,
} as const;
