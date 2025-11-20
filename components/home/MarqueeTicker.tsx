'use client';

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import Image from "next/image";

import SpeedImg from "@/public/images/speed.webp";
import ToolsImg from "@/public/images/funds.webp";
import DepositImg from "@/public/images/deposit.webp";
import FundsImg from "@/public/images/funds.webp";
import InstrumentsImg from "@/public/images/instruments.webp";
import SupportImg from "@/public/images/support.webp";
import RegulatedImg from "@/public/images/regulated.webp";
import NegativeImg from "@/public/images/negative.webp";
import LeverageImg from "@/public/images/leverage.webp";
import SpreadImg from "@/public/images/spread.webp";




const ITEMS = [
  { label: "Speed of Implementation", value: "<30 ms", img: SpeedImg },
  { label: "Trading Tools", value: "50+", img: ToolsImg },
  { label: "Minimum Deposit", value: "$50", img: DepositImg },
  { label: "Segregated Clients Funds", value: "100%", img: FundsImg },
  { label: "Trading Instruments", value: "1500+", img: InstrumentsImg },
  { label: "Customer Support", value: "24/7 Multilingual", img: SupportImg },
  { label: "Regulated By", value: "SCA, FSC, St. Lucia, St. Vincent", img: RegulatedImg },
  { label: "Negative Balance", value: "Protection", img: NegativeImg },
  { label: "Leverage", value: "1:1000", img: LeverageImg },
  { label: "Tightest Spreads", value: "From 0.4 Pips", img: SpreadImg },
];


function Row() {
  return (
    <div className="flex flex-nowrap items-center gap-0">
      {ITEMS.map((item, i) => (
        <div
          key={i}
          className="
            flex-none flex flex-col justify-center text-center
            border-l border-white/30
            px-10 py-4
            min-w-[220px]
          "
        >
          {/* Icon */}
          <Image
            src={item.img}
            alt={item.label}
            className="mx-auto mb-2"
            width={65}
            height={65}
          />

          {/* Label */}
          <span className="block text-[16px] sm:text-[17px] font-bold uppercase tracking-[0.3px] text-[#4d6e55] leading-snug whitespace-normal">
            {item.label}
          </span>

          {/* Value */}
          <span className="text-[14px] sm:text-[15px] font-semibold text-[#4d6e55] mt-1 whitespace-nowrap">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}


export default function MarqueeTicker({
  speedSeconds = 250,
  className = '',
}: {
  speedSeconds?: number;
  className?: string;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const rowMeasureRef = useRef<HTMLDivElement>(null);
  const [rowPx, setRowPx] = useState(0);

  // Measure row width in pixels (SSR-safe, no optional chaining on constructor)
  useLayoutEffect(() => {
    const el = rowMeasureRef.current;
    if (!el) return;

    const setWidth = () => setRowPx(el.offsetWidth);
    setWidth();

    let ro: ResizeObserver | undefined;
    if (typeof window !== 'undefined' && 'ResizeObserver' in window) {
      ro = new ResizeObserver(() => {
        setWidth();
      });
      ro.observe(el);
    }

    const onLoad = () => setWidth();
    const onResize = () => setWidth();
    window.addEventListener('load', onLoad);
    window.addEventListener('resize', onResize);

    return () => {
      ro?.disconnect();
      window.removeEventListener('load', onLoad);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Push CSS vars
  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    vp.style.setProperty('--sf-speed', `${speedSeconds}s`);
     vp.style.setProperty('--sf-h', '150px');
    vp.style.setProperty('--rowpx', `${rowPx}px`);
    vp.style.setProperty('--sf-sep', 'rgba(255,255,255,0.3)');
  }, [rowPx, speedSeconds]);

  return (
    <div className={`relative w-full overflow-hidden bg-[transparent] ${className}`}>
      <div className="viewport" ref={viewportRef}>
        {/* Track A: 0 -> -rowPx */}
        <div className={`track trackA ${rowPx ? 'run' : ''}`}>
          <Row />
        </div>

        {/* Track B: +rowPx -> 0 */}
        <div className={`track trackB ${rowPx ? 'run' : ''}`} aria-hidden="true">
          <Row />
        </div>

        {/* Edge fades */}
        <div className="fade left" />
        <div className="fade right" />

        {/* Hidden measurer */}
        <div className="measure" aria-hidden="true">
          <div ref={rowMeasureRef}>
            <Row />
          </div>
        </div>
      </div>

      <style jsx>{`
        .viewport {
          position: relative;
          height: var(--sf-h);
          overflow: hidden;
        }

        .track {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
          will-change: transform;
        }

        .track.run.trackA {
          animation: slideA var(--sf-speed) linear infinite;
        }
        .track.run.trackB {
          animation: slideB var(--sf-speed) linear infinite;
        }

        @keyframes slideA {
          from {
            transform: translateY(-50%) translateX(0px);
          }
          to {
            transform: translateY(-50%) translateX(calc(var(--rowpx) * -1));
          }
        }
        @keyframes slideB {
          from {
            transform: translateY(-50%) translateX(var(--rowpx));
          }
          to {
            transform: translateY(-50%) translateX(0px);
          }
        }

        .trackB::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 1px;
          background: var(--sf-sep);
          opacity: 0.9;
        }

        .viewport:hover .track.run {
          animation-play-state: paused;
        }

.fade {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 250px; /* desktop / large screens */
  pointer-events: none;
}

/* Mobile: reduce faded area width */
@media (max-width: 640px) {
  .fade {
    width: 90px; /* smaller fades on mobile */
  }
}


/* LEFT SIDE */
.fade.left {
  left: 0;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 0%,     /* strong white */
    rgba(255, 255, 255, 0.85) 40%,
    rgba(255, 255, 255, 0.4) 70%,
    rgba(255, 255, 255, 0) 100%    /* fully transparent */
  );
}

/* RIGHT SIDE */
.fade.right {
  right: 0;
  background: linear-gradient(
    to left,
    rgba(255, 255, 255, 1) 0%,     /* strong white */
    rgba(255, 255, 255, 0.85) 40%,
    rgba(255, 255, 255, 0.4) 70%,
    rgba(255, 255, 255, 0) 100%    /* fully transparent */
  );
}



        .measure {
          position: absolute;
          visibility: hidden;
          pointer-events: none;
          left: -99999px;
          top: -99999px;
        }
      `}</style>
    </div>
  );
}
