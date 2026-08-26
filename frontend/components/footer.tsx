import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { company, navLinks, services } from "@/lib/site-data";

const socials = [
  { label: "LinkedIn", mark: "in" },
  { label: "Instagram", mark: "ig" },
  { label: "YouTube", mark: "▶" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white text-[#202520]">
      <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-5 py-10 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.25fr_.7fr_.9fr_1.15fr] lg:px-12">
        <div>
          <div className="relative h-14 w-[230px]"><Image src="/images/logo.png" alt="Green Space Infra" fill sizes="230px" className="object-contain object-left" /></div>
          <p className="mt-4 max-w-[280px] text-xs leading-6 text-[#5d645d]">We build sustainable infrastructure and spaces that inspire generations.</p>
          <div className="mt-5 flex gap-3">
            {socials.map(({ label, mark }) => <a key={label} href="#" aria-label={label} className="grid h-8 w-8 place-items-center rounded-full border border-black/15 text-[9px] font-extrabold transition hover:border-[#4da328] hover:bg-[#4da328] hover:text-white">{mark}</a>)}
          </div>
        </div>

        <div>
          <h2 className="font-[var(--font-sans)] text-xs font-extrabold tracking-normal">Quick Links</h2>
          <div className="mt-4 grid gap-2">
            {navLinks.map((link) => <Link key={`${link.href}-${link.label}`} href={link.href} className="text-[11px] text-[#555c55] transition hover:text-[#4da328]">{link.label}</Link>)}
          </div>
        </div>

        <div>
          <h2 className="font-[var(--font-sans)] text-xs font-extrabold tracking-normal">Our Services</h2>
          <div className="mt-4 grid gap-2">
            {services.slice(0, 6).map((service) => <Link key={service.title} href="/services" className="text-[11px] text-[#555c55] transition hover:text-[#4da328]">{service.title}</Link>)}
          </div>
        </div>

        <div className="relative">
          <h2 className="font-[var(--font-sans)] text-xs font-extrabold tracking-normal">Contact Us</h2>
          <div className="mt-4 grid gap-3 text-[11px] text-[#555c55]">
            <p className="flex gap-3"><MapPin size={15} className="shrink-0 text-[#4da328]" />{company.address}</p>
            <p className="flex items-center gap-3"><Phone size={15} className="text-[#4da328]" />{company.phone}</p>
            <a href={`mailto:${company.email}`} className="flex items-center gap-3 hover:text-[#4da328]"><Mail size={15} className="text-[#4da328]" />{company.email}</a>
          </div>
          <Link href="/contact" className="group mt-5 inline-flex items-center gap-8 rounded-full border border-[#58ad31] px-5 py-2 text-[11px] font-bold text-[#4a9f27] transition hover:bg-[#4a9f27] hover:text-white">Let&apos;s Build Together <ArrowRight size={14} className="transition group-hover:translate-x-1" /></Link>
        </div>
      </div>

      <div className="border-t border-black/8">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-5 py-4 text-[9px] text-[#697069] sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <span>© {new Date().getFullYear()} Green Space Infra. All Rights Reserved.</span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>
              Designed and Developed by{" "}
              <a href="https://dropxcorp.in/" target="_blank" rel="noopener noreferrer" className="font-bold text-[#4da328] transition hover:text-[#2f7f1d] hover:underline">
                DropXcorp Pvt. Ltd.
              </a>
            </span>
            <Link href="#" className="hover:text-[#4da328]">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#4da328]">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
