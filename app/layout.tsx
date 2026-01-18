import "./globals.css";
import type { Metadata } from "next";
import EntranceAnim from "@/components/animations/EntranceAnim";
export const metadata: Metadata = {
  title: "Portfolio",
  description: "Creative portfolio with motion + 3D.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <EntranceAnim>
        {children}
        </EntranceAnim>
      </body>
    </html>
  );
}
