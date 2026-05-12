"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const tagColors: Record<string, string> = {
  vue: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  react: "bg-sky-500/10 text-sky-300 border-sky-500/20",
  angular: "bg-red-500/10 text-red-300 border-red-500/20",
  laravel: "bg-rose-500/10 text-rose-300 border-rose-500/20",
  php: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  tailwind: "bg-teal-500/10 text-teal-300 border-teal-500/20",
  typescript: "bg-blue-500/10 text-blue-300 border-blue-500/20",
  next: "bg-gray-500/10 text-gray-300 border-gray-500/20",
  nuxt: "bg-green-500/10 text-green-300 border-green-500/20",
  node: "bg-lime-500/10 text-lime-300 border-lime-500/20",
  docker: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  mysql: "bg-orange-500/10 text-orange-300 border-orange-500/20",
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="group relative glass-card overflow-hidden"
    >
      {/* Image */}
      <Link href={`/project/${project.id}`} className="block">
        <div className="aspect-video bg-gradient-to-br from-primary-900 via-secondary-900 to-primary-800 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl opacity-20 group-hover:scale-150 transition-transform duration-500">
              {project.title[0]}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag.name}
              className={`px-2 py-0.5 text-xs rounded-full border ${tagColors[tag.color] || ""}`}
            >
              {tag.name}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-0.5 text-xs rounded-full bg-white/5 text-gray-400 border border-white/10">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        <Link href={`/project/${project.id}`}>
          <h3 className="text-lg font-bold mb-2 group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
        </Link>

        <p className="text-sm text-gray-400 mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-primary-600 text-white hover:bg-primary-500 transition-colors"
            >
              <ExternalLink size={12} />
              Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full glass border border-white/10 text-gray-300 hover:bg-white/10 transition-colors"
            >
              <Github size={12} />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
