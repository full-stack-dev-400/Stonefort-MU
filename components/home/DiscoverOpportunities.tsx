// components/StepCards.tsx
"use client";

import React, { MouseEvent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Background image
import DiscoverBG from "@/public/images/dicoverbg.webp";

const SF_GREEN = "#4D6E55";

/* ---------- Single Card ---------- */
function DiscoverOpportunities({
  title,
  text,
  index,
}: {
  title: string;
  text: string;
  index: number;
}) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);

    const rx = ((y - r.height / 2) / r.height) * -6;
    const ry = ((x - r.width / 2) / r.width) * 6;
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
  };

  return (
    <motion.div
      onMouseMove={onMove}
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-20% 0px" }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.06,
      }}
      className="relative group overflow-hidden rounded-2xl border bg-white
      border-[#4D6E55]/20 hover:border-[#4D6E55]
      shadow-[0_18px_50px_rgba(0,0,0,0.12)] transition-all duration-500 
      hover:-translate-y-1"
      style={{
        transform:
          "perspective(1000px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))",
      }}
    >
      {/* Spotlight */}
      <span
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background:
            "radial-gradient(220px 220px at var(--mx) var(--my), rgba(255,255,255,0.25), transparent 60%)",
        }}
      />

      {/* Conic Glow */}
      <span
        className="pointer-events-none absolute inset-[-1px] rounded-2xl opacity-0 
          group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `conic-gradient(from 180deg, ${SF_GREEN}40, #87AB934D 25%, #87AB9333 75%, ${SF_GREEN}40)`,
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor" as any,
          maskComposite: "exclude",
          padding: 1,
          borderRadius: 16,
        }}
      />

      {/* Shimmer */}
      <motion.span
        className="pointer-events-none absolute top-0 left-[-40%] h-full w-[40%] opacity-0 
          group-hover:opacity-100"
        initial={{ x: "-60%" }}
        animate={{ x: "200%" }}
        transition={{ repeat: Infinity, duration: 2.6, ease: "linear" }}
        style={{
          background:
            "linear-gradient(100deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%)",
          mixBlendMode: "overlay",
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-7">
        <div
          className="mb-5 h-[3px] w-full rounded-full opacity-70"
          style={{
            background: `linear-gradient(90deg, transparent, ${SF_GREEN}, transparent)`,
          }}
        />
        <h3 className="text-xl font-semibold text-black">{title}</h3>
        <p className="mt-2 text-slate-600 leading-relaxed">{text}</p>
        <div
          className="mt-6 h-[6px] w-full rounded-full opacity-40"
          style={{
            background: `linear-gradient(90deg, transparent, ${SF_GREEN}, transparent)`,
          }}
        />
      </div>
    </motion.div>
  );
}

/* ---------- SECTION ---------- */
export default function StepCards() {
  const cards = [
    {
      title: "Daily Payouts",
      text:
        "Receive your IB commissions every day with the flexibility to withdraw instantly, fast, transparent, and hassle-free.",
    },
    {
      title: "Competitive Commissions",
      text:
        "Earn more with attractive, performance-driven commission structures designed to maximize your revenue potential.",
    },
    {
      title: "Dedicated IB Portal",
      text:
        "Monitor your earnings, performance, and referrals effortlessly through our intuitive IB portal, built for transparency and control.",
    },
    {
      title: "Leverage Your Trading Expertise",
      text:
        "Grow your earnings by managing investor portfolios and sharing in the profits generated through your successful trading strategies.",
    },
  ];

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20 overflow-visible">
      {/* ✅ RIGHT-SIDE BACKGROUND IMAGE */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-0">
        {/* <Image
          src={DiscoverBG}
          alt="Trading interface illustration"
          className="w-[460px] h-auto object-contain"
        /> */}
      </div>

      {/* Soft aurora behind everything */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[900px] w-[900px] 
        -translate-x-1/2 blur-3xl opacity-40"
        style={{
          background: `radial-gradient(closest-side, ${SF_GREEN}33, transparent 70%)`,
        }}
      />

      {/* Heading */}
      <motion.div
        className="mb-12 text-center relative z-10"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2             
          className="
            bg-clip-text text-transparent bg-gradient-to-r 
            from-slate-200/60 via-slate-200 to-slate-200/60 
            pb-4 font-semibold leading-[1.05]

            max-sm:text-[24px]   /* ← FORCE smaller on mobile */
            text-[24px]          /* default */
            sm:text-[40px]
            md:text-[52px]
            lg:text-[64px]
            "
            >
          Partner with <span className="text-[#4d6e55]">Us</span>
        </h2>
      </motion.div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
        {cards.map((card, i) => (
          <DiscoverOpportunities
            key={i}
            index={i}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>
    </section>
  );
}
