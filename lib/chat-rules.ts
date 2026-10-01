import { contact, differences, footerTagline, services, technology } from "./content";

export type ChatLink = { label: string; href: string };

export type ChatReply = {
  text: string;
  links?: ChatLink[];
};

type ChatRule = {
  id: string;
  keywords: string[];
  patterns?: RegExp[];
  priority?: number;
  reply: ChatReply | (() => ChatReply);
};

const serviceList = services.map((s) => `• ${s.name} — ${s.short}`).join("\n");

const rules: ChatRule[] = [
  {
    id: "greeting",
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon"],
    patterns: [/^(hi|hello|hey)\b/i],
    priority: 1,
    reply: {
      text: `Hi there! I'm the SIOX Transports assistant. I can help with services, driving careers, contact details, and how we work. What would you like to know?`,
      links: [
        { label: "View services", href: "/services" },
        { label: "Join us", href: "/join-us" },
      ],
    },
  },
  {
    id: "services-all",
    keywords: ["service", "services", "offer", "freight", "shipping", "transport", "logistics", "what do you do"],
    priority: 5,
    reply: {
      text: `SIOX Transports offers U.S. freight and logistics services:\n\n${serviceList}\n\nVisit our Services page for full details on each mode.`,
      links: [{ label: "All services", href: "/services" }],
    },
  },
  {
    id: "ftl",
    keywords: ["ftl", "full truckload", "truckload", "dedicated trailer"],
    reply: () => {
      const s = services.find((x) => x.slug === "ftl")!;
      return {
        text: `${s.name}: ${s.body}\n\n${s.fit}`,
        links: [{ label: "Join us", href: "/join-us" }],
      };
    },
  },
  {
    id: "ltl",
    keywords: ["ltl", "less than truckload", "less-than-truckload", "partial load"],
    reply: () => {
      const s = services.find((x) => x.slug === "ltl")!;
      return {
        text: `${s.name}: ${s.body}\n\n${s.fit}`,
        links: [{ label: "Join us", href: "/join-us" }],
      };
    },
  },
  {
    id: "dry-van",
    keywords: ["dry van", "dryvan", "van trailer", "enclosed"],
    reply: () => {
      const s = services.find((x) => x.slug === "dry-van")!;
      return {
        text: `${s.name}: ${s.body}\n\n${s.fit}`,
        links: [{ label: "Dry van info", href: "/services#dry-van" }],
      };
    },
  },
  {
    id: "reefer",
    keywords: ["reefer", "refrigerated", "temperature", "frozen", "cold chain", "produce"],
    reply: () => {
      const s = services.find((x) => x.slug === "reefer")!;
      return {
        text: `${s.name}: ${s.body}\n\n${s.fit}`,
        links: [{ label: "Reefer info", href: "/services#reefer" }],
      };
    },
  },
  {
    id: "careers",
    keywords: ["career", "careers", "drive", "driver", "hiring", "job", "owner operator", "company driver", "apply"],
    priority: 6,
    reply: {
      text: "We are hiring owner operators (flatbed, dry van, reefer, stepdeck, box truck, hotshot) and company drivers (flatbed, dry van). Apply on our Join us page.",
      links: [
        { label: "Join us", href: "/join-us" },
        { label: "Owner Operator", href: "/careers/owner-operator" },
        { label: "Company Driver", href: "/careers/company-driver" },
      ],
    },
  },
  {
    id: "quote",
    keywords: ["quote", "price", "pricing", "rate", "cost", "estimate", "how much"],
    priority: 6,
    reply: {
      text: "For shipping and logistics questions, contact our team. To drive with SIOX, apply on the Join us page.",
      links: [
        { label: "Join us", href: "/join-us" },
        { label: "Contact us", href: "/contact" },
      ],
    },
  },
  {
    id: "contact",
    keywords: ["contact", "reach", "talk", "speak", "call", "phone", "email"],
    priority: 4,
    reply: {
      text: `Reach SIOX Transports:\n\nPhone: ${contact.phone}\nEmail: ${contact.email}\nAddress: ${contact.addressLine1}, ${contact.addressLine2}`,
      links: [
        { label: "Call now", href: contact.phoneHref },
        { label: "Contact page", href: "/contact" },
      ],
    },
  },
  {
    id: "phone",
    keywords: ["608", "888", "9858", "number"],
    patterns: [/phone|call/i],
    reply: {
      text: `Our dispatch and support line is ${contact.phone}. We're available when your freight needs a decision.`,
      links: [{ label: "Call", href: contact.phoneHref }],
    },
  },
  {
    id: "email",
    keywords: ["email", "mail", "inbox"],
    reply: {
      text: `Email us at ${contact.email} for quotes, account questions, or general inquiries.`,
      links: [{ label: "Send email", href: contact.emailHref }],
    },
  },
  {
    id: "location",
    keywords: ["address", "location", "where", "office", "lyndon", "wisconsin", "wi", "industrial"],
    priority: 4,
    reply: {
      text: `SIOX Transports is located at ${contact.addressLine1}, ${contact.addressLine2}. We serve shippers nationwide across the United States.`,
      links: [{ label: "Open in maps", href: contact.mapsHref }],
    },
  },
  {
    id: "hours",
    keywords: ["hours", "open", "24/7", "support", "dispatch", "available"],
    reply: {
      text: differences.find((d) => d.title.includes("24/7"))!.body,
      links: [{ label: "Contact dispatch", href: "/contact" }],
    },
  },
  {
    id: "about",
    keywords: ["about", "who", "company", "siox", "mission", "story"],
    reply: {
      text: `${footerTagline}\n\nWe are a U.S. carrier and logistics partner focused on dependable capacity, clear communication, and freight that arrives on schedule.`,
      links: [{ label: "About SIOX", href: "/about" }],
    },
  },
  {
    id: "technology",
    keywords: ["technology", "tracking", "visibility", "real-time", "updates", "load status"],
    reply: {
      text: technology.map((t) => `${t.title}: ${t.body}`).join("\n\n"),
      links: [{ label: "Learn more", href: "/about" }],
    },
  },
  {
    id: "safety",
    keywords: ["safety", "compliance", "insured", "standards"],
    reply: {
      text: differences.find((d) => d.title.includes("Safety"))!.body,
    },
  },
  {
    id: "coverage",
    keywords: ["coverage", "nationwide", "states", "area", "where do you ship", "united states", "usa"],
    reply: {
      text: "SIOX Transports delivers freight across the United States. We support full truckload, LTL, intermodal, drayage, dry van, and reefer moves on lanes nationwide.",
      links: [{ label: "Our services", href: "/services" }],
    },
  },
  {
    id: "privacy",
    keywords: ["privacy", "sms", "text message", "opt out", "stop", "data", "personal information"],
    reply: {
      text: "Our Privacy Policy explains how we collect and use your information, including SMS consent. You can opt out of SMS anytime by replying STOP. For help, reply HELP or call us.",
      links: [{ label: "Privacy Policy", href: "/privacy" }],
    },
  },
  {
    id: "thanks",
    keywords: ["thank", "thanks", "appreciate"],
    reply: {
      text: "You're welcome! If you need a quote or want to talk to dispatch, we're here to help.",
      links: [{ label: "Join us", href: "/join-us" }],
    },
  },
];

const fallback: ChatReply = {
  text: `I'm not sure about that one, but our team can help. Try asking about services, quotes, or contact info—or reach us at ${contact.phone} or ${contact.email}.`,
  links: [
    { label: "Contact us", href: "/contact" },
    { label: "Join us", href: "/join-us" },
  ],
};

function scoreRule(rule: ChatRule, query: string): number {
  let score = 0;
  for (const keyword of rule.keywords) {
    if (query.includes(keyword)) score += keyword.length + (rule.priority ?? 0);
  }
  for (const pattern of rule.patterns ?? []) {
    if (pattern.test(query)) score += 12 + (rule.priority ?? 0);
  }
  return score;
}

export function getChatReply(input: string): ChatReply {
  const query = input.toLowerCase().trim();
  if (!query) return fallback;

  let best: { rule: ChatRule; score: number } | null = null;

  for (const rule of rules) {
    const score = scoreRule(rule, query);
    if (score > 0 && (!best || score > best.score)) {
      best = { rule, score };
    }
  }

  if (!best) return fallback;

  const reply = best.rule.reply;
  return typeof reply === "function" ? reply() : reply;
}

export const chatQuickPrompts = [
  "What services do you offer?",
  "How do I join as a driver?",
  "What is your phone number?",
  "Where are you located?",
] as const;

export const chatWelcome: ChatReply = {
  text: "Hello! I'm here to answer questions about SIOX Transports — services, careers, contact info, and more. Pick a suggestion below or type your question.",
  links: [{ label: "Join us", href: "/join-us" }],
};
