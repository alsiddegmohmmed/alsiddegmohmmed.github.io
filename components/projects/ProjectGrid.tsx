import type { Project } from "@/app/data";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.slug} />
      ))}
    </div>
  );
}
