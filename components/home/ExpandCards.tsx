"use client";
import React, { useMemo, useState } from "react";

export type ExpandItem = {
  id: string | number;
  image: string;
  number?: string;
  title: string;
  body?: React.ReactNode;
};

export default function ExpandCards({
  items = demoItems,
  height = 520,
}: {
  items?: ExpandItem[];
  height?: number;
}) {
  const [active, setActive] = useState<number | null>(null);
  const [locked, setLocked] = useState<number | null>(null);

  // Dynamically build grid column sizes depending on which card is active/locked
  const template = useMemo(() => {
    const idx = locked ?? active;
    if (idx == null) return Array(items.length).fill("1fr").join(" ");
    return Array(items.length)
      .fill("1fr")
      .map((_, i) => (i === idx ? "3fr" : "1fr"))
      .join(" ");
  }, [active, locked, items.length]);

  return (
    <section className="relative w-full">
      {/* ====== Heading Section (Full Width, Styled like “Our Products”) ====== */}
<div className="text-center px-4 pt-20 pb-10">
  <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
    <span className="text-black">Why Traders Trust </span><br/>
    <span className="text-[#4D6E55]">Stonefort Securities</span>
  </h2>
  <p className="max-w-3xl mx-auto text-base md:text-lg text-[#5D595B] leading-relaxed">
    Driven by performance and innovation, we provide traders with exceptional trading
    conditions, lightning-fast execution, and industry-leading pricing ensuring every
    trade counts.
  </p>
</div>


      {/* ====== Cards Section (Full Width, unchanged) ====== */}
      <div
        className="relative w-full"
        onMouseLeave={() => setActive(null)}
        style={{ height }}
      >
        <div
          className="grid h-full overflow-hidden shadow-lg"
          style={{
            gridTemplateColumns: template,
            transition: "grid-template-columns 400ms ease",
          }}
        >
          {items.map((item, i) => {
            const isActive = (locked ?? active) === i;
            return (
              <section
                key={item.id}
                className="relative isolate cursor-pointer select-none outline-none"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setLocked((v) => (v === i ? null : i));
                    e.preventDefault();
                  }
                  if (e.key === "Escape") setLocked(null);
                }}
                onClick={() => setLocked((v) => (v === i ? null : i))}
                aria-expanded={isActive}
              >
                {/* Background image */}
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                />

                {/* Overlay gradients */}
                <div className="pointer-events-none absolute inset-0 bg-black/30" />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent"
                  aria-hidden
                />

                {/* Number label */}
                <div className="absolute bottom-3 left-4 text-white/90 z-10">
                  <span className="text-6xl font-extrabold tracking-tight drop-shadow-md md:text-7xl">
                    {item.number ?? String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Expanded content */}
                <div
                  className="absolute inset-x-0 top-0 bottom-24 flex flex-col justify-end p-6 text-white z-0"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "none" : "translateY(12px)",
                    transition: "opacity 300ms ease, transform 300ms ease",
                  }}
                >
                  <h3 className="mb-2 text-2xl text-[#fff] font-extrabold md:text-3xl">
                    {item.title}
                  </h3>
                  {item.body && (
                    <div className="max-w-[48ch] text-sm/6 text-white/90 md:text-base/7">
                      {item.body}
                    </div>
                  )}
                </div>

                {/* Button - bottom-right, only visible when expanded */}
                <div
                  className="absolute bottom-5 right-5 z-20"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "none" : "translateY(10px)",
                    transition: "opacity 300ms ease, transform 300ms ease",
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  <a
                    href="#"
                    className="group inline-flex items-center gap-2 bg-white text-[#101711] text-sm font-semibold px-5 py-2.5 rounded-full shadow-md transition-all duration-300 hover:bg-[#87ab93] hover:text-white"
                  >
                    Start Trading Now
                    <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>

                {/* Divider between panels */}
                {i < items.length - 1 && (
                  <div className="absolute right-0 top-1/2 h-4/5 w-px -translate-y-1/2 bg-white/20" />
                )}
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --- Demo content (replace with real items) --- */
const demoItems: ExpandItem[] = [
  {
    id: 1,
    image: "/images/withdrawal.webp",
    number: "01",
    title: "Instant Withdrawal ",
    body: <>Experience hassle-free withdrawals with no delays and total transparency.</>,
  },
  {
    id: 2,
    image: "/images/oneBank.webp",
    number: "02",
    title: "Tier 1 Banking Partners",
    body: <>Your funds are securely held with trusted Tier 1 banks, ensuring maximum protection and complete peace of mind.</>,
  },
  {
    id: 3,
    image: "/images/cardpartners.webp",
    number: "03",
    title: "Globally Regulated ",
    body: <>Operating under multiple international licenses, Stonefort Securities guarantees secure trading conditions backed by regulatory oversight and investor protection.</>,
  },
  {
    id: 4,
    image: "/images/fast-execution.webp",
    number: "04",
    title: "Ultra-Fast Execution ",
    body: <>Experience lightning-speed execution under 70 milliseconds, empowering traders to capture every opportunity without delay.</>,
  },
  {
    id: 5,
    image: "/images/high-leverage.webp",
    number: "05",
    title: "Leverage Up to 1:1000 ",
    body: <>Empower your strategy with high-performance leverage designed to help you seize every market opportunity.</>,
  },
  {
    id: 6,
    image: "/images/globally-regulated.webp",
    number: "06",
    title: "Negative Balance Protection ",
    body: <>Your capital remains protected no matter how volatile the markets become, your risk is always limited to your initial deposit.</>,
  },
];
