"use client";

import { useState } from "react";

const scenarios = [
  { id: "duplicate-request", label: "Duplicate request" },
  { id: "provider-timeout", label: "Provider timeout" },
  { id: "duplicate-message", label: "Duplicate message" }
] as const;

type ScenarioId = (typeof scenarios)[number]["id"];

function Node({ children, tone = "default" }: { children: React.ReactNode; tone?: "default" | "good" | "ambiguous" }) {
  const toneClass = tone === "good" ? "border-green bg-green-soft" : tone === "ambiguous" ? "border-copper bg-copper/10" : "border-line bg-surface";
  return <div className={`grid min-h-16 place-items-center border px-4 py-3 text-center font-mono text-[11px] font-extrabold leading-5 ${toneClass}`}>{children}</div>;
}

function Arrow({ dashed = false }: { dashed?: boolean }) {
  return <span className={`grid place-items-center text-blueprint md:min-h-16 ${dashed ? "opacity-70" : ""}`} aria-hidden="true"><span className="md:hidden">↓</span><span className="hidden md:inline">→</span></span>;
}

function DuplicateRequest() {
  return (
    <div>
      <h3 className="font-display text-2xl font-semibold leading-tight text-ink md:text-3xl">Two requests should not become two payments.</h3>
      <div className="mt-6 grid gap-3 md:grid-cols-[1fr_50px_1.1fr_50px_1fr] md:items-center">
        <div className="grid gap-2"><Node>CLIENT RETRY #1</Node><Node>CLIENT RETRY #2</Node></div><Arrow />
        <Node tone="ambiguous">IDEMPOTENCY BOUNDARY<br /><span className="font-normal text-muted">tenantId + idempotencyKey</span></Node><Arrow /><Node tone="good">ONE PAYMENT<br />ONE FINANCIAL EFFECT</Node>
      </div>
      <div className="mt-4 grid gap-px border border-line bg-line md:grid-cols-2">
        <p className="m-0 bg-surface p-4 text-sm leading-6 text-muted"><strong className="text-ink">Same logical request</strong><br />returns the same Payment.</p>
        <p className="m-0 bg-surface p-4 text-sm leading-6 text-muted"><strong className="text-ink">Same key + changed content</strong><br />becomes an idempotency conflict.</p>
      </div>
    </div>
  );
}

function ProviderTimeout() {
  return (
    <div>
      <h3 className="font-display text-2xl font-semibold leading-tight text-ink md:text-3xl">No response does not mean no payment.</h3>
      <p className="mt-2 font-mono text-xs font-extrabold uppercase tracking-[0.08em] text-copper">TIMEOUT ≠ DECLINE</p>
      <div className="mt-6 grid gap-3 md:grid-cols-[1fr_50px_1fr_50px_1.2fr] md:items-center">
        <Node>LEDGEROPS<br /><span className="font-normal text-muted">submit Payment</span></Node><Arrow /><Node>PROVIDER<br /><span className="text-copper">× timeout</span></Node><Arrow dashed /><Node tone="ambiguous">UNKNOWN OUTCOME<br /><span className="font-normal text-muted">no authoritative result</span></Node>
      </div>
      <div className="mt-3 grid gap-2 md:grid-cols-3">
        <Node tone="good">DEFINITIVE SUCCESS<br />COMPLETED + LEDGER</Node><Node>DEFINITIVE FAILURE<br />FAILED</Node><Node tone="ambiguous">STILL UNCERTAIN<br />PROCESSING</Node>
      </div>
      <p className="mb-0 mt-5 max-w-4xl leading-7 text-muted">Status recovery, webhook evidence, or a justified safe retry continues until authoritative evidence establishes what happened.</p>
    </div>
  );
}

function DuplicateMessage() {
  return (
    <div>
      <h3 className="font-display text-2xl font-semibold leading-tight text-ink md:text-3xl">At-least-once delivery means duplicates are normal.</h3>
      <div className="mt-6 grid gap-3 md:grid-cols-[1fr_50px_1.2fr_50px_1fr] md:items-center">
        <div className="grid gap-2"><Node>OUTBOX / MESSAGE A</Node><Node>OUTBOX / MESSAGE A</Node></div><Arrow dashed /><Node tone="ambiguous">INBOX<br /><span className="font-normal text-muted">already processed?</span></Node><Arrow /><div className="grid gap-2"><Node>YES / ACK ONLY</Node><Node tone="good">NO / APPLY EFFECT</Node></div>
      </div>
      <p className="mb-0 mt-5 max-w-4xl leading-7 text-muted">LedgerOps does not claim magical end-to-end exactly-once delivery. Stable identities and idempotent consumers make repeated delivery safe.</p>
    </div>
  );
}

export function FailureScenarios() {
  const [active, setActive] = useState<ScenarioId>("duplicate-request");
  return (
    <div className="border border-line bg-surface/85 p-4 md:p-6">
      <div className="grid gap-2 sm:grid-cols-3" role="tablist" aria-label="LedgerOps failure scenarios">
        {scenarios.map((scenario) => (
          <button className={`min-h-12 border px-4 font-mono text-[10px] font-extrabold uppercase tracking-[0.06em] transition ${active === scenario.id ? "border-green bg-green text-surface" : "border-line bg-bg text-muted hover:border-green hover:text-green"}`} id={`tab-${scenario.id}`} aria-controls={`panel-${scenario.id}`} aria-selected={active === scenario.id} role="tab" type="button" key={scenario.id} onClick={() => setActive(scenario.id)}>{scenario.label}</button>
        ))}
      </div>
      <div className="mt-6 border-t border-line pt-6" id={`panel-${active}`} role="tabpanel" aria-labelledby={`tab-${active}`}>
        {active === "duplicate-request" ? <DuplicateRequest /> : active === "provider-timeout" ? <ProviderTimeout /> : <DuplicateMessage />}
      </div>
    </div>
  );
}
