import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Database,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  RadioTower,
  Server,
  ShieldCheck,
  Workflow,
  Zap
} from "lucide-react";

const contact = {
  email: "siddegx@gmail.com",
  phone: "+966 539 288 603",
  linkedin: "https://www.linkedin.com/in/alsiddegmohmmed/",
  github: "https://github.com/alsiddegmohmmed"
};

const proofPoints = [
  { value: "4+", label: "years building production software" },
  { value: "10+", label: "projects delivered across web and enterprise systems" },
  { value: "100+", label: "fuel stations targeted by SaaS architecture" },
  { value: "20+", label: "SPL branches supported by IoT operations work" }
];

const aboutHighlights = [
  "Architecting systems from zero, including technology decisions, API design, database models, and deployment plans.",
  "Writing technical documentation and presenting solutions to enterprise stakeholders in the Saudi market.",
  "Building Arabic-first and RTL-aware interfaces for teams and users who operate in the region every day."
];

const caseStudies = [
  {
    title: "Petroleum Digital Operating System",
    company: "Primus - Trading & Investment",
    period: "Jul 2025 - Feb 2026",
    domain: "Fuel governance · Multi-tenant SaaS · Edge computing",
    icon: ShieldCheck,
    summary:
      "Designed and built a production-ready fuel governance platform architected for national-scale station operations, auditability, and offline authorization.",
    outcomes: [
      "Architected a multi-tenant SaaS platform for 100+ stations and presented it to enterprise clients including Al-Drees.",
      "Designed an offline-first edge layer using industrial controllers so every fuel liter can be geo-tagged, authorized, and audit-logged without connectivity dependency.",
      "Built loyalty and wallet capabilities with OTP auth, RFID/plate recognition integration, event sourcing, and AI-based anomaly detection."
    ],
    stack: ["Django 5", "PostgreSQL", "Redis", "React", "TypeScript", "Docker", "Event sourcing"]
  },
  {
    title: "Real-Time Cash Management System",
    company: "Primus - Trading & Investment",
    period: "Jul 2025 - Feb 2026",
    domain: "Fintech automation · WebSockets · Offline-first edge",
    icon: Zap,
    summary:
      "Built a cash recycler platform connecting CDM machines, a cloud backend, mobile workflows, and a live operational dashboard.",
    outcomes: [
      "Engineered workflows to reduce daily reconciliation from 2+ hours to about 5 minutes by removing manual staff cash handling.",
      "Built a WebSocket event pipeline via AWS API Gateway, designed for 5,000+ concurrent connections with EventBridge and Redis routing.",
      "Designed the offline-first edge layer using SQLite and 4G LTE failover, built to store 10,000+ transactions locally with zero data loss."
    ],
    stack: ["Node.js", "AWS Lambda", "Aurora PostgreSQL", "React", "React Native", "WebSockets", "Redis", "EventBridge"]
  },
  {
    title: "Hospital Information System",
    company: "Sudan Army Hospital",
    period: "2025 - 2026",
    domain: "Healthcare · RBAC · Monitoring · Large-scale operations",
    icon: Server,
    summary:
      "Architected and built a hospital management platform designed for thousands of users and hundreds of doctors, pending authority sign-off for deployment.",
    outcomes: [
      "Co-architected the system from scratch, covering database schema, API design, authentication model, and user-role flows.",
      "Built the FastAPI backend with full RBAC/JWT auth and a Next.js 14 frontend with distinct UI paths by role.",
      "Designed operational foundations with Redis, scheduled jobs, Dockerized services, and Prometheus/Grafana observability.",
      "Balanced clinical workflow requirements with secure access control, maintainable APIs, and deployment readiness."
    ],
    stack: ["FastAPI", "Python 3.12", "PostgreSQL", "Next.js 14", "TypeScript", "Redis", "Prometheus/Grafana"]
  },
  {
    title: "IoT Operations Platform",
    company: "Inseejam · SPL",
    period: "Nov 2024 - Jun 2025",
    domain: "IoT · Telemetry · Multi-branch operations",
    icon: RadioTower,
    summary:
      "Built a centralized IoT operations platform for branch managers to monitor devices, track energy, and automate controls.",
    outcomes: [
      "Built React and Next.js frontend architecture for real-time device status, scheduling controls, and branch-level operations.",
      "Developed custom hooks such as useEdgeDevices and useSchedulerSettings to keep data fetching and UI behavior cleanly separated.",
      "Integrated physical devices with ThingsBoard using Java and .NET services for telemetry ingestion and remote control.",
      "Contributed to Node.js backend services and the WebSocket layer for live telemetry across 20+ SPL branches."
    ],
    stack: ["React", "Next.js", "TypeScript", "Redux", "Node.js", "WebSockets", "ThingsBoard"]
  },
  {
    title: "Ecommerce & Admin Platforms",
    company: "Dataline - Qatar",
    period: "May 2024 - Aug 2024",
    domain: "Commerce · Admin systems · API optimization",
    icon: Layers3,
    summary:
      "Built admin dashboards and ecommerce platforms with modern full-stack JavaScript, performance-minded APIs, and maintainable data models.",
    outcomes: [
      "Delivered dashboards and commerce interfaces using React, Next.js, TypeScript, Node.js, and MongoDB.",
      "Optimized APIs and database models for better responsiveness and maintainable operations.",
      "Worked across product UI, backend integration, and client-facing delivery constraints."
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "API design"]
  }
];

const skills = [
  {
    title: "Frontend",
    icon: Cpu,
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Redux", "Zustand", "RTL/Arabic UI"]
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "NestJS", "Python", "Django", "FastAPI", "REST APIs", "tRPC", "JWT/RBAC"]
  },
  {
    title: "Architecture",
    icon: Workflow,
    items: ["Multi-tenant SaaS", "Event-driven systems", "Offline-first", "Microservices", "Edge computing", "Technical documents"]
  },
  {
    title: "Data",
    icon: Database,
    items: ["PostgreSQL", "Aurora", "MySQL", "MongoDB", "SQLite", "Redis"]
  },
  {
    title: "Cloud & DevOps",
    icon: ShieldCheck,
    items: ["AWS Lambda", "API Gateway", "EventBridge", "S3", "CloudWatch", "Docker", "CI/CD"]
  },
  {
    title: "Real-Time & IoT",
    icon: RadioTower,
    items: ["WebSockets", "ThingsBoard", "Telemetry", "IoT integration", "4G failover", "Remote control", "Java", "C# .NET"]
  }
];

const builds = [
  {
    title: "Warehouse Management Dashboard",
    category: "Operations dashboard",
    image: "/images/Dark Blue Simple Dark Tech and  Bio-Link Warehouse.png",
    href: "https://warehousemangement.vercel.app",
    repo: "https://github.com/alsiddegmohmmed/material-kit-react",
    stack: ["React", "TypeScript", "Firebase"]
  },
  {
    title: "Ecommerce Admin",
    category: "Commerce operations",
    image: "/images/devias.png",
    href: "https://material-dashboard-dusky.vercel.app/",
    repo: "https://github.com/alsiddegmohmmed/ecommerce-admin",
    stack: ["Next.js", "Node.js", "Dashboard"]
  },
  {
    title: "AI Resume Builder",
    category: "AI productivity",
    image: "/images/Screenshot (195).png",
    href: "https://github.com/alsiddegmohmmed/ai-resume-builder",
    repo: "https://github.com/alsiddegmohmmed/ai-resume-builder",
    stack: ["JavaScript", "Backend API", "Product"]
  },
  {
    title: "Captivate Website",
    category: "Product website",
    image: "/images/captive.png",
    href: "https://captivate-website.vercel.app/",
    repo: "https://github.com/alsiddegmohmmed/captivate-website",
    stack: ["Next.js", "TypeScript", "Tailwind"]
  },
  {
    title: "Real Estate Experience",
    category: "Frontend build",
    image: "/images/preview.png",
    href: "https://alsiddegmohmmed.github.io/Real-estate/",
    repo: "https://github.com/alsiddegmohmmed/Real-estate",
    stack: ["HTML", "CSS", "Responsive UI"]
  },
  {
    title: "Sudan Go",
    category: "Travel prototype",
    image: "/images/Dark Blue Simple Dark Tech and Gaming Bio-Link Website.png",
    href: "https://alsiddegmohmmed.github.io/SudanGo/",
    repo: "https://github.com/alsiddegmohmmed/SudanGo",
    stack: ["HTML", "CSS", "Product concept"]
  }
];

const timeline = [
  {
    role: "Software Engineer / Solution Engineer",
    company: "Primus - Trading & Investment",
    period: "Jul 2025 - Feb 2026",
    text: "Built enterprise software products across fintech, industrial automation, and healthcare from architecture planning through backend and frontend delivery."
  },
  {
    role: "Full Stack Engineer",
    company: "Inseejam",
    period: "Nov 2024 - Jun 2025",
    text: "Delivered IoT operations capabilities for SPL branches, including device integration, telemetry, WebSocket services, and dashboards."
  },
  {
    role: "Full Stack Engineer",
    company: "Dataline - Qatar",
    period: "May 2024 - Aug 2024",
    text: "Built ecommerce and admin platforms with React, Next.js, TypeScript, Node.js, and MongoDB."
  },
  {
    role: "Full Stack Web Developer",
    company: "Space, Modern Identity, Careerna, DAM, Mastermind-Tech",
    period: "2021 - 2024",
    text: "Delivered responsive websites, SEO improvements, and client projects across Saudi Arabia and Sudan."
  }
];

const principles = [
  "Architecture before code",
  "Offline behavior is a product requirement",
  "Operational visibility from day one",
  "Arabic-first UX belongs in the system design"
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Al Siddeg Omer home">
          ASO
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#case-studies">Case studies</a>
          <a href="#skills">Skills</a>
          <a href="#builds">Builds</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="top" className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">
            <MapPin size={16} aria-hidden="true" />
            Dammam, Saudi Arabia · Open to full-stack and frontend roles
          </p>
          <h1>Senior Full-Stack Engineer building enterprise software for real operational problems.</h1>
          <p className="hero-lede">
            From architecture to deployment, I own the full stack across fintech infrastructure, IoT platforms,
            healthcare systems, SaaS products, and Arabic-first user experiences.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button primary" href="#case-studies">
              View my work
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="button secondary" href={`mailto:${contact.email}`}>
              <Mail size={18} aria-hidden="true" />
              Contact me
            </a>
            <a className="button secondary" href={contact.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} aria-hidden="true" />
              LinkedIn
            </a>
            <a className="icon-button" href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <Github size={20} aria-hidden="true" />
            </a>
          </div>
          <div className="stack-strip" aria-label="Core technologies">
            {["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS", "Arabic/RTL", "Docker"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="Enterprise systems architecture snapshot">
          <div className="system-panel">
            <div className="system-panel-header">
              <span>Enterprise System Map</span>
              <span>Live-ready architecture</span>
            </div>
            <div className="system-grid">
              {[
                ["Edge", "Offline controllers · SQLite · 4G failover"],
                ["Cloud", "AWS Lambda · API Gateway · EventBridge"],
                ["Backend", "Django · FastAPI · NestJS · RBAC"],
                ["Data", "PostgreSQL · Aurora · Redis · audit logs"]
              ].map(([title, text]) => (
                <div className="system-node" key={title}>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <div className="signal-row" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>

      <section className="proof section-shell" aria-labelledby="proof-heading">
        <div>
          <p className="section-kicker">Career signal</p>
          <h2 id="proof-heading">Systems with real operational constraints.</h2>
        </div>
        <div className="proof-grid">
          {proofPoints.map((point) => (
            <div className="proof-card" key={point.label}>
              <strong>{point.value}</strong>
              <span>{point.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="about-section section-shell section-block" aria-labelledby="about-heading">
        <div className="section-heading compact">
          <p className="section-kicker">About</p>
          <h2 id="about-heading">I build systems, not just features.</h2>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p>
              I&apos;m Siddeg Omer, a Full Stack Engineer with 4+ years of experience building enterprise-grade
              software in Saudi Arabia. My work spans IoT platforms, fintech systems, healthcare infrastructure,
              industrial automation, ecommerce, and SaaS products.
            </p>
            <p>
              What makes my background different is the scope of what I&apos;ve worked on. I don&apos;t only build UI
              or API tickets; I help shape architecture, plan implementation, document technical decisions, and
              present solutions to enterprise clients.
            </p>
          </div>
          <div className="about-list">
            {aboutHighlights.map((item) => (
              <div key={item}>
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="case-studies" className="section-shell section-block" aria-labelledby="case-heading">
        <div className="section-heading">
          <p className="section-kicker">Featured case studies</p>
          <h2 id="case-heading">Architecture, delivery, and technical ownership.</h2>
          <p>
            These projects are written at the system level because the value was in planning, integration, reliability,
            and production readiness, not just screens. Client codebases are private, so the emphasis is on role,
            system design, and technical decisions.
          </p>
        </div>

        <div className="case-grid">
          {caseStudies.map((study) => {
            const Icon = study.icon;
            return (
              <article className="case-card" key={study.title}>
                <div className="case-topline">
                  <div className="case-icon">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <div>
                    <span>{study.period}</span>
                    <strong>{study.company}</strong>
                  </div>
                </div>
                <p className="case-domain">{study.domain}</p>
                <h3>{study.title}</h3>
                <p>{study.summary}</p>
                <ul>
                  {study.outcomes.map((outcome) => (
                    <li key={outcome}>
                      <CheckCircle2 size={17} aria-hidden="true" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
                <div className="tag-row">
                  {study.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="skills" className="section-shell section-block" aria-labelledby="skills-heading">
        <div className="section-heading compact">
          <p className="section-kicker">Technical range</p>
          <h2 id="skills-heading">Full-stack depth from interface to edge.</h2>
        </div>
        <div className="skills-grid">
          {skills.map((group) => {
            const Icon = group.icon;
            return (
              <article className="skill-card" key={group.title}>
                <div className="skill-title">
                  <Icon size={20} aria-hidden="true" />
                  <h3>{group.title}</h3>
                </div>
                <div className="skill-list">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-shell section-block split-section" aria-labelledby="principles-heading">
        <div>
          <p className="section-kicker">How I work</p>
          <h2 id="principles-heading">Senior engineering is making systems understandable before they become expensive.</h2>
        </div>
        <div className="principles-list">
          {principles.map((principle) => (
            <div key={principle}>
              <CheckCircle2 size={18} aria-hidden="true" />
              <span>{principle}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="builds" className="section-shell section-block" aria-labelledby="builds-heading">
        <div className="section-heading">
          <p className="section-kicker">Selected builds</p>
          <h2 id="builds-heading">Public work and product-facing execution.</h2>
          <p>
            A curated selection from GitHub and deployed work. The case studies above carry the senior engineering story;
            these builds show range, polish, and consistency across product-facing delivery.
          </p>
        </div>
        <div className="build-grid">
          {builds.map((build) => (
            <article className="build-card" key={build.title}>
              <a className="build-image" href={build.href} target="_blank" rel="noreferrer" aria-label={`Open ${build.title}`}>
                <Image src={build.image} alt={`${build.title} screenshot`} fill sizes="(max-width: 768px) 100vw, 33vw" />
              </a>
              <div className="build-body">
                <p>{build.category}</p>
                <h3>{build.title}</h3>
                <div className="tag-row">
                  {build.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="build-links">
                  <a href={build.href} target="_blank" rel="noreferrer">
                    Live
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                  <a href={build.repo} target="_blank" rel="noreferrer">
                    Code
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell section-block" aria-labelledby="experience-heading">
        <div className="section-heading compact">
          <p className="section-kicker">Experience</p>
          <h2 id="experience-heading">From client delivery to enterprise platforms.</h2>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <article className="timeline-item" key={`${item.company}-${item.period}`}>
              <span>{item.period}</span>
              <div>
                <h3>{item.role}</h3>
                <strong>{item.company}</strong>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section section-shell" aria-labelledby="contact-heading">
        <div>
          <p className="section-kicker">Let’s talk</p>
          <h2 id="contact-heading">I’m ready for senior full-stack roles where architecture and delivery both matter.</h2>
          <p>
            Best fit: full-stack, frontend, product, IoT, SaaS, fintech automation, healthcare software, and operational
            dashboard teams building for real users in Saudi Arabia and the wider region.
          </p>
        </div>
        <div className="contact-actions">
          <a className="button primary" href={`mailto:${contact.email}`}>
            <Mail size={18} aria-hidden="true" />
            {contact.email}
          </a>
          <a className="button secondary" href={contact.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={18} aria-hidden="true" />
            LinkedIn profile
          </a>
          <a className="button ghost" href={`tel:${contact.phone.replace(/\s/g, "")}`}>
            {contact.phone}
          </a>
          <a className="button ghost" href={contact.github} target="_blank" rel="noreferrer">
            <Github size={18} aria-hidden="true" />
            GitHub profile
          </a>
        </div>
      </section>
    </main>
  );
}
