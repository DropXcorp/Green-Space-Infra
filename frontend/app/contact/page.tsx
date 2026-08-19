import { Clock3, Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";
import ContactForm from "@/components/contact-form";
import { AnimatedSection, slideLeft, slideRight } from "@/components/motion-primitives";
import { company } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* MAIN CONTACT DETAILS & INTERACTIVE FORM */}
      <section id="inquiry-form" className="px-5 sm:px-8 lg:px-12">
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          
          {/* LEFT: HYDERABAD CORPORATE OFFICE & DIRECT CONTACTS */}
          <AnimatedSection variants={slideLeft}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#43a324]/20 bg-[#eef8eb] px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#2f7f1d]">
              <MapPin size={13} className="text-[#43a324]" />
              HEADQUARTERS
            </div>

            <h1 className="mt-4 font-[var(--font-playfair)] text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#111611] md:text-4xl">
              Connect with Our Hyderabad Team
            </h1>
            <p className="mt-3 text-xs leading-6 text-[#687068] sm:text-sm">
              Visit our corporate office in Hyderabad or submit your project details directly via the enquiry form.
            </p>

            {/* HYDERABAD OFFICE DISPLAY CARD */}
            <div className="mt-6 rounded-[24px] border border-black/8 bg-[#f8faf7] p-7 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-extrabold text-[#111611]">Hyderabad (Corporate HQ)</h3>
                <span className="rounded-full bg-[#43a324]/15 px-3 py-1 text-[10px] font-extrabold text-[#2f7f1d]">
                  Corporate Office
                </span>
              </div>

              <div className="mt-5 grid gap-4 text-xs text-[#687068]">
                <div className="flex items-start gap-3.5">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[#eef8eb] text-[#43a324]">
                    <MapPin size={16} />
                  </div>
                  <span className="leading-5 text-[#343834] font-medium">{company.address}</span>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[#eef8eb] text-[#43a324]">
                    <Phone size={16} />
                  </div>
                  <a href={`tel:${company.phone.replaceAll(" ", "")}`} className="font-bold text-[#111611] hover:text-[#43a324]">
                    {company.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[#eef8eb] text-[#43a324]">
                    <Mail size={16} />
                  </div>
                  <a href={`mailto:${company.email}`} className="font-bold text-[#43a324] hover:underline">
                    {company.email}
                  </a>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[#eef8eb] text-[#43a324]">
                    <Clock3 size={16} />
                  </div>
                  <span className="font-medium">{company.hours}</span>
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
    </div>
  );
}