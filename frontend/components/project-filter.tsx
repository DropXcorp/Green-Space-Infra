"use client";
import { useState } from "react";
import ProjectCard from "@/components/project-card";
import type { Project } from "@/lib/site-data";
const tabs=["All","Completed","Ongoing"] as const;
export default function ProjectFilter({projects}:{projects:Project[]}){const [active,setActive]=useState<(typeof tabs)[number]>("All");const filtered=projects.filter(project=>active==="All"||project.status===active);return <div><div className="flex flex-wrap gap-2 border-b border-black/10 pb-6">{tabs.map(tab=><button key={tab} onClick={()=>setActive(tab)} className={`rounded-full px-5 py-2.5 text-sm font-bold ${active===tab?"bg-[#43a324] text-white":"bg-[#f6f8f5] text-[#555d55] hover:text-[#43a324]"}`}>{tab}</button>)}</div><div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{filtered.map(project=><ProjectCard key={project.slug} project={project}/>)}</div></div>}
