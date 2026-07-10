import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/app/data";
import { CaseStudyPage } from "@/components/projects/CaseStudyPage";
import { FuelCustodyCaseStudy } from "@/components/projects/FuelCustodyCaseStudy";
import { getAdjacentProjects, getProjectBySlug } from "@/lib/projects";
import { projectMetadata } from "@/lib/seo";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return projectMetadata(project);
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { previous, next } = getAdjacentProjects(project.slug);

  if (project.slug === "fuel-custody-reconciliation-platform") {
    return <FuelCustodyCaseStudy project={project} previous={previous} next={next} />;
  }

  return <CaseStudyPage project={project} previous={previous} next={next} />;
}
