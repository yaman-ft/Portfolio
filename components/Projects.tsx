"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/ProjectCard";

const filters = [
  { key: "All", label: "All" },
  { key: "React", label: "React" },
  { key: "Vue", label: "Vue" },
  { key: "Angular", label: "Angular" },
  { key: "Laravel", label: "Laravel" },
] as const;

export function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative py-24">
      <div className="blob w-96 h-96 bg-primary-500/10 -top-20 -left-20" />

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subheading">
            A selection of projects I&apos;ve built with passion
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === f.key
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-500/25"
                  : "glass text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
