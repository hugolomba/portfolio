
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import ProjectDetailClient from "./project-detail-client";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Hugo Lomba`,
      description: project.description,
      url: `/projects/${project.slug}`,
      images: [
        {
          url: project.imageUrl,
          alt: `${project.title} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Hugo Lomba`,
      description: project.description,
      images: [project.imageUrl],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient />;
}