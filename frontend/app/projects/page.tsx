import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import ProjectFilter from "@/components/project-filter";
import CTA from "@/components/cta";
import { projects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore residential, commercial, and infrastructure developments by Green Space Infra.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="FEATURED PORTFOLIO"
        title="Spaces That Inspire."
        highlightedTitle="Landmarks That Endure."
        description="Explore our award-winning portfolio spanning luxury residential sanctuaries, future-ready commercial business parks, and heavy highway infrastructure."
        image="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=88"
        imageAlt="Green Space Infra Projects Showcase"
        floatingBadge={{
          icon: "building2",
          title: "12M+ Sq. Ft. Delivered",
          subtitle: "Across 30+ Cities Nationwide",
        }}
        primaryAction={{
          label: "View All Projects",
          href: "#projects-grid",
        }}
        secondaryAction={{
          label: "Start a Project",
          href: "/contact",
        }}
        stats={[
          { value: 250, suffix: "+", label: "Projects Delivered", icon: "check" },
          { value: 30, suffix: "+", label: "Cities Served", icon: "landmark" },
          { value: 12, suffix: "M+", label: "Sq. Ft. Developed", icon: "building2" },
          { value: 98, suffix: "%", label: "Client Satisfaction", icon: "shield" },
        ]}
      />

      <section id="projects-grid" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px]">
          <ProjectFilter projects={projects} />
        </div>
      </section>
      
      <CTA />
    </>
  );
}