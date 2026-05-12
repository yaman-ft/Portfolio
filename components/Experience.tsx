"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 grid-bg">
      <div className="blob w-80 h-80 bg-secondary-500/10 bottom-0 right-0" />

      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Work Experience</h2>
          <p className="section-subheading">My professional journey</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-500 md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className={`relative flex flex-col md:flex-row gap-6 mb-12 ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Icon on timeline */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-[#0a0a0f] -translate-x-1/2 mt-6 z-10" />

              {/* Spacer for alignment */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <div className="md:w-1/2 ml-16 md:ml-0">
                <div className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{exp.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-primary-400 text-sm">{exp.company}</p>
                    </div>
                  </div>
                  <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary-500/10 text-primary-300 border border-primary-500/20 mb-4">
                    {exp.period}
                  </span>
                  <ul className="space-y-2">
                    {exp.description.map((desc, j) => (
                      <li key={j} className="text-sm text-gray-400 flex gap-2">
                        <span className="text-primary-400 mt-1">▹</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
