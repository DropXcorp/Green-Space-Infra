import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const values = [
  ["01", "Integrity", "Building trusted relationships through responsible and transparent practices."],
  ["02", "Professionalism", "Maintaining high standards across planning, management and project execution."],
  ["03", "Partnership", "Creating lasting relationships with clients, partners and stakeholders."],
  ["04", "Quality", "Maintaining attention to execution, coordination and quality standards."],
  ["05", "Responsibility", "Operating with ethical and socially conscious practices."],
];

const promoters = [
  {
    name: "U. Mahesh Kumar",
    role: "Managing Partner",
    image: "/images/brochure/u-mahesh-kumar.jpg",
    bio: "U. Mahesh Kumar is a Managing Partner of the company. A qualified Civil Engineer, he served the Government of Telangana State in the Department of Employment & Training and retired as Deputy Director. He later entered the property development business. Under his leadership and vision, the company works to complete projects on time and maintain quality standards. His management and administration skills help motivate the team and deliver clients’ requirements.",
  },
  {
    name: "Ravi Chandra Babu Kundeti",
    role: "Partner",
    image: "/images/brochure/ravi-chandra-babu-kundeti.jpg",
    bio: "Ravi Chandra Babu Kundeti is a Partner of the company with more than 20 years of extensive experience and expertise in the property management industry. A straightforward, effective communicator and highly motivated property manager, he combines conscientious professionalism with an ability to connect with people. He leads his team to manage projects proactively, efficiently and effectively.",
  },
];

export default function AboutPage() {
  return <>
    <section className="bg-[#f6f8f5] px-5 pb-14 pt-28 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-2 lg:items-center">
        <div><p className="text-xs font-bold tracking-[.2em] text-[#43a324]">WHO WE ARE</p><h1 className="mt-5 text-5xl leading-[1.05] sm:text-7xl">Building Relationships.<br />Creating <em className="text-[#43a324]">Lasting Spaces.</em></h1><p className="mt-7 max-w-xl text-lg leading-8 text-[#626c62]">Since 2012, Green Space Infra has been creating thoughtfully planned real-estate developments while building long-term relationships through professionalism, integrity and dependable project execution.</p></div>
        <div className="relative aspect-video overflow-hidden"><Image fill priority src="/images/buildings/hero/hero2.png" alt="Green Space Infra residential development" className="object-cover" /></div>
      </div>
    </section>

    <section className="mx-auto grid max-w-[1280px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12">
      <div><p className="text-xs font-bold tracking-[.2em] text-[#43a324]">OUR PROFILE</p><h2 className="mt-4 text-4xl">Building a reputation,<br />one project at a time.</h2><p className="mt-6 whitespace-pre-line text-base leading-8 text-[#626c62]">Green Space Infra was incorporated in 2012 to develop well-designed, competitively priced real estate in the state. Over the past decade, the company has contributed to economic growth and improved outcomes for individual and corporate clients through investment in real estate.{"\n\n"}Its well-balanced portfolio includes residential, commercial and mixed-use properties, with a strong reputation for residential development and apartment projects. The company also has a growing property-investment portfolio in the state and an interest in property development across the country.{"\n\n"}Green Space Infra has also served as a residential and venture property management specialist, delivering integrity, professionalism and peace of mind to its clients.</p></div>
      <div className="relative aspect-video overflow-hidden"><Image fill src="/images/buildings/project/elite.png" alt="Green Space Elite residential development" className="object-cover" /><div className="absolute bottom-0 left-0 bg-[#43a324] p-6 text-white"><span className="text-xs uppercase tracking-[.18em]">Since</span><strong className="ml-3 text-4xl">2012</strong></div></div>
    </section>

    <section className="bg-[#171817] px-5 py-14 text-white sm:px-8 lg:px-12"><div className="mx-auto grid max-w-[1280px] gap-8 sm:grid-cols-5">{[["2012", "Established"], ["5", "Completed Projects"], ["75 Years", "Combined Team Experience"], ["4", "Core Competencies"], ["Hyderabad", "Corporate Presence"]].map(([number, label]) => <div key={number}><strong className="text-3xl text-[#8bd46f]">{number}</strong><p className="mt-2 text-sm text-white/60">{label}</p></div>)}</div></section>

    <section className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">
      <div className="grid gap-6 lg:grid-cols-2"><article className="bg-[#171817] p-10 text-white"><p className="text-xs font-bold tracking-[.16em] text-[#8bd46f]">VISION</p><p className="mt-6 text-3xl leading-snug">To be a recognized leader in the property management industry in the country, while maintaining our authentic level of service founded on the basic core values of integrity and partnership.</p></article><article className="bg-[#eaf5e6] p-10"><p className="text-xs font-bold tracking-[.16em] text-[#2f7f1d]">MISSION</p><p className="mt-6 text-3xl leading-snug">We are on a mission to enhance the associations we partner with, while operating in an ethical and socially conscious manner.</p></article></div>
      <h2 className="mt-20 text-4xl">Our values.</h2><div className="mt-8 grid border-l border-t border-black/10 sm:grid-cols-2 lg:grid-cols-5">{values.map(([number, title, description]) => <div key={number} className="border-b border-r border-black/10 p-6"><span className="text-[#43a324]">{number}</span><h3 className="mt-5 font-sans text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-[#626c62]">{description}</p></div>)}</div>
    </section>

    <section className="bg-[#f6f8f5] px-5 py-20 sm:px-8 lg:px-12"><div className="mx-auto max-w-[1280px]"><h2 className="text-4xl">Experience behind every decision.</h2><div className="mt-10 grid gap-8 lg:grid-cols-2">{promoters.map((promoter) => <article className="grid gap-6 border-t border-black/15 pt-6 sm:grid-cols-[130px_1fr]" key={promoter.name}><div className="relative aspect-square overflow-hidden rounded-sm bg-white"><Image src={promoter.image} alt={promoter.name} fill className="object-cover" /></div><div><p className="text-2xl">{promoter.name}</p><p className="mt-2 text-sm font-bold text-[#43a324]">{promoter.role}</p><p className="mt-5 text-sm leading-7 text-[#626c62]">{promoter.bio}</p></div></article>)}</div></div></section>

    <section className="bg-[#43a324] px-5 py-16 text-white sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1280px] flex-wrap items-end justify-between gap-8"><h2 className="text-4xl">Built on experience.<br />Driven by responsibility.</h2><Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#171817]">Talk to Our Team <ArrowRight size={17} /></Link></div></section>
  </>;
}
