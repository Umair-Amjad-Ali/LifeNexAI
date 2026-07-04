import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Case Studies & Engineering Showcase",
  description:
    "Browse LifeNex AI's portfolio of shipped products and case studies. From bilingual marketplaces to hardware analytics apps, explore the engineering behind each project.",
  openGraph: {
    title: "Portfolio — LifeNex AI Case Studies",
    description:
      "Shipped products and detailed case studies showcasing full-stack engineering excellence across mobile, web, and enterprise platforms.",
    url: "https://lifenexai.com/portfolio",
    type: "website",
  },
  twitter: {
    title: "Portfolio — LifeNex AI Case Studies",
    description:
      "Shipped products and detailed case studies showcasing full-stack engineering excellence.",
  },
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
