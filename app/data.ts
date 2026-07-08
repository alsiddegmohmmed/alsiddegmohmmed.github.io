export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  order: string;
  status: "Public" | "Confidential";
  category: string;
  liveUrl?: string;
  repoUrl?: string;
  summary: string;
  problem: string;
  role: string;
  contribution: string[];
  architecture: string[];
  impact: string[];
  stack: string[];
  visual: "website" | "fuel" | "iot" | "hospital" | "cash";
};

export const contact = {
  email: "siddegx@gmail.com",
  phone: "+966 539 288 603",
  location: "Saudi Arabia",
  linkedin: "https://www.linkedin.com/in/alsiddegmohmmed/",
  github: "https://github.com/alsiddegmohmmed"
};

export const projects: Project[] = [
  {
    slug: "expand-amnads",
    title: "Expand / AmnAds",
    subtitle: "Public marketing and advertising platform website",
    order: "01",
    status: "Public",
    category: "Public Website · Frontend Engineering",
    liveUrl: "https://tryexpand.com/",
    summary:
      "A public-facing website and platform experience for AmnAds / Expand, focused on bilingual presentation, responsive implementation, and polished frontend delivery.",
    problem:
      "The product needed a clean public interface that could communicate value quickly, support Arabic and English content, and remain fast and responsive across devices.",
    role:
      "Frontend and full-stack engineer working on client-facing pages, reusable frontend implementation, responsiveness, and API-connected flows where required.",
    contribution: [
      "Translated product and campaign requirements into responsive web interfaces.",
      "Implemented reusable React / Next.js components with TypeScript and Tailwind CSS.",
      "Improved layout behavior, cross-browser consistency, and Arabic/English presentation quality.",
      "Connected frontend flows to backend/API services where the product required dynamic behavior."
    ],
    architecture: [
      "Public marketing layer for acquisition and product communication.",
      "Reusable component structure for sections, content blocks, and responsive layouts.",
      "RTL-aware interface foundations for Arabic-first usage.",
      "Frontend integration points prepared for backend and platform workflows."
    ],
    impact: [
      "Public, shareable proof of frontend execution quality.",
      "Stronger client-facing presentation for a Saudi-market advertising product.",
      "Demonstrates responsive delivery, visual discipline, and production-minded implementation."
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "RTL / Arabic", "API Integration"],
    visual: "website"
  },
  {
    slug: "primus-website",
    title: "Primus Trading & Investment Website",
    subtitle: "Public corporate website for a technology and software solutions company",
    order: "02",
    status: "Public",
    category: "Public Website · Corporate Frontend",
    liveUrl: "https://primus-tra.com/",
    summary:
      "A corporate website presenting Primus as a technology company delivering software solutions across multiple operational domains.",
    problem:
      "Primus needed a credible public web presence that could support enterprise perception, communicate service breadth, and provide a polished first impression to potential partners and clients.",
    role:
      "Frontend engineer responsible for building the public website experience and presenting the company’s software capability through a professional, responsive interface.",
    contribution: [
      "Built responsive page sections for company positioning, services, and public presentation.",
      "Implemented frontend layouts with attention to hierarchy, readability, and enterprise tone.",
      "Improved public-facing credibility through a cleaner website structure and more professional interface execution.",
      "Supported the digital presence for a company working across healthcare, fuel operations, IoT, and enterprise systems."
    ],
    architecture: [
      "Static and content-driven website sections for corporate positioning.",
      "Reusable frontend sections and responsive layouts.",
      "Optimized presentation layer for desktop and mobile visitors.",
      "Public proof point connected to broader enterprise software work at Primus."
    ],
    impact: [
      "Public website available for hiring managers and clients to inspect directly.",
      "Demonstrates ability to ship polished frontend work, not only internal dashboards.",
      "Strengthens portfolio credibility because the work is public and verifiable."
    ],
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
    visual: "website"
  },
  {
    slug: "fuel-custody-reconciliation-platform",
    title: "Fuel Custody & Reconciliation Platform",
    subtitle: "Enterprise fuel-governance platform for stations, tanks, vehicles, and field devices",
    order: "03",
    status: "Confidential",
    category: "Fuel Operations · IoT · Reconciliation",
    summary:
      "A full-stack operational platform designed to trace, reconcile, and audit fuel movement across stations, tanks, pumps, vehicles, and edge devices.",
    problem:
      "Fuel operations lose trust where fuel physically moves: transport, tank delivery, station dispensing, fleet authorization, and reconciliation. The system needed to turn device data into explainable operational evidence.",
    role:
      "Software engineer contributing across frontend and backend modules within a larger engineering team, including product workflows, API-driven screens, and operational system features.",
    contribution: [
      "Contributed to backend and frontend modules for a fuel-governance platform operating across complex physical workflows.",
      "Worked on role-based product features, operational dashboard flows, and API-driven interfaces.",
      "Supported system areas related to event visibility, reconciliation, alerts, reporting, authorization, and auditability.",
      "Helped translate domain complexity into usable interfaces for management and operational users."
    ],
    architecture: [
      "Field layer: pumps, tanks, RFID/AVI, GPS, vehicle identity, and industrial controllers.",
      "Backend layer: ingestion, normalization, asset mapping, reconciliation, alerts, reports, and RBAC.",
      "Frontend layer: role-based dashboards for operational visibility and decision-making.",
      "Reliability layer: offline-first behavior, audit trails, and evidence preservation."
    ],
    impact: [
      "Designed around fuel traceability, fraud prevention, and operational control.",
      "Supports the idea that every liter should have source, destination, authorization context, evidence, and variance status.",
      "Demonstrates work inside a serious industrial software environment, beyond generic CRUD dashboards."
    ],
    stack: ["Django", "PostgreSQL", "Redis", "React", "Next.js", "TypeScript", "Docker", "Event Sourcing"],
    visual: "fuel"
  },
  {
    slug: "inseejam-iot-operations-platform",
    title: "Inseejam IoT Operations Platform",
    subtitle: "Centralized IoT platform for distributed infrastructure and branch operations",
    order: "04",
    status: "Confidential",
    category: "IoT · Telemetry · Operational Control",
    summary:
      "An IoT operations platform for monitoring distributed devices, tracking telemetry, automating schedules, and supporting remote control across multiple physical locations.",
    problem:
      "Organizations managing distributed branches need live visibility into devices, energy consumption, equipment status, automation schedules, and operational anomalies.",
    role:
      "Full-stack engineer contributing to frontend architecture, API-connected workflows, custom hooks, WebSocket-based telemetry behavior, and backend integration work.",
    contribution: [
      "Built dashboard modules for edge devices, scheduling controls, telemetry views, and branch-level operations.",
      "Developed modular React hooks such as device and scheduler abstractions to separate UI from data behavior.",
      "Contributed to Node.js backend services and real-time WebSocket workflows.",
      "Worked with Java and .NET integration layers connecting physical devices to ThingsBoard."
    ],
    architecture: [
      "Device layer: meters, sensors, controllers, and edge devices.",
      "IoT platform layer: ThingsBoard telemetry, attributes, and remote-control data.",
      "Backend layer: APIs for devices, customers, schedulers, branches, and edge monitoring.",
      "Frontend layer: React / Next.js dashboards for multi-branch operational visibility."
    ],
    impact: [
      "Live across 20+ SPL branches during the work period.",
      "Improved operational visibility for distributed physical assets.",
      "Shows ability to work with real-time systems, physical infrastructure, and Arabic/RTL enterprise interfaces."
    ],
    stack: ["React", "Next.js", "TypeScript", "Redux", "Node.js", "NestJS", "WebSockets", "ThingsBoard", "Java", ".NET"],
    visual: "iot"
  },
  {
    slug: "hospital-operations-platform",
    title: "Hospital Operations Platform",
    subtitle: "Role-based healthcare system for clinical and administrative workflows",
    order: "05",
    status: "Confidential",
    category: "Healthcare · RBAC · Workflow Systems",
    summary:
      "A hospital operations platform supporting patient registration, clinical queues, doctors, nurses, pharmacy, billing, and administrative workflows.",
    problem:
      "Healthcare teams need role-specific workflows that reduce fragmented paper processes, improve patient context, and give clinical and administrative staff clear operational visibility.",
    role:
      "Software engineer contributing to full-stack modules, role-based frontend flows, backend API work, data modeling, and integration-ready application behavior.",
    contribution: [
      "Worked on role-based workflows for hospital users including registration, clinical staff, pharmacy, billing, and administration.",
      "Contributed to backend APIs, data structures, authentication/authorization behavior, and frontend screens.",
      "Helped shape dashboard experiences around patient context, queues, and staff operations.",
      "Built implementation foundations suitable for deployment review and future integration."
    ],
    architecture: [
      "User roles: registration, doctors, nurses, lab, pharmacy, billing, and administrators.",
      "Backend: API layer, RBAC/JWT authentication, relational data model, and operational records.",
      "Frontend: Next.js dashboard flows, role-specific navigation, patient operations, and reporting screens.",
      "Operations: Dockerized services and monitoring foundations for supportability."
    ],
    impact: [
      "Demonstrates full-stack work in a high-stakes healthcare domain.",
      "Shows ability to model workflows around roles, permissions, and sensitive operational data.",
      "Useful proof of software thinking beyond marketing websites and simple dashboards."
    ],
    stack: ["FastAPI", "Python", "PostgreSQL", "Redis", "Next.js", "TypeScript", "Tailwind CSS", "Docker"],
    visual: "hospital"
  },
  {
    slug: "real-time-cash-management-system",
    title: "Real-Time Cash Management System",
    subtitle: "Offline-first cash operations platform for supermarket payment infrastructure",
    order: "06",
    status: "Confidential",
    category: "Fintech · Edge Computing · Real-Time Systems",
    summary:
      "A real-time cash-management system connecting POS terminals, cash deposit machines, edge gateways, AWS services, and management dashboards.",
    problem:
      "Supermarkets lose time and money through manual cash handling, reconciliation delays, staff exposure to cash, machine status blind spots, and late operational reporting.",
    role:
      "Software engineer contributing to backend and frontend modules for real-time transaction visibility, management workflows, device status, and offline-first cash operations.",
    contribution: [
      "Contributed to dashboard workflows for live cash visibility, branch monitoring, alerts, and reporting.",
      "Worked on backend and API-connected modules supporting transactions, device state, and operational data.",
      "Supported real-time system behavior around WebSocket-driven updates and event-based workflows.",
      "Worked within an edge-to-cloud architecture involving local persistence, cloud sync, and management interfaces."
    ],
    architecture: [
      "Edge layer: POS terminals, industrial gateway, cash recycler/CDM, Node.js, SQLite, 4G failover.",
      "Cloud layer: AWS API Gateway, Lambda, EventBridge, Aurora PostgreSQL, Redis, S3, CloudWatch.",
      "Realtime layer: WebSocket channels, Redis connection registry, and live dashboard updates.",
      "Application layer: React dashboard and React Native management interfaces."
    ],
    impact: [
      "Designed around reducing daily reconciliation from more than two hours to under five minutes.",
      "Offline-first design target supports local buffering of 10,000+ transactions.",
      "Demonstrates work in a fintech-adjacent system with hardware, cloud, real-time data, and compliance concerns."
    ],
    stack: ["Node.js", "AWS Lambda", "API Gateway", "Aurora PostgreSQL", "Redis", "EventBridge", "React", "React Native", "SQLite"],
    visual: "cash"
  }
];

export const capabilities = [
  {
    title: "System Architecture",
    text: "Designing clear boundaries across frontend, backend, data, integrations, and infrastructure.",
    points: ["Domain modeling", "API boundaries", "Operational workflows"]
  },
  {
    title: "Full-Stack Engineering",
    text: "Building product interfaces and backend modules with maintainable, production-minded implementation.",
    points: ["React / Next.js", "Node.js / Python", "REST / WebSockets"]
  },
  {
    title: "Real-Time & Edge Systems",
    text: "Working with live data, offline-first requirements, device integrations, and event-driven flows.",
    points: ["WebSockets", "Telemetry", "Offline buffering"]
  },
  {
    title: "Operational Software",
    text: "Turning complex industry workflows into usable dashboards, reports, alerts, and role-based systems.",
    points: ["RBAC", "Reports", "Auditability"]
  }
];

export const timeline = [
  {
    period: "Jul 2025 — Feb 2026",
    company: "Primus Trading & Investment",
    role: "Software Engineer",
    text: "Worked on enterprise software across fuel operations, cash-management infrastructure, healthcare systems, and public company web presence."
  },
  {
    period: "Jan 2025 — Jun 2025",
    company: "Inseejam",
    role: "Full Stack Engineer",
    text: "Contributed to IoT operations software for distributed physical assets, telemetry, scheduling, and real-time branch visibility."
  },
  {
    period: "Nov 2024 — Jun 2025",
    company: "AmnAds / Expand",
    role: "Full Stack Engineer",
    text: "Delivered responsive landing pages and dashboard interfaces using React, Next.js, TypeScript, Tailwind CSS, and Arabic/RTL-aware implementation."
  },
  {
    period: "May 2024 — Aug 2024",
    company: "Dateline",
    role: "Full Stack Engineer",
    text: "Built full-stack web applications including admin dashboards and ecommerce platforms using React, Node.js, Next.js, TypeScript, and MongoDB."
  },
  {
    period: "2021 — 2024",
    company: "Freelance & Contract Projects",
    role: "Web Developer",
    text: "Delivered websites and client-facing applications for companies across Saudi Arabia, Sudan, Qatar, and remote engagements."
  }
];

export const techSnapshot = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "NestJS",
  "FastAPI",
  "Django",
  "PostgreSQL",
  "Redis",
  "AWS",
  "Docker",
  "WebSockets",
  "ThingsBoard",
  "Tailwind CSS",
  "RTL / Arabic UI"
];
