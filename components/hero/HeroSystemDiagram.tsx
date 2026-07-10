import Image from "next/image";

export function HeroSystemDiagram() {
  return (
    <figure className="m-0 w-full max-w-[720px] justify-self-center self-center -translate-y-2 lg:w-[min(46vw,760px)] lg:max-w-full lg:-translate-y-3">
      <Image
        src="/assets/hero-system-atlas.png"
        alt="Operational systems atlas diagram showing layered applications, services, data, operators, and outcomes."
        width={843}
        height={797}
        priority
        className="block h-auto w-full max-w-none"
      />
    </figure>
  );
}
