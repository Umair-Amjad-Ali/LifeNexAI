import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products — AI-Powered Digital Solutions & Platforms",
  description:
    "Discover LifeNex AI's product portfolio: production-grade AI healthcare platforms, intelligent diagnostic tools, and enterprise automation systems built with cutting-edge technology stacks.",
  openGraph: {
    title: "Products — LifeNex AI Digital Solutions",
    description:
      "Production-grade AI healthcare platforms, intelligent diagnostic tools, and enterprise automation systems.",
    url: "https://lifenexai.com/products",
    type: "website",
  },
  twitter: {
    title: "Products — LifeNex AI Digital Solutions",
    description:
      "Production-grade AI healthcare platforms, intelligent diagnostic tools, and enterprise automation systems.",
  },
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
