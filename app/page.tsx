import { projects } from "@/app/data";
import { Hero } from "@/components/hero/Hero";
import { SideIndex } from "@/components/layout/SideIndex";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteNav } from "@/components/layout/SiteNav";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { Capabilities } from "@/components/sections/Capabilities";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";

export default function Home() {
  return (
    <main id="top" className="overflow-visible">
      <SiteNav />
      <div className="grid min-h-[calc(100vh-108px)] grid-cols-1 overflow-visible lg:grid-cols-[230px_minmax(0,1fr)]">
        <SideIndex />
        <Hero />
      </div>
      <Capabilities />
      <section id="work" className="mx-auto w-[min(1180px,calc(100%_-_44px))] border-t border-line py-20" aria-labelledby="work-title">
        <div className="mb-8 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(260px,0.55fr)] lg:items-end">
          <div>
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.08em] text-green">Selected Work</p>
            <h2 id="work-title" className="font-display text-[clamp(2rem,4vw,3.35rem)] font-semibold leading-none text-ink">
              Public websites first. Systems depth next.
            </h2>
          </div>
          <p className="leading-7 text-muted">
            Confidential projects use representative diagrams and workflow maps instead of client screenshots.
          </p>
        </div>
        <ProjectGrid projects={projects} />
      </section>


      <ExperienceTimeline />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
