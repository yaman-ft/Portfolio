"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Mail } from "lucide-react";
import { personalInfo, stats } from "@/data/portfolio";
import { CountUp } from "@/components/CountUp";
import { SpotlightEffect } from "@/components/SpotlightEffect";

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = personalInfo.titles[titleIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
      }, 100);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length - 1));
      }, 50);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setTitleIndex((prev) => (prev + 1) % personalInfo.titles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, titleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen grid-bg flex items-center overflow-hidden"
    >
      <SpotlightEffect />

      {/* Decorative blobs */}
      <div className="blob w-96 h-96 bg-primary-500/10 top-20 -left-20" />
      <div className="blob w-80 h-80 bg-secondary-500/10 bottom-20 -right-20" />

      {/* Floating elements */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-primary-400/50"
      />
      <motion.div
        animate={{ y: [10, -15, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-secondary-400/50"
      />

      <div className="max-w-7xl mx-auto px-4 pt-20 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-primary-400 font-mono text-sm mb-4 tracking-wider"
            >
              Hi all, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
            >
              {personalInfo.name.split(" ")[0]}{" "}
              <span className="gradient-text">
                {personalInfo.name.split(" ").slice(1).join(" ")}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-400 mb-6 h-8 typing-cursor"
            >
              {text}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 text-lg"
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
              >
                <ExternalLink size={18} />
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full glass border border-white/10 text-gray-200 hover:bg-white/10 transition-all duration-300"
              >
                <Mail size={18} />
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Avatar & Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full gradient-border p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-900 via-secondary-900 to-primary-800 flex items-center justify-center overflow-hidden">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating stat cards */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 glass-card px-4 py-3 text-center"
              >
                <p className="text-2xl font-bold gradient-text">
                  <CountUp end={4} />
                </p>
                <p className="text-xs text-gray-400">Years Exp</p>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -left-4 glass-card px-4 py-3 text-center"
              >
                <p className="text-2xl font-bold gradient-text">
                  <CountUp end={20} />
                  <span>+</span>
                </p>
                <p className="text-xs text-gray-400">Projects</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-6 text-center hover:-translate-y-1"
            >
              <p className="text-3xl md:text-4xl font-bold gradient-text">
                <CountUp end={stat.value} />
                {stat.suffix}
              </p>
              <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown size={20} className="text-gray-500" />
      </motion.div>
    </section>
  );
}
