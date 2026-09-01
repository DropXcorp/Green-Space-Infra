import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { expertise } from "@/lib/site-data";

const capabilities = ["Research", "Civil Engineering", "Planning", "Construction", "Scaffolding", "Centering", "Electrical Works", "Masonry", "Carpentry", "Plumbing", "Flooring"];

export default function ExpertisePage() {
  return <>
    <section className="mx-auto max-w-[1280px] px-5 pb-14 pt-28 sm:px-8 lg:px-12">
      <p className="text-xs font-bold tracking-[.2em] text-[#43a324]">OUR CORE COMPETENCE</p>
      <h1 className="mt-4 text-4xl">Expertise Across Every Stage of Development.</h1>
      <p className="mt-6 max-w-4xl text-base leading-8 text-[#626c62]">Green Space Infra aims to make a significant contribution to the future of real-estate projects. Our integrated team approach helps ensure projects address design and lifestyle parameters from initial planning through completion. Our comprehensive service portfolio includes property acquisition and development, property management real estate, property acquisition and construction, and environmental management.</p>
      {expertise.map((item, index) => <article key={item.number} className={`grid gap-10 border-t border-black/10 py-12 first:mt-10 lg:grid-cols-2 lg:items-center ${index % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}><div><span className="font-bold text-[#43a324]">{item.number}</span><h2 className="mt-4 text-3xl">{item.title}</h2><p className="mt-4 max-w-lg leading-8 text-[#626c62]">{item.description}</p></div><div className="relative aspect-[16/10] overflow-hidden"><Image fill src={item.image} alt={item.title} className="object-cover" /></div></article>)}
    </section>

    <section className="bg-[#f6f8f5] px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <p className="text-xs font-bold tracking-[.2em] text-[#43a324]">OUR TEAM</p>
        <h2 className="mt-4 text-4xl">75 years of combined construction experience.</h2>
        <p className="mt-5 max-w-4xl text-base leading-8 text-[#626c62]">Team Green Space Infra has a combined 75 years of experience in the construction domain, with specialization in research, civil engineering, planning, construction and essential building trades.</p>
        <div className="mt-10 grid border-l border-t border-black/10 sm:grid-cols-2 lg:grid-cols-6">{capabilities.map((capability) => <div className="border-b border-r border-black/10 bg-white p-6" key={capability}><Check className="text-[#43a324]" size={19} /><h3 className="mt-5 text-sm font-bold">{capability}</h3><p className="mt-2 text-xs leading-5 text-[#626c62]">Delivered with structured coordination and practical site experience.</p></div>)}</div>
      </div>
    </section>

    <section className="bg-[#171817] px-5 py-20 text-white sm:px-8 lg:px-12"><div className="mx-auto max-w-[1280px]"><h2 className="text-4xl">Disciplined project management from start to finish.</h2><div className="mt-10 grid gap-px bg-white/15 md:grid-cols-4">{[["Project Management", "Structured coordination of teams, tasks and project requirements."], ["Cost Management", "Monitoring project costs and resources through execution."], ["Quality Management", "Attention to workmanship and construction standards."], ["Safety Measures", "Safety-conscious working practices throughout project delivery."]].map(([title, description]) => <div key={title} className="bg-[#171817] p-7"><h3 className="text-sm font-bold text-[#8bd46f]">{title}</h3><p className="mt-4 text-sm leading-7 text-white/60">{description}</p></div>)}</div><Link href="/contact" className="mt-12 inline-flex items-center gap-2 rounded-full bg-[#43a324] px-6 py-3 text-sm font-bold">Start a Conversation <ArrowRight size={17} /></Link></div></section>
  </>;
}
