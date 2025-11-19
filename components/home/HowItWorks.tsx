"use client";

import React from "react";

export default function HowItWorks() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* =================== Heading =================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            How It Works
          </h2>

          <p className="mt-4 text-[#4d6e55] tracking-[0.25em] uppercase text-sm font-semibold">
            Getting Started with Stonefort Securities
          </p>

          <p className="mt-5 text-slate-300 text-lg">
            Follow our simple, step-by-step guide; create your account and begin
            trading in just 4 easy steps.
          </p>
        </div>

        {/* =================== Video Box =================== */}
        <div
          className="
            relative w-full aspect-video rounded-3xl overflow-hidden 
            border border-emerald-500/20 shadow-[0_0_40px_rgba(77,110,85,0.25)]
            bg-black/40 backdrop-blur-xl
          "
          data-aos="zoom-in-up"
        >
          {/* Replace this with your actual video later */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-slate-400 text-lg">[Video Here ]</p>
          </div>
        </div>

        {/* =================== Buttons =================== */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/register"
            className="
              px-8 py-3 rounded-full text-[white] font-medium 
              bg-[#4d6e55] hover:bg-[#3e5946] transition
            "
          >
            Open an Account
          </a>

          <a
            href="/trade"
            className="
              px-8 py-3 rounded-full font-medium 
              border border-[#4d6e55] text-[#4d6e55]
              hover:bg-[#4d6e55] hover:text-white transition
            "
          >
            Trade Now
          </a>
        </div>
      </div>
    </section>
  );
}
