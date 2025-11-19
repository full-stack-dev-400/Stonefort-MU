'use client';

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const ITEMS = [
  { label: 'Speed of Implementation', value: '<30 ms' },
  { label: 'Trading Tools', value: '50+' },
  { label: 'Minimum Deposit', value: '$50' },
  { label: 'Segregated Clients Funds', value: '100%' },
  { label: 'Trading Instruments', value: '1500+' },
  { label: 'Customer Support', value: '24/7 Multilingual' },
  { label: 'Regulated By', value: 'SCA, FSC, St. Lucia, St. Vincent' },
  { label: 'Negative Balance', value: 'Protection' },
  { label: 'Leverage', value: '1:1000' },
  { label: 'Tightest Spreads', value: 'From 0.4 Pips' },
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
          <span className="block text-[11px] sm:text-[14px] uppercase tracking-[0.3px] text-[#fff] leading-snug whitespace-normal">
            {item.label}
          </span>
          <span className="text-[15px] sm:text-[16px] font-semibold text-[#fff] mt-1 whitespace-nowrap">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function MarqueeTicker({
  speedSeconds = 60,
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
    vp.style.setProperty('--sf-h', '64px');
    vp.style.setProperty('--rowpx', `${rowPx}px`);
    vp.style.setProperty('--sf-sep', 'rgba(255,255,255,0.3)');
  }, [rowPx, speedSeconds]);

  return (
    <div className={`relative w-full overflow-hidden bg-[#4d6e55] ${className}`}>
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
          width: 48px;
          pointer-events: none;
        }
        .fade.left {
          left: 0;
          background: linear-gradient(to right, #88918b 0%, rgba(136, 145, 139, 0) 100%);
        }
        .fade.right {
          right: 0;
          background: linear-gradient(to left, #88918b 0%, rgba(136, 145, 139, 0) 100%);
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
