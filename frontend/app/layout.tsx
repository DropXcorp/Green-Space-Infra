import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";


export const metadata: Metadata = {
  title: {
    default: "Green Space Infra | Engineering Better Spaces. Enriching Lives.",
    template: "%s | Green Space Infra",
  },
  description:
    "Green Space Infra delivers world-class real estate, commercial developments, and civil infrastructure solutions across India.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans text-[#151715] bg-white selection:bg-[#43a324] selection:text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
