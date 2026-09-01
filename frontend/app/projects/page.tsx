import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/page-hero";
import ProjectFilter from "@/components/project-filter";
import CTA from "@/components/cta";
import { groupVentures, projects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore residential, commercial, and infrastructure developments by Green Space Infra.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR PORTFOLIO"
        title="Spaces Built with"
        highlightedTitle="Purpose."
        description="Five completed developments, three ongoing projects and two plotted ventures documented in the official Green Space Infra company brochure."
        image="/images/buildings/project/jewel.png"
        imageAlt="Green Space Infra Projects Showcase"
        floatingBadge={{
          icon: "building2",
          title: "5 Completed Projects",
          subtitle: "Plus 3 ongoing developments",
        }}
        primaryAction={{
          label: "View Our Projects",
          href: "#projects-grid",
        }}
        secondaryAction={{
          label: "Start a Project",
          href: "/contact",
        }}
        stats={[
          { value: 5, suffix: "", label: "Completed Projects", icon: "check" },
          { value: 2012, suffix: "", label: "Established", icon: "landmark" },
          { value: 4, suffix: "", label: "Core Competencies", icon: "building2" },
          { value: 75, suffix: " Yrs", label: "Combined Team Experience", icon: "users" },
        ]}
      />

      <section id="projects-grid" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px]">
          <ProjectFilter projects={projects} />
        </div>
      </section>

      <section className="bg-[#f6f8f5] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1440px] gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#43a324]">Group Ventures</p>
            <h2 className="mt-3 text-4xl">{groupVentures.company}</h2>
            <p className="mt-3 text-sm font-bold text-[#43a324]">{groupVentures.relationship}</p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#687068]">{groupVentures.description}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {groupVentures.ventures.map((venture) => (
              <article key={venture.name} className="overflow-hidden rounded-[24px] border border-black/8 bg-white shadow-[0_14px_45px_rgba(20,32,18,.06)]">
                {venture.image && (
                  <div className="relative aspect-[2/1] overflow-hidden bg-[#eaf5e6]">
                    <Image src={venture.image} alt={`${venture.name} official brochure concept`} fill className="object-cover" />
                  </div>
                )}
                <div className="p-6">
                  <span className="rounded-full bg-[#eaf5e6] px-3 py-1 text-[10px] font-extrabold uppercase text-[#2f7f1d]">{venture.status}</span>
                  <h3 className="mt-4 text-xl font-bold">{venture.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#687068]">{venture.location}</p>
                  {venture.imageNote && <p className="mt-3 text-[11px] leading-5 text-[#7b827b]">{venture.imageNote}</p>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      <CTA />
    </>
  );
}
