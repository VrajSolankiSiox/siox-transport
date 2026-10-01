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

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=80`;

/** Equipment imagery: local assets where available, Unsplash elsewhere */
export const equipmentImages: Record<JoinEquipment, string> = {
  Flatbed: media.flatbed,
  Dryvan: media.ftl,
  Reefer: media.reefer,
  Stepdeck: unsplash("1519003722824-194d4455a60c"),
  "Box truck": unsplash("1601584115197-04ecc0da31d7"),
  Hotshot: unsplash("1426927308491-6380b6a9936f"),
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
  ownerOperator: unsplash("1601584115197-04ecc0da31d7"),
  companyDriver: unsplash("1519003722824-194d4455a60c"),
} as const;
