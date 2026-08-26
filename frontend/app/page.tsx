"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  ClipboardList,
  DraftingCompass,
  HardHat,
  Leaf,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";

import {
  AnimatedSection,
  MotionItem,
  StaggerGroup,
  slideLeft,
  slideRight,
} from "@/components/motion-primitives";
import { newsItems, projects } from "@/lib/site-data";

const heroImages = [
  { title: "Green Space Infra headquarters", image: "/images/hero-building-v2.png" },
  { title: "A modern Green Space residence", image: projects[0].image },
  { title: "A future-ready Green Space business park", image: projects[1].image },
];

const principles = [
  { icon: Leaf, title: "Sustainable Design", text: "Eco-conscious solutions for a better tomorrow." },
  { icon: Building2, title: "Quality Construction", text: "Built with precision, delivered with quality." },
  { icon: Users, title: "Client Focused", text: "Your vision, our mission. Strong relationships." },
  { icon: ShieldCheck, title: "Future Ready", text: "Innovative spaces for a changing world." },
];

const process = [
  { icon: ClipboardList, number: "01", title: "Plan", text: "Understanding your vision and requirements." },
  { icon: DraftingCompass, number: "02", title: "Design", text: "Crafting smart, functional and sustainable designs." },
  { icon: HardHat, number: "03", title: "Build", text: "Executing with precision and quality." },
  { icon: CheckCircle2, number: "04", title: "Deliver", text: "Delivering excellence on time, every time." },
];

const projectFallbacks = [
  { category: "Residential", title: "Green Villas", location: "Hyderabad" },
  { category: "Commercial", title: "Vertex Business Park", location: "Hyderabad" },
  { category: "Mixed Use", title: "Green City Centre", location: "Hyderabad" },
];

function OutlineButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-8 rounded-full border border-[#58ad31] px-5 py-2.5 text-xs font-bold text-[#182018] transition hover:bg-[#4c9f26] hover:text-white sm:text-sm">
      {children}
      <ArrowRight size={18} className="text-[#4c9f26] transition group-hover:translate-x-1 group-hover:text-white" />
    </Link>
  );
}

export default function HomePage() {
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  const [projectIndex, setProjectIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setHeroImageIndex((index) => (index + 1) % heroImages.length),
      5500,
    );
    return () => window.clearInterval(timer);
  }, []);

  const visibleProjects = useMemo(
    () => Array.from({ length: 3 }, (_, index) => projects[(projectIndex + index) % projects.length]),
    [projectIndex],
  );

  return (
    <>
      <section className="relative mt-[78px] min-h-[690px] overflow-hidden bg-white lg:h-[720px]">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={heroImageIndex}
            initial={{ opacity: 0, scale: 1.035 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image src={heroImages[heroImageIndex].image} alt={heroImages[heroImageIndex].title} fill priority sizes="100vw" className="object-cover object-[58%_center]" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,.98)_25%,rgba(255,255,255,.67)_39%,rgba(255,255,255,.1)_59%,rgba(255,255,255,0)_72%)]" />
        <div className="absolute inset-0 bg-white/35 sm:bg-white/15 lg:bg-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white/75 to-transparent" />

        <div className="relative z-10 mx-auto flex h-full min-h-[690px] max-w-[1440px] items-center px-5 pb-16 sm:px-8 lg:px-12">
          <div className="max-w-[520px]">
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="text-xs font-bold uppercase tracking-wide text-[#469c23] sm:text-sm">Shaping sustainable futures</motion.p>
            <div className="mt-4 h-px w-9 bg-[#5bad35]" />
            <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.65 }} className="mt-6 font-[var(--font-playfair)] text-[clamp(2.35rem,4.15vw,4.15rem)] font-semibold leading-[1.08] tracking-[-.045em] text-black">
              Designing Spaces.<br /><span className="text-[#54ad29]">Building Trust.</span><br />Creating Impact.
            </motion.h1>
            <div className="mt-6 h-px w-9 bg-[#5bad35]" />
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-4 max-w-[350px] text-sm leading-7 text-[#303330] sm:text-base">End-to-end construction and infrastructure solutions that stand the test of time.</motion.p>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-7"><OutlineButton href="/projects">Explore Our Projects</OutlineButton></motion.div>
          </div>

          <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 gap-3 lg:grid xl:right-10">
            {heroImages.map((item, index) => (
              <button key={item.title} onClick={() => setHeroImageIndex(index)} aria-label={`Show ${item.title}`} className={`relative h-[105px] w-[125px] overflow-hidden rounded-[18px] border-2 bg-white p-1 shadow-lg transition hover:-translate-x-1 ${heroImageIndex === index ? "border-[#58ad31]" : "border-white"}`}>
                <Image src={item.image} alt="" fill sizes="125px" className="rounded-[14px] object-cover p-1" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-16 px-5 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1320px] overflow-hidden rounded-[20px] border border-black/10 bg-white/95 shadow-[0_18px_45px_rgba(27,42,23,.09)] backdrop-blur md:grid-cols-2 lg:grid-cols-4">
          {principles.map(({ icon: Icon, title, text }, index) => (
            <motion.div key={title} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35 + index * .08, duration: .5 }} className={`px-8 py-7 ${index ? "border-t border-black/10 md:border-l md:border-t-0" : ""} ${index === 2 ? "md:border-t lg:border-t-0" : ""}`}>
              <Icon size={31} strokeWidth={1.6} className="text-[#4da328]" />
              <h2 className="mt-4 font-[var(--font-sans)] text-sm font-bold tracking-normal">{title}</h2>
              <p className="mt-2 max-w-[180px] text-xs leading-5 text-[#626862]">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-5 pb-14 pt-16 sm:px-8 lg:px-12 lg:pb-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-3 flex justify-end gap-3">
            <button onClick={() => setProjectIndex((value) => (value - 1 + projects.length) % projects.length)} aria-label="Previous projects" className="grid h-10 w-10 place-items-center rounded-full border border-black/20 transition hover:border-[#4da328] hover:text-[#4da328]"><ArrowLeft size={17} /></button>
            <button onClick={() => setProjectIndex((value) => (value + 1) % projects.length)} aria-label="Next projects" className="grid h-10 w-10 place-items-center rounded-full border border-black/20 transition hover:border-[#4da328] hover:text-[#4da328]"><ArrowRight size={17} /></button>
          </div>
          <div className="grid gap-8 lg:grid-cols-[260px_1fr] lg:items-end">
            <AnimatedSection variants={slideLeft}>
              <p className="text-[11px] font-bold uppercase tracking-wide text-[#4a9f27]">Our Projects</p>
              <h2 className="mt-3 font-[var(--font-playfair)] text-4xl font-semibold leading-[1.05]">Spaces Built<br />with <span className="text-[#54ad29]">Purpose.</span></h2>
              <div className="mt-5 h-px w-8 bg-[#57ab32]" />
              <p className="mt-4 max-w-[210px] text-xs leading-6 text-[#565d56]">From residential landmarks to commercial hubs, we build structures that stand the test of time.</p>
              <div className="mt-8"><OutlineButton href="/projects">View All Projects</OutlineButton></div>
            </AnimatedSection>

            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div key={projectIndex} initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -28 }} transition={{ duration: 0.4 }} className="grid gap-5 md:grid-cols-3">
                {visibleProjects.map((project, index) => {
                  const copy = projectFallbacks[index];
                  return (
                    <Link key={project.slug} href={`/projects/${project.slug}`} className="group block">
                      <div className="relative aspect-[1.35] overflow-hidden rounded-[15px] bg-[#eef3ec]">
                        <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 30vw" className="object-cover transition duration-700 group-hover:scale-105" />
                      </div>
                      <p className="mt-3 text-[11px] font-bold text-[#4da328]">{copy?.category ?? project.category}</p>
                      <h3 className="mt-1 font-[var(--font-sans)] text-base font-bold tracking-normal group-hover:text-[#4da328]">{copy?.title ?? project.title}</h3>
                      <p className="mt-2 flex items-center gap-2 text-[11px] text-[#757b75]"><MapPin size={13} className="fill-[#55ad2e] text-[#55ad2e]" />{copy?.location ?? project.location}</p>
                    </Link>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <AnimatedSection className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-wide text-[#4a9f27]">Our Process</p>
            <h2 className="mt-1 font-[var(--font-playfair)] text-3xl font-semibold">From Concept to <span className="text-[#54ad29]">Creation.</span></h2>
          </AnimatedSection>
          <StaggerGroup className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(({ icon: Icon, number, title, text }, index) => (
              <MotionItem key={number} className="relative flex items-start gap-4">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[#f2f5eb] text-[#526627]"><Icon size={27} strokeWidth={1.5} /></div>
                <div className="pt-1"><p className="text-xs font-extrabold text-[#4aa025]">{number}</p><h3 className="font-[var(--font-sans)] text-sm font-extrabold tracking-normal">{title}</h3><p className="mt-1 text-[10px] leading-4 text-[#505650]">{text}</p></div>
                {index < process.length - 1 && <ArrowRight className="absolute -right-3 top-6 hidden text-[#70aa4c] lg:block" size={18} />}
              </MotionItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="overflow-hidden px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
          <AnimatedSection variants={slideLeft}>
            <div className="relative aspect-[1.9] min-h-[300px] overflow-hidden rounded-[10px]">
              <Image src="https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1600&q=88" alt="Green Space Infra engineer reviewing construction plans" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#253319]/20 to-transparent" />
            </div>
          </AnimatedSection>
          <AnimatedSection variants={slideRight} className="relative">
            <Leaf className="absolute -right-4 -top-12 hidden h-40 w-40 rotate-12 text-[#8fcf70]/35 lg:block" strokeWidth={0.7} />
            <p className="text-[11px] font-bold uppercase tracking-wide text-[#4a9f27]">Why Choose Us</p>
            <h2 className="mt-3 font-[var(--font-playfair)] text-4xl font-semibold leading-[1.05]">Building Trust.<br />Delivering <span className="text-[#54ad29]">Excellence.</span></h2>
            <p className="mt-4 max-w-[560px] text-xs leading-5 text-[#5a615a]">With a commitment to quality, transparency and innovation, we transform ideas into impactful realities.</p>
            <div className="mt-5 grid gap-3">
              {["Experienced professionals and expert team", "Transparent communication and processes", "On-time delivery with uncompromised quality", "Innovative solutions with a sustainable approach"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-xs text-[#414741]"><span className="grid h-4 w-4 place-items-center rounded-full bg-[#51aa29] text-white"><Check size={10} strokeWidth={3} /></span>{item}</div>
              ))}
            </div>
            <div className="mt-7"><OutlineButton href="/about">Know More About Us</OutlineButton></div>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-y border-black/8 px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center">
            <AnimatedSection className="lg:w-[235px] lg:shrink-0">
              <p className="text-[10px] font-bold uppercase tracking-wide text-[#4a9f27]">News &amp; Events</p>
              <h2 className="mt-2 font-[var(--font-playfair)] text-3xl font-semibold">Latest Updates</h2>
              <div className="mt-3 h-px w-8 bg-[#57ab32]" />
            </AnimatedSection>
            <StaggerGroup className="grid flex-1 gap-6 md:grid-cols-3">
              {newsItems.map((item) => (
                <MotionItem key={item.id}>
                  <article className="grid grid-cols-[96px_1fr] gap-4">
                    <div className="relative h-[86px] overflow-hidden rounded-[10px]"><Image src={item.image} alt="" fill sizes="96px" className="object-cover" /></div>
                    <div><h3 className="line-clamp-2 font-[var(--font-sans)] text-xs font-bold leading-4 tracking-normal">{item.title}</h3><p className="mt-1 text-[10px] font-semibold text-[#55a92f]">{item.date}</p><Link href="#" className="mt-3 inline-flex items-center gap-2 text-[10px] font-semibold hover:text-[#4da328]">Read More <ArrowRight size={12} /></Link></div>
                  </article>
                </MotionItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>
    </>
  );
}
