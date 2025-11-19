// components/home/PricingBoxes.tsx
"use client";
import React, { MouseEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";


// Badges
import BronzeBadge from "@/public/images/Bronze.webp";
import SilverBadge from "@/public/images/Silver.webp";
import GoldBadge from "@/public/images/Gold.webp";

// Full-bleed background image
import BgImage from "@/public/images/accountBG.jpg";

const SF_GREEN = "#4D6E55";

type RowProps = { left: string; right: string };
const Row = ({ left, right }: RowProps) => (
  <div className="flex items-center justify-between gap-6 transition-colors duration-300 text-slate-700 group-hover:text-white">
    <span className="whitespace-nowrap">{left}</span>
    <span className="font-semibold">{right}</span>
  </div>
);

function HoverGlowCard({
  children,
  className = "",
  featured = false,
  badgeSrc,
  title,
}: React.PropsWithChildren<{
  className?: string;
  featured?: boolean;
  badgeSrc?: any;
  title?: string;
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
  // Tailwind-safe static token via CSS variable
  const colors = "border-[var(--sf)] hover:bg-[var(--sf)] hover:border-[var(--sf)]";

  return (
    <motion.div
      onMouseMove={onMove}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={[
        base,
        hover,
        colors,
        featured
          ? "ring-1 ring-[rgba(77,110,85,0.25)] shadow-[0_12px_60px_rgba(77,110,85,0.25)] -mt-6"
          : "",
        className,
      ].join(" ")}
      style={{
        // give Tailwind a static token via var()
        ["--sf" as any]: SF_GREEN,
        transform: "perspective(1000px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
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

      <div className="relative p-6 sm:p-8 transition-colors duration-300">
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

export default function PricingBoxes() {
  const cards = [
    {
      title: "Starter",
      subtitle: "Accounts",
      badge: BronzeBadge,
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
      rows: [
        ["Starts at", "$10,000"],
        ["Leverage", "1:200"],
        ["Spreads (Pips)", "0.01"],
        ["Commission", "$8"],
        ["Stop-out", "50%"],
        ["Margin Call", "70%"],
      ],
    },
  ] as const;

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image src={BgImage} alt="" priority fill sizes="100vw" className="object-cover" />
        <span className="absolute inset-0 bg-white/10" />
      </div>

      {/* Aurora / gradient fog */}
      <div
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] -z-10 blur-3xl opacity-50"
        style={{
          background: `radial-gradient(closest-side, ${SF_GREEN}33, transparent 70%)`,
        }}
      />
      <div
        className="absolute bottom-[-200px] right-[-200px] w-[700px] h-[700px] -z-10 blur-3xl opacity-40"
        style={{
          background: `radial-gradient(closest-side, #87AB9333, transparent 70%)`,
        }}
      />

      {/* Particles */}
     

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#101711] mb-3">
            Find Your Perfect Trading Account
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto text-lg">
            Find the ideal Stonefort Securities account tailored to your trading style, built for flexibility, transparency, and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {cards.map((c, i) => {
            const featured = i === 1; // Advanced
            return (
              <HoverGlowCard
                key={i}
                featured={featured}
                badgeSrc={c.badge}
                title={c.title}
              >
                <div className="mb-6 flex items-start justify-between gap-4">
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

                {/* subtle bottom gradient rail */}
                <div
                  className="mt-6 h-[6px] w-full rounded-full"
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
