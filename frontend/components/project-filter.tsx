"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Building, Filter, Sparkles } from "lucide-react";
import ProjectCard from "@/components/project-card";
import type { Project } from "@/lib/site-data";

const categories = ["All", "Residential", "Commercial", "Infrastructure"] as const;
const statuses = ["All", "Completed", "Ongoing", "Upcoming"] as const;

type Category = (typeof categories)[number];
type Status = (typeof statuses)[number];

export default function ProjectFilter({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [activeStatus, setActiveStatus] = useState<Status>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const getCategoryCount = (cat: Category) => {
    if (cat === "All") return projects.length;
    return projects.filter((p) => p.category === cat).length;
  };

  const getStatusCount = (st: Status) => {
    if (st === "All") return projects.length;
    return projects.filter((p) => p.status === st).length;
  };

  const filtered = projects.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesStatus = activeStatus === "All" || p.status === activeStatus;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesStatus && matchesSearch;
  });

  return (
    <div className="grid gap-8">
      {/* FILTER BAR CONTAINER */}
      <div className="rounded-[28px] border border-black/8 bg-white p-6 shadow-[0_16px_50px_rgba(20,32,18,.06)] sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Category Tabs with Counts */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 text-xs font-extrabold uppercase tracking-wider text-[#687068] flex items-center gap-1.5">
              <Filter size={14} className="text-[#43a324]" /> Category:
            </span>
            {categories.map((cat) => {
              const count = getCategoryCount(cat);
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold transition-colors duration-200 ${
                    isActive ? "text-white" : "text-[#687068] hover:text-[#2f7f1d]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="category-pill"
                      className="absolute inset-0 rounded-full bg-[#43a324]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                  <span
                    className={`relative z-10 rounded-full px-1.5 py-0.5 text-[10px] font-extrabold ${
                      isActive ? "bg-white/25 text-white" : "bg-[#f0f4ef] text-[#687068]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#687068]" size={16} />
            <input
              type="text"
              placeholder="Search by project name, city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-black/10 bg-[#f7f9f6] py-3 pl-11 pr-4 text-xs font-medium text-[#111611] outline-none transition focus:border-[#43a324] focus:bg-white focus:ring-4 focus:ring-[#43a324]/10"
            />
          </div>
        </div>

        {/* Secondary Status Filter Row with Counts */}
        <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-black/6 pt-5">
          <span className="mr-2 text-xs font-extrabold uppercase tracking-wider text-[#687068]">
            Status:
          </span>
          {statuses.map((status) => {
            const count = getStatusCount(status);
            const isActive = activeStatus === status;
            return (
              <button
                key={status}
                onClick={() => setActiveStatus(status)}
                className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold transition ${
                  isActive
                    ? "bg-[#111711] text-white shadow-sm"
                    : "bg-[#f0f4ef] text-[#687068] hover:bg-[#e4ede2] hover:text-[#111711]"
                }`}
              >
                <span>{status}</span>
                <span className={`text-[10px] opacity-75`}>({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* RESULTS COUNT & CARDS GRID */}
      <div>
        <div className="mb-6 flex items-center justify-between">
          <p className="text-xs font-bold text-[#687068]">
            Showing <span className="text-[#43a324] font-extrabold text-sm">{filtered.length}</span> project{filtered.length === 1 ? "" : "s"}
          </p>
        </div>

        {filtered.length > 0 ? (
          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.88 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="rounded-[28px] border border-dashed border-black/15 bg-[#f7f9f6] p-16 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[#eef8eb] text-[#43a324]">
              <Building size={28} />
            </div>
            <h3 className="mt-4 text-base font-extrabold text-[#111611]">No matching projects found</h3>
            <p className="mt-1.5 text-xs text-[#687068]">Try resetting your search term or selecting another category.</p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setActiveStatus("All");
                setSearchQuery("");
              }}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#43a324] px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-[#2f7f1d]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}