import { projects } from "@/app/data";

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectIndex(slug: string) {
  return projects.findIndex((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = getProjectIndex(slug);

  return {
    previous: index > 0 ? projects[index - 1] : undefined,
    next: index >= 0 && index < projects.length - 1 ? projects[index + 1] : undefined
  };
}
