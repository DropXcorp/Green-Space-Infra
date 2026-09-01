import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Droplets, Leaf, Recycle, ShieldCheck, TreePine, Users } from "lucide-react";

const principles = [
  ["Responsible Planning", "Considering environmental and site factors during planning and development."],
  ["Resource Awareness", "Encouraging efficient and responsible use of construction resources."],
  ["Long-Term Value", "Creating spaces with durability, usability and long-term value in mind."],
  ["Social Responsibility", "Operating ethically while considering relationships with communities, clients and partners."],
];

const focusAreas = [
  { icon: Leaf, title: "Greener planning", description: "We consider site context, orientation, natural light, ventilation and landscape opportunities early in the planning process." },
  { icon: Droplets, title: "Water-conscious design", description: "Rainwater management, efficient fixtures and responsible site practices help us use and protect this essential resource." },
  { icon: Recycle, title: "Smarter materials", description: "Thoughtful material selection, careful quantity planning and better coordination can help reduce waste across the build cycle." },
  { icon: TreePine, title: "Living landscapes", description: "Green areas, shade planting and considered outdoor spaces support healthier, more comfortable environments for people." },
];

const lifecycle = [
  ["01", "Plan with context", "Understand the site, its surroundings and the needs of the people who will use the space."],
  ["02", "Build with care", "Coordinate teams, materials and methods to reduce avoidable waste and maintain quality on site."],
  ["03", "Manage responsibly", "Support efficient operations, preventive maintenance and responsible use throughout a property’s life."],
  ["04", "Improve continuously", "Learn from every project and strengthen the practical standards we carry into the next one."],
];

const commitments = [
  ["01", "Site responsibility", "Protecting the character of the site and maintaining an orderly, safety-conscious work environment."],
  ["02", "Resource efficiency", "Making considered choices around energy, water, materials and construction logistics."],
  ["03", "People and partnerships", "Working transparently with clients, partners, teams and communities connected to our projects."],
];

export default function SustainabilityPage() {
  return (
    <>
      <section className="mx-auto max-w-[1280px] px-5 pb-14 pt-28 sm:px-8 lg:px-12">
        <p className="text-xs font-bold tracking-[.2em] text-[#43a324]">RESPONSIBLE DEVELOPMENT</p>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">Responsibility built into our approach.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#626c62]">
          Sustainability is part of how we think about value: creating places that are considered in their context, efficient to operate and built to serve people well over time.
        </p>
        <div className="mt-10 grid gap-px bg-black/10 md:grid-cols-2">
          {principles.map(([title, description]) => (
            <div className="bg-white p-8" key={title}>
              <p className="text-xs font-bold tracking-[.16em] text-[#43a324]">{title.toUpperCase()}</p>
              <p className="mt-5 text-lg leading-8 text-[#626c62]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f6f8f5] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image fill src="/images/buildings/hero/hero3.png" alt="Green Space Infra construction project" className="object-cover" />
          </div>
          <div>
            <p className="text-xs font-bold tracking-[.2em] text-[#43a324]">ENVIRONMENTAL MANAGEMENT</p>
            <h2 className="mt-5 text-4xl">Environmental management as part of project thinking.</h2>
            <p className="mt-6 leading-8 text-[#626c62]">Green Space Infra includes Environmental Management among its core competencies. Our approach aims to consider environmental responsibility alongside planning, construction and long-term property value.</p>
            <p className="mt-5 leading-8 text-[#626c62]">This means paying attention to the decisions that shape a project from the beginning—from site planning and material use to the quality, durability and everyday usability of the finished space.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[.2em] text-[#43a324]">OUR FOCUS AREAS</p>
          <h2 className="mt-4 text-4xl">Practical choices that create better places.</h2>
          <p className="mt-5 leading-8 text-[#626c62]">Good sustainability is built through many considered decisions. These are the areas we keep in view while planning, delivering and managing our work.</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map(({ icon: Icon, title, description }) => (
            <article className="border-t border-black/10 pt-6" key={title}>
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eef8eb] text-[#43a324]"><Icon size={20} /></div>
              <h3 className="mt-6 text-xl">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#626c62]">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#171817] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[.2em] text-[#8bd46f]">A LIFECYCLE APPROACH</p>
            <h2 className="mt-4 text-4xl">Better development starts with better decisions.</h2>
            <p className="mt-5 leading-8 text-white/65">Sustainability does not end when construction is complete. We look at the whole journey of a space and the responsibility that comes with each stage.</p>
          </div>
          <div className="mt-12 grid gap-px bg-white/15 md:grid-cols-4">
            {lifecycle.map(([number, title, description]) => (
              <div className="bg-[#171817] p-7" key={number}>
                <span className="text-[#8bd46f]">{number}</span>
                <h3 className="mt-6 text-lg">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/60">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eaf5e6] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-bold tracking-[.2em] text-[#2f7f1d]">OUR COMMITMENT</p>
            <h2 className="mt-4 text-4xl">Responsible outcomes, built together.</h2>
            <p className="mt-5 leading-8 text-[#526052]">Meaningful progress depends on shared ownership. We work to make sustainability understandable, practical and connected to the people involved in each project.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {commitments.map(([number, title, description]) => (
              <div className="border-t border-[#43a324]/30 pt-5" key={number}>
                <span className="text-sm font-bold text-[#2f7f1d]">{number}</span>
                <h3 className="mt-5 text-lg">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#526052]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            [ShieldCheck, "Quality that lasts", "Durable work and disciplined coordination help reduce avoidable repairs and protect long-term value."],
            [Users, "People at the centre", "We value clear communication, safe working practices and respectful partnerships throughout the project lifecycle."],
            [Leaf, "Progress through learning", "Each completed project gives us an opportunity to refine our thinking and improve how we deliver the next one."],
          ].map(([Icon, title, description]) => (
            <div className="bg-[#f6f8f5] p-8" key={title as string}>
              <Icon className="text-[#43a324]" size={24} />
              <h3 className="mt-6 text-xl">{title as string}</h3>
              <p className="mt-3 text-sm leading-7 text-[#626c62]">{description as string}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#43a324] px-5 py-16 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-end justify-between gap-8">
          <div>
            <p className="text-xs font-bold tracking-[.2em] text-white/70">BUILD WITH PURPOSE</p>
            <h2 className="mt-3 text-4xl">Let&apos;s create spaces with a lasting legacy.</h2>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#171817]">Start a conversation <ArrowRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
