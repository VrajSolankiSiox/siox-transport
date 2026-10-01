export const contact = {
  phone: "(608) 888-9858",
  phoneHref: "tel:+16088889858",
  email: "info@sioxtransports.com",
  emailHref: "mailto:info@sioxtransports.com",
  addressLine1: "200 E Industrial Ave",
  addressLine2: "Lyndon Station, WI",
  mapsHref: "https://maps.google.com/?q=200+E+Industrial+Ave+Lyndon+Station+WI",
};

export const footerTagline =
  "Reliable U.S. freight solutions built on safety, trust and technology, moving businesses forward with precision and care.";

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const footerNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
  { href: "/privacy", label: "Privacy Policy" },
] as const;

export const services = [
  {
    slug: "ftl",
    name: "Full Truckload (FTL)",
    short: "A dedicated trailer, direct from dock to dock.",
    body: "One shipper, one trailer, one plan. Full truckload moves stay intact from pickup to delivery, with a driver and dispatch team watching the lane instead of splitting attention across a dozen partials.",
    fit: "Best for freight that fills a trailer, runs on a schedule, or cannot afford extra handling.",
    photo: "ftl",
  },
  {
    slug: "ltl",
    name: "Less-than-Truckload (LTL)",
    short: "Shared space, with the same standard of care.",
    body: "When the freight does not need a whole trailer, it still needs a plan. LTL with SIOX is built around clear handoffs, protected handling, and updates you do not have to chase.",
    fit: "Best for smaller shipments, multi-stop distribution, and freight that should ride with purpose.",
    photo: "truck",
  },
  {
    slug: "intermodal",
    name: "Intermodal",
    short: "Rail and road, coordinated as one move.",
    body: "Longer lanes do not have to mean a less careful move. Intermodal pairs rail efficiency with truck pickup and delivery, so the freight stays on a single plan from origin dock to destination dock.",
    fit: "Best for longer hauls where timing is planned and cost needs to stay disciplined.",
    photo: "intermodal",
  },
  {
    slug: "drayage",
    name: "Drayage",
    short: "Port and rail moves that keep boxes turning.",
    body: "Containers stall when the street move is an afterthought. Drayage covers the short, time-sensitive miles between terminals, yards, and your warehouse — with appointments, chassis, and the dock in mind.",
    fit: "Best for import and export freight that has to clear the terminal and hit a receiving window.",
    photo: "flatbed",
  },
  {
    slug: "dry-van",
    name: "Dry Van",
    short: "Enclosed trailers for freight that needs protection.",
    body: "General freight rides dry, sealed, and out of the weather. Dry van is the backbone of the network: palletized goods, retail, manufacturing, and anything that simply needs to arrive as it left.",
    fit: "Best for packaged, palletized, and non-temperature freight.",
    photo: "truck",
  },
  {
    slug: "reefer",
    name: "Reefer",
    short: "Temperature-controlled capacity for freight that cannot ride warm.",
    body: "Produce, protein, pharmaceuticals, and other sensitive freight need a setpoint and someone watching it. Reefer moves are planned around temperature, transit time, and a clean handoff at delivery.",
    fit: "Best for chilled, frozen, and other temperature-sensitive shipments.",
    photo: "reefer",
  },
] as const;

export const technology = [
  {
    title: "Real-time Load Solutions",
    body: "Visibility from tender to delivery, so you know where the freight is and when it is due — without waiting on a callback to find out.",
  },
  {
    title: "Our Commitment",
    body: "We answer the call, follow through on the promise, and treat your customers' freight as our own. A load is a commitment, not a transaction.",
  },
  {
    title: "Customer-Centric Approach",
    body: "Every shipment is planned around your schedule, your lanes, and the way your business actually runs — not a generic playbook.",
  },
] as const;

export const differences = [
  {
    title: "Safety & Compliance First",
    body: "Safety and compliance come before the mile. Equipment is maintained, drivers are qualified, and every load is handled to U.S. carrier standards — so your freight and our people both get home.",
  },
  {
    title: "24/7 Customer Support",
    body: "Dispatch and support stay reachable on weekends, after hours, and the moments a load needs a decision. You should not have to wait until morning to know what is happening.",
  },
  {
    title: "Experienced Professionals",
    body: "Drivers, dispatchers, and account teams who know the docks, the lanes, and how to keep a supply chain calm when the day does not go to plan.",
  },
] as const;

export const partnerCopy = [
  "We deliver freight across the United States with the care and consistency your business depends on. From full truckloads to specialized moves, SIOX keeps cargo on schedule and operations moving.",
  "SIOX Transports is a U.S. carrier and logistics partner for shippers who need more than a truck on a lane. You get dependable capacity, clear communication, and technology that shows you where the freight is — every mile of the way.",
  "We take the loads that cannot slip: time-sensitive freight, multi-stop routes, and shipments that have to arrive intact. Drivers, dispatch, and support work as one team so your customers never feel the distance.",
];

export const directionCopy = [
  "Our mission is simple: move freight with integrity, precision, and the kind of service people remember.",
  "SIOX Transports is investing in a stronger network, clearer visibility, and a team that treats every load as a commitment. Technology keeps the work transparent — real-time updates, and a dispatch team that answers when a load needs a decision.",
  "We are growing a national footprint one reliable lane at a time, with the discipline of a carrier and the responsiveness of a partner.",
];
