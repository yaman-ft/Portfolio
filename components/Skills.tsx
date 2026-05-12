"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { SkillCard } from "@/components/SkillCard";

const categories = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "styling", label: "Styling" },
  { key: "tools", label: "Tools" },
] as const;

export function Skills() {
  const [active, setActive] = useState<string>("all");

  const filtered = active === "all" ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="relative py-24 grid-bg">
      <div className="blob w-72 h-72 bg-secondary-500/10 top-0 right-0" />

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Skills & Expertise</h2>
          <p className="section-subheading">
            Technologies I work with on a daily basis
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat.key
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-500/25"
                  : "glass text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filtered.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
