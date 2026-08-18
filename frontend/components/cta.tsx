import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/motion-primitives";

export default function CTA() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-12">
      <AnimatedSection>
        <div className="relative mx-auto flex w-full max-w-[1440px] flex-col justify-between gap-8 overflow-hidden rounded-[32px] bg-[#142015] px-7 py-14 text-white shadow-[0_25px_70px_rgba(22,40,18,.18)] sm:px-10 md:flex-row md:items-center lg:px-14">
          <div className="absolute -right-24 -top-28 h-96 w-96 rounded-full bg-[#43a324]/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-16 h-72 w-72 rounded-full bg-[#43a324]/10 blur-3xl" />
          <div className="relative">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#8bd46f]">
              Ready to build something meaningful?
            </p>
            <h2 className="mt-3 max-w-3xl font-[var(--font-playfair)] text-4xl font-semibold leading-tight md:text-5xl">
              Let&apos;s create spaces that leave a lasting legacy.
            </h2>
          </div>
          <Link
            href="/contact"
            className="relative inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-[#72c653] px-7 py-4 text-sm font-bold transition hover:bg-[#43a324]"
          >
            Start your project <ArrowRight size={17} />
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
}