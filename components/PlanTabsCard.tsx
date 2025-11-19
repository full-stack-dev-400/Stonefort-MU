"use client";
import React, { MouseEvent, useState } from "react";

/* ---------- Types ---------- */
type Pair = [string, string];
type Plan = { title: string; subtitle: string; pairs: Pair[] };
type TabDef = { id: number; label: string };

/* ---------- Hover glow effect ---------- */
function HoverGlowCard(props: React.PropsWithChildren<{ className?: string }>) {
  const { className = "", children } = props;
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div
      onMouseMove={onMove}
      className={[
        "group relative rounded-2xl border border-white/10 bg-transparent",
        "shadow-[0_8px_30px_rgba(0,0,0,.35)] backdrop-blur-sm",
        "transition-all duration-300 hover:border-white/25",
        className,
      ].join(" ")}
    >
      {/* moving spotlight */}
      <span
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(180px 180px at var(--mx) var(--my), rgba(99,102,241,.35), transparent 60%)",
        }}
      />
      {/* subtle conic border sheen */}
      <span
        className="pointer-events-none absolute inset-[-1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "conic-gradient(from 180deg, rgba(148,163,184,.2), rgba(99,102,241,.4) 25%, rgba(99,102,241,.2) 75%, rgba(148,163,184,.2))",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: 1,
          borderRadius: 16,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

/* ---------- The plan card ---------- */
function PlanCard({ plan }: { plan: Plan }) {
  return (
    <HoverGlowCard className="w-full max-w-md min-h-[380px]">
      <div className="p-8 sm:p-10 flex flex-col justify-center h-full">
        <div className="mb-6">
          <h4 className="text-2xl font-bold text-white leading-none">{plan.title}</h4>
          <p className="text-slate-400">{plan.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 text-slate-300">
          {plan.pairs.map(([l, r], idx) => (
            <div
              key={idx}
              className="flex items-center justify-between gap-6 border-b border-white/5 pb-2 last:border-b-0"
            >
              <span className="whitespace-nowrap">{l}</span>
              <span className="font-semibold">{r}</span>
            </div>
          ))}
        </div>
      </div>
    </HoverGlowCard>
  );
}

/* ---------- Default Tabs & Plans ---------- */
const DEFAULT_TABS: TabDef[] = [
  { id: 1, label: "Starter" },
  { id: 2, label: "Advanced" },
  { id: 3, label: "Elite" },
];

const DEFAULT_PLANS: Record<number, Plan> = {
  1: {
    title: "Starter",
    subtitle: "Accounts",
    pairs: [
      ["Starts at $50", "Leverage 1:500"],
      ["Spreads (Pips) 1.3", "Zero Commission"],
      ["Stop-out 20%", "Margin Call 50%"],
    ],
  },
  2: {
    title: "Advanced",
    subtitle: "Accounts",
    pairs: [
      ["Starts at $3000", "Leverage 1:500"],
      ["Spreads (Pips) 1.0", "Zero Commission"],
      ["Stop-out 20%", "Margin call 50%"],
    ],
  },
  3: {
    title: "Elite",
    subtitle: "Accounts",
    pairs: [
      ["Starts at $10,000", "Leverage 1:200"],
      ["Spreads (Pips) 0.01", "Commission $8"],
      ["Stop-out 50%", "Margin Call 70%"],
    ],
  },
};

/* ---------- Main Component ---------- */
export default function PlanTabsCard({
  tabs = DEFAULT_TABS,
  plans = DEFAULT_PLANS,
  defaultTab = 1,
  className = "",
}: {
  tabs?: TabDef[];
  plans?: Record<number, Plan>;
  defaultTab?: number;
  className?: string;
}) {
  const [tab, setTab] = useState<number>(defaultTab);

  return (
    <section className={`w-full py-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          
          {/* ---------- LEFT SIDE: Content + Tabs ---------- */}
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              
              <div>
                  <div className="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">The security first platform</div>
                </div>
                <h3 className="h3 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3">Next Gen Trading, For Your Gen</h3>
                <p className="text-lg text-slate-400 mb-8">Define access roles for the end-users, and extend your authorization capabilities to implement dynamic access control.</p>
            </div>

            <div className="max-w-sm space-y-2">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`flex items-center text-sm font-medium rounded-md border w-full px-3 py-3 transition
                    ${
                      tab === t.id
                        ? "border-purple-700 text-slate-50 shadow-sm shadow-purple-500/25 bg-slate-800/25"
                        : "border-slate-700 text-slate-50/90 opacity-60 hover:opacity-100 bg-slate-800/25"
                    }`}
                >
                  <span>{t.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* ---------- RIGHT SIDE: Card ---------- */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <PlanCard plan={plans[tab]} />
          </div>
        </div>
      </div>
    </section>
  );
}
