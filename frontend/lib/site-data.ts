export type Project = {
  slug: string;
  title: string;
  category: "Residential Development" | "Group Venture";
  location?: string;
  status?: "Completed";
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
  { value: 15, suffix: "+", label: "Years of Excellence", icon: "House" },
  { value: 250, suffix: "+", label: "Projects Delivered", icon: "Building2" },
  { value: 12, suffix: "M+", label: "Sq. Ft. Developed", icon: "Landmark" },
  { value: 98, suffix: "%", label: "Client Satisfaction", icon: "CheckCircle2" },
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
  { number: "01", title: "Property Acquisition & Development", description: "Identifying development opportunities and transforming them into thoughtfully planned real-estate projects with long-term value.", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85" },
  { number: "02", title: "Property Management", description: "Professional property management focused on reliable operations, responsible administration and strong stakeholder relationships.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85" },
  { number: "03", title: "Property Acquisition & Construction", description: "Coordinated development and construction services covering planning, civil works, execution management and project delivery.", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85" },
  { number: "04", title: "Environmental Management", description: "Integrating environmental responsibility and socially conscious practices into project planning and execution.", image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=85" },
];

export const projects: Project[] = [
  {
    slug: "green-space-residency",
    title: "Green Space Residency",
    category: "Residential Development",
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=88",
    description: "Residential development by Green Space Infra.", gallery: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=88"],
  },
  {
    slug: "green-space-elite", title: "Green Space Elite", category: "Residential Development", status: "Completed",
    image: "/images/buildings/project/elite.png",
    description: "Residential development by Green Space Infra.", gallery: ["/images/buildings/project/elite.png"],
  },
  {
    slug: "green-space-lotus", title: "Green Space Lotus", category: "Residential Development", status: "Completed",
    image: "/images/buildings/project/lotus.png",
    description: "Residential development by Green Space Infra.", gallery: ["/images/buildings/project/lotus.png"],
  },
  {
    slug: "green-space-orchid", title: "Green Space Orchid", category: "Residential Development", status: "Completed",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=88",
    description: "Residential development by Green Space Infra.", gallery: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=88"],
  },
  {
    slug: "green-space-jewel", title: "Green Space Jewel", category: "Residential Development", status: "Completed",
    image: "/images/buildings/project/jewel.png",
    description: "Residential development by Green Space Infra.", gallery: ["/images/buildings/project/jewel.png"],
  },
  {
    slug: "green-space-comfort-i", title: "Green Space Comfort – I", category: "Residential Development",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1800&q=88",
    description: "Residential development by Green Space Infra.", gallery: ["https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1800&q=88"],
  },
];

export const newsItems = [
  {
    id: 1,
    type: "Project Milestone",
    date: "18 Aug 2026",
    title: "Green Space Infra Achieves 12 Million Sq. Ft. Milestone",
    excerpt:
      "Celebrating a landmark achievement across residential, commercial and infrastructure projects nationwide.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 2,
    type: "Sustainability",
    date: "05 Aug 2026",
    title: "Pioneering Net-Zero Construction in Urban India",
    excerpt:
      "How Green Space Infra integrates green building practices and renewable energy across all ongoing developments.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 3,
    type: "Recognition",
    date: "22 Jul 2026",
    title: "Green Space Infra Awarded Infrastructure Excellence 2026",
    excerpt:
      "Recognized for outstanding safety, engineering precision, and on-time project execution.",
    image:
      "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1400&q=85",
  },
];
