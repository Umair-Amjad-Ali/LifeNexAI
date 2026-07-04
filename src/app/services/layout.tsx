import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Engineering Verticals & Technical Capabilities",
  description:
    "Explore LifeNex AI's full-stack engineering services including AI-powered healthcare platforms, cross-platform mobile development with Flutter, enterprise web solutions with Next.js, and custom backend architectures.",
  openGraph: {
    title: "Services — LifeNex AI Engineering Verticals",
    description:
      "Full-stack engineering services: AI healthcare platforms, Flutter mobile apps, Next.js web solutions, and custom backend architectures.",
    url: "https://lifenexai.com/services",
    type: "website",
  },
  twitter: {
    title: "Services — LifeNex AI Engineering Verticals",
    description:
      "Full-stack engineering services: AI healthcare platforms, Flutter mobile apps, Next.js web solutions, and custom backend architectures.",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
