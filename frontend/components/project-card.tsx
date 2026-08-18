"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/lib/site-data";
import { scaleIn } from "@/components/motion-primitives";

export default function ProjectCard({ project, dark = false }: { project: Project; dark?: boolean }) {
  return (
    <motion.article
      variants={scaleIn}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className={`group overflow-hidden rounded-[24px] border transition-shadow duration-300 ${
        dark
          ? "border-white/10 bg-white/[0.04] text-white hover:border-white/20"
          : "border-black/8 bg-white shadow-[0_14px_45px_rgba(20,32,18,.06)] hover:shadow-[0_24px_65px_rgba(20,32,18,.13)]"
      }`}
    >
      <Link href={`/projects/${project.slug}`} className="relative block aspect-[4/3] overflow-hidden">
        <motion.div className="absolute inset-0" whileHover={{ scale: 1.06 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </motion.div>
        <span className="absolute left-4 top-4 z-10 rounded-full bg-[#43a324] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wide text-white shadow-lg">
          {project.category}
        </span>
      </Link>

      <div className="p-5">
        <div className={`flex items-center gap-1 text-xs ${dark ? "text-white/45" : "text-[#687068]"}`}>
          <MapPin size={14} className="text-[#43a324]" /> {project.location}
        </div>
        <div className="mt-3 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-extrabold tracking-tight">{project.title}</h3>
            <p className={`mt-2 line-clamp-2 text-sm leading-6 ${dark ? "text-white/50" : "text-[#687068]"}`}>
              {project.description}
            </p>
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-transform duration-300 group-hover:rotate-12 group-hover:border-[#43a324] group-hover:text-[#43a324] ${
              dark ? "border-white/15 text-white" : "border-black/10 text-[#2f7f1d]"
            }`}
            aria-label={`View ${project.title}`}
          >
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}