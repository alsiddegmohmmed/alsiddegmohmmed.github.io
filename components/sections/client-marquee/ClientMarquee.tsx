import { clients } from "@/app/data/clients";
import { ClientLogo } from "./ClientLogo";
import styles from "./ClientMarquee.module.css";

const firstRow = clients.slice(0, 4);
const secondRow = [
    ...clients.slice(4),
    ...clients.slice(4)
  ];

function MarqueeRow({
  items,
  direction
}: {
  items: typeof clients;
  direction: "left" | "right";
}) {
  return (
    <div className={styles.marquee}>
      <div
        className={`${styles.track} ${
          direction === "right" ? styles.trackReverse : ""
        }`}
      >
      <div className={styles.group}>
  {items.map((client, index) => (
    <ClientLogo
      key={`${direction}-${client.name}-${index}`}
      client={client}
    />
  ))}
</div>

<div className={styles.group} aria-hidden="true">
  {items.map((client, index) => (
    <ClientLogo
      key={`${direction}-duplicate-${client.name}-${index}`}
      client={client}
      decorative
    />
  ))}
</div>
      </div>
    </div>
  );
}

export function ClientMarquee() {
  return (
    <section
    id="clients"
    className={`${styles.section} scroll-mt-28`}
    aria-labelledby="client-marquee-title"
  >
      <div className={styles.backgroundWord} aria-hidden="true">
        Clients
      </div>

      <div className={styles.header}>
        <div className={styles.headerCopy}>
          <p className={styles.kicker}>Selected Clients</p>

          <h2 id="client-marquee-title" className={styles.title}>
            Built with teams across different industries.
          </h2>
        </div>

        <div className={styles.metadata}>
          <div className={styles.metric}>
            <span className={styles.metricValue}>
              {String(clients.length).padStart(2, "0")}
            </span>
            <span className={styles.metricLabel}>
              Companies and teams
            </span>
          </div>

          <p className={styles.locations}>
            Saudi Arabia · Qatar · Sudan · Remote
          </p>
        </div>
      </div>

      <div className={styles.stage}>
        <MarqueeRow items={firstRow} direction="left" />
        <MarqueeRow items={secondRow} direction="right" />
      </div>
    </section>
  );
}