import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/app/data";

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto my-14 grid w-[min(1180px,calc(100%_-_44px))] scroll-mt-28 gap-8 rounded border border-surface/15 bg-green p-7 text-surface md:p-12 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.8fr)] lg:items-center">
      <div>
        <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.08em] text-[#b9d5c6]">Contact</p>
        <h2 className="font-display text-[clamp(2rem,4vw,3.35rem)] font-semibold leading-none text-surface">
          Let’s build systems that solve real problems.
        </h2>
        <p className="mt-5 text-lg leading-8 text-surface/80">
          Open to software engineering opportunities where full-stack execution, reliability, and product thinking matter.
        </p>
      </div>
      <div className="grid gap-2" aria-label="Contact methods">
        <a className="inline-flex min-h-11 items-center gap-3 border border-surface/20 px-3 py-2 text-surface" href={`mailto:${contact.email}`}>
          <Mail size={16} aria-hidden="true" /> {contact.email}
        </a>
        <a className="inline-flex min-h-11 items-center gap-3 border border-surface/20 px-3 py-2 text-surface" href={`tel:${contact.phone.replace(/\s+/g, "")}`}>
          <Phone size={16} aria-hidden="true" /> {contact.phone}
        </a>
        <a className="inline-flex min-h-11 items-center gap-3 border border-surface/20 px-3 py-2 text-surface" href={contact.linkedin} target="_blank" rel="noreferrer">
          <Linkedin size={16} aria-hidden="true" /> LinkedIn
        </a>
        <a className="inline-flex min-h-11 items-center gap-3 border border-surface/20 px-3 py-2 text-surface" href={contact.github} target="_blank" rel="noreferrer">
          <Github size={16} aria-hidden="true" /> GitHub
        </a>
        <span className="inline-flex min-h-11 items-center gap-3 border border-surface/20 px-3 py-2 text-surface">
          <MapPin size={16} aria-hidden="true" /> {contact.location}
        </span>
        <a className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded border border-surface bg-surface px-5 text-sm font-extrabold text-green" href={`mailto:${contact.email}`}>
          Start a conversation <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
