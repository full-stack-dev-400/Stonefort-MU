"use client";
import React, { useMemo, useState } from "react";


/**
 * Four-up hover/expand strip
 * - Equal width/height by default
 * - When a section is hovered/focused, it expands and reveals full content
 * - Smooth transition using CSS grid-template-columns
 * - Keyboard accessible (Tab to focus, Enter/Space to lock selection)
 */

export type ExpandItem = {
  id: string | number;
  /** Large background image URL */
  image: string;
  /** Big number label shown at the bottom-left when collapsed */
  number?: string;
  /** Title shown when expanded */
  title: string;
  /** Optional subtitle/body shown when expanded */
  body?: React.ReactNode;
};

export default function HoverExpandFour({
  items = demoItems,
  height = 520,
}: {
  items?: ExpandItem[];
  /** component height in px */
  height?: number;
}) {
  const [active, setActive] = useState<number | null>(null);
  const [locked, setLocked] = useState<number | null>(null);

  const template = useMemo(() => {
    const idx = locked ?? active;
    if (idx == null) return "1fr 1fr 1fr 1fr";
    return [0, 1, 2, 3]
      .map((i) => (i === idx ? "3fr" : "1fr"))
      .join(" ");
  }, [active, locked]);

  return (
    <div
      className="relative"
      onMouseLeave={() => setActive(null)}
      style={{ height }}
    >
      <div
        className="grid h-full overflow-hidden rounded-2xl shadow-lg"
        style={{
          gridTemplateColumns: template,
          transition: "grid-template-columns 400ms ease",
        }}
      >
        {items.slice(0, 4).map((item, i) => {
          const isActive = (locked ?? active) === i;
          return (
            <section
              key={item.id}
              className="relative isolate cursor-pointer select-none"
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

              {/* Gradient overlays (for contrast) */}
              <div className="pointer-events-none absolute inset-0 bg-black/30" />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent"
                aria-hidden
              />

              {/* Collapsed number label */}
              <div className="absolute bottom-3 left-4 text-white/90">
                <span className="text-6xl font-extrabold tracking-tight drop-shadow-md md:text-7xl">
                  {item.number ?? String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Expanded content (lifted up so it doesn't overlap the number) */}
              <div
                className="absolute inset-x-0 top-0 bottom-24 flex flex-col justify-end p-6 text-white"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "none" : "translateY(12px)",
                  transition: "opacity 300ms ease, transform 300ms ease",
                }}
              >
                <h3 className="mb-2 text-2xl font-extrabold md:text-3xl">
                  {item.title}
                </h3>
                {item.body && (
                  <div className="max-w-[48ch] text-sm/6 text-white/90 md:text-base/7">
                    {item.body}
                  </div>
                )}
              </div>

              {/* Divider between panels */}
              <div className="absolute right-0 top-1/2 h-4/5 w-px -translate-y-1/2 bg-white/20" />
            </section>
          );
        })}
      </div>

  

    </div>
  );
}

// --- Demo content with Lorem Ipsum & images for all boxes ---
const demoItems: ExpandItem[] = [
  {
    id: 1,
    image:
      "/images/ftx.webp",
    number: "01",
    title: "Dummy Text",
    body: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        posuere erat a ante venenatis dapibus posuere velit aliquet. Cras
        mattis consectetur purus sit amet fermentum.
      </>
    ),
  },
  {
    id: 2,
    image:
      "/images/chart.webp",
    number: "02",
    title: "Dummy Text",
    body: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
        sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
      </>
    ),
  },
  {
    id: 3,
    image:
      "/images/bitcoin.webp",
    number: "03",
    title: "Dummy Text",
    body: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed
        diam eget risus varius blandit sit amet non magna. Donec ullamcorper
        nulla non metus auctor fringilla.
      </>
    ),
  },
  {
    id: 4,
    image:
      "/images/mob.webp",
    number: "04",
    title: "Dummy Text",
    body: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        blandit tempus porttitor. Aenean lacinia bibendum nulla sed
        consectetur.
      </>
    ),
  },
];
