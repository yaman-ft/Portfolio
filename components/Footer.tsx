"use client";

import { Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © {year} {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-sm text-gray-500 flex items-center gap-1">
          Built with <Heart size={14} className="text-red-400" /> using Next.js
          & TailwindCSS
        </p>
      </div>
    </footer>
  );
}
