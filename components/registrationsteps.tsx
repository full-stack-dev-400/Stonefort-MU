"use client";
import React, { MouseEvent } from "react";
import Image from "next/image";

// ✅ Import your background image
import BgMask from "@/public/images/bg-mask.png";

function HoverGlowCard({
  step,
  title,
  text,
}: {
  step: string;
  title: string;
  text: string;
}) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  };

  return (
    <div
      onMouseMove={onMove}
      className="relative group overflow-hidden rounded-2xl border border-[#4D6E55]/40 bg-[#4d6e55] p-8 text-white transition-all duration-500 hover:border-[#4D6E55] hover:shadow-[0_0_30px_rgba(77,110,85,0.4)]"
    >
      {/* ⭐ Background Image */}
      <Image
        src={BgMask}
        alt=""
        className="absolute bottom-0 right-0 w-190 opacity-40 pointer-events-none select-none"
      />

      {/* Glow effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: `radial-gradient(400px circle at var(--mx) var(--my), rgba(30,72,98,0.35), transparent 40%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start space-y-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#4d6e55] bg-[#87ab93] text-2xl font-bold text-[#fff] shadow-md">
          {step}
        </div>
        <h3 className="text-2xl font-semibold text-[#fff]">{title}</h3>
        <p className="text-[#fff]">{text}</p>
      </div>
    </div>
  );
}

export default function StepCards() {
  const cards = [
    {
      step: "1",
      title: "Register",
      text: "Select your preferred account type and complete our quick, secure online application to start trading.",
    },
    {
      step: "2",
      title: "Verify",
      text: "Verify quickly with our streamlined digital onboarding.",
    },
    {
      step: "3",
      title: "Funds",
      text: "Fund your trading account easily with a wide range of secure payment options.",
    },
    {
      step: "4",
      title: "Trade",
      text: "Start trading instantly and access over hundreds of instruments.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 text-center">
      {/* Heading */}
      <div className="mb-12">
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
            >
          Open your account effortlessly
        </h2>
            <p           
            className="
            max-w-3xl mx-auto mt-3 
            text-slate-600
            text-[20px]      /* ← set text to exactly 20px */
            leading-[1.5]    /* optional: smoother reading */
          "
          >
          In four simple steps
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-left">
        {cards.map((card) => (
          <HoverGlowCard
            key={card.step}
            step={card.step}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-12 flex justify-center ">
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-full bg-[#4D6E55] px-8 py-3 text-[white] font-semibold text-lg transition-all duration-300 hover:bg-[#87ab93]"
        >
          Open an Account
        </a>
      </div>
    </section>
  );
}
