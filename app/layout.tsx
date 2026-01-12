import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rafalino — Portfolio",
  description: "Neon-inspired portfolio built with Next.js + Tailwind.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
