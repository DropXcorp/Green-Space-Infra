"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/site-data";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-black/5 bg-white/95 shadow-[0_10px_35px_rgba(20,30,18,.07)] backdrop-blur-xl" : "bg-white/90 backdrop-blur-md"}`}>
      <div className="mx-auto flex h-[78px] w-full max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <motion.div className="min-w-0 flex-1 lg:flex-none" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="relative block h-14 w-[180px] sm:w-[225px] lg:w-[245px]" aria-label="Green Space Infra home">
            <Image src="/images/logo.png" alt="Green Space Infra" fill priority sizes="245px" className="object-contain object-left" />
          </Link>
        </motion.div>

        <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link, index) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href.split("#")[0]);
            return (
              <motion.div key={`${link.href}-${link.label}`} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 * index }}>
                <Link href={link.href} className={`relative rounded-full px-3 py-2 text-[12px] font-semibold transition ${active ? "text-[#2f7f1d]" : "text-[#252925] hover:text-[#2f7f1d]"}`}>
                  {link.label}
                  {active && <motion.span layoutId="nav-underline" className="absolute inset-x-3 -bottom-0.5 h-px bg-[#43a324]" />}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        <motion.div className="hidden items-center gap-3 lg:flex" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <Link href="/contact" className="inline-flex items-center gap-3 rounded-full bg-[#43a324] px-5 py-2.5 text-xs font-bold text-white shadow-[0_10px_25px_rgba(67,163,36,.18)] transition hover:-translate-y-0.5 hover:bg-[#2f7f1d]">
            Let&apos;s Build Green <ArrowRight size={15} />
          </Link>
        </motion.div>

        <button type="button" onClick={() => setOpen((value) => !value)} className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black/15 bg-white text-[#151715] lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span key={open ? "x" : "menu"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              {open ? <X size={20} /> : <Menu size={20} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden border-t border-black/5 bg-white lg:hidden">
            <nav className="mx-auto grid max-w-[1440px] gap-1 px-5 py-5 sm:px-8">
              {navLinks.map((link, index) => (
                <motion.div key={`${link.href}-${link.label}`} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.04 }}>
                  <Link href={link.href} className="block rounded-xl px-4 py-3 text-sm font-bold text-[#343834] hover:bg-[#f2f7ef]">{link.label}</Link>
                </motion.div>
              ))}
              <Link href="/contact" className="mt-2 rounded-xl bg-[#43a324] px-4 py-3 text-center text-sm font-bold text-white">Let&apos;s Build Green →</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
