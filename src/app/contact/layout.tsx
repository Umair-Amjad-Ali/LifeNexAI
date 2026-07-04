import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Start Your Project with LifeNex AI",
  description:
    "Get in touch with LifeNex AI to discuss your next software project. Whether you need AI healthcare platforms, mobile apps, or enterprise web solutions — let's build something extraordinary together.",
  openGraph: {
    title: "Contact — Start Your Project with LifeNex AI",
    description:
      "Discuss your next software project with our engineering team. AI platforms, mobile apps, and enterprise web solutions.",
    url: "https://lifenexai.com/contact",
    type: "website",
  },
  twitter: {
    title: "Contact — Start Your Project with LifeNex AI",
    description:
      "Discuss your next software project with our engineering team.",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
