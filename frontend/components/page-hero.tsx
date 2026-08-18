"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import {
  ArrowRight,
  Award,
  Building,
  Building2,
  CheckCircle2,
  Heart,
  Landmark,
  Layers,
  Leaf,
  MapPinned,
  Newspaper,
  Recycle,
  ShieldCheck,
  Sparkles,
  Timer,
  Users,
  Zap,
} from "lucide-react";
import {
  AnimatedSection,
  AnimatedCounter,
  fadeUp,
  slideLeft,
  slideRight,
  motion,
} from "@/components/motion-primitives";

const iconMap: Record<string, typeof Sparkles> = {
  award: Award,
  building: Building,
  building2: Building2,
  check: CheckCircle2,
  heart: Heart,
  landmark: Landmark,
  layers: Layers,
  leaf: Leaf,
  map: MapPinned,
  newspaper: Newspaper,
  recycle: Recycle,
  shield: ShieldCheck,
  sparkles: Sparkles,
  timer: Timer,
  users: Users,
  zap: Zap,
};

export interface HeroStat {
  value: number;
  suffix?: string;
  label: string;
  icon?: string;
}

export interface FloatingBadge {
  icon?: string;
  title: string;
  subtitle?: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  highlightedTitle?: string;
  description: string;
  image: string;
  imageAlt?: string;
  floatingBadge?: FloatingBadge;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  stats?: HeroStat[];
  children?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  highlightedTitle,
  description,
  image,
  imageAlt = "Green Space Infra Architecture",
  floatingBadge,
  primaryAction,
  secondaryAction,
  stats,
  children,
}: PageHeroProps) {
  const BadgeIcon = (floatingBadge?.icon && iconMap[floatingBadge.icon]) || Sparkles;

  return (
    <section className="relative overflow-hidden bg-[#fafcf9] pt-[78px]">
      {/* Background Subtle Gradient & Ambient Orbs */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-[#43a324]/8 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 top-40 h-80 w-80 rounded-full bg-[#43a324]/5 blur-3xl" />

      <div className="mx-auto w-full max-w-[1600px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20 xl:px-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center xl:grid-cols-[0.95fr_1.05fr]">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="relative z-10 max-w-2xl">
            <AnimatedSection variants={fadeUp}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#43a324]/20 bg-[#eef8eb] px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#2f7f1d]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#43a324]" />
                {eyebrow}
              </div>
            </AnimatedSection>

            <AnimatedSection variants={slideLeft} delay={0.1}>
              <h1 className="mt-5 font-[var(--font-playfair)] text-[clamp(2.8rem,5.2vw,4.8rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[#111611]">
                {title}{" "}
                {highlightedTitle && (
                  <span className="text-[#43a324]">{highlightedTitle}</span>
                )}
              </h1>
            </AnimatedSection>

            <AnimatedSection variants={fadeUp} delay={0.2}>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[#626c62] sm:text-base sm:leading-8">
                {description}
              </p>
            </AnimatedSection>

            {/* ACTION BUTTONS (IF PROVIDED) */}
            {(primaryAction || secondaryAction) && (
              <AnimatedSection variants={fadeUp} delay={0.3}>
                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  {primaryAction && (
                    <Link
                      href={primaryAction.href}
                      className="inline-flex items-center gap-2 rounded-full bg-[#43a324] px-6 py-3.5 text-xs font-extrabold tracking-wide text-white shadow-[0_14px_35px_rgba(67,163,36,.28)] transition hover:-translate-y-0.5 hover:bg-[#2f7f1d]"
                    >
                      {primaryAction.label}
                      <ArrowRight size={16} />
                    </Link>
                  )}
                  {secondaryAction && (
                    <Link
                      href={secondaryAction.href}
                      className="inline-flex items-center gap-2 rounded-full border border-black/12 bg-white px-6 py-3.5 text-xs font-extrabold tracking-wide text-[#222622] transition hover:border-[#43a324] hover:text-[#2f7f1d]"
                    >
                      {secondaryAction.label}
                    </Link>
                  )}
                </div>
              </AnimatedSection>
            )}

            {children}
          </div>

          {/* RIGHT VISUAL HERO IMAGE & FLOATING CARD */}
          <AnimatedSection variants={slideRight} delay={0.15}>
            <div className="relative">
              {/* Outer Decorative Border Ring */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] border border-black/8 bg-white p-2 shadow-[0_24px_70px_rgba(20,32,18,.12)] sm:aspect-[16/11]">
                <div className="relative h-full w-full overflow-hidden rounded-[24px]">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-700 hover:scale-1.04"
                  />
                  {/* Subtle Gradient Inset */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111711]/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* FLOATING GLASS BADGE */}
              {floatingBadge && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-6 right-6 max-w-xs rounded-2xl border border-white/40 bg-white/90 p-4 shadow-[0_20px_50px_rgba(20,32,18,.15)] backdrop-blur-xl sm:-bottom-8 sm:right-10"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#43a324] text-white shadow-md">
                      <BadgeIcon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-[#111611]">
                        {floatingBadge.title}
                      </p>
                      {floatingBadge.subtitle && (
                        <p className="mt-0.5 text-[11px] font-medium text-[#687068]">
                          {floatingBadge.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </AnimatedSection>

        </div>

        {/* BOTTOM FLOATING STATS BAR (IF PROVIDED) */}
        {stats && stats.length > 0 && (
          <AnimatedSection variants={fadeUp} delay={0.35}>
            <div className="relative z-20 mt-14 rounded-[24px] border border-black/6 bg-white p-4 shadow-[0_20px_60px_rgba(20,32,18,.09)] sm:p-5">
              <div className="grid grid-cols-2 divide-x divide-y divide-black/8 sm:divide-y-0 lg:grid-cols-4">
                {stats.map((st) => {
                  const Icon = (st.icon && iconMap[st.icon]) || Sparkles;
                  return (
                    <div key={st.label} className="flex items-center gap-3.5 px-4 py-4 sm:px-6">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#f0f8ed] text-[#43a324]">
                        <Icon size={20} />
                      </div>
                      <div>
                        <strong className="block text-xl font-extrabold text-[#111611] sm:text-2xl">
                          <AnimatedCounter to={st.value} suffix={st.suffix} />
                        </strong>
                        <span className="mt-0.5 block text-[11px] font-medium text-[#687068] sm:text-xs">
                          {st.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        )}

      </div>
    </section>
  );
}