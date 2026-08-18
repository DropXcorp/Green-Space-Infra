import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { company, navLinks, services } from "@/lib/site-data";
import { StaggerGroup, MotionItem } from "@/components/motion-primitives";

const socials = [
  { href: "#", label: "Facebook" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Instagram" },
  { href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f1a0f] text-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12">
        <StaggerGroup className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_.7fr_.9fr_1.1fr]">
          <MotionItem>
            <div className="relative h-[72px] w-[250px] rounded-xl bg-white px-2">
              <Image src="/images/logo.png" alt="Green Space Infra" fill className="object-contain p-2" />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">{company.description}</p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/50 transition hover:border-[#43a324] hover:bg-[#43a324] hover:text-white"
                >
                  <ArrowRight size={15} />
                </a>
              ))}
            </div>
          </MotionItem>

          <MotionItem>
            <h3 className="text-sm font-extrabold uppercase tracking-wider">Quick Links</h3>
            <div className="mt-5 grid gap-2.5">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-white/50 transition hover:text-[#72c653]">
                  {link.label}
                </Link>
              ))}
            </div>
          </MotionItem>

          <MotionItem>
            <h3 className="text-sm font-extrabold uppercase tracking-wider">Our Services</h3>
            <div className="mt-5 grid gap-2.5">
              {services.slice(0, 6).map((service) => (
                <Link key={service.title} href="/services" className="text-sm text-white/50 transition hover:text-[#72c653]">
                  {service.title}
                </Link>
              ))}
            </div>
          </MotionItem>

          <MotionItem>
            <h3 className="text-sm font-extrabold uppercase tracking-wider">Contact Us</h3>
            <div className="mt-5 grid gap-4 text-sm text-white/50">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 shrink-0 text-[#72c653]" size={17} />
                <span>{company.address}</span>
              </div>
              <div className="flex gap-3">
                <Phone className="shrink-0 text-[#72c653]" size={17} />
                <span>{company.phone}</span>
              </div>
              <div className="flex gap-3">
                <Mail className="shrink-0 text-[#72c653]" size={17} />
                <a href={`mailto:${company.email}`} className="hover:text-white">
                  {company.email}
                </a>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-extrabold uppercase tracking-wider">Newsletter</h3>
              <p className="mt-2 text-xs text-white/40">Stay updated with our latest projects and insights.</p>
              <form className="mt-3 flex overflow-hidden rounded-full border border-white/10 bg-white/5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-[#43a324] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#2f7f1d]"
                >
                  →
                </button>
              </form>
            </div>
          </MotionItem>
        </StaggerGroup>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-3 px-5 py-5 text-xs text-white/30 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <span>© {new Date().getFullYear()} Green Space Infra. All Rights Reserved.</span>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white/60">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white/60">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
