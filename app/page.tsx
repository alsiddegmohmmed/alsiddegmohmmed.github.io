import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  RadioTower,
  ShieldCheck,
  Workflow,
  Zap
} from "lucide-react";
import { capabilities, contact, projects, techSnapshot, timeline } from "./data";

const capabilityIcons = [Layers3, Code2, RadioTower, ShieldCheck];

function HeroSystemDiagram() {
  return (
    <div className="hero-system" aria-label="Layered system illustration">
      <div className="system-label label-top">Systems thinking. Measurable impact.</div>
      <svg viewBox="0 0 620 500" role="img" aria-labelledby="hero-system-title">
        <title id="hero-system-title">Layered architecture diagram showing data, application, service, and edge layers</title>
        <defs>
          <linearGradient id="layerFill" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e8eee9" />
          </linearGradient>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#0b1f1d" floodOpacity="0.14" />
          </filter>
        </defs>

        <g className="diagram-grid" opacity="0.45">
          {Array.from({ length: 11 }).map((_, i) => (
            <path key={`h-${i}`} d={`M80 ${80 + i * 28} L540 ${80 + i * 28}`} />
          ))}
          {Array.from({ length: 11 }).map((_, i) => (
            <path key={`v-${i}`} d={`M120 ${48 + i * 28} L460 ${388 + i * 0}`} transform={`translate(${i * 18},0)`} />
          ))}
        </g>

        <g className="layer layer-one" filter="url(#softShadow)">
          <path d="M150 305 L310 250 L470 305 L310 370 Z" fill="url(#layerFill)" />
          <path d="M150 305 L310 250 L470 305 L310 370 Z" />
        </g>
        <g className="layer layer-two">
          <path d="M175 240 L310 195 L445 240 L310 295 Z" fill="#f8faf7" />
          <path d="M175 240 L310 195 L445 240 L310 295 Z" />
        </g>
        <g className="layer layer-three">
          <path d="M205 175 L310 142 L415 175 L310 218 Z" fill="#f1f5f0" />
          <path d="M205 175 L310 142 L415 175 L310 218 Z" />
        </g>

        <g className="core-cube">
          <path d="M272 160 L310 140 L348 160 L310 182 Z" />
          <path d="M272 160 L310 182 L310 228 L272 205 Z" />
          <path d="M348 160 L310 182 L310 228 L348 205 Z" />
        </g>

        <g className="data-paths">
          <path d="M108 360 C178 330 205 318 272 205" />
          <path d="M512 356 C442 320 410 298 348 205" />
          <path d="M310 426 L310 228" />
          <path d="M90 120 C180 92 260 94 310 140" />
          <path d="M530 120 C445 92 360 94 310 140" />
        </g>

        <g className="nodes">
          {[ [108,360], [512,356], [310,426], [90,120], [530,120], [210,282], [410,280], [310,100], [250,185], [372,190] ].map(([cx, cy], index) => (
            <circle key={index} cx={cx} cy={cy} r={index < 5 ? 4.5 : 3.2} />
          ))}
        </g>

        <g className="annotation left">
          <path d="M72 170 L170 170" />
          <text x="72" y="152">Data In</text>
          <text x="72" y="188">Events · telemetry · transactions</text>
        </g>
        <g className="annotation right">
          <path d="M450 170 L552 170" />
          <text x="462" y="152">Operators</text>
          <text x="462" y="188">Tools · insights · actions</text>
        </g>
        <g className="annotation bottom">
          <path d="M390 425 L545 425" />
          <text x="400" y="407">Outcomes</text>
          <text x="400" y="443">Reliability · clarity · control</text>
        </g>
      </svg>
    </div>
  );
}

function ProjectVisual({ type }: { type: string }) {
  if (type === "website") {
    return (
      <div className="project-visual website-visual">
        <div className="mock-browser"><span /><span /><span /></div>
        <div className="mock-sidebar" />
        <div className="mock-main">
          <div className="mock-line strong" />
          <div className="mock-line" />
          <div className="mock-grid">
            <span /><span /><span /><span />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`project-visual ${type}-visual`}>
      <div className="diagram-node source">Source</div>
      <div className="diagram-line" />
      <div className="diagram-node core">{type === "fuel" ? "Reconcile" : type === "iot" ? "Gateway" : type === "hospital" ? "Workflow" : "Engine"}</div>
      <div className="diagram-line" />
      <div className="diagram-node output">Report</div>
    </div>
  );
}

export default function Home() {
  return (
    <main id="top">
      <aside className="side-index" aria-hidden="true">
        <span>Casebook</span>
        <a href="#top">01</a>
        <a href="#work">02</a>
        <a href="#capabilities">03</a>
        <a href="#experience">04</a>
        <a href="#contact">05</a>
      </aside>

      <nav className="site-nav" aria-label="Primary navigation">
        <Link href="#top" className="brand" aria-label="Al Siddeg Omer home">
          <span>AS</span>
          <div>
            <strong>Al Siddeg Omer</strong>
            <small>Software Engineer</small>
          </div>
        </Link>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="section-kicker">Systems Engineer · Builder · Problem Solver</p>
          <h1>I build systems that solve real problems at scale.</h1>
          <p className="hero-line">Systems thinking. <span>Measurable impact.</span></p>
          <p className="hero-lede">
            I build full-stack software across frontend, backend, real-time workflows, and cloud-connected platforms for industries where reliability matters.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">Explore my work <ArrowUpRight size={16} /></a>
            <a className="button secondary" href="#experience">View experience</a>
          </div>
          <div className="hero-meta" aria-label="Availability and location">
            <div><span>Based in</span><strong>{contact.location}</strong></div>
            <div><span>Available for</span><strong>Full-time opportunities</strong></div>
          </div>
        </div>
        <HeroSystemDiagram />
      </section>

      <section id="work" className="section-shell work-section">
        <div className="section-heading split">
          <div>
            <p className="section-kicker">Selected Work</p>
            <h2>Public websites first. Systems depth next.</h2>
          </div>
          <p className="section-note">Confidential projects use representative diagrams and workflow maps instead of client screenshots.</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <Link className="project-card" href={`/projects/${project.slug}`} key={project.slug}>
              <div className="project-card-top">
                <span>{project.order}</span>
                <em>{project.status}</em>
              </div>
              <h3>{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <ProjectVisual type={project.visual} />
              <p>{project.summary}</p>
              <div className="tag-row">
                {project.stack.slice(0, 3).map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              <div className="project-link">View case study <ArrowUpRight size={14} /></div>
            </Link>
          ))}
        </div>
      </section>

      <section id="capabilities" className="section-shell capability-section">
        <div className="section-heading">
          <p className="section-kicker">Capabilities</p>
          <h2>Engineering across product, data, and operations.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((capability, index) => {
            const Icon = capabilityIcons[index] ?? Workflow;
            return (
              <article className="capability-card" key={capability.title}>
                <Icon size={24} />
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
                <ul>
                  {capability.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </article>
            );
          })}
        </div>
        <div className="tech-panel">
          <div>
            <p className="section-kicker">Tech Snapshot</p>
            <h3>Tools I use to ship production systems.</h3>
          </div>
          <div className="tech-list">
            {techSnapshot.map((tech) => <span key={tech}>{tech}</span>)}
          </div>
        </div>
      </section>

      <section id="experience" className="section-shell experience-section">
        <div className="section-heading split">
          <div>
            <p className="section-kicker">Experience Timeline</p>
            <h2>From client websites to enterprise systems.</h2>
          </div>
          <a className="text-link" href={`mailto:${contact.email}`}>Request CV <ArrowUpRight size={14} /></a>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <article className="timeline-item" key={`${item.company}-${item.period}`}>
              <span className="timeline-dot" />
              <p>{item.period}</p>
              <h3>{item.company}</h3>
              <strong>{item.role}</strong>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell contact-section">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>Let’s build systems that solve real problems.</h2>
          <p>Open to software engineering opportunities where full-stack execution, reliability, and product thinking matter.</p>
        </div>
        <div className="contact-details">
          <a href={`mailto:${contact.email}`}><Mail size={16} /> {contact.email}</a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
          <a href={contact.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
          <span><MapPin size={16} /> {contact.location}</span>
        </div>
        <a className="button light" href={`mailto:${contact.email}`}>Start a conversation <ArrowUpRight size={16} /></a>
      </section>

      <footer className="site-footer section-shell">
        <span>© 2026 Al Siddeg Omer</span>
        <span>Built with Next.js</span>
        <span>System thinking. Measurable impact.</span>
      </footer>
    </main>
  );
}
