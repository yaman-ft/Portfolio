"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import type { Skill } from "@/types";

const skillIcons: Record<string, string> = {
  SiVuedotjs: "💚",
  SiReact: "⚛️",
  SiAngular: "🔴",
  SiLaravel: "❤️",
  SiNodedotjs: "💚",
  SiTailwindcss: "🌊",
  SiSass: "💗",
  SiBootstrap: "💜",
  SiGit: "🔀",
  SiDocker: "🐳",
  SiFigma: "🎨",
  SiVite: "⚡",
};

export function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="perspective-1000 h-44"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full h-full preserve-3d"
      >
        {/* Front */}
        <div className="absolute inset-0 glass-card p-6 flex flex-col items-center justify-center gap-3 backface-hidden">
          <span className="text-3xl">{skillIcons[skill.icon] || "🔧"}</span>
          <h3 className="font-semibold text-sm text-center">{skill.name}</h3>
          <div className="w-full bg-gray-700/30 rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.level}%` } : {}}
              transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
            />
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 glass-card p-6 flex items-center justify-center backface-hidden [transform:rotateY(180deg)]">
          <p className="text-sm text-gray-300 text-center leading-relaxed">
            {skill.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
