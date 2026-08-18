import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Download, MapPin, Ruler, ShieldCheck, Tag } from "lucide-react";
import ProjectCard from "@/components/project-card";
import CTA from "@/components/cta";
import ImageLightbox from "@/components/image-lightbox";
import { projects } from "@/lib/site-data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project" };
  return { title: project.title, description: project.description };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const related = projects.filter((item) => item.slug !== slug && item.category === project.category).slice(0, 3);

  const specs = [
    { label: "Location", value: project.location },
    { label: "Status", value: project.status },
    { label: "Completion Year", value: project.year },
    { label: "Built-up Area", value: project.area },
    { label: "Category", value: project.category },
    { label: "Energy Rating", value: "IGBC Gold / LEED Certified" },
  ];

  const galleryImages = [
    { src: project.image, alt: `${project.title} Architectural Facade`, caption: "Main Architectural Facade" },
    { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85", alt: `${project.title} Interior & Natural Daylight`, caption: "Interior Daylight Integration" },
    { src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=85", alt: `${project.title} Aerial Landscape`, caption: "Landscape & Masterplan View" },
  ];

  return (
    <>
      {/* HERO HERO IMAGE */}
      <section className="relative flex min-h-[640px] items-end overflow-hidden pt-[78px] text-white">
        <Image src={project.image} alt={project.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111711] via-[#111711]/40 to-transparent" />
        <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-16 sm:px-8 lg:px-12 lg:pb-20">
          <Link href="/projects" className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-white/70 transition hover:text-white">
            <ArrowLeft size={16} /> Back to projects
          </Link>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-[#43a324] px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
              {project.category}
            </span>
            <span className="rounded-full bg-white/20 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white backdrop-blur-md">
              {project.status}
            </span>
          </div>
          <h1 className="mt-4 max-w-4xl font-[var(--font-playfair)] text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-8 text-white/75 sm:text-base">
            {project.description}
          </p>
        </div>
      </section>

      {/* QUICK SPECS STRIP */}
      <section className="border-b border-black/8 bg-white px-5 sm:px-8 lg:px-12">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-2 lg:grid-cols-4">
          {[
            [MapPin, "Location", project.location],
            [Tag, "Status", project.status],
            [CalendarDays, "Year", project.year],
            [Ruler, "Total Area", project.area],
          ].map(([Icon, label, value], index) => {
            const C = Icon as typeof MapPin;
            return (
              <div
                key={String(label)}
                className={`flex min-h-24 items-center gap-3.5 px-4 py-5 ${
                  index % 2 === 0 ? "border-r border-black/8" : ""
                } lg:border-r lg:last:border-r-0`}
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#eef8eb] text-[#43a324]">
                  <C size={19} />
                </div>
                <div>
                  <span className="block text-[10px] font-extrabold uppercase tracking-wider text-[#7a827a]">
                    {String(label)}
                  </span>
                  <strong className="mt-0.5 block text-xs font-bold text-[#111611]">
                    {String(value)}
                  </strong>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* OVERVIEW & HIGHLIGHTS */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#43a324]">
              Project Narrative
            </p>
            <h2 className="mt-3 font-[var(--font-playfair)] text-3xl font-semibold leading-tight text-[#111611] sm:text-4xl">
              Design Brief & Engineering Scope
            </h2>
            <p className="mt-6 text-sm leading-8 text-[#687068]">
              {project.overview}
            </p>
            <p className="mt-4 text-sm leading-8 text-[#687068]">
              Executed under strict quality benchmarks, this development integrates solar power grids, automated water conservation, and high-efficiency structural planning.
            </p>

            {/* INTERACTIVE GALLERY LIGHTBOX */}
            <div className="mt-10">
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#687068] mb-3">Project Visual Gallery (Click to Expand)</p>
              <ImageLightbox images={galleryImages} />
            </div>

            {/* TECHNICAL SPECS GRID TABLE */}
            <div className="mt-10">
              <h3 className="text-base font-extrabold text-[#111611]">Technical Specifications</h3>
              <div className="mt-4 grid grid-cols-2 gap-3 rounded-[20px] border border-black/8 bg-[#f8faf7] p-5">
                {specs.map((s) => (
                  <div key={s.label}>
                    <span className="block text-[10px] font-extrabold uppercase text-[#687068]">{s.label}</span>
                    <span className="text-xs font-bold text-[#111611]">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            {/* HIGHLIGHTS BOX */}
            <div className="rounded-[28px] bg-[#111711] p-8 text-white">
              <h3 className="text-lg font-extrabold">Project Highlights</h3>
              <ul className="mt-6 grid gap-4">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-xs leading-6 text-white/70">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#8bd46f]" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* DOWNLOAD BROCHURE CTA CARD */}
            <div className="rounded-[28px] border border-black/8 bg-[#f0f8ed] p-7 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-[#43a324] text-white">
                <Download size={22} />
              </div>
              <h4 className="mt-4 text-base font-extrabold text-[#111611]">Download Specification Sheet</h4>
              <p className="mt-1 text-xs text-[#687068]">Get full floor plans, structural details, and brochure as PDF.</p>
              <button
                type="button"
                className="mt-5 w-full rounded-full bg-[#111711] py-3 text-xs font-extrabold text-white transition hover:bg-[#43a324]"
              >
                Download PDF →
              </button>
            </div>
          </aside>
        </div>
      </section>

      {/* RELATED PROJECTS */}
      {related.length > 0 && (
        <section className="bg-[#f6f8f5] px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto w-full max-w-[1440px]">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#43a324]">Related Work</p>
            <h2 className="mt-3 font-[var(--font-playfair)] text-3xl font-semibold text-[#111611]">More {project.category} Projects</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {related.map((item) => (
                <ProjectCard key={item.slug} project={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}