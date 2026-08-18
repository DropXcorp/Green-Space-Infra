import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight, Newspaper, Sparkles } from "lucide-react";
import PageHero from "@/components/page-hero";
import CTA from "@/components/cta";
import {
  AnimatedSection,
  StaggerGroup,
  MotionItem,
  fadeUp,
  scaleIn,
} from "@/components/motion-primitives";
import { newsItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Insights & News",
  description:
    "Project updates, company announcements, events and insights from Green Space Infra.",
};

export default function NewsEventsPage() {
  return (
    <>
      <PageHero
        eyebrow="INSIGHTS & PERSPECTIVES"
        title="Industry Perspectives &"
        highlightedTitle="Company Milestones."
        description="Stay updated with our latest project handovers, groundbreaking ceremonies, green construction breakthroughs, and corporate announcements."
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=88"
        imageAlt="Green Space Infra News & Editorial"
        floatingBadge={{
          icon: "newspaper",
          title: "Official Corporate Releases",
          subtitle: "Verified Updates & Case Studies",
        }}
        primaryAction={{
          label: "Browse Latest Updates",
          href: "#articles-grid",
        }}
        secondaryAction={{
          label: "Press & Media Inquiries",
          href: "/contact",
        }}
      />

      <section id="articles-grid" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px]">
          <StaggerGroup className="grid gap-8">
            {newsItems.map((item, index) => (
              <MotionItem key={item.id} variants={scaleIn}>
                <article className="grid overflow-hidden rounded-[28px] border border-black/8 bg-white shadow-[0_16px_50px_rgba(20,32,18,.05)] lg:grid-cols-[.9fr_1.1fr]">
                  <div
                    className={`relative min-h-[300px] lg:min-h-[420px] ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-500 hover:scale-1.03"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#687068]">
                      <span className="rounded-full bg-[#eef8eb] px-3.5 py-1.5 font-extrabold text-[#43a324]">
                        {item.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays size={15} /> {item.date}
                      </span>
                    </div>
                    <h2 className="mt-5 font-[var(--font-playfair)] text-2xl font-semibold leading-tight text-[#111611] md:text-3xl lg:text-4xl">
                      {item.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-[#687068]">
                      {item.excerpt}
                    </p>
                  </div>
                </article>
              </MotionItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
      
      <CTA />
    </>
  );
}