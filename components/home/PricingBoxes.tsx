// components/home/PricingBoxes.tsx
"use client";
import React, { MouseEvent, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Badges
import BronzeBadge from "@/public/images/Starter.webp";
import SilverBadge from "@/public/images/Advance.webp";
import GoldBadge from "@/public/images/Elite.webp";

// 3 plates (separate PNGs)
import ElitePlate from "@/public/images/Elite.webp";
import AdvancedPlate from "@/public/images/Advance.webp";
import StarterPlate from "@/public/images/Starter.webp";

const SF_GREEN = "#4D6E55";

/* ---------- Types ---------- */

type RowProps = { left: string; right: string };

type TierId = "starter" | "advanced" | "elite";

type CardDef = {
  title: string;
  subtitle: string;
  badge: any;
  rows: [string, string][];
  tier: TierId;
};

const PLATE_IMAGES: Record<TierId, any> = {
  elite: ElitePlate,
  advanced: AdvancedPlate,
  starter: StarterPlate,
};

// order of plates for each active card
function getOrder(active: TierId): TierId[] {
  if (active === "elite") return ["elite", "advanced", "starter"]; // Elite top
  if (active === "advanced") return ["advanced", "elite", "starter"]; // Advanced top
  return ["starter", "advanced", "elite"]; // Starter top
}

/* ---------- Small UI bits ---------- */

const Row = ({ left, right }: RowProps) => (
  <div className="flex items-center justify-between gap-6 transition-colors duration-300 text-slate-700 group-hover:text-white">
    <span className="whitespace-nowrap">{left}</span>
    <span className="font-semibold">{right}</span>
  </div>
);

/* ---------- Card wrapper with glow ---------- */

function HoverGlowCard({
  children,
  className = "",
  featured = false,
  badgeSrc,
  title,
  onHover,
}: React.PropsWithChildren<{
  className?: string;
  featured?: boolean;
  badgeSrc?: any;
  title?: string;
  onHover?: () => void;
}>) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);

    // lightweight 3D tilt
    const rx = ((y - r.height / 2) / r.height) * -6; // rotateX
    const ry = ((x - r.width / 2) / r.width) * 6; // rotateY
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
  };

  const base =
    "group relative rounded-2xl border bg-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-[2px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]";
  const hover = "hover:-translate-y-1 hover:scale-[1.01]";
  const colors =
    "border-[var(--sf)] hover:bg-[var(--sf)] hover:border-[var(--sf)]";

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseEnter={() => onHover && onHover()}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={[
        base,
        hover,
        colors,
        featured
          ? "ring-1 ring-[rgba(77,110,85,0.25)] shadow-[0_12px_60px_rgba(77,110,85,0.25)] -mt-4"
          : "",
        className,
      ].join(" ")}
      style={{
        ["--sf" as any]: SF_GREEN,
        transform:
          "perspective(1000px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
      }}
    >
      {/* live spotlight that follows the mouse */}
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-70"
        style={{
          background:
            "radial-gradient(220px 220px at var(--mx) var(--my), rgba(255,255,255,0.14), rgba(255,255,255,0) 60%, transparent 80%)",
        }}
      />

      {/* conic border glow on hover */}
      <span
        className="pointer-events-none absolute inset-[-1px] rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `conic-gradient(from 180deg, ${SF_GREEN}40, #87AB9359 25%, #87AB9340 75%, ${SF_GREEN}40)`,
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor" as any,
          maskComposite: "exclude",
          padding: 1,
          borderRadius: 16,
        }}
      />

      {/* subtle pulse ring for featured */}
      {featured && (
        <span
          className="pointer-events-none absolute inset-0 rounded-2xl animate-pulse"
          style={{
            boxShadow: `0 0 0 1px ${SF_GREEN}40 inset, 0 0 60px ${SF_GREEN}33`,
          }}
        />
      )}

      {/* sweep shimmer on hover */}
      <motion.span
        className="pointer-events-none absolute top-0 left-[-40%] h-full w-[40%] opacity-0 group-hover:opacity-100"
        initial={{ x: "-60%" }}
        animate={{ x: "200%" }}
        transition={{ repeat: Infinity, duration: 2.6, ease: "linear" }}
        style={{
          background:
            "linear-gradient(100deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%)",
          mixBlendMode: "overlay",
        }}
      />

      <div className="relative px-6 py-5 sm:px-7 sm:py-6 transition-colors duration-300">
        {/* top deco strip */}
        <div
          className="absolute left-0 right-0 -top-px h-[3px] rounded-t-2xl"
          style={{
            background: `linear-gradient(90deg, transparent, ${SF_GREEN}, transparent)`,
          }}
        />

        {/* badge float on hover */}
        {badgeSrc && (
          <motion.div
            className="absolute right-5 -top-8"
            initial={{ y: 0 }}
            whileHover={{ y: -6, rotate: 1 }}
            transition={{ type: "spring", stiffness: 180, damping: 12 }}
          >
            <Image
              src={badgeSrc}
              alt={`${title} badge`}
              width={72}
              height={72}
              className="w-14 h-14 object-contain drop-shadow"
              priority={title === "Advanced"}
            />
          </motion.div>
        )}

        {children}
      </div>
    </motion.div>
  );
}

/* ---------- Background plates ---------- */

function Plate({
  id,
  img,
  slot,
}: {
  id: TierId;
  img: any;
  slot: number; // 0 = top, 1 = middle, 2 = bottom
}) {
  // more distance between plates
  const slotStyles = [
    {
      translate: "-110px",
      rotate: "-5deg",
      scale: "1.05",
      z: 30,
    },
    {
      translate: "0px",
      rotate: "-8deg",
      scale: "0.97",
      z: 20,
    },
    {
      translate: "110px",
      rotate: "-12deg",
      scale: "0.92",
      z: 10,
    },
  ][slot];

  return (
    <div
      className="absolute inset-0 flex items-center justify-center transition-all duration-500"
      style={{
        zIndex: slotStyles.z,
        transform: `translateY(${slotStyles.translate}) rotate(${slotStyles.rotate}) scale(${slotStyles.scale})`,
        filter: "drop-shadow(0 30px 70px rgba(0,0,0,0.45))",
      }}
    >
      <Image
        src={img}
        alt={`${id} plate`}
        fill
        className="object-contain pointer-events-none select-none"
        sizes="(min-width: 1024px) 420px, 260px"
      />
    </div>
  );
}

/* ---------- Main component ---------- */

export default function PricingBoxes() {
  const [activeTier, setActiveTier] = useState<TierId>("advanced");

  const cards: CardDef[] = [
    {
      title: "Starter",
      subtitle: "Accounts",
      badge: BronzeBadge,
      tier: "starter",
      rows: [
        ["Starts at", "$50"],
        ["Leverage", "1:500"],
        ["Spreads (Pips)", "1.3"],
        ["Commission", "0"],
        ["Stop-out", "20%"],
        ["Margin Call", "50%"],
      ],
    },
    {
      title: "Advanced",
      subtitle: "Accounts",
      badge: SilverBadge,
      tier: "advanced",
      rows: [
        ["Starts at", "$3000"],
        ["Leverage", "1:500"],
        ["Spreads (Pips)", "1.0"],
        ["Commission", "0"],
        ["Stop-out", "20%"],
        ["Margin Call", "50%"],
      ],
    },
    {
      title: "Elite",
      subtitle: "Accounts",
      badge: GoldBadge,
      tier: "elite",
      rows: [
        ["Starts at", "$10,000"],
        ["Leverage", "1:200"],
        ["Spreads (Pips)", "0.01"],
        ["Commission", "$8"],
        ["Stop-out", "50%"],
        ["Margin Call", "70%"],
      ],
    },
  ];

  const ordered = getOrder(activeTier); // [top, middle, bottom]

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Plates background with hover logic */}
<div className="pointer-events-none absolute inset-y-0 left-[-10px] md:left-[-10px] z-10 flex items-center justify-start">
  <div className="relative w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px]">
    {ordered.map((id, index) => (
      <Plate key={id} id={id} img={PLATE_IMAGES[id]} slot={index} />
    ))}
  </div>
</div>


      {/* Aurora / gradient fog */}
      <div
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] z-5 blur-3xl opacity-50"
        style={{
          background: `radial-gradient(closest-side, ${SF_GREEN}33, transparent 70%)`,
        }}
      />
      <div
        className="absolute bottom-[-200px] right-[-200px] w-[700px] h-[700px] z-5 blur-3xl opacity-40"
        style={{
          background: `radial-gradient(closest-side, #87AB9333, transparent 70%)`,
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="text-center mb-12">
          <h2
            className="
              bg-clip-text text-transparent bg-gradient-to-r 
              from-slate-200/60 via-slate-200 to-slate-200/60 
              pb-4 font-semibold leading-[1.05]
              max-sm:text-[24px]
              text-[24px]
              sm:text-[40px]
              md:text-[52px]
              lg:text-[64px]
            "
          >
            Find Your Perfect Trading Account
          </h2>
          <p
            className="
              max-w-3xl mx-auto mt-3 
              text-slate-600
              text-[20px]
              leading-[1.5]
            "
          >
            Find the ideal Stonefort Securities account tailored to your trading
            style, built for flexibility, transparency, and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {cards.map((c, i) => {
            const featured = i === 1; // Advanced
            return (
              <HoverGlowCard
                key={c.title}
                featured={featured}
                badgeSrc={c.badge}
                title={c.title}
                onHover={() => setActiveTier(c.tier)}
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold leading-none transition-colors duration-300 text-[#101711] group-hover:text-white">
                      {c.title}
                    </h3>
                    <p className="text-slate-600 group-hover:text-white/90">
                      {c.subtitle}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {c.rows.map(([l, r], idx) => (
                    <Row key={idx} left={l} right={r} />
                  ))}
                </div>

                <div
                  className="mt-5 h-[6px] w-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${SF_GREEN}, transparent)`,
                    opacity: 0.5,
                  }}
                />
              </HoverGlowCard>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
