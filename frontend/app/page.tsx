"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  Grid,
  House,
  Landmark,
  Leaf,
  Ruler,
  Shield,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

import CTA from "@/components/cta";
import BeforeAfterSlider from "@/components/before-after-slider";
import IndiaPresenceMap from "@/components/india-map";
import {
  AnimatedSection,
  AnimatedCounter,
  StaggerGroup,
  MotionItem,
  fadeUp,
  slideLeft,
  slideRight,
  scaleIn,
} from "@/components/motion-primitives";
import { company, projects, services } from "@/lib/site-data";

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  const [carouselIndex, setCarouselIndex] = useState(0);

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <>
      {/* ========================================
          HERO SECTION (MATCHING EXACT REFERENCE)
      ======================================== */}
      <section ref={heroRef} className="relative overflow-hidden bg-white pt-[78px]">
        
        {/* HERO CONTAINER */}
        <div className="relative min-h-[660px] w-full lg:grid lg:grid-cols-[1.05fr_0.95fr] xl:min-h-[720px]">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="relative z-20 flex flex-col justify-center px-6 py-14 sm:px-10 lg:py-20 lg:pl-16 xl:pl-24">
            
            {/* Subtle Botanical Watermark in Background */}
            <div className="pointer-events-none absolute right-4 top-12 -z-10 h-72 w-72 opacity-15">
              <svg viewBox="0 0 200 200" fill="none" className="h-full w-full stroke-[#43a324]">
                <path
                  d="M50 150 C 30 90, 100 30, 170 30 C 170 100, 110 170, 50 150 Z"
                  strokeWidth="2"
                  fill="rgba(67, 163, 36, 0.05)"
                />
                <path d="M50 150 Q 110 90 170 30" strokeWidth="1.5" />
              </svg>
            </div>

            {/* EYEBROW BADGE */}
            <AnimatedSection variants={fadeUp}>
              <div className="inline-flex items-center gap-2">
                <div className="grid h-6 w-6 place-items-center rounded-full bg-[#eef8eb] text-[#43a324]">
                  <Leaf size={13} strokeWidth={2.5} />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#2f7f1d]">
                  BUILDING A GREENER TOMORROW
                </span>
              </div>
            </AnimatedSection>

            {/* MAIN HEADLINE */}
            <AnimatedSection variants={fadeUp} delay={0.1}>
              <h1 className="mt-5 font-[var(--font-playfair)] text-[clamp(2.9rem,5.4vw,5.6rem)] font-bold leading-[1.04] tracking-[-0.035em] text-[#111611]">
                Engineering <br />
                <span className="text-[#43a324]">Better</span> Spaces. <br />
                <span className="text-[#43a324]">Enriching</span> Lives.
              </h1>
              {/* Green Accent Underline Bar */}
              <div className="mt-4 h-[3px] w-14 rounded-full bg-[#43a324]" />
            </AnimatedSection>

            {/* DESCRIPTIVE NARRATIVE */}
            <AnimatedSection variants={fadeUp} delay={0.2}>
              <p className="mt-6 max-w-xl text-sm leading-7 text-[#626c62] sm:text-base sm:leading-8">
                Green Space Infra delivers landmark residential, commercial, and infrastructure projects with innovation, integrity, and a commitment to a sustainable future.
              </p>
            </AnimatedSection>

            {/* CTA BUTTONS WITH CIRCULAR ARROW CHIPS */}
            <AnimatedSection variants={fadeUp} delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {/* Primary Button */}
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#43a324] py-2.5 pl-6 pr-2.5 text-xs font-extrabold tracking-wide text-white shadow-[0_12px_30px_rgba(67,163,36,.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#32851a]"
                >
                  <span>Explore Projects</span>
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-white text-[#43a324] shadow-sm transition duration-300 group-hover:translate-x-0.5">
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </div>
                </Link>

                {/* Secondary Button */}
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-3 rounded-full border border-black/12 bg-white py-2.5 pl-6 pr-2.5 text-xs font-extrabold tracking-wide text-[#222622] transition duration-300 hover:border-[#43a324] hover:text-[#2f7f1d]"
                >
                  <span>Our Services</span>
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-[#eef8eb] text-[#43a324] transition duration-300 group-hover:translate-x-0.5">
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </div>
                </Link>
              </div>
            </AnimatedSection>

            {/* Decorative bottom-left leaf blur */}
            <div className="pointer-events-none absolute -bottom-8 -left-10 h-32 w-32 opacity-25 blur-sm">
              <svg viewBox="0 0 100 100" fill="#43a324">
                <path d="M10 90 Q 50 10 90 90 Q 50 70 10 90 Z" />
              </svg>
            </div>

          </div>

          {/* RIGHT HERO IMAGE & FLOATING GLASS BADGE */}
          <div className="relative min-h-[480px] overflow-hidden lg:min-h-[660px] xl:min-h-[720px]">
            <motion.div className="absolute inset-0" style={{ y: heroY }}>
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=92"
                alt="Green Space Infra Architecture"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </motion.div>

            {/* Subtle Gradient Inset */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            {/* Smooth Left S-Curve / Wave Mask for Desktop */}
            <div className="pointer-events-none absolute bottom-0 left-0 top-0 hidden w-24 bg-gradient-to-r from-white via-white/70 to-transparent lg:block" />

            {/* FLOATING GLASS BADGE (TOP RIGHT) */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-6 top-8 rounded-2xl border border-white/40 bg-white/95 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.14)] backdrop-blur-xl sm:right-10 sm:top-10"
            >
              <div className="flex items-center gap-3.5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-[#43a324] bg-[#eef8eb] text-[#43a324] shadow-sm">
                  <Leaf size={18} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-[#111611]">
                    Sustainably Built
                  </p>
                  <p className="mt-0.5 text-[11px] font-medium leading-tight text-[#687068]">
                    For People.<br />For Planet.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* ========================================
            BOTTOM FLOATING STATS BAR (EXACT 4 STATS)
        ======================================== */}
        <div className="relative z-30 mx-auto -mt-10 w-[calc(100%-32px)] max-w-[1320px] px-2 sm:w-[calc(100%-64px)] lg:-mt-14">
          <AnimatedSection variants={fadeUp} delay={0.35}>
            <div className="rounded-[28px] border border-black/8 bg-white p-4 shadow-[0_22px_70px_rgba(20,32,18,.12)] sm:p-5">
              <div className="grid grid-cols-2 divide-x divide-y divide-black/8 sm:divide-y-0 lg:grid-cols-4">
                
                {/* Stat 1: 15+ Years of Experience */}
                <div className="flex items-center gap-3.5 px-4 py-3.5 sm:px-6">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#eef8eb] text-[#43a324]">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <strong className="block text-xl font-extrabold text-[#111611] sm:text-2xl">
                      <AnimatedCounter to={15} suffix="+" />
                    </strong>
                    <span className="mt-0.5 block text-[11px] font-medium text-[#687068] sm:text-xs">
                      Years of Experience
                    </span>
                  </div>
                </div>

                {/* Stat 2: 120+ Projects Completed */}
                <div className="flex items-center gap-3.5 px-4 py-3.5 sm:px-6">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#eef8eb] text-[#43a324]">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <strong className="block text-xl font-extrabold text-[#111611] sm:text-2xl">
                      <AnimatedCounter to={120} suffix="+" />
                    </strong>
                    <span className="mt-0.5 block text-[11px] font-medium text-[#687068] sm:text-xs">
                      Projects Completed
                    </span>
                  </div>
                </div>

                {/* Stat 3: 25M+ Sq. Ft. Delivered */}
                <div className="flex items-center gap-3.5 px-4 py-3.5 sm:px-6">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#eef8eb] text-[#43a324]">
                    <Ruler size={20} />
                  </div>
                  <div>
                    <strong className="block text-xl font-extrabold text-[#111611] sm:text-2xl">
                      <AnimatedCounter to={25} suffix="M+" />
                    </strong>
                    <span className="mt-0.5 block text-[11px] font-medium text-[#687068] sm:text-xs">
                      Sq. Ft. Delivered
                    </span>
                  </div>
                </div>

                {/* Stat 4: 98% Client Satisfaction */}
                <div className="flex items-center gap-3.5 px-4 py-3.5 sm:px-6">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#eef8eb] text-[#43a324]">
                    <Users size={20} />
                  </div>
                  <div>
                    <strong className="block text-xl font-extrabold text-[#111611] sm:text-2xl">
                      <AnimatedCounter to={98} suffix="%" />
                    </strong>
                    <span className="mt-0.5 block text-[11px] font-medium text-[#687068] sm:text-xs">
                      Client Satisfaction
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ========================================
          OUR EXPERTISE SECTION
      ======================================== */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
            
            {/* Left Dark Card */}
            <AnimatedSection variants={slideLeft}>
              <div className="flex h-full flex-col justify-between rounded-[28px] bg-[#111711] p-8 text-white sm:p-10 lg:p-12">
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#79cc5b]">
                    Our Expertise
                  </p>
                  <h2 className="mt-4 font-[var(--font-playfair)] text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
                    End-to-end Solutions. <br />
                    Built to Perfection.
                  </h2>
                </div>

                <Link
                  href="/services"
                  className="mt-10 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8bd46f] transition hover:text-white"
                >
                  View All Services
                  <div className="grid h-7 w-7 place-items-center rounded-full border border-[#8bd46f]/40">
                    <ArrowRight size={13} />
                  </div>
                </Link>
              </div>
            </AnimatedSection>

            {/* Right 4 Grid Cards */}
            <StaggerGroup className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  icon: House,
                  title: "Residential Development",
                  desc: "Crafting premium homes and communities that blend comfort, elegance and functionality.",
                },
                {
                  icon: Building2,
                  title: "Commercial Development",
                  desc: "Delivering future-ready commercial spaces that empower businesses to thrive.",
                },
                {
                  icon: Landmark,
                  title: "Infrastructure Development",
                  desc: "Building robust infrastructure that connects communities and drives sustainable growth.",
                },
                {
                  icon: Sparkles,
                  title: "Project Management & Renovation",
                  desc: "Expertly managing projects and transforming spaces with precision and transparency.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <MotionItem key={title} variants={scaleIn}>
                  <div className="group flex h-full flex-col justify-between rounded-[28px] border border-black/8 bg-white p-7 transition hover:-translate-y-1 hover:border-[#43a324]/30 hover:shadow-[0_16px_45px_rgba(20,32,18,.08)] sm:p-8">
                    <div>
                      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eef8eb] text-[#43a324] transition group-hover:bg-[#43a324] group-hover:text-white">
                        <Icon size={21} />
                      </div>
                      <h3 className="mt-6 text-lg font-extrabold tracking-tight text-[#111611]">
                        {title}
                      </h3>
                      <p className="mt-2.5 text-xs leading-6 text-[#687068]">
                        {desc}
                      </p>
                    </div>

                    <Link
                      href="/services"
                      className="mt-6 inline-flex items-center text-[#43a324] transition group-hover:translate-x-1"
                    >
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </MotionItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* ========================================
          FEATURED PROJECTS SECTION
      ======================================== */}
      <section className="px-5 py-6 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="overflow-hidden rounded-[32px] bg-[#111711] p-8 text-white sm:p-12 lg:p-14">
            <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:items-end">
              
              {/* Left Text */}
              <AnimatedSection variants={slideLeft}>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#79cc5b]">
                  Featured Projects
                </p>
                <h2 className="mt-3 font-[var(--font-playfair)] text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                  Spaces That Inspire
                </h2>
                <p className="mt-4 max-w-sm text-xs leading-6 text-white/55 sm:text-sm">
                  From iconic landmarks to modern communities, we build with vision and precision.
                </p>

                <Link
                  href="/projects"
                  className="mt-8 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8bd46f] transition hover:text-white"
                >
                  Explore All Projects
                  <div className="grid h-7 w-7 place-items-center rounded-full border border-[#8bd46f]/40">
                    <ArrowRight size={13} />
                  </div>
                </Link>
              </AnimatedSection>

              {/* Right Cards Carousel */}
              <div className="relative">
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {projects.slice(0, 4).map((project) => (
                    <motion.div
                      key={project.slug}
                      whileHover={{ y: -4 }}
                      className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/5"
                    >
                      <Link href={`/projects/${project.slug}`} className="block">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition duration-500 group-hover:scale-1.05"
                          />
                          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#111611] backdrop-blur-md">
                            {project.category}
                          </span>
                        </div>

                        <div className="p-4">
                          <h3 className="text-sm font-extrabold text-white">
                            {project.title}
                          </h3>
                          <p className="mt-1 line-clamp-1 text-[11px] text-white/50">
                            {project.description}
                          </p>
                          <p className="mt-2 text-[10px] font-bold text-[#8bd46f]">
                            {project.location}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Next Slide Arrow Button */}
                <button
                  onClick={nextSlide}
                  className="absolute -right-4 top-1/2 hidden -translate-y-1/2 grid-cols-1 place-items-center rounded-full bg-white p-3 text-[#111611] shadow-xl transition hover:scale-110 xl:grid"
                  aria-label="Next slide"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          INDIA PRESENCE INTERACTIVE MAP
      ======================================== */}
      <IndiaPresenceMap />

      {/* ========================================
          ABOUT + SUSTAINABILITY SECTION
      ======================================== */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1440px] gap-6 lg:grid-cols-2">

          {/* About Green Space Infra Card */}
          <AnimatedSection variants={slideLeft}>
            <div className="flex h-full flex-col justify-between rounded-[30px] border border-black/8 bg-[#f8faf7] p-8 sm:p-10 lg:p-11">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#43a324]">
                  About Green Space Infra
                </p>

                <h2 className="mt-4 font-[var(--font-playfair)] text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
                  Engineering Better Spaces. <br />
                  <span className="text-[#43a324]">Enriching Lives.</span>
                </h2>

                <p className="mt-4 text-xs leading-7 text-[#626c62] sm:text-sm">
                  We are a passion-driven team of professionals committed to delivering excellence in real estate, infrastructure and construction. Our approach combines quality, innovation and integrity to create spaces that truly matter.
                </p>

                <div className="mt-8 grid gap-4">
                  {[
                    {
                      icon: ShieldCheck,
                      title: "Quality Assurance",
                      desc: "Building with precision and care.",
                    },
                    {
                      icon: Leaf,
                      title: "Sustainable Practices",
                      desc: "Eco-friendly solutions for a better tomorrow.",
                    },
                    {
                      icon: Clock,
                      title: "Timely Delivery",
                      desc: "On-time project completion with accountability.",
                    },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex items-center gap-3.5">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#43a324] text-white">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-extrabold text-[#111611]">{title}</p>
                        <p className="text-[11px] text-[#687068]">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full bg-[#43a324] px-6 py-3.5 text-xs font-extrabold text-white shadow-[0_12px_30px_rgba(67,163,36,.25)] transition hover:bg-[#2f7f1d]"
                >
                  Know More About Us
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Sustainability Commitment Card */}
          <AnimatedSection variants={slideRight}>
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[30px] border border-black/8 bg-white p-8 sm:p-10 lg:p-11">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#43a324]">
                  Sustainability Commitment
                </p>

                <h2 className="mt-4 font-[var(--font-playfair)] text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
                  Building a Greener <br />
                  Tomorrow
                </h2>

                <p className="mt-4 text-xs leading-7 text-[#626c62] sm:text-sm">
                  We integrate sustainable design, resource efficiency and responsible construction to create a positive impact on communities and the environment.
                </p>

                <div className="mt-8 grid gap-3">
                  {[
                    "Green Building Design",
                    "Efficient Resource Use",
                    "Renewable Energy Integration",
                    "Community Well-being",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <div className="grid h-5 w-5 place-items-center rounded-full bg-[#eef8eb] text-[#43a324]">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-xs font-extrabold text-[#222622]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solar Eco-building visual */}
              <div className="relative mt-8 min-h-[220px] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=85"
                  alt="Sustainable Eco Building"
                  fill
                  className="object-cover"
                />

                {/* Floating badge */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2.5 rounded-full border border-white/40 bg-white/90 px-4 py-2.5 shadow-xl backdrop-blur-md">
                  <div className="grid h-7 w-7 place-items-center rounded-full bg-[#43a324] text-white">
                    <Leaf size={14} />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-extrabold leading-tight text-[#111611]">
                      Sustainable
                    </p>
                    <p className="text-[9px] font-medium leading-tight text-[#687068]">
                      by Design
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* ========================================
          BEFORE / AFTER TRANSFORMATION SLIDER
      ======================================== */}
      <BeforeAfterSlider />

      {/* ========================================
          BOTTOM CTA
      ======================================== */}
      <CTA />
    </>
  );
}