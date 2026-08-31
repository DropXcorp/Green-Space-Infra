"use client";
import Image from "next/image";
import Link from "next/link";
import { type ElementType, useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  ClipboardList,
  HardHat,
  Leaf,
  MapPin,
  ShieldCheck,
  Users,
  HeartHandshake,
} from "lucide-react";
import { projects, expertise } from "@/lib/site-data";
import homePageBuilding from "../public/images/buildings/homepage.png";

const heroImages = [
  {
    title: "Green Space Infra headquarters",
    image: "/images/buildings/hero/hero1.png",
  },
  {
    title: "Green Space Infra residential development",
    image: "/images/buildings/hero/hero2.png",
  },
  {
    title: "Green Space Infra project",
    image: "/images/buildings/hero/hero3.png",
  },
];
const process: [ElementType, string, string, string][] = [
  [
    ClipboardList,
    "01",
    "Understand",
    "Understanding requirements, site conditions and project objectives.",
  ],
  [
    HardHat,
    "02",
    "Plan",
    "Coordinating design, resources, cost and execution requirements.",
  ],
  [
    HardHat,
    "03",
    "Build",
    "Executing through structured construction and quality management.",
  ],
  [
    Check,
    "04",
    "Deliver",
    "Completing requirements through professional project coordination.",
  ],
];
const stats: [ElementType, string, string][] = [
  [HeartHandshake, "2012", "Established"],
  [Users, "75 Years", "Combined Team Experience"],
  [ShieldCheck, "4", "Core Competencies"],
  [MapPin, "Hyderabad", "Corporate Presence"],
];
function GreenButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-3 rounded-full bg-[#43a324] px-6 py-3 text-xs font-bold text-white transition hover:bg-[#32861f]"
    >
      {children}
      <ArrowRight size={15} />
    </Link>
  );
}
function HeroCarousel() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((value) => (value + 1) % heroImages.length),
      5000,
    );
    return () => window.clearInterval(timer);
  }, []);
  const image = heroImages[active];
  return (
    <section className="relative mt-[78px] min-h-[690px] overflow-hidden bg-white lg:h-[720px]">
      <Image
        key={image.image}
        src={image.image}
        alt={image.title}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[58%_center] transition-opacity duration-700"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,.98)_25%,rgba(255,255,255,.67)_39%,rgba(255,255,255,.1)_59%,rgba(255,255,255,0)_72%)]" />
      <div className="relative z-10 mx-auto flex h-full min-h-[690px] max-w-[1440px] items-center px-5 pb-16 sm:px-8 lg:px-12">
        <div className="max-w-[520px]">
          <p className="text-xs font-bold uppercase tracking-wide text-[#469c23]">
            Shaping sustainable futures
          </p>
          <div className="mt-4 h-px w-9 bg-[#5bad35]" />
          <h1 className="mt-6 text-[clamp(2.35rem,4.15vw,4.15rem)] font-semibold leading-[1.08] text-black">
            Designing Spaces.
            <br />
            <span className="text-[#54ad29]">Building Trust.</span>
            <br />
            Creating Impact.
          </h1>
          <div className="mt-6 h-px w-9 bg-[#5bad35]" />
          <p className="mt-4 max-w-[350px] text-sm leading-7 text-[#303330] sm:text-base">
            End-to-end construction and infrastructure solutions that stand the
            test of time.
          </p>
          <div className="mt-7">
            <GreenButton href="/projects">Explore Our Projects</GreenButton>
          </div>
        </div>
        <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 gap-3 lg:grid xl:right-10">
          {heroImages.map((item, index) => (
            <button
              type="button"
              onClick={() => setActive(index)}
              key={item.title}
              aria-label={`Show ${item.title}`}
              className={`relative h-[105px] w-[125px] overflow-hidden rounded-[18px] border-2 bg-white p-1 shadow-lg transition hover:-translate-x-1 ${active === index ? "border-[#58ad31]" : "border-white"}`}
            >
              <Image
                src={item.image}
                alt=""
                fill
                sizes="125px"
                className="rounded-[14px] object-cover p-1"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <section className="mx-auto grid max-w-[1280px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12">
        <div>
          <p className="text-[10px] font-bold tracking-[.14em] text-[#43a324]">
            ABOUT GREEN SPACE INFRA
          </p>
          <h2 className="mt-4 text-4xl leading-tight">
            Building with purpose
            <br />
            <span className="text-[#43a324]">since 2012.</span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#626c62]">
            Incorporated in 2012, Green Space Infra is focused on thoughtfully
            planned real-estate development, construction and property
            management.
          </p>
          <p className="mt-2 max-w-md text-sm leading-7 text-[#626c62]">
            Our approach brings together professional execution, responsible
            management and long-term value creation.
          </p>
          <div className="mt-6">
            <GreenButton href="/about">Our Story</GreenButton>
          </div>
        </div>
        <div className="relative aspect-[2/3] w-full max-w-[350px] justify-self-center overflow-hidden rounded-xl lg:justify-self-end">
          <Image
            src={homePageBuilding}
            alt="Green Space residential development"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-white p-6 shadow-xl">
            <span className="block text-xs">Since</span>
            <strong className="text-4xl text-[#43a324]">2012</strong>
          </div>
        </div>
      </section>
      <section className="bg-[#f6f8f5] px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1280px] divide-y divide-black/10 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {stats.map(([Icon, n, t]) => (
            <div className="py-5 text-center" key={n}>
              <Icon className="mx-auto text-[#526b28]" size={24} />
              <strong className="mt-3 block text-lg">{n}</strong>
              <span className="text-xs text-[#555d55]">{t}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-[10px] font-bold tracking-[.14em] text-[#43a324]">
            OUR EXPERTISE
          </p>
          <h2 className="mt-3 text-3xl">
            Expertise Across{" "}
            <span className="text-[#43a324]">Every Stage of Development.</span>
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {expertise.map((item) => (
            <article
              key={item.number}
              className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm"
            >
              <div className="relative aspect-[1.65]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <span className="grid h-9 w-9 -mt-10 relative place-items-center rounded-full bg-[#43a324] text-white">
                  {item.number}
                </span>
                <h3 className="mt-4 text-lg leading-tight">{item.title}</h3>
                <p className="mt-3 text-xs leading-5 text-[#626c62]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-7 text-center">
          <GreenButton href="/expertise">Explore Our Expertise</GreenButton>
        </div>
      </section>
      <section className="mx-auto max-w-[1280px] px-5 pb-16 sm:px-8 lg:px-12">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] font-bold tracking-[.14em] text-[#43a324]">
              OUR PROJECTS
            </p>
            <h2 className="mt-2 text-3xl">
              Spaces Built with <span className="text-[#43a324]">Purpose.</span>
            </h2>
          </div>
          <Link href="/projects" className="text-xs font-bold text-[#43a324]">
            View All Projects →
          </Link>
        </div>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {projects
            .filter(({ slug }) =>
              ["green-space-elite", "green-space-lotus", "green-space-jewel"].includes(slug),
            )
            .map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project.slug}
              className="overflow-hidden rounded-lg border border-black/10"
            >
              <div className="relative aspect-[1.5]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base">{project.title}</h3>
                <p className="mt-1 text-xs text-[#626c62]">
                  Residential Development
                </p>
                <p className="mt-3 flex items-center gap-1 text-xs text-[#43a324]">
                  <MapPin size={12} fill="currentColor" /> Hyderabad
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="bg-[#f6f8f5] px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center">
            <p className="text-[10px] font-bold tracking-[.14em] text-[#43a324]">
              OUR PROCESS
            </p>
            <h2 className="mt-2 text-3xl">
              From Concept to <span className="text-[#43a324]">Creation.</span>
            </h2>
          </div>
          <div className="mt-9 grid gap-6 md:grid-cols-4">
            {process.map(([Icon, n, t, d]) => (
              <div key={n} className="flex gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-[#526b28]">
                  <Icon size={20} />
                </span>
                <div>
                  <span className="text-xs font-bold text-[#43a324]">{n}</span>
                  <h3 className="text-sm font-bold">{t}</h3>
                  <p className="mt-1 text-xs leading-5 text-[#626c62]">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1280px] overflow-hidden lg:grid-cols-[1.08fr_.82fr_1fr]">
          <div className="bg-white p-7 lg:p-9">
            <p className="text-[10px] font-bold tracking-[.14em] text-[#43a324]">
              WHY GREEN SPACE INFRA
            </p>
            <h2 className="mt-3 text-3xl leading-tight">
              Building Trust.
              <br />
              Delivering <span className="text-[#43a324]">Excellence.</span>
            </h2>
            <div className="mt-7 grid gap-4">
              {[
                "Integrated expertise across development, construction and property management.",
                "Experienced team with deep construction domain knowledge.",
                "Structured focus on quality, cost, safety and timely delivery.",
                "Clear communication and long-term relationships.",
              ].map((x) => (
                <p
                  className="flex gap-3 text-xs leading-5 text-[#626c62]"
                  key={x}
                >
                  <Check className="mt-0.5 shrink-0 text-[#43a324]" size={16} />
                  {x}
                </p>
              ))}
            </div>
          </div>
          <div className="relative min-h-[360px]">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1100&q=88"
              alt="Engineers at a construction site"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="bg-[#edf5e9] p-7 lg:p-9">
            <p className="text-[10px] font-bold tracking-[.14em] text-[#43a324]">
              RESPONSIBLE DEVELOPMENT
            </p>
            <h2 className="mt-3 text-3xl leading-tight">
              Building Today
              <br />
              with <span className="text-[#43a324]">Tomorrow in Mind.</span>
            </h2>
            <div className="mt-7 grid gap-5">
              {[
                [
                  "Responsible Planning",
                  "Environmental and site considerations from the planning stage.",
                ],
                [
                  "Resource Awareness",
                  "Thoughtful use of construction resources and materials.",
                ],
                [
                  "Long-Term Value",
                  "Developments designed around durability, usability and lasting value.",
                ],
              ].map(([t, d]) => (
                <div className="grid grid-cols-[42px_1fr] gap-3" key={t}>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#526b28]">
                    <Leaf size={17} />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold">{t}</h3>
                    <p className="mt-1 text-xs leading-5 text-[#626c62]">{d}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              className="mt-7 inline-block text-xs font-bold text-[#43a324]"
              href="/sustainability"
            >
              Our Sustainability Approach &nbsp; →
            </Link>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-[#171817] px-5 py-16 text-center text-white sm:px-8 lg:px-12">
        <Image
          src="/images/hero-building-v2.png"
          alt=""
          fill
          className="object-cover opacity-20"
        />
        <div className="relative">
          <p className="text-[10px] font-bold tracking-[.14em] text-[#8bd46f]">
            START A CONVERSATION
          </p>
          <h2 className="mt-3 text-4xl">
            Have a project in mind?
            <br />
            Let&apos;s build it{" "}
            <span className="text-[#71c957]">together.</span>
          </h2>
          <div className="mt-7 flex justify-center gap-3">
            <GreenButton href="/contact">Let&apos;s Build Green</GreenButton>
            <Link
              className="rounded-full border border-white/60 px-6 py-3 text-xs font-bold"
              href="/contact"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
