"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen grid-bg flex items-center justify-center">
        <p className="text-2xl text-gray-400">Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen grid-bg pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card overflow-hidden"
        >
          <div className="aspect-video bg-gradient-to-br from-primary-900 via-secondary-900 to-primary-800 flex items-center justify-center">
            <span className="text-6xl opacity-30">{project.title[0]}</span>
          </div>

          <div className="p-8 md:p-12">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag.name}
                  className="px-3 py-1 text-sm rounded-full bg-primary-500/10 text-primary-300 border border-primary-500/20"
                >
                  {tag.name}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {project.title}
            </h1>

            <p className="text-xl text-gray-400 mb-8">
              {project.longDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-white/10 text-gray-200 hover:bg-white/10 transition-all"
                >
                  <Github size={18} />
                  View Source
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
