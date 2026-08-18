"use client";

import { useState, useRef, useCallback, MouseEvent, TouchEvent } from "react";
import Image from "next/image";
import { Sparkles, MoveHorizontal, CheckCircle2 } from "lucide-react";
import { AnimatedSection, fadeUp } from "@/components/motion-primitives";

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  subtitle?: string;
}

export default function BeforeAfterSlider({
  beforeImage = "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1600&q=85", // Construction stage
  afterImage = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=88", // Completed landmark
  beforeLabel = "Structural Civil Engineering",
  afterLabel = "Completed Luxury Landmark",
  title = "Precision in Execution: From Blueprint to Landmark",
  subtitle = "Drag the slider to witness our seamless transition from heavy structural engineering to world-class architectural completion.",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto w-full max-w-[1440px]">
        <AnimatedSection variants={fadeUp} className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#43a324]/20 bg-[#eef8eb] px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#2f7f1d]">
            <Sparkles size={13} className="text-[#43a324]" />
            TRANSFORMATION SHOWCASE
          </div>
          <h2 className="mt-4 font-[var(--font-playfair)] text-3xl font-semibold leading-tight text-[#111611] sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xs leading-7 text-[#626c62] sm:text-sm sm:leading-8">
            {subtitle}
          </p>
        </AnimatedSection>

        {/* SLIDER CONTAINER */}
        <AnimatedSection variants={fadeUp} delay={0.2}>
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            className="relative mt-12 aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden rounded-[32px] border border-black/8 bg-black shadow-[0_24px_70px_rgba(20,32,18,.14)] sm:aspect-[16/9] lg:aspect-[21/9]"
          >
            {/* AFTER IMAGE (Background / Full Width) */}
            <div className="absolute inset-0 h-full w-full">
              <Image
                src={afterImage}
                alt={afterLabel}
                fill
                priority
                className="object-cover"
              />
              <span className="absolute bottom-6 right-6 rounded-full bg-[#111711]/80 px-4 py-2 text-xs font-extrabold text-white backdrop-blur-md">
                ✨ {afterLabel}
              </span>
            </div>

            {/* BEFORE IMAGE (Clipped via CSS clipPath - GPU Accelerated & Safe) */}
            <div
              className="absolute inset-0 h-full w-full pointer-events-none"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
              }}
            >
              <Image
                src={beforeImage}
                alt={beforeLabel}
                fill
                priority
                className="object-cover"
              />
              <span className="absolute bottom-6 left-6 rounded-full bg-[#111711]/80 px-4 py-2 text-xs font-extrabold text-white backdrop-blur-md">
                🏗️ {beforeLabel}
              </span>
            </div>

            {/* DRAGGABLE DIVIDER LINE & HANDLE */}
            <div
              className="absolute bottom-0 top-0 z-20 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full border-2 border-white bg-[#43a324] text-white shadow-2xl transition hover:scale-110">
                <MoveHorizontal size={20} />
              </div>
            </div>
          </div>

          {/* HINT SUBTITLE */}
          <div className="mt-4 flex items-center justify-center gap-2 text-center text-xs font-bold text-[#687068]">
            <CheckCircle2 size={14} className="text-[#43a324]" />
            Click and drag the slider left or right to compare execution phases
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
