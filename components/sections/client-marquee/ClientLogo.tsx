import Image from "next/image";
import type { ClientLogo as ClientLogoData } from "@/app/data/clients";
import styles from "./ClientMarquee.module.css";

type ClientLogoProps = {
  client: ClientLogoData;
  decorative?: boolean;
};

export function ClientLogo({
  client,
  decorative = false
}: ClientLogoProps) {
  return (
    <div className={styles.logoItem}>
      <div className={styles.logoFrame}>
        <Image
          src={client.src}
          alt={decorative ? "" : `${client.name} logo`}
          fill
          sizes="(max-width: 768px) 140px, 190px"
          className={styles.logoImage}
          aria-hidden={decorative}
        />
      </div>

      <span className={styles.logoName}>
        {client.name}
      </span>
    </div>
  );
}