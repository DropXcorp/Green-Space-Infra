import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Eye,
  Flag,
  Handshake,
  Heart,
  Linkedin,
  Leaf,
  ShieldCheck,
  Building,
  Users,
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
  AnimatedCounter,
} from "@/components/motion-primitives";
import { company, stats } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Green Space Infra, our leadership team, company milestones, core values, and ISO/LEED certifications.",
};

const leaders = [
  {
    name: "Vikramaditya Rao",
    role: "Founder & Managing Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=85",
    bio: "Over 22 years of civil engineering and infrastructure leadership across major urban developments in South India.",
  },
  {
    name: "Ananya Deshmukh",
    role: "Chief Operating Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85",
    bio: "Specializes in project management, procurement strategy, and green building compliance for high-rise towers.",
  },
  {
    name: "Suresh Menon",
    role: "Chief Architectural Strategist",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=85",
    bio: "Passionate about sustainable architecture, daylight optimization, and passive cooling building designs.",
  },
  {
    name: "Rajesh Kulkarni",
    role: "VP — Infrastructure Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
    bio: "Leads highway, bridge, and heavy civil infrastructure engineering projects with zero-accident safety records.",
  },
];

const timeline = [
  { year: "2010", title: "Company Founded", desc: "Established in Hyderabad with a focus on premium residential developments." },
  { year: "2015", title: "50+ Projects Milestone", desc: "Expanded into commercial business parks and civil infrastructure contracts." },
  { year: "2020", title: "Green Building Mandate", desc: "Committed to 100% IGBC and LEED certified green building standards." },
  { year: "2026", title: "12M+ Sq. Ft. Delivered", desc: "Pan-India footprint spanning 30+ cities with 98% client satisfaction rate." },
];

const accreditations = [
  { title: "ISO 9001:2015", desc: "Quality Management System Certified" },
  { title: "IGBC Gold Member", desc: "Indian Green Building Council Certified" },
  { title: "LEED Certified", desc: "Leadership in Energy & Environmental Design" },
  { title: "NSC Safety Award", desc: "National Safety Council Excellence" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR LEGACY & VALUES"
        title="Building Trust."
        highlightedTitle="Creating Enduring Value."
        description="Green Space Infra is a premier construction and infrastructure brand delivering landmark residential communities, future-ready commercial spaces, and civil transport corridors."
        image="https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1600&q=88"
        imageAlt="Green Space Infra Corporate Legacy"
        floatingBadge={{
          icon: "award",
          title: "15+ Years of Excellence",
          subtitle: "Trusted by 250+ Clients Nationwide",
        }}
        primaryAction={{
          label: "Our Story",
          href: "#story-section",
        }}
        secondaryAction={{
          label: "Meet Leadership",
          href: "#leadership-team",
        }}
        stats={[
          { value: 15, suffix: "+", label: "Years Experience", icon: "shield" },
          { value: 250, suffix: "+", label: "Delivered Projects", icon: "building" },
          { value: 500, suffix: "+", label: "Engineers & Staff", icon: "users" },
          { value: 98, suffix: "%", label: "Client Satisfaction", icon: "heart" },
        ]}
      />

      {/* STORY SECTION */}
      <section id="story-section" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 lg:grid-cols-2 lg:items-center">
          <AnimatedSection variants={slideLeft}>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#43a324]">
              Our Story
            </p>
            <h2 className="mt-4 font-[var(--font-playfair)] text-3xl font-semibold leading-tight text-[#111611] sm:text-4xl lg:text-5xl">
              Building a Reputation One Landmark at a Time.
            </h2>
            <p className="mt-6 text-sm leading-8 text-[#626c62] sm:text-base">
              {company.description}
            </p>
            <p className="mt-4 text-sm leading-8 text-[#626c62] sm:text-base">
              Our multidisciplinary team combines decades of engineering expertise, architectural innovation, and rigorous project management to turn ambitious blueprints into enduring structures.
            </p>

            <div className="mt-8 grid gap-3">
              {[
                "15+ Years of Industry Leadership",
                "250+ Successfully Handed-Over Projects",
                "12 Million+ Sq. Ft. Premium Infrastructure",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-[#43a324]" />
                  <span className="text-xs font-bold text-[#222622]">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection variants={slideRight}>
            <div className="relative min-h-[480px] overflow-hidden rounded-[30px]">
              <Image
                src="https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1500&q=88"
                alt="Green Space Infra Team & Work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/30 bg-white/90 p-5 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-3.5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#43a324] text-white">
                    <Award size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-[#111611]">
                      Certified Excellence & Safety Standard
                    </p>
                    <p className="mt-0.5 text-xs text-[#687068]">
                      Recognized for zero-accident safety records & quality compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* MILESTONE TIMELINE */}
      <section className="bg-[#f6f8f5] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px]">
          <AnimatedSection variants={fadeUp} className="text-center">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#43a324]">
              Our Journey
            </p>
            <h2 className="mt-3 font-[var(--font-playfair)] text-3xl font-semibold text-[#111611] sm:text-4xl">
              15+ Years of Growth & Milestones
            </h2>
          </AnimatedSection>

          <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map(({ year, title, desc }) => (
              <MotionItem key={year} variants={scaleIn}>
                <div className="relative h-full rounded-[26px] border border-black/8 bg-white p-7 shadow-[0_12px_40px_rgba(20,32,18,.05)]">
                  <span className="block text-3xl font-extrabold text-[#43a324]">{year}</span>
                  <h3 className="mt-3 text-lg font-extrabold text-[#111611]">{title}</h3>
                  <p className="mt-2 text-xs leading-6 text-[#687068]">{desc}</p>
                </div>
              </MotionItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* LEADERSHIP TEAM */}
      <section id="leadership-team" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px]">
          <AnimatedSection variants={fadeUp} className="text-center">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#43a324]">
              Leadership
            </p>
            <h2 className="mt-3 font-[var(--font-playfair)] text-3xl font-semibold text-[#111611] sm:text-4xl">
              The Visionaries Behind Green Space Infra
            </h2>
          </AnimatedSection>

          <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((leader) => (
              <MotionItem key={leader.name} variants={scaleIn}>
                <div className="group overflow-hidden rounded-[26px] border border-black/8 bg-white shadow-[0_12px_40px_rgba(20,32,18,.05)] transition hover:-translate-y-1">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-1.04"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-extrabold text-[#111611]">{leader.name}</h3>
                    <p className="mt-1 text-xs font-bold text-[#43a324]">{leader.role}</p>
                    <p className="mt-3 text-xs leading-5 text-[#687068]">{leader.bio}</p>
                  </div>
                </div>
              </MotionItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ACCREDITATIONS & CERTIFICATIONS */}
      <section className="bg-[#111711] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-[1440px]">
          <AnimatedSection variants={fadeUp} className="text-center">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#79cc5b]">
              Quality Assurance
            </p>
            <h2 className="mt-3 font-[var(--font-playfair)] text-3xl font-semibold sm:text-4xl">
              Recognized & Certified Standards
            </h2>
          </AnimatedSection>

          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {accreditations.map(({ title, desc }) => (
              <MotionItem key={title} variants={scaleIn}>
                <div className="rounded-[22px] border border-white/10 bg-white/5 p-6 text-center">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-[#43a324]/20 text-[#8bd46f]">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="mt-4 text-base font-extrabold text-white">{title}</h3>
                  <p className="mt-1.5 text-xs text-white/50">{desc}</p>
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