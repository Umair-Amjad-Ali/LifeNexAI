import type { Metadata } from "next";
import { portfolioDetails } from "@/data/portfolioData";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = portfolioDetails[id];

  if (!project) {
    return {
      title: "Case Study Not Found",
      description: "The requested project case study could not be found.",
    };
  }

  const title = `${project.title} — ${project.subtitle}`;
  const description = project.longDescription.slice(0, 160) + "…";

  return {
    title,
    description,
    openGraph: {
      title: `${project.title} Case Study — LifeNex AI`,
      description,
      url: `https://lifenexai.com/portfolio/${id}`,
      type: "article",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `${project.title} — ${project.category}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} Case Study — LifeNex AI`,
      description,
      images: [project.image],
    },
    alternates: {
      canonical: `/portfolio/${id}`,
    },
  };
}

// Generate static params for all known portfolio projects
export async function generateStaticParams() {
  return Object.keys(portfolioDetails).map((id) => ({ id }));
}

export default function PortfolioDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
