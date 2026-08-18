"use client";

import { useState } from "react";
import { Clock3, Mail, MapPin, Phone, Building, MapPinned, MessageSquare, ShieldCheck, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/page-hero";
import ContactForm from "@/components/contact-form";
import { AnimatedSection, slideLeft, slideRight, fadeUp } from "@/components/motion-primitives";
import { company } from "@/lib/site-data";

const offices = [
  {
    city: "Hyderabad (Corporate HQ)",
    address: "3rd Floor, Green Tower, Eco City, Gachibowli, Hyderabad, TG 500032",
    phone: "+91 40 1234 5678",
    email: "hyderabad@greenspaceinfra.com",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
  {
    city: "Bengaluru (Regional Office)",
    address: "Level 5, Vertex Business Park, Outer Ring Road, Bengaluru, KA 560103",
    phone: "+91 80 8765 4321",
    email: "bengaluru@greenspaceinfra.com",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
  {
    city: "Pune (Site Office)",
    address: "Suite 204, Express Tower, Baner Road, Pune, MH 411045",
    phone: "+91 20 9876 5432",
    email: "pune@greenspaceinfra.com",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
];

export default function ContactPage() {
  const [activeOffice, setActiveOffice] = useState(0);

  return (
    <>
      {/* RICH SPLIT HERO */}
      <PageHero
        eyebrow="GET IN TOUCH"
        title="Start Your Next"
        highlightedTitle="Landmark Project."
        description="Whether you are planning a luxury residential community, commercial business park, or heavy transport infrastructure, our engineering and planning desks are ready to assist."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=88"
        imageAlt="Green Space Infra Headquarters and Contact"
        floatingBadge={{
          icon: "map",
          title: "3 Regional Offices Nationwide",
          subtitle: "Hyderabad • Bengaluru • Pune",
        }}
        primaryAction={{
          label: "Send an Inquiry",
          href: "#inquiry-form",
        }}
        secondaryAction={{
          label: "Call Desk: +91 40 1234 5678",
          href: "tel:+914012345678",
        }}
        stats={[
          { value: 3, suffix: " Hubs", label: "Regional Offices", icon: "map" },
          { value: 24, suffix: "h", label: "Response Time", icon: "timer" },
          { value: 100, suffix: "%", label: "Confidentiality", icon: "shield" },
          { value: 30, suffix: "+", label: "Cities Covered", icon: "landmark" },
        ]}
      />

      {/* MAIN CONTACT DETAILS & INTERACTIVE FORM */}
      <section id="inquiry-form" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          
          {/* LEFT: REGIONAL OFFICES & DIRECT CONTACTS */}
          <AnimatedSection variants={slideLeft}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#43a324]/20 bg-[#eef8eb] px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#2f7f1d]">
              <MapPin size={13} className="text-[#43a324]" />
              OFFICE LOCATIONS
            </div>

            <h2 className="mt-4 font-[var(--font-playfair)] text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#111611] md:text-4xl">
              Connect with Our Team Nationwide
            </h2>
            <p className="mt-3 text-xs leading-6 text-[#687068] sm:text-sm">
              Select an office location below or submit your project details directly via the enquiry form.
            </p>
            
            {/* OFFICE LOCATION TABS */}
            <div className="mt-6 flex flex-wrap gap-2">
              {offices.map((off, idx) => (
                <button
                  key={off.city}
                  onClick={() => setActiveOffice(idx)}
                  className={`rounded-full px-4 py-2.5 text-xs font-bold transition ${
                    activeOffice === idx
                      ? "bg-[#43a324] text-white shadow-[0_8px_20px_rgba(67,163,36,0.25)]"
                      : "bg-[#f0f4ef] text-[#687068] hover:bg-[#e4ede2] hover:text-[#111711]"
                  }`}
                >
                  {off.city.split(" ")[0]}
                </button>
              ))}
            </div>

            {/* ACTIVE OFFICE DISPLAY CARD */}
            <div className="mt-6 rounded-[24px] border border-black/8 bg-[#f8faf7] p-7 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-extrabold text-[#111611]">{offices[activeOffice].city}</h3>
                <span className="rounded-full bg-[#43a324]/15 px-3 py-1 text-[10px] font-extrabold text-[#2f7f1d]">
                  Active Branch
                </span>
              </div>

              <div className="mt-5 grid gap-4 text-xs text-[#687068]">
                <div className="flex items-start gap-3.5">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[#eef8eb] text-[#43a324]">
                    <MapPin size={16} />
                  </div>
                  <span className="leading-5 text-[#343834] font-medium">{offices[activeOffice].address}</span>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[#eef8eb] text-[#43a324]">
                    <Phone size={16} />
                  </div>
                  <a href={`tel:${offices[activeOffice].phone.replaceAll(" ", "")}`} className="font-bold text-[#111611] hover:text-[#43a324]">
                    {offices[activeOffice].phone}
                  </a>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[#eef8eb] text-[#43a324]">
                    <Mail size={16} />
                  </div>
                  <a href={`mailto:${offices[activeOffice].email}`} className="font-bold text-[#43a324] hover:underline">
                    {offices[activeOffice].email}
                  </a>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[#eef8eb] text-[#43a324]">
                    <Clock3 size={16} />
                  </div>
                  <span className="font-medium">{offices[activeOffice].hours}</span>
                </div>
              </div>
            </div>

            {/* TRUST BADGE */}
            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-[#43a324]/20 bg-[#eef8eb]/60 p-4">
              <CheckCircle2 size={18} className="text-[#43a324] shrink-0" />
              <p className="text-xs font-bold text-[#2f7f1d]">
                Guaranteed response within 24 business hours from our senior advisory team.
              </p>
            </div>
          </AnimatedSection>

          {/* RIGHT: CONTACT FORM */}
          <AnimatedSection variants={slideRight}>
            <div className="rounded-[30px] border border-black/8 bg-white p-2 shadow-[0_20px_60px_rgba(20,32,18,.06)]">
              <ContactForm />
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* HEADQUARTERS LOCATION MAP BANNER */}
      <section className="px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto overflow-hidden rounded-[32px] border border-black/8 bg-[#111711] text-white shadow-xl">
          <div className="grid lg:grid-cols-[1fr_1.5fr] lg:items-center">
            <div className="p-8 sm:p-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#43a324]/20 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#8bd46f]">
                Corporate Headquarters
              </div>
              <h3 className="mt-4 font-[var(--font-playfair)] text-2xl font-semibold text-white sm:text-3xl">
                Green Tower, Hyderabad
              </h3>
              <p className="mt-3 text-xs leading-6 text-white/60 sm:text-sm">
                3rd Floor, Green Tower, Eco City, Gachibowli, Hyderabad, TG 500032
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-xs font-bold">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#43a324] px-5 py-2.5 text-white transition hover:bg-[#2f7f1d]"
                >
                  <MapPin size={14} /> Open in Google Maps
                </a>
              </div>
            </div>

            <div className="relative min-h-[280px] bg-[#1a251b] p-8 flex items-center justify-center border-t border-white/10 lg:border-t-0 lg:border-l">
              <div className="text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[#43a324] text-white shadow-lg">
                  <Building size={26} />
                </div>
                <p className="mt-3 text-sm font-extrabold text-white">Green Space Infra Corporate Tower</p>
                <p className="text-xs text-white/50">Gachibowli Financial & Eco District, Hyderabad</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}