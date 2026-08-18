export type Project = {
  slug: string;
  title: string;
  category: "Residential" | "Commercial" | "Infrastructure";
  location: string;
  status: "Completed" | "Ongoing" | "Upcoming";
  year: string;
  area: string;
  image: string;
  description: string;
  overview: string;
  highlights: string[];
};

export const company = {
  name: "Green Space Infra",
  tagline: "Engineering Better Spaces. Enriching Lives.",
  description:
    "Green Space Infra delivers world-class real estate, infrastructure and construction solutions that inspire communities and create lasting value.",
  phone: "+91 40 1234 5678",
  email: "info@greenspaceinfra.com",
  address: "3rd Floor, Green Tower, Eco City, Gachibowli, Hyderabad, TG 500032",
  hours: "Monday - Saturday, 9:00 AM - 6:00 PM",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Expertise", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Insights", href: "/news-events" },
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

export const projects: Project[] = [
  {
    slug: "green-heaven-villas",
    title: "Green Heaven Villas",
    category: "Residential",
    location: "Hyderabad",
    status: "Completed",
    year: "2025",
    area: "2.4 lakh sq. ft.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=88",
    description: "Luxury villas crafted for modern living.",
    overview:
      "A benchmark residential sanctuary in Hyderabad featuring solar-powered energy grids, private gardens, and state-of-the-art home automation.",
    highlights: [
      "Solar-integrated power management",
      "Private landscape decks & infinity pools",
      "Gated community with 24/7 smart security",
      "EV charging stations for every residence",
    ],
  },
  {
    slug: "vertex-business-park",
    title: "Vertex Business Park",
    category: "Commercial",
    location: "Bengaluru",
    status: "Ongoing",
    year: "2026",
    area: "1.8 lakh sq. ft.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=88",
    description: "Smart workspaces for a dynamic future.",
    overview:
      "An IT & business complex designed for high efficiency, seamless transit access, double-glazed curtain walls, and LEED Gold certification standards.",
    highlights: [
      "LEED Gold certified green building",
      "High-speed energy efficient smart elevators",
      "Multi-tier basement parking with guidance system",
      "Acoustically optimized floor plates",
    ],
  },
  {
    slug: "pure-ring-road-project",
    title: "Pure Ring Road Project",
    category: "Infrastructure",
    location: "Pune",
    status: "Ongoing",
    year: "2026",
    area: "42 km corridor",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=88",
    description: "Building connectivity. Empowering lives.",
    overview:
      "A major civil infrastructure expressway package linking suburban nodes to core industrial zones with minimal ecological footprint.",
    highlights: [
      "6-lane elevated expressway design",
      "Rainwater harvesting along entire median",
      "Smart traffic monitoring sensors",
      "Precast modular bridge construction",
    ],
  },
  {
    slug: "green-nest-residences",
    title: "Green Nest Residences",
    category: "Residential",
    location: "Kolkata",
    status: "Upcoming",
    year: "2027",
    area: "3.1 lakh sq. ft.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=88",
    description: "Modern living in the heart of the city.",
    overview:
      "A high-rise residential tower incorporating vertical gardens, passive cooling facades, and expansive community social spaces.",
    highlights: [
      "Vertical botanical gardens on facades",
      "Zero-waste water recycling system",
      "Sky lounge & wellness sanctuary",
      "Seismic-resistant structural frame",
    ],
  },
  {
    slug: "eco-vista-villas",
    title: "Eco Vista Villas",
    category: "Residential",
    location: "Goa",
    status: "Completed",
    year: "2024",
    area: "90,000 sq. ft.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=88",
    description: "Coastal sustainable villa enclave surrounded by nature.",
    overview:
      "Exclusive beachfront villas designed using indigenous stone, timber, and solar roof tiles for off-grid living.",
    highlights: [
      "Natural stone & timber architecture",
      "Private infinity edge pools",
      "Integrated solar roof systems",
      "Zero net water discharge",
    ],
  },
  {
    slug: "prime-industrial-works",
    title: "Prime Industrial Works",
    category: "Infrastructure",
    location: "Gujarat",
    status: "Completed",
    year: "2023",
    area: "5.5 lakh sq. ft.",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1800&q=88",
    description: "Heavy engineering industrial complex and logistics park.",
    overview:
      "Industrial civil works including heavy load foundations, pre-engineered steel structures, and automated warehousing setup.",
    highlights: [
      "Heavy load slab engineering",
      "Automated logistics dock bays",
      "Comprehensive fire suppression systems",
      "Solar rooftop power generation",
    ],
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