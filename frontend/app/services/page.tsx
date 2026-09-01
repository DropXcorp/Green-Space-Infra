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
    subtitle: "Planning and delivering well-designed apartment developments for comfortable, long-term living.",
    image: "/images/buildings/project/jewel.png",
    deliverables: [
      "Apartment & Multi-Storey Residential Buildings",
      "Quality Civil, Electrical & Plumbing Works",
      "Common Area Facilities & Landscaping",
      "Thoughtful Site Planning & Orientation",
    ],
  },
  {
    id: "property-management",
    title: "Property Management",
    subtitle: "Professional management of completed developments with reliable operations and stakeholder communication.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85",
    deliverables: [
      "Day-to-Day Property Administration",
      "Facility Maintenance & Vendor Coordination",
      "Resident & Stakeholder Communication",
      "Accounts & Documentation Management",
    ],
  },
  {
    id: "construction",
    title: "Construction Services",
    subtitle: "Coordinated civil and construction works delivered with structured quality and site management.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85",
    deliverables: [
      "Civil Engineering & Structural Works",
      "Masonry, Carpentry & Finishing Trades",
      "Electrical, Plumbing & MEP Services",
      "Site Coordination & Safety Management",
    ],
  },
  {
    id: "management",
    title: "Project Management & Renovation",
    subtitle: "Structured project management, cost tracking, quality monitoring and renovation works.",
    image: "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1400&q=85",
    deliverables: [
      "Project Planning & Schedule Management",
      "On-Site Quality Checks & Supervision",
      "Cost Monitoring & Financial Coordination",
      "Structural Renovation & Retrofitting",
    ],
  },
];

const techItems = [
  { icon: Layers, title: "Structured Project Planning", desc: "Detailed scheduling and coordination across civil, MEP and finishing trades for smooth site execution." },
  { icon: Cpu, title: "Site Supervision", desc: "Regular site inspections and quality checks to maintain workmanship and safety standards throughout the build." },
  { icon: ShieldCheck, title: "Quality & Cost Control", desc: "Milestone-based tracking of project costs, materials and timelines to ensure responsible delivery." },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(serviceDetails[0].id);
  const currentDetail = serviceDetails.find((s) => s.id === activeTab) || serviceDetails[0];

  return (
    <>
      <PageHero
        eyebrow="OUR SERVICES"
        title="End-to-End Solutions."
        highlightedTitle="Built with Care."
        description="From site planning to project handover, Green Space Infra brings together residential development, construction, property management and environmental management under one experienced team."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=88"
        imageAlt="Green Space Infra Engineering Services"
        floatingBadge={{
          icon: "shield",
          title: "Since 2012",
          subtitle: "Established in Hyderabad, Telangana",
        }}
        primaryAction={{
          label: "Explore Our Services",
          href: "#services-grid",
        }}
        secondaryAction={{
          label: "Get in Touch",
          href: "/contact",
        }}
        stats={[
          { value: 4, suffix: "", label: "Core Competencies", icon: "layers" },
          { value: 5, suffix: "", label: "Completed Projects", icon: "building2" },
          { value: 14, suffix: "+ Yrs", label: "Industry Experience", icon: "sparkles" },
          { value: 75, suffix: " Yrs", label: "Combined Team Experience", icon: "users" },
        ]}
      />

      {/* INTERACTIVE SERVICE SHOWCASE TABS */}
      <section id="services-grid" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px]">
          <AnimatedSection variants={fadeUp} className="text-center">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#43a324]">
              What We Do
            </p>
            <h2 className="mt-3 font-[var(--font-playfair)] text-3xl font-semibold text-[#111611] sm:text-4xl">
              Our Core Services
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
                      Our Service
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
              Our Approach
            </p>
            <h2 className="mt-3 font-[var(--font-playfair)] text-3xl font-semibold sm:text-4xl">
              How We Deliver Every Project
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
