"use client";

import { useId, useState, useRef, KeyboardEvent, ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";

// Your images
import Terminal from "@/public/images/Terminalmt5.webp";
import stonefort from "@/public/images/stonefort.webp";
import clientportal from "@/public/images/clientPortal.webp";
import SFXweb from "@/public/images/sfx-web.webp";
import SFXmob from "@/public/images/sfxMob.webp";

type TabItem = {
  id: string;
  label: string; // left rail label
  title: string; // right panel title
  description: string; // right panel paragraph
  media?: ReactNode; // image/chart/etc (optional)
  ctaHref?: string;
  ctaLabel?: string;
  labelClassName?: string;
  activeLabelClassName?: string;
};

type Props = {
  items: TabItem[];
  accentHex?: string; // default #4d6e55
  className?: string;
  headingTitle?: string;
  headingText?: string;
};

/** Helper: image fills the whole box like background-cover */
function FitImage({
  src,
  alt,
  aspect = "aspect-[16/9]",
}: {
  src: StaticImageData | string;
  alt: string;
  aspect?: string; // e.g., "aspect-[21/9]" if you want wider
}) {
  return (
    <div className={`relative w-full ${aspect} overflow-hidden`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(min-width: 1280px) 900px, (min-width: 768px) 700px, 100vw"
        priority={false}
      />
    </div>
  );
}

export default function VerticalTabs({
  items,
  accentHex = "#4d6e55",
  className = "",
  headingTitle,
  headingText,
}: Props) {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  const baseId = useId();
  const tabIds = items.map((_, i) => `${baseId}-${i}`);

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, idx: number) => {
    if (!listRef.current) return;
    const buttons = Array.from(
      listRef.current.querySelectorAll<HTMLButtonElement>("[role='tab']")
    );
    if (!buttons.length) return;

    const focusAt = (i: number) => {
      const next = (i + buttons.length) % buttons.length;
      (buttons[next] as HTMLButtonElement).focus();
      setActive(next);
    };

    switch (e.key) {
      case "ArrowUp":
      case "ArrowLeft":
        e.preventDefault();
        focusAt(idx - 1);
        break;
      case "ArrowDown":
      case "ArrowRight":
        e.preventDefault();
        focusAt(idx + 1);
        break;
      case "Home":
        e.preventDefault();
        focusAt(0);
        break;
      case "End":
        e.preventDefault();
        focusAt(buttons.length - 1);
        break;
    }
  };

  return (
    <section
      className={["relative mx-auto max-w-6xl px-4 sm:px-6", className].join(
        " "
      )}
    >
      {/* Heading & intro text */}
      {(headingTitle || headingText) && (
        <div className="w-full mx-auto text-center pt-16 pb-10">

        {headingTitle && (
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
            dangerouslySetInnerHTML={{ __html: headingTitle }}
          />
        )}

          {headingText && (
                        <p           
            className="
            max-w-3xl mx-auto mt-3 
            text-gray-600
            text-[20px]      
            leading-[1.5]   
          "
          >
              {headingText}
            </p>
          )}
        </div>
      )}

      <div
        className="flex bg-white rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-200 overflow-hidden"
        style={{ isolation: "isolate" }}
      >
        {/* Left rail (tabs) */}
        <div className="relative p-6 md:p-8 bg-neutral-100 w-[320px] shrink-0">
          <div className="pointer-events-none absolute -top-16 -left-16 w-72 h-72 rounded-full bg-white/60 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 -left-12 w-52 h-52 rounded-full bg-sky-100/60 blur-3xl" />

          <div
            ref={listRef}
            role="tablist"
            aria-orientation="vertical"
            className="flex flex-col gap-6 mt-2"
          >
            {items.map((tab, i) => {
              const selected = i === active;
              return (
                <button
                  key={tab.id}
                  id={`tab-${tabIds[i]}`}
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`panel-${tabIds[i]}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={[
                    "group w-full text-left rounded-full transition-all duration-300 focus:outline-none",
                    "ring-0 focus-visible:ring-2 focus-visible:ring-black/20",
                    selected
                      ? "bg-[color:var(--accent)] text-white px-6 py-4"
                      : "bg-white text-gray-900 px-6 py-4 border border-gray-200 hover:border-gray-300",
                  ].join(" ")}
                  style={{ ["--accent" as any]: accentHex }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={
                        selected
                          ? [
                              "font-semibold text-[#fff]",
                              tab.activeLabelClassName || "",
                            ].join(" ")
                          : [
                              "font-medium text-gray-900",
                              tab.labelClassName || "",
                            ].join(" ")
                      }
                    >
                      {tab.label}
                    </span>

                    <span
                      className={[
                        "grid place-items-center shrink-0 rounded-full transition-transform",
                        selected
                          ? "size-11 bg-white text-gray-900 group-hover:translate-x-0.5"
                          : "size-9 bg-gray-100 text-gray-700 group-hover:translate-x-0.5",
                      ].join(" ")}
                      aria-hidden="true"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5 12h12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M13 6l6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right content panel */}
        <div className="relative p-6 md:p-10 bg-neutral-50 flex-1 min-w-0">
          <div className="h-full rounded-3xl bg-white border border-gray-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_10px_30px_rgba(0,0,0,0.04)] p-6 md:p-10">
            {items.map((tab, i) => {
              const selected = i === active;
              return (
                <div
                  key={tab.id}
                  id={`panel-${tabIds[i]}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${tabIds[i]}`}
                  hidden={!selected}
                  className="grid gap-6"
                >
                  <div className="max-w-2xl">
                    <h3 className="text-3xl font-bold text-gray-900">
                      {tab.title}
                    </h3>
                    <p className="mt-3 text-lg text-gray-600">
                      {tab.description}
                    </p>
                  </div>

                  {/* Media: full-cover image in the card */}
                  {tab.media ? (
                    <div className="rounded-2xl border border-gray-200 bg-white shadow-[0_6px_24px_rgba(0,0,0,0.04)] overflow-hidden">
                      {tab.media}
                    </div>
                  ) : null}

                  {tab.ctaHref && tab.ctaLabel ? (
                    <div className="mt-2">
                      <a
                        href={tab.ctaHref}
                        className="inline-flex items-center gap-2 rounded-full bg-[#4d6e55] text-[#fff] px-4 py-2 hover:bg-[#87ab93] transition"
                      >
                        {tab.ctaLabel}
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M5 12h12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M13 6l6 6-6 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Example usage with images adjusted to cover ===== */
export function PlatformsTabs() {
  return (
    <VerticalTabs
      accentHex="#4d6e55"
      headingTitle={`Secure and Reliable Trading Platforms with <span class='text-[#4d6e55]'>Stonefort Securities.</span>`}
      headingText="Trade hundreds of CFDs on Forex, Crypto, Gold, Shares, and Indices with one Stonefort Securities account; delivering seamless execution, deep liquidity, and trusted reliability."
      items={[
        {
          id: "app",
          label: "MT5 Desktop",
          title: "MT5 Desktop",
          description:
            "Trade on the go with powerful tools, real-time prices, and clear order execution designed for speed and reliability.",
          media: <FitImage src={Terminal} alt="MT5 Desktop preview" />,
          ctaHref: "#",
          ctaLabel: "Open MT5",
        },
        {
          id: "mt4",
          label: "Mobile",
          title: "Mobile",
          description:
            "A classic platform trusted by millions. Analyze, plan, and execute with proven performance and extensive indicators.",
          media: <FitImage src={stonefort} alt="Mobile app preview" />,
          ctaHref: "#",
          ctaLabel: "Open MT5",
        },
        // {
        //   id: "area",
        //   label: "Web",
        //   title: "Web",
        //   description:
        //     "Manage accounts, deposits, and withdrawals in one secure dashboard with full visibility and control.",
        //   media: <FitImage src={SFXweb} alt="Web trader preview" />,
        //   ctaHref: "#",
        //   ctaLabel: "Open Dashboard",
        // },
        {
          id: "mt5",
          label: "Client Portal",
          title: "Client Portal",
          description:
            "Navigate the markets with MT5’s advanced toolset—multi-asset support, depth of market, and lightning execution.",
          media: <FitImage src={clientportal} alt="Client portal preview" />,
          ctaHref: "#",
          ctaLabel: "Client Portal",
        },
        {
          id: "SFXMobile",
          label: "SFX Trade Mobile",
          title: "SFX Trade Mobile",
          description:
            "Navigate the markets with MT5’s advanced toolset—multi-asset support, depth of market, and lightning execution.",
          media: <FitImage src={SFXmob} alt="SFX mobile preview" />,
          ctaHref: "#",
          ctaLabel: "SFX Trade Mobile",
        },
        {
          id: "SFXWeb",
          label: "SFX Web",
          title: "SFX Web",
          description:
            "Navigate the markets with MT5’s advanced toolset—multi-asset support, depth of market, and lightning execution.",
          media: <FitImage src={SFXweb} alt="SFX web preview" />,
          ctaHref: "#",
          ctaLabel: "SFX Web",
        },
      ]}
    />
  );
}
