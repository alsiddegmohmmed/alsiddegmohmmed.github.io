# Asset Plan

This document defines how images, diagrams, screenshots, icons, and downloadable files should be handled.

## Asset principle

Assets must support credibility.

Do not use decorative images that are unrelated to the work.

Use either:

- real public screenshots;
- safe representative diagrams;
- small technical icons;
- downloadable resume PDF;
- simple monogram/favicon.

## No-photo rule

Do not use Siddeg’s personal photo anywhere.

The portfolio identity is carried by:

- typography;
- layout;
- case studies;
- diagrams;
- monogram/mark.

## Public project screenshots

Public projects can use real screenshots because the websites are public.

### Expand / AmnAds

URL:

```txt
https://tryexpand.com/
```

Recommended assets:

```txt
public/images/expand/home-desktop.webp
public/images/expand/home-mobile.webp
public/images/expand/section-detail.webp
```

Use screenshots only from public or user-approved platform areas.

### Primus

URL:

```txt
https://primus-tra.com/
```

Recommended assets:

```txt
public/images/primus/home-desktop.webp
public/images/primus/home-mobile.webp
public/images/primus/service-section.webp
```

## Placeholder rule

If screenshots are not available during implementation:

- use a neutral browser-frame placeholder;
- label nothing as a real screenshot;
- keep the placeholder easy to replace;
- do not use fake dashboards that imply product screens.

## Confidential project visuals

Confidential projects must use diagrams.

They must not use:

- internal screenshots;
- client data;
- internal URLs;
- real branch names unless already public and safe;
- database schemas;
- proprietary API payloads;
- branded internal diagrams unless sanitized.

### Fuel Custody & Reconciliation Platform

Visual type:

```txt
System pipeline / custody workflow diagram
```

Suggested diagram:

```txt
Field Devices → Event Ingestion → Normalization → Reconciliation Engine → Alerts → Reports / Audit Trail
```

Optional nodes:

- Pumps
- Tanks / ATG
- RFID / plate recognition
- GPS / vehicle identity
- Wallet / loyalty
- Management dashboard

### Inseejam IoT Operations Platform

Visual type:

```txt
IoT device-to-cloud operations map
```

Suggested diagram:

```txt
Branch / Site → Edge Devices → Telemetry → ThingsBoard / API Layer → Scheduler → Dashboard / Remote Control
```

Optional nodes:

- Meter
- Controller
- Sensor
- Edge device
- Device health
- Attributes
- WebSocket stream

### Hospital Operations Platform

Visual type:

```txt
Role-based workflow / service blueprint
```

Suggested diagram:

```txt
Registration → Queue → Doctor / Nurse → Lab / Pharmacy → Billing → Administration / Reports
```

Optional nodes:

- Patient profile
- RBAC
- Clinical flow
- Staff roles
- Reports

### Real-Time Cash Management System

Visual type:

```txt
POS-CDM-edge-cloud architecture diagram
```

Suggested diagram:

```txt
POS Terminal → Cash Recycler / CDM → Edge Gateway → Local SQLite Buffer → AWS API Gateway / Lambda / EventBridge → Aurora / Redis → React Dashboard / Mobile App
```

Optional nodes:

- 4G failover
- WebSocket updates
- Alerts
- Reports
- Branch manager

## Diagram style rules

Diagrams should look like technical figures inside a casebook.

Use:

- thin lines;
- small labels;
- boxes/nodes;
- arrowed flows;
- minimal color;
- figure captions;
- representative labels;
- consistent proportions.

Avoid:

- colorful marketing icons;
- 3D clipart;
- heavy gradients;
- fake product screens;
- complex unreadable architecture diagrams;
- icons that look like stock PowerPoint.

## SVG rule

Prefer SVG components for diagrams.

Benefits:

- lightweight;
- animatable;
- scalable;
- accessible;
- consistent with the hero diagram.

SVG components should be placed under:

```txt
components/diagrams/
```

## Image optimization

For screenshots:

- use `.webp` or `.avif` when possible;
- keep files compressed;
- do not commit huge raw PNG screenshots;
- use `next/image` for real images;
- lazy-load below-fold images.

## Resume PDF

Add current resume PDF when available:

```txt
public/Siddeg_Omer_CV.pdf
```

Header/footer CTA can link to:

```txt
/Siddeg_Omer_CV.pdf
```

Do not block the portfolio launch if the PDF is not ready, but leave the link disabled or replace with mailto until provided.

## Favicon / mark

Use a simple text/monogram mark.

Options:

- `SO`
- `AS`
- small atlas/grid mark

Do not use a profile photo as favicon.

## Asset launch checklist

Before launch:

- Expand screenshots added or placeholder accepted;
- Primus screenshots added or placeholder accepted;
- Fuel diagram complete;
- Inseejam diagram complete;
- Hospital diagram complete;
- Cash diagram complete if project remains included;
- resume PDF added or CV action adjusted;
- favicon added;
- all images optimized;
- all diagrams labelled correctly;
- no confidential data exposed.
