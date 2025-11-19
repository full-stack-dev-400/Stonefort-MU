"use client";
import { useEffect, useMemo, useState } from "react";

/* small inline icons */
const IconDoc = (p: any) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" strokeWidth="2"/>
    <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2"/>
  </svg>
);
const IconChat = (p: any) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M21 15a7 7 0 10-3.1 5.8L21 22l-1-2a6.9 6.9 0 001-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);
const IconZap = (p: any) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M13 2L3 14h7l-1 8 11-14h-7l0-6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);
const IconShield = (p: any) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const topics = [
  "AI Intelligence application",
  "How AI is revolutionizing",
  "The impact of AI on markets",
  "Automation & productivity",
  "Ethics and governance",
];

const orbitIcons = [
  <IconDoc key="i1" className="h-6 w-6" />,
  <IconChat key="i2" className="h-6 w-6" />,
  <IconZap key="i3" className="h-6 w-6" />,
  <IconDoc key="i4" className="h-6 w-6" />,
  <IconZap key="i5" className="h-6 w-6" />,
];

export default function CommandCenter() {
  const [i, setI] = useState(1);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % topics.length), 3000);
    return () => clearInterval(t);
  }, []);

  const prev = useMemo(() => topics[(i - 1 + topics.length) % topics.length], [i]);
  const curr = topics[i];
  const next = useMemo(() => topics[(i + 1) % topics.length], [i]);

  return (
    <section className="relative w-full py-14">
      <div className="mx-auto max-w-6xl rounded-3xl p-6 sm:p-8 md:p-10
                      bg-[radial-gradient(1200px_600px_at_20%_40%,#0c2354_0%,#0b1739_50%,#0b1224_100%)]
                      shadow-[0_0_0_1px_rgba(255,255,255,.06)_inset,0_40px_120px_-40px_rgba(0,0,0,.6)] overflow-hidden">

        {/* header */}
        <div className="flex items-center gap-3 text-sky-100/90">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
            <IconShield className="h-4 w-4 text-white/90" />
          </span>
          <h3 className="text-white/90 font-medium">Vexus Blocks</h3>
          <span className="text-white/60">Your command center</span>
        </div>

        {/* pills */}
        <div className="mt-6 flex items-center gap-3">
          <Pill text={prev} faded />
          <Pill text={curr} active />
          <Pill text={next} faded />
        </div>

        {/* stage */}
        <div className="relative mt-10 h-[420px]">
          {/* soft arcs */}
          <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]">
            <svg viewBox="0 0 800 420" className="w-full h-full opacity-[.18]">
              <path d="M60 300 C 240 200, 560 200, 740 300" stroke="#c7e2ff" strokeWidth="2" fill="none"/>
              <path d="M120 260 C 300 180, 500 180, 680 260" stroke="#c7e2ff" strokeWidth="1.5" fill="none" opacity=".65"/>
            </svg>
          </div>

          {/* center core */}
          <CenterCore />

          {/* orbiting icons (active at TOP, glows) */}
          <OrbitWheel activeIndex={i} items={orbitIcons} radius={170} />

          {/* connector from core to TOP (active) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* vertical line */}
            <div className="absolute -top-[170px] h-[150px] w-px bg-white/45" />
            {/* tiny knob */}
            <div className="absolute -top-[180px] h-3 w-3 -translate-x-1/2 left-1/2 rounded-full bg-white shadow" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------- bits ------- */
function Pill({ text, active, faded }: { text: string; active?: boolean; faded?: boolean }) {
  return (
    <div
      className={[
        "group inline-flex items-center gap-2 rounded-full px-4 py-2 ring-1 transition-all",
        active ? "bg-white/10 ring-white/30 text-white" : "bg-white/5 ring-white/10 text-white/60",
        faded && "opacity-50 backdrop-blur-[1px]",
      ].join(" ")}
    >
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/15">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
          <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3z" stroke="currentColor" strokeWidth="1.6"/>
        </svg>
      </span>
      <span className="text-sm">{text}</span>
    </div>
  );
}

function CenterCore() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="absolute -inset-24 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,.5),transparent_60%)]
                      [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]" />
      <div className="relative h-48 w-48 rounded-full bg-gradient-to-b from-[#67b4ff] to-[#0b7cff] shadow-[0_0_60px_rgba(56,189,248,.55)]">
        <div className="absolute inset-2 rounded-full bg-[#0b1730] shadow-inner" />
        <div className="absolute inset-0 rounded-full ring-1 ring-white/20" />
        <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/95 text-[#0b1730] grid place-items-center font-black">
          V
        </div>
      </div>
    </div>
  );
}

/** Orbit wheel: active icon goes to TOP (-90deg) and glows */
function OrbitWheel({
  activeIndex,
  items,
  radius = 160,
}: {
  activeIndex: number;
  items: React.ReactNode[];
  radius?: number;
}) {
  const N = items.length;
  const step = 360 / N;
  const baseAtTop = -90;                // top position
  const wheelDeg = -activeIndex * step; // rotate so active lands at top

  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform"
      style={{
        width: radius * 2,
        height: radius * 2,
        transition: "transform 700ms cubic-bezier(.2,.7,.2,1)",
        transform: `rotate(${wheelDeg}deg)`,
      }}
    >
      {items.map((node, k) => {
        const angle = baseAtTop + k * step; // positions around circle
        const itemTransform = `rotate(${angle}deg) translate(${radius}px) rotate(${-angle - wheelDeg}deg)`;
        const isActive = k === activeIndex;

        return (
          <div
            key={k}
            className={[
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl border backdrop-blur-sm p-4 text-white/85",
              isActive
                ? "bg-[linear-gradient(160deg,#f6a0ff_0%,#d26cff_50%,#8e5bff_100%)] border-white/40 shadow-[0_20px_60px_rgba(208,132,255,.45)] scale-110"
                : "bg-white/6 border-white/12 opacity-70",
            ].join(" ")}
            style={{
              transform: itemTransform,
              transition: "background 300ms, box-shadow 300ms, border-color 300ms, transform 300ms, opacity 300ms",
            }}
          >
            {/* white mini corner pointer on active (like your ref) */}
            {isActive && (
              <span className="absolute -right-2 top-6 h-3 w-3 -rotate-12 [clip-path:polygon(0_0,100%_50%,0_100%)] bg-white/90"></span>
            )}
            {node}
          </div>
        );
      })}
    </div>
  );
}
