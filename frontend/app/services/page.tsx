"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Cpu,
  Hammer,
  House,
  Landmark,
  Layers,
  Ruler,
  ShieldCheck,
  Sparkles,
  Timer,
  TrendingUp,
} from "lucide-react";
import PageHero from "@/components/page-hero";
import CTA from "@/components/cta";
import {
  AnimatedSection,
  StaggerGroup,
  MotionItem,
  slideLeft,
  slideRight,
  scaleIn,
  fadeUp,
} from "@/components/motion-primitives";
import { services } from "@/lib/site-data";
import { AnimatePresence, motion } from "framer-motion";

const serviceDetails = [
  {
    id: "residential",
    title: "Residential Development",
    subtitle: "Creating sanctuaries designed for modern living, family comfort, and lasting architecture.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    deliverables: [
      "Luxury Villa Enclaves & High-Rise Apartments",
      "Integrated Gated Security & Clubhouse Amenities",
      "Solar Power & Rainwater Catchment Grids",
      "Acoustic & Thermal Insulation Systems",
    ],
  },
  {
    id: "commercial",
    title: "Commercial Development",
    subtitle: "Future-ready IT parks, corporate towers, and retail hubs built for high performance.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85",
    deliverables: [
      "LEED Certified Energy Efficient Workspaces",
      "Flexible Column-Free Floor Plate Planning",
      "High-Speed Smart Elevator Circulation",
      "Multi-Tier Basement & Visitor Parking",
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure Development",
    subtitle: "Heavy civil infrastructure connecting regions, industrial parks, and urban corridors.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85",
    deliverables: [
      "Expressway & Highway Civil Packages",
      "Precast Concrete Modular Bridge Erection",
      "Site Drainage & Underground Utilities",
      "Industrial Logistics & Foundation Works",
    ],
  },
  {
    id: "management",
    title: "Project Management & Renovation",
    subtitle: "Turnkey project management, site safety, vendor management, and structural renovation.",
    image: "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1400&q=85",
    deliverables: [
      "BIM 3D Model Construction Coordination",
      "Strict On-Site Quality Checkpoints",
      "Milestone-Led Financial & Schedule Control",
      "Retrofitting & Structural Upgrades",
    ],
  },
];

const techItems = [
  { icon: Layers, title: "BIM 3D Modeling", desc: "Clash detection and 3D architectural modeling before pouring concrete." },
  { icon: Cpu, title: "Drone Site Surveillance", desc: "Weekly aerial topographic scans & volumetric earthwork verification." },
  { icon: ShieldCheck, title: "Smart Quality Sensors", desc: "Real-time concrete maturity and curing temperature sensors." },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(serviceDetails[0].id);
  const currentDetail = serviceDetails.find((s) => s.id === activeTab) || serviceDetails[0];

  return (
    <>
      <PageHero
        eyebrow="OUR EXPERTISE"
        title="End-to-End Solutions."
        highlightedTitle="Built to Perfection."
        description="From architectural conception to civil engineering, structural execution, and project handover, we deliver unified real estate & infrastructure excellence."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=88"
        imageAlt="Green Space Infra Engineering Services"
        floatingBadge={{
          icon: "shield",
          title: "ISO 9001:2015 Certified",
          subtitle: "Zero-Compromise Quality Standard",
        }}
        primaryAction={{
          label: "Explore Capabilities",
          href: "#services-grid",
        }}
        secondaryAction={{
          label: "Consult an Engineer",
          href: "/contact",
        }}
        stats={[
          { value: 6, suffix: " Core", label: "Specialized Domains", icon: "layers" },
          { value: 100, suffix: "%", label: "On-Time Handover", icon: "timer" },
          { value: 15, suffix: "+", label: "Years Experience", icon: "sparkles" },
          { value: 0, suffix: " Incidents", label: "Safety Record", icon: "shield" },
        ]}
      />

      {/* INTERACTIVE SERVICE SHOWCASE TABS */}
      <section id="services-grid" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px]">
          <AnimatedSection variants={fadeUp} className="text-center">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#43a324]">
              Interactive Showcase
            </p>
            <h2 className="mt-3 font-[var(--font-playfair)] text-3xl font-semibold text-[#111611] sm:text-4xl">
              Explore Our Core Capabilities
            </h2>
          </AnimatedSection>

          {/* TAB BUTTONS */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {serviceDetails.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative rounded-full px-6 py-3 text-xs font-bold transition ${
                  activeTab === tab.id
                    ? "bg-[#43a324] text-white shadow-[0_10px_30px_rgba(67,163,36,.25)]"
                    : "bg-[#f0f4ef] text-[#687068] hover:bg-[#e4ede2] hover:text-[#111711]"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* TAB CONTENT DISPLAY */}
          <div className="mt-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentDetail.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid overflow-hidden rounded-[30px] border border-black/8 bg-white shadow-[0_20px_60px_rgba(20,32,18,.08)] lg:grid-cols-2"
              >
                <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-14">
                  <div>
                    <span className="rounded-full bg-[#eef8eb] px-3.5 py-1.5 text-[11px] font-extrabold text-[#43a324]">
                      Featured Domain
                    </span>
                    <h3 className="mt-5 font-[var(--font-playfair)] text-3xl font-semibold text-[#111611] sm:text-4xl">
                      {currentDetail.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#687068]">
                      {currentDetail.subtitle}
                    </p>

                    <div className="mt-8 grid gap-3">
                      {currentDetail.deliverables.map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <CheckCircle2 size={18} className="shrink-0 text-[#43a324]" />
                          <span className="text-xs font-bold text-[#222622]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-[#43a324] px-6 py-3.5 text-xs font-extrabold text-white shadow-[0_12px_30px_rgba(67,163,36,.22)] transition hover:bg-[#2f7f1d]"
                    >
                      Request Proposal <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

                <div className="relative min-h-[380px] lg:min-h-[480px]">
                  <Image
                    src={currentDetail.image}
                    alt={currentDetail.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CONSTRUCTION TECH SECTION */}
      <section className="bg-[#111711] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-[1440px]">
          <AnimatedSection variants={fadeUp} className="text-center">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#79cc5b]">
              Engineering Innovation
            </p>
            <h2 className="mt-3 font-[var(--font-playfair)] text-3xl font-semibold sm:text-4xl">
              Advanced Technology We Deploy on Site
            </h2>
          </AnimatedSection>

          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-3">
            {techItems.map(({ icon: Icon, title, desc }) => (
              <MotionItem key={title} variants={scaleIn}>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-8">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#43a324]/20 text-[#8bd46f]">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-6 text-lg font-extrabold text-white">{title}</h3>
                  <p className="mt-2.5 text-xs leading-6 text-white/50">{desc}</p>
                </div>
              </MotionItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CTA />
    </>
  );
}
