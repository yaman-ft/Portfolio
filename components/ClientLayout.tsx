"use client";

import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CustomCursor } from "@/components/CustomCursor";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Navbar } from "@/components/Navbar";
import { ReadingProgress } from "@/components/ReadingProgress";
import { BackToTop } from "@/components/BackToTop";

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <CustomCursor />
      <ParticlesBackground />
      <ReadingProgress />
      <Navbar />
      <main>{children}</main>
      <BackToTop />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#1e1b4b",
            color: "#fff",
            border: "1px solid rgba(139,92,246,0.3)",
            backdropFilter: "blur(12px)",
          },
        }}
      />
    </ThemeProvider>
  );
}
