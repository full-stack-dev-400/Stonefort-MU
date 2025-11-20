// components/home/AccountTiersStack.tsx
"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

// ⬇️ Update paths if needed
import EliteImg from "@/public/images/Elite.webp";
import AdvancedImg from "@/public/images/Advance.webp";
import StarterImg from "@/public/images/Starter.webp";

type TierId = "elite" | "advanced" | "starter";

type Tier = {
  id: TierId;
  name: string;
  startsAt: string;
  leverage: string;
  spread: string;
  commission: string;
  stopOut: string;
  marginCall: string;
};

const TIERS: Tier[] = [
  {
    id: "starter",
    name: "Starter",
    startsAt: "$50",
    leverage: "1:500",
    spread: "1.3",
    commission: "0",
    stopOut: "20%",
    marginCall: "50%",
  },
  {
    id: "advanced",
    name: "Advanced",
    startsAt: "$3000",
    leverage: "1:500",
    spread: "1.0",
    commission: "0",
    stopOut: "20%",
    marginCall: "50%",
  },
  {
    id: "elite",
    name: "Elite",
    startsAt: "$10,000",
    leverage: "1:200",
    spread: "0.01",
    commission: "$8",
    stopOut: "50%",
    marginCall: "70%",
  },
];

const IMAGES: Record<TierId, StaticImageData> = {
  elite: EliteImg,
  advanced: AdvancedImg,
  starter: StarterImg,
};

/* --------- Slot maps (no DOM reordering) ---------- */

// 0 = top, 1 = middle, 2 = bottom  → for CARDS
const CARD_SLOTS = [
  { translateY: 0, scale: 1.0, z: 30 },
  { translateY: 90, scale: 0.97, z: 20 },
  { translateY: 180, scale: 0.94, z: 10 },
] as const;

// 0 = top, 1 = middle, 2 = bottom  → for PLATES
const PLATE_SLOTS = [
  { translateY: -110, scale: 1.05, rotate: -5, z: 30 },
  { translateY: 0, scale: 0.97, rotate: -5, z: 20 },
  { translateY: 110, scale: 0.92, rotate: -5, z: 10 },
] as const;

// Map: for each active tier, which slot (0/1/2) each tier gets
const SLOT_INDEX_BY_ACTIVE: Record<TierId, Record<TierId, 0 | 1 | 2>> = {
  elite: {
    elite: 0, // top
    advanced: 1,
    starter: 2,
  },
  advanced: {
    advanced: 0,
    elite: 1,
    starter: 2,
  },
  starter: {
    starter: 0,
    advanced: 1,
    elite: 2,
  },
};

export default function AccountTiersStack() {
  const [active, setActive] = useState<TierId>("elite");

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid gap-12 md:grid-cols-2 items-center">
        {/* LEFT: overlapping cards that switch on CLICK */}
        <div className="relative h-[430px] md:h-[460px]">
          {TIERS.map((tier) => {
            const slotIndex = SLOT_INDEX_BY_ACTIVE[active][tier.id];
            const slot = CARD_SLOTS[slotIndex];
            const isActive = active === tier.id;

            return (
              <div
                key={tier.id}
                className="absolute left-0 right-0"
                style={{
                  zIndex: isActive ? slot.z + 10 : slot.z,
                  transform: `translateY(${slot.translateY}px) scale(${slot.scale})`,
                  transition:
                    "transform 0.45s cubic-bezier(0.22,1,0.36,1), z-index 0.2s",
                  padding: "16px 0",
                }}
              >
                <button
                  type="button"
                  onClick={() => setActive(tier.id)}
                  className={`w-full rounded-3xl border bg-white/90 backdrop-blur
                    shadow-[0_25px_60px_rgba(0,0,0,0.20)]
                    px-6 py-5 flex flex-col gap-3 transition-all duration-300
                    ${
                      isActive
                        ? "border-[#4D6E55] ring-1 ring-[#4D6E55]"
                        : "border-slate-200/70 hover:border-[#4D6E55]/70"
                    }`}
                >
                  <div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                      {tier.name}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">Accounts</p>
                  </div>

                  <div className="h-px w-full bg-gradient-to-r from-slate-200/40 via-slate-300 to-slate-200/40" />

                  <div className="space-y-3 text-[15px] text-slate-700">
                    <Row left="Starts at" right={tier.startsAt} />
                    <Row left="Leverage" right={tier.leverage} />
                    <Row left="Spreads (Pips)" right={tier.spread} />
                    <Row left="Commission" right={tier.commission} />
                    <Row left="Stop-out" right={tier.stopOut} />
                    <Row left="Margin Call" right={tier.marginCall} />
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* RIGHT: 3 plates, always visible, switch positions based on active */}
        <div className="flex items-center justify-center">
          <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px]">
            {TIERS.map((tier) => {
              const slotIndex = SLOT_INDEX_BY_ACTIVE[active][tier.id];
              return (
                <Plate
                  key={tier.id}
                  id={tier.id}
                  img={IMAGES[tier.id]}
                  slotIndex={slotIndex}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Helpers ---------- */

function Row({ left, right }: { left: string; right: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-slate-500">{left}</span>
      <span className="font-semibold text-slate-800">{right}</span>
    </div>
  );
}

function Plate({
  id,
  img,
  slotIndex,
}: {
  id: TierId;
  img: StaticImageData;
  slotIndex: 0 | 1 | 2;
}) {
  const slot = PLATE_SLOTS[slotIndex];

  return (
    <div
      className="absolute inset-0 flex items-center justify-center transition-all duration-500"
      style={{
        zIndex: slot.z,
        transform: `translateY(${slot.translateY}px) rotate(${slot.rotate}deg) scale(${slot.scale})`,
        filter: "drop-shadow(0 30px 70px rgba(0,0,0,0.45))",
      }}
    >
      <Image
        src={img}
        alt={`${id} plate`}
        className="w-full h-auto pointer-events-none select-none"
        sizes="(min-width: 1024px) 420px, 320px"
      />
    </div>
  );
}
