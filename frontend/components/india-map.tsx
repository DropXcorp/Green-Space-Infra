"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Building2,
  Layers,
  Award,
  Users,
  ShieldCheck,
  ArrowRight,
  Crosshair,
  Plus,
  Minus,
  CheckCircle2,
  Construction,
} from "lucide-react";
import { AnimatedSection, fadeUp, slideLeft, slideRight } from "@/components/motion-primitives";

const expertise = [
  "Residential Communities",
  "Commercial Developments",
  "Infrastructure Excellence",
  "Premium Villa Projects",
];

const sideLabels = [
  { name: "Sangareddy", top: "28%", left: "14%" },
  { name: "Medchal", top: "16%", left: "48%" },
  { name: "Keesara", top: "33%", left: "74%" },
  { name: "Shamshabad", top: "64%", left: "20%" },
  { name: "Ranga Reddy", top: "76%", left: "44%" },
  { name: "Chevella", top: "72%", left: "8%" },
  { name: "NH 44", top: "19%", left: "24%", small: true },
  { name: "NH 65", top: "42%", left: "82%", small: true },
  { name: "ORR", top: "63%", left: "70%", small: true },
];

export default function IndiaPresenceMap() {
  const [zoomLevel, setZoomLevel] = useState(1);

  return (
    <section className="relative overflow-hidden bg-[#070a07] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-[#43a324]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-[#43a324]/5 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[280px] w-[280px] rounded-full bg-[#43a324]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <AnimatedSection variants={fadeUp} className="mx-auto mb-12 max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#43a324]/30 bg-[#43a324]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#79cc5b]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#79cc5b]" />
            OUR PRESENCE
          </div>

          <h2 className="font-[var(--font-playfair)] text-4xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            Focused Growth. Lasting{" "}
            <span className="text-[#43a324]">Impact.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-8 text-white/65 sm:text-base">
            Delivering world-class real estate and infrastructure projects with
            precision, dedication, and a deep understanding of local needs.
          </p>
        </AnimatedSection>

        {/* Main 2-Column Grid */}
        <div className="grid gap-7 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          
          {/* ========================================
              LEFT: MAP CONTAINER
          ======================================== */}
          <AnimatedSection variants={slideLeft}>
            <div className="group relative flex h-full min-h-[560px] flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(16,22,16,0.94),rgba(8,12,9,0.98))] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl">
              
              {/* Top Location Badge */}
              <div className="relative z-10 inline-flex items-center gap-2 self-start rounded-full border border-white/12 bg-black/40 px-4 py-2 text-xs font-bold text-white/90 backdrop-blur-md">
                <MapPin size={15} className="text-[#72df49]" />
                <span>TELANGANA, INDIA</span>
              </div>

              {/* Map Canvas with SVG Radar / Spiderweb Topology */}
              <div className="relative my-auto flex h-[380px] w-full items-center justify-center overflow-hidden sm:h-[440px]">
                
                <motion.div
                  animate={{ scale: zoomLevel }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full w-full"
                >
                  {/* SVG Topology & Boundary Graphic */}
                  <svg
                    viewBox="0 0 700 700"
                    className="absolute inset-0 h-full w-full opacity-90"
                    fill="none"
                  >
                    {/* Concentric Radar Grid Rings */}
                    <g opacity="0.2">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <circle
                          key={i}
                          cx="350"
                          cy="350"
                          r={60 + i * 36}
                          stroke="#6ee34a"
                          strokeWidth="1"
                          strokeDasharray="4 4"
                        />
                      ))}
                      {Array.from({ length: 12 }).map((_, i) => {
                        const angle = (i / 12) * Math.PI * 2;
                        const x = 350 + Math.cos(angle) * 300;
                        const y = 350 + Math.sin(angle) * 300;
                        return (
                          <line
                            key={i}
                            x1="350"
                            y1="350"
                            x2={x}
                            y2={y}
                            stroke="#6ee34a"
                            strokeWidth="1"
                          />
                        );
                      })}
                    </g>

                    {/* Telangana / Hyderabad Metropolitan Outer Boundary Shape */}
                    <path
                      d="M361 89 L413 105 L465 92 L504 128 L535 163 L558 214 L591 260 L594 313 L580 365 L594 417 L569 457 L543 495 L497 527 L479 585 L434 611 L404 644 L349 650 L315 618 L276 611 L241 560 L201 548 L177 515 L186 465 L165 430 L118 387 L102 338 L118 290 L154 258 L181 228 L177 183 L226 167 L245 129 L292 128 L318 92 Z"
                      stroke="#72df49"
                      strokeWidth="2.5"
                      strokeDasharray="6 3"
                      fill="rgba(67, 163, 36, 0.1)"
                      className="filter drop-shadow-[0_0_15px_rgba(114,223,73,0.6)]"
                    />

                    {/* Urban Density Texture Points */}
                    <g opacity="0.45">
                      {Array.from({ length: 90 }).map((_, i) => {
                        const x = 180 + ((i * 43) % 340);
                        const y = 170 + ((i * 67) % 360);
                        return (
                          <circle
                            key={i}
                            cx={x}
                            cy={y}
                            r="1.8"
                            fill="#7df14f"
                            opacity="0.4"
                          />
                        );
                      })}
                    </g>
                  </svg>

                  {/* CENTRAL HYDERABAD PIN (PULSING RADAR RINGS) */}
                  <div className="absolute left-[50%] top-[50%] z-20 -translate-x-1/2 -translate-y-1/2">
                    <span className="absolute -inset-6 rounded-full bg-[#72df49]/25 animate-ping" />
                    <span className="absolute -inset-10 rounded-full bg-[#72df49]/15 animate-pulse" />

                    <div className="relative flex items-center gap-2.5 rounded-2xl border border-white/60 bg-[#43a324] px-4 py-2 shadow-[0_0_35px_rgba(103,216,60,0.6)]">
                      <div className="grid h-7 w-7 place-items-center rounded-full bg-white text-[#43a324] shadow-md">
                        <MapPin size={15} strokeWidth={2.5} />
                      </div>
                      <span className="text-sm font-extrabold tracking-tight text-white">
                        Hyderabad
                      </span>
                    </div>
                  </div>

                  {/* Surrounding Node Labels */}
                  {sideLabels.map((item) => (
                    <div
                      key={item.name}
                      className="absolute z-20"
                      style={{ top: item.top, left: item.left }}
                    >
                      <div
                        className={`inline-flex items-center gap-1.5 rounded-full border ${
                          item.small
                            ? "border-[#79e24f]/30 bg-black/80 px-2 py-0.5 text-[9px] font-extrabold tracking-wider text-[#8bd46f]"
                            : "border-white/15 bg-black/75 px-3 py-1 text-[11px] font-bold text-white/90"
                        } shadow-md backdrop-blur-md transition hover:bg-[#43a324] hover:text-white`}
                      >
                        {!item.small && (
                          <span className="h-1.5 w-1.5 rounded-full bg-white" />
                        )}
                        <span>{item.name}</span>
                      </div>
                    </div>
                  ))}

                </motion.div>
              </div>

              {/* Bottom Left CTA & Zoom Controls */}
              <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-4">
                <div className="flex items-center gap-3 rounded-2xl bg-black/40 px-4 py-2.5 backdrop-blur-md">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#67d83c]/15 text-[#7ced52]">
                    <Crosshair size={20} className="animate-pulse" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">View Larger Map</p>
                    <p className="text-[10px] text-white/55">Explore Hyderabad region</p>
                  </div>
                </div>

                {/* Zoom Controls */}
                <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-black/50 p-1 backdrop-blur-md">
                  <button
                    onClick={() => setZoomLevel((prev) => Math.min(prev + 0.15, 1.35))}
                    className="grid h-8 w-8 place-items-center rounded-lg text-white transition hover:bg-white/15"
                    aria-label="Zoom In"
                  >
                    <Plus size={16} />
                  </button>
                  <button
                    onClick={() => setZoomLevel((prev) => Math.max(prev - 0.15, 0.85))}
                    className="grid h-8 w-8 place-items-center rounded-lg text-white transition hover:bg-white/15"
                    aria-label="Zoom Out"
                  >
                    <Minus size={16} />
                  </button>
                </div>
              </div>

            </div>
          </AnimatedSection>

          {/* ========================================
              RIGHT: FOCUS CITY DETAILS CARD
          ======================================== */}
          <AnimatedSection variants={slideRight}>
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,19,14,0.96),rgba(8,11,8,0.98))] p-7 shadow-[0_20px_80px_rgba(0,0,0,0.5)] sm:p-9">
              <div>
                
                {/* Top Badge */}
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#67d83c]/30 bg-[#67d83c]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wide text-[#7ced52]">
                  <Building2 size={14} />
                  <span>Our Focus City</span>
                </div>

                {/* City Heading */}
                <h3 className="font-[var(--font-playfair)] text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl">
                  Hyderabad
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  The city of opportunity and growth
                </p>

                {/* Dual Stat Boxes */}
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5">
                    <div className="flex items-start gap-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#67d83c]/15 text-[#78eb52]">
                        <Construction size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] font-extrabold uppercase tracking-wider text-white/45">
                          Projects
                        </p>
                        <p className="mt-1 text-3xl font-bold leading-none text-white">
                          110+
                        </p>
                        <p className="mt-2 text-xs text-white/60">
                          Completed & Ongoing
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5">
                    <div className="flex items-start gap-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#67d83c]/15 text-[#78eb52]">
                        <Layers size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] font-extrabold uppercase tracking-wider text-white/45">
                          Developed Area
                        </p>
                        <p className="mt-1 text-3xl font-bold leading-none text-white">
                          5.8M+ <span className="text-xs font-medium text-white/70">Sq. Ft.</span>
                        </p>
                        <p className="mt-2 text-xs text-white/60">
                          Across Residential, Commercial & Infra
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Checklist: Expertise in Hyderabad */}
                <div className="mt-7">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#67d83c]">
                    Our Expertise in Hyderabad
                  </p>

                  <div className="grid gap-2.5">
                    {expertise.map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-sm text-white/90">
                        <CheckCircle2 size={16} className="shrink-0 text-[#7ced52]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Button & Bottom Trust Metrics */}
              <div className="mt-8">
                <Link
                  href="/projects"
                  className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#43a324] py-4 text-sm font-bold text-white shadow-[0_14px_35px_rgba(67,163,36,0.35)] transition hover:bg-[#34861b]"
                >
                  <span>View All Hyderabad Projects</span>
                  <ArrowRight size={17} />
                </Link>

                {/* Bottom Trust Row */}
                <div className="mt-7 grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-5 text-center">
                  <div className="px-2">
                    <div className="mx-auto grid h-7 w-7 place-items-center text-[#7ced52]">
                      <Award size={18} />
                    </div>
                    <strong className="mt-1 block text-base font-bold text-white">15+</strong>
                    <span className="text-[10px] text-white/60">Years of Excellence</span>
                  </div>

                  <div className="px-2">
                    <div className="mx-auto grid h-7 w-7 place-items-center text-[#7ced52]">
                      <Users size={18} />
                    </div>
                    <strong className="mt-1 block text-base font-bold text-white">100%</strong>
                    <span className="text-[10px] text-white/60">Client Satisfaction</span>
                  </div>

                  <div className="px-2">
                    <div className="mx-auto grid h-7 w-7 place-items-center text-[#7ced52]">
                      <ShieldCheck size={18} />
                    </div>
                    <strong className="mt-1 block text-base font-bold text-white">Quality</strong>
                    <span className="text-[10px] text-white/60">You Can Trust</span>
                  </div>
                </div>

              </div>

            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}