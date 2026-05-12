"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ReadingProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[999]">
      <div
        className="h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
