import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Globe,
  Leaf,
  Recycle,
  ShieldCheck,
  Sun,
  Wind,
  Zap,
} from "lucide-react";
import PageHero from "@/components/page-hero";
import CTA from "@/components/cta";
import {
  AnimatedSection,
  StaggerGroup,
  MotionItem,
  fadeUp,
  slideLeft,
  slideRight,
  scaleIn,
} from "@/components/motion-primitives";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Building a greener, smarter future. Learn about Green Space Infra's eco-friendly practices, solar integration, and waste reduction strategies.",
};

const pillars = [
  {
    icon: Leaf,
    title: "Green Building Design",
    desc: "Optimizing building orientations, daylight harvesting, and thermal insulation to reduce energy demands naturally.",
  },
  {
    icon: Sun,
    title: "Renewable Energy Integration",
    desc: "Deploying solar rooftop grids, solar water heaters, and energy-efficient LED automation across all developments.",
  },
  {
    icon: Recycle,
    title: "Zero-Waste Water Systems",
    desc: "Rainwater harvesting reservoirs, sewage treatment plants, and greywater recycling for landscape irrigation.",
  },
  {
    icon: Cpu,
    title: "Smart Resource Control",
    desc: "IoT sensors, smart energy meters, and automated lighting control to prevent energy and water wastage.",
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="SUSTAINABILITY COMMITMENT"
        title="Building a Greener,"
        highlightedTitle="Smarter Tomorrow."
        description="We integrate sustainable design, resource efficiency, and eco-conscious construction practices to create a positive, lasting impact on communities and our planet."
        image="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=88"
        imageAlt="Sustainable Eco Architecture"
        floatingBadge={{
          icon: "leaf",
          title: "100% IGBC & LEED Compliant",
          subtitle: "Eco-Conscious Building Standards",
        }}
        primaryAction={{
          label: "Our Eco Pillars",
          href: "#pillars-section",
        }}
        secondaryAction={{
          label: "Consult on Green Specs",
          href: "/contact",
        }}
        stats={[
          { value: 40, suffix: "%", label: "Energy Savings", icon: "zap" },
          { value: 60, suffix: "%", label: "Water Recycled", icon: "recycle" },
          { value: 35, suffix: "%", label: "Carbon Reduction", icon: "leaf" },
          { value: 100, suffix: "%", label: "IGBC Compliance", icon: "shield" },
        ]}
      />

      {/* INTRO SPLIT */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 lg:grid-cols-2 lg:items-center">
          <AnimatedSection variants={slideLeft}>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#43a324]">
              Responsibility by Choice
            </p>
            <h2 className="mt-4 font-[var(--font-playfair)] text-3xl font-semibold leading-tight text-[#111611] sm:text-4xl lg:text-5xl">
              Pioneering Sustainable Infrastructure Across India.
            </h2>
            <p className="mt-6 text-sm leading-8 text-[#626c62] sm:text-base">
              At Green Space Infra, sustainability is not an afterthought — it is embedded into our architectural blueprints, material procurement, and construction methodologies.
            </p>
            <p className="mt-4 text-sm leading-8 text-[#626c62] sm:text-base">
              From reducing embodied carbon to implementing rainwater catchment basins, we ensure every development leaves a lighter footprint on our planet.
            </p>

            <div className="mt-8 grid gap-3">
              {[
                "IGBC & LEED Green Building Standards",
                "100% On-Site Water Treatment & Recycling",
                "Low-VOC & Non-Toxic Eco-Friendly Materials",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-[#43a324]" />
                  <span className="text-xs font-bold text-[#222622]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection variants={slideRight}>
            <div className="relative min-h-[460px] overflow-hidden rounded-[30px]">
              <Image
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1500&q=88"
                alt="Green Eco Friendly Architecture"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-6 right-6 flex items-center gap-3 rounded-2xl border border-white/40 bg-white/90 p-4 shadow-2xl backdrop-blur-md">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#43a324] text-white">
                  <Leaf size={20} />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-[#111611]">
                    Sustainable by Design
                  </p>
                  <p className="text-[11px] text-[#687068]">
                    100% Eco-conscious planning
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PILLARS GRID */}
      <section id="pillars-section" className="bg-[#f6f8f5] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px]">
          <AnimatedSection variants={fadeUp} className="text-center">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#43a324]">
              Core Pillars
            </p>
            <h2 className="mt-3 font-[var(--font-playfair)] text-3xl font-semibold text-[#111611] sm:text-4xl">
              Our 4 Pillars of Sustainable Development
            </h2>
          </AnimatedSection>

          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <MotionItem key={title} variants={scaleIn}>
                <div className="flex h-full flex-col justify-between rounded-[26px] border border-black/8 bg-white p-7 shadow-[0_12px_40px_rgba(20,32,18,.05)]">
                  <div>
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#eef8eb] text-[#43a324]">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-6 text-base font-extrabold text-[#111611]">
                      {title}
                    </h3>
                    <p className="mt-2.5 text-xs leading-6 text-[#687068]">
                      {desc}
                    </p>
                  </div>
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
