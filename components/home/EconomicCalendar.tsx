// components/EconomicCalendar.tsx
"use client";
import Image from "next/image";

export default function EconomicCalendar() {
  // Use your brand green
  const brand = "#4D6E55";

  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-t from-[#788FA1] to-white text-[#5D595B]">
      {/* Badge */}
      <div
        className="absolute top-5 right-5 rounded-full px-4 py-2 text-white font-semibold animate-pulse"
        style={{ background: brand }}
      >
        LIVE FEED
      </div>

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="h1 flex items-center justify-center gap-3 font-semibold">

          {/* calendar icon */}
          <svg width="40" height="40" viewBox="0 0 24 24" className="hidden md:block" style={{ fill: brand }}>
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 
            1.1.9 2 2 2h14c1.1 0 2-.9 
            2-2V6c0-1.1-.9-2-2-2zM5 20V9h14v11H5z"/>
          </svg>
          Economic Calendar
        </h1>
        <p className="max-w-3xl mx-auto mt-2 text-base md:text-lg leading-relaxed">
          Experience market-moving news in real-time with our advanced calendar interface. Powered by Autochartist.
          Trusted by professionals. Exclusive to{" "}
          <a href="https://stonefortsecurities.com" target="_blank" className="font-semibold underline decoration-slate-400 hover:decoration-current">
            Stonefort Securities
          </a>.
        </p>
      </div>

      {/* Iframe */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8">
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
          <iframe
            // ↓ Replace with your actual (valid) embed URL
            src="https://eia.autochartist.com/calendar/?broker_id=984&showall=true&nextdays=3&token=efca8dcbec56b11e97ac240b9d90fbf2&expire=1795989600&user=Stonefort-Securities&locale=en#!/calendar"
            className="w-full"
            // responsive heights
            style={{ height: "850px" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
          />
        </div>

        {/* Metrics (optional) */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { n: "75K+", t: "Active Traders" },
            { n: "1.2M+", t: "Signals Delivered" },
            { n: "120+", t: "Markets Covered" },
          ].map((m) => (
            <div key={m.t} className="text-center rounded-xl bg-white shadow-lg border border-slate-200 py-6">
              <div className="text-3xl font-bold" style={{ color: brand }}>{m.n}</div>
              <div className="mt-1 text-sm">{m.t}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating CTA */}
      <a
        href="/register"
        className="fixed bottom-5 right-5 rounded-full px-5 py-3 font-semibold text-white shadow-xl"
        style={{ background: brand }}
      >
        Trade Now
      </a>
    </section>
  );
}
