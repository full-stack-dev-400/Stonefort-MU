"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

type MegaGroup = {
  title: string;
  description: string;
  button?: string;
  href?: string;
  columns: {
    heading: string;
    items: { label: string; href: string }[];
  }[];
};

export default function MegaMenu({
  label,
  group,
}: {
  label: string;
  group: MegaGroup;
}) {
  const [open, setOpen] = useState(false);

  // small delay so it doesn't instantly disappear
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const HOVER_DELAY = 120; // ms – adjust if you want

  const handleOpen = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpen(true);
  };

  const handleClose = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    closeTimeout.current = setTimeout(() => {
      setOpen(false);
    }, HOVER_DELAY);
  };

  // cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    };
  }, []);

  return (
    <li
      className="relative"
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      {/* TOP NAV LINK */}
      <button
        className="font-medium text-[15px] text-slate-300 hover:text-[#4d6e55] px-4 py-2 transition"
        onFocus={handleOpen}
        onBlur={handleClose}
      >
        {label}
      </button>

      {/* FIXED FULL-WIDTH DROPDOWN WITH CENTERED CONTENT */}
      {open && (
        <div
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          className="
            fixed top-[64px] left-0 right-0
            bg-[#f3f3f3]
            shadow-xl
            py-14
            z-50
            pointer-events-auto
            flex justify-center
          "
        >
          {/* INNER CENTERED CONTAINER */}
          <div className="w-full max-w-[1240px] px-10 flex gap-12">
            {/* LEFT SIDE */}
            <div className="w-[35%] pr-10 border-r border-slate-300/30">
              <h2 className="text-2xl font-semibold text-[#4D6E55] mb-3">
                {group.title}
              </h2>
              <p className="text-[15px] leading-relaxed text-slate-600 mb-6">
                {group.description}
              </p>
              {group.button && (
                <Link
                  href={group.href ?? "#"}
                  className="inline-flex items-center bg-[#4D6E55] text-[white] px-5 py-2 rounded-full text-sm font-medium hover:bg-[#3d5644] transition"
                >
                  {group.button} →
                </Link>
              )}
            </div>

            {/* RIGHT SIDE */}
            <div className="w-[65%] grid grid-cols-2 gap-8">
              {group.columns.map((col, i) => (
                <div key={i}>
                  <h4 className="text-sm uppercase font-semibold text-[#7c8b80] mb-3 tracking-wide">
                    {col.heading}
                  </h4>
                  <ul className="space-y-3">
                    {col.items.map((item, j) => (
                      <li key={j}>
                        <Link
                          href={item.href}
                          className="text-[15px] text-[#1c3328] hover:text-[#4D6E55] transition"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </li>
  );
}
