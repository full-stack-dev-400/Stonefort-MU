// components/ProductHeroSlider.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Slide = {
  id: string;
  title: string;
  headline: string;
  price?: string;
  copy?: string;
  img: StaticImageData | string;
};

export default function ProductHeroSlider({
  slides = [],
  autoPlayMs = 6500,
}: {
  slides?: Slide[];
  autoPlayMs?: number;
}) {
  if (!slides || slides.length === 0) return null;

  const [i, setI] = useState(0);
  const max = slides.length;
  const hovering = useRef(false);

  // autoplay (pause on hover)
  useEffect(() => {
    if (hovering.current) return;
    const t = setInterval(() => setI((p) => (p + 1) % max), autoPlayMs);
    return () => clearInterval(t);
  }, [i, max, autoPlayMs]);

  const s = slides[i];

  // word to use for the big background label
  const bgWord =
    (s.title || s.headline || "")
      .split(/\s+/)[0] // first word feels best for oversized label
      .toUpperCase();

  return (
    <section
      className="relative mx-auto max-w-7xl px-4 sm:px-6"
      onMouseEnter={() => (hovering.current = true)}
      onMouseLeave={() => (hovering.current = false)}
    >
      <div className="relative rounded-[28px] border border-white/10 bg-[#ffffff]/90 backdrop-blur-md overflow-hidden">


        {/* ===== BACKGROUND LAYERS ===== */}

        {/* subtle white vignette (kept) */}
        

        {/* green background vignette (flat tone) */}
<div
  className="pointer-events-none absolute inset-0 -z-10"
  style={{ backgroundColor: "#4d6e55" }}
/>


        {/* gigantic background label text */}
        <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2">
            <span
              className="
                select-none whitespace-nowrap leading-none font-semibold tracking-[-0.04em]
                text-white/5
                text-[clamp(6rem,20vw,28rem)]
              "
            >
              {bgWord}
            </span>
          </div>
        </div>
        {/* ===== /BACKGROUND LAYERS ===== */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-14">
          {/* IMAGE — single element, centered/anchored left on large screens */}
          <figure className="lg:col-span-7 relative min-h-[300px] lg:min-h-[420px]">
            <Image
              src={s.img}
              alt={s.title}
              fill
              sizes="(min-width:1024px) 58vw, 90vw"
              className="object-contain object-left lg:object-left"
              priority
            />
          </figure>

          {/* CONTENT */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* eyebrow */}
            {s.title && (
              <p className="text-xs uppercase tracking-[0.2em] text-[#FFF]">
                {s.title}
              </p>
            )}
            {/* headline */}
            <h2 className="mt-2 text-4xl sm:text-5xl font-semibold text-[#FFF]">
              {s.headline}
            </h2>
            {/* optional price */}
            {s.price && (
              <p className="mt-3 text-white/90 font-semibold">{s.price}</p>
            )}
            {/* copy */}
            {s.copy && (
              <p className="mt-5 text-[#FFF] leading-relaxed">{s.copy}</p>
            )}

            {/* dots */}
            <div className="mt-6 flex items-center gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === i ? "w-8 bg-white" : "w-2 bg-white/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* CTA — Register (replaces Add to cart) */}
            <div className="mt-6">
              <Link
                href="/register"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-slate-900 font-medium shadow-[0_10px_30px_rgba(255,255,255,.08)] hover:bg-white/90 transition"
              >
                Register
              </Link>
            </div>
          </div>
        </div>

        {/* next / prev */}
{/* next / prev */}
<div className="absolute right-6 bottom-6 flex gap-3">
  <button
    onClick={() => setI((p) => (p - 1 + max) % max)}
    className="h-10 w-10 rounded-full bg-white text-[#4D6E55] 
               hover:bg-[#87ab93] hover:text-white 
               transition-colors duration-300 shadow-md"
    aria-label="Previous"
  >
    ‹
  </button>
  <button
    onClick={() => setI((p) => (p + 1) % max)}
    className="h-10 w-10 rounded-full bg-white text-[#4D6E55] 
               hover:bg-[#87ab93] hover:text-white 
               transition-colors duration-300 shadow-md"
    aria-label="Next"
  >
    ›
  </button>
</div>
      </div>
    </section>
  );
}
