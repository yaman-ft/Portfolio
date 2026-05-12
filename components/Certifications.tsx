"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { certifications } from "@/data/portfolio";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="blob w-72 h-72 bg-primary-500/10 top-0 left-0" />

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Certifications</h2>
          <p className="section-subheading">
            Continuous learning is my superpower
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="glass-card p-6 flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center flex-shrink-0">
                <Award size={22} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1 group-hover:text-primary-400 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-400">{cert.issuer}</p>
                <p className="text-xs text-gray-500 mt-1">{cert.date}</p>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary-400 hover:text-primary-300 mt-2 transition-colors"
                  >
                    <ExternalLink size={12} />
                    View credential
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
