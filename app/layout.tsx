import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yaman Abo Khalil | Full Stack Developer",
  description:
    "Full Stack Developer specializing in Angular, React, Vue.js, and Laravel. Building scalable, high-performance web applications.",
  keywords: [
    "Yaman Abo Khalil",
    "Full Stack Developer",
    "Angular",
    "React",
    "Vue.js",
    "Next.js",
    "Laravel",
    "Web Developer",
  ],
  openGraph: {
    title: "Yaman Abo Khalil | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Angular, React, Vue.js, and Laravel.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
