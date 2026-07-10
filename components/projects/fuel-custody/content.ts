export const confidentialityNote =
  "Selected details are generalized to protect confidential product and client information. Visuals are representative system diagrams, not production screenshots.";

export const contextCards = [
  {
    label: "01 / Product Context",
    title: "What the product is",
    text: "A multi-tenant operational platform that governs fuel movement across the supply chain — from depot loading and tanker transport to station delivery, dispensing, authorization, and reconciliation."
  },
  {
    label: "02 / Operational Problem",
    title: "Why it matters",
    text: "Fuel losses, unauthorized dispensing, weak traceability, and manual reconciliation create financial leakage and compliance risk. The system brings every liter into a traceable, reviewable, and auditable workflow."
  },
  {
    label: "03 / Contribution Scope",
    title: "My role",
    text: "Contributed as a software engineer across backend and frontend modules within a larger product team, supporting API-connected workflows, event visibility, reconciliation/reporting flows, authentication, and operational dashboard behavior."
  }
] as const;

export const evidenceCards = [
  {
    title: "Backend workflows",
    text: "API-connected flows for fuel authorization, OTP authentication, RFID/license-plate integration, loyalty/wallet behavior, and reconciliation-related workflows.",
    tags: "APIs / Auth / Integration"
  },
  {
    title: "Authorization and identity",
    text: "Vehicle and user identity flows support controlled fueling, policy checks, and traceable transaction records across field operations.",
    tags: "RFID / Plate / Policy"
  },
  {
    title: "Reconciliation and reporting",
    text: "Rules-driven comparison of delivery, tank, pump, and fleet signals helps surface mismatches, exceptions, and operational reports.",
    tags: "Rules / Reports"
  },
  {
    title: "Event visibility",
    text: "Fuel events are treated as auditable records with device source, station context, vehicle identity, timestamps, and reconciliation status.",
    tags: "Events / Audit"
  },
  {
    title: "Offline-first reliability",
    text: "Edge-side buffering and local authorization thinking supports continued station operations during connectivity interruptions.",
    tags: "Edge / Sync / Resilience"
  },
  {
    title: "Operational dashboards",
    text: "Dashboard and reporting views translate raw field activity into exceptions, compliance records, KPIs, and management visibility.",
    tags: "Dashboards / UX"
  }
] as const;
