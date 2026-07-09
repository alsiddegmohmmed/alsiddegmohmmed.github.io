import type { Metadata } from "next";
import type { Project } from "@/app/data";

export const siteUrl = "https://alsiddegmohmmed.vercel.app";

export function projectMetadata(project: Project): Metadata {
  const title = `${project.title} | Al Siddeg Omer`;
  const description = project.summary;

  return {
    title,
    description,
    alternates: {
      canonical: `/projects/${project.slug}`
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/projects/${project.slug}`,
      siteName: "Al Siddeg Omer Portfolio",
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
