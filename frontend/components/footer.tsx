import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { company, navLinks } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white text-[#171817]">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.3fr_.7fr_.9fr_1fr] lg:px-12">
        <div>
          <div className="relative h-14 w-[220px]">
            <Image
              src="/images/logo.png"
              alt="Green Space Infra"
              fill
              className="object-contain object-left"
            />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-[#596259]">
            {company.description}
          </p>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[.16em] text-[#32861f]">
            Quick Links
          </h2>
          <div className="mt-5 grid gap-3">
            {navLinks.map((link) => (
              <Link
                className="text-sm text-[#596259] transition hover:text-[#32861f]"
                key={link.href}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[.16em] text-[#32861f]">
            Expertise
          </h2>
          <div className="mt-5 grid gap-3 text-sm text-[#596259]">
            <span>Property Development</span>
            <span>Property Management</span>
            <span>Construction</span>
            <span>Environmental Management</span>
          </div>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[.16em] text-[#32861f]">
            Contact
          </h2>
          <div className="mt-5 grid gap-4 text-sm leading-6 text-[#596259]">
            <p className="flex gap-2">
              <MapPin size={17} className="shrink-0 text-[#43a324]" />
              {company.shortAddress}
            </p>
            <a
              className="flex gap-2 hover:text-[#32861f]"
              href={`mailto:${company.email}`}
            >
              <Mail size={17} className="shrink-0 text-[#43a324]" />
              {company.email}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-black/10">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 px-5 py-5 text-xs text-[#697069] sm:px-8 lg:px-12">
          <span>© Green Space Infra. All Rights Reserved.</span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>
              Designed and Developed by{" "}
              <a
                className="font-bold text-[#32861f] hover:underline"
                href="https://dropxcorp.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                DropXcorp
              </a>
            </span>
            <Link href="#" className="hover:text-[#32861f]">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#32861f]">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
