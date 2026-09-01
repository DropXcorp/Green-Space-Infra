export type Project = {
  slug: string;
  title: string;
  category: "Residential Development" | "Group Venture";
  location?: string;
  status: "Completed" | "Ongoing";
  image: string;
  description: string;
  overview?: string;
  highlights?: string[];
  gallery: string[];
  specifications?: string[];
};

export const company = {
  name: "Green Space Infra",
  established: "2012",
  tagline: "You Dream. We Build.",
  description:
    "Building thoughtfully planned real-estate developments through professional execution, responsible management and long-term value creation.",
  email: "greenspaceinfra19@gmail.com",
  address: "House No. 16-2-752/105 & 106, Flat No. 403, Hardhik Palace, SBH-C Colony, Saidabad, Hyderabad – 500059",
  shortAddress: "Hyderabad",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Expertise", href: "/expertise" },
  { label: "Projects", href: "/projects" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 2012, suffix: "", label: "Established", icon: "House" },
  { value: 5, suffix: "", label: "Completed Projects", icon: "Building2" },
  { value: 4, suffix: "", label: "Core Competencies", icon: "Landmark" },
  { value: 75, suffix: " Yrs", label: "Combined Team Experience", icon: "CheckCircle2" },
];

export const services = [
  {
    title: "Residential Development",
    description:
      "Crafting premium homes and communities that blend comfort, elegance and functionality.",
    icon: "House",
  },
  {
    title: "Commercial Development",
    description:
      "Delivering future-ready commercial spaces that empower businesses to thrive.",
    icon: "Building2",
  },
  {
    title: "Infrastructure Development",
    description:
      "Building robust infrastructure that connects communities and drives sustainable growth.",
    icon: "Landmark",
  },
  {
    title: "Project Management & Renovation",
    description:
      "Expertly managing projects and transforming spaces with precision and transparency.",
    icon: "ClipboardCheck",
  },
  {
    title: "Design Coordination",
    description:
      "Integrating architecture, engineering and structural design for smooth execution.",
    icon: "Ruler",
  },
  {
    title: "Renovation & Interiors",
    description:
      "Thoughtfully converting and upgrading interiors with premium materials and finish.",
    icon: "Hammer",
  },
];

export const expertise = [
  { number: "01", title: "Property Acquisition & Development", description: "Identifying development opportunities and transforming them into thoughtfully planned real-estate projects with long-term value.", image: "/images/buildings/hero/hero1.png" },
  { number: "02", title: "Property Management", description: "Professional property management focused on reliable operations, responsible administration and strong stakeholder relationships.", image: "/images/buildings/project/elite.png" },
  { number: "03", title: "Property Acquisition & Construction", description: "Coordinated development and construction services covering planning, civil works, execution management and project delivery.", image: "/images/buildings/hero/hero3.png" },
  { number: "04", title: "Environmental Management", description: "Integrating environmental responsibility and socially conscious practices into project planning and execution.", image: "/images/buildings/project/residency.png" },
];

export const projects: Project[] = [
  {
    slug: "green-space-residency", title: "Green Space Residency", category: "Residential Development", status: "Completed",
    location: "Hyderabad, Telangana", image: "/images/buildings/project/residency.png",
    description: "A completed residential development in Green Space Infra's documented portfolio.",
    overview: "Green Space Residency is one of the five completed residential projects presented in the official Green Space Infra company brochure.",
    gallery: ["/images/buildings/project/residency.png"],
  },
  {
    slug: "green-space-elite", title: "Green Space Elite", category: "Residential Development", status: "Completed",
    location: "Hyderabad, Telangana", image: "/images/buildings/project/elite.png",
    description: "A completed residential development in Green Space Infra's documented portfolio.",
    overview: "Green Space Elite is one of the five completed residential projects presented in the official Green Space Infra company brochure.",
    gallery: ["/images/buildings/project/elite.png"],
  },
  {
    slug: "green-space-lotus", title: "Green Space Lotus", category: "Residential Development", status: "Completed",
    location: "Hyderabad, Telangana", image: "/images/buildings/project/lotus.png",
    description: "A completed residential development in Green Space Infra's documented portfolio.",
    overview: "Green Space Lotus is one of the five completed residential projects presented in the official Green Space Infra company brochure.",
    gallery: ["/images/buildings/project/lotus.png"],
  },
  {
    slug: "green-space-orchid", title: "Green Space Orchid", category: "Residential Development", status: "Completed",
    location: "Hyderabad, Telangana", image: "/images/brochure/green-space-orchid.jpg",
    description: "A completed residential development in Green Space Infra's documented portfolio.",
    overview: "Green Space Orchid is one of the five completed residential projects presented in the official Green Space Infra company brochure.",
    gallery: ["/images/brochure/green-space-orchid.jpg"],
  },
  {
    slug: "green-space-jewel", title: "Green Space Jewel", category: "Residential Development", status: "Completed",
    location: "Hyderabad, Telangana", image: "/images/buildings/project/jewel.png",
    description: "A completed residential development in Green Space Infra's documented portfolio.",
    overview: "Green Space Jewel is one of the five completed residential projects presented in the official Green Space Infra company brochure.",
    gallery: ["/images/buildings/project/jewel.png"],
  },
  {
    slug: "green-space-comfort-1", title: "Green Space Comfort – I", category: "Residential Development", status: "Ongoing",
    location: "Hyderabad, Telangana", image: "/images/brochure/green-space-comfort-1.jpg",
    description: "An ongoing residential project documented in the company brochure.",
    overview: "Green Space Comfort – I appears in the official Green Space Infra brochure as an ongoing project. The photograph shows the project during construction.",
    gallery: ["/images/brochure/green-space-comfort-1.jpg"],
  },
  {
    slug: "green-space-comfort-2", title: "Green Space Comfort – II", category: "Residential Development", status: "Ongoing",
    location: "Hyderabad, Telangana", image: "/images/brochure/green-space-comfort-2.jpg",
    description: "An ongoing residential project documented in the company brochure.",
    overview: "Green Space Comfort – II appears in the official Green Space Infra brochure as an ongoing project. The photograph shows the project during construction.",
    gallery: ["/images/brochure/green-space-comfort-2.jpg"],
  },
  {
    slug: "green-space-spv", title: "Green Space SPV", category: "Residential Development", status: "Ongoing",
    location: "Telangana", image: "/images/brochure/green-space-spv.jpg",
    description: "An ongoing Green Space Infra project documented at its plotted site stage.",
    overview: "Green Space SPV appears in the official Green Space Infra brochure as an ongoing project. The photograph documents the site at the plotted development stage.",
    gallery: ["/images/brochure/green-space-spv.jpg"],
  },
];

export const groupVentures = {
  company: "Green Space Properties",
  relationship: "A subsidiary company of Green Space Infra",
  description: "Green Space Properties is engaged in laying ventures and selling open plots.",
  ventures: [
    {
      name: "Green Space Bhagiratha",
      status: "Ongoing",
      location: "Near the Collector Office, Medak District",
      image: "/images/brochure/green-space-bhagiratha.jpg",
      imageNote: "Official concept visual reproduced from the supplied company brochure.",
    },
    {
      name: "Green Space Indira Nagar",
      status: "Upcoming",
      location: "Near the Collector Office, Medak District",
      image: undefined,
      imageNote: undefined,
    },
  ],
};

export const newsItems = [
  {
    id: 1,
    type: "Project Update",
    date: "Jun 2026",
    title: "Green Space Jewel — Handover Complete",
    excerpt:
      "Green Space Infra successfully completes the handover of Green Space Jewel, our latest residential development in Hyderabad.",
    image:
      "/images/buildings/project/jewel.png",
  },
  {
    id: 2,
    type: "Company Update",
    date: "Jan 2024",
    title: "Green Space Infra Marks Over a Decade of Development",
    excerpt:
      "Since our incorporation in 2012, we have continued to grow our presence in Hyderabad's residential real estate market through professional project execution.",
    image:
      "/images/buildings/project/elite.png",
  },
  {
    id: 3,
    type: "Project Update",
    date: "2022",
    title: "Green Space Lotus — Residential Development Delivered",
    excerpt:
      "Green Space Lotus, a residential apartment project in Hyderabad, was successfully completed and handed over to residents.",
    image:
      "/images/buildings/project/lotus.png",
  },
];
