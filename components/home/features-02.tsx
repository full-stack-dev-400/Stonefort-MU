"use client";

import Image from "next/image";

import Highlighter, { HighlighterItem } from "../highlighter";

import FeatureImg01 from "@/public/images/feature-image-01.png";
import FeatureImg02 from "@/public/images/homeCurrency.webp";
import FeatureImg04 from "@/public/images/homeMetals.webp";
import FeatureImg05 from "@/public/images/homeStocks.webp";
import FeatureImg06 from "@/public/images/homeIndices.webp";
import FeatureImg07 from "@/public/images/homeEnergies.webp";
import FeatureImg08 from "@/public/images/homeCFD.webp";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

// 🌿 Stonefort Green GlowCard
function GlowCard({ children, className = "" }: CardProps) {
  return (
    <div
      className={[
        "relative rounded-3xl bg-[#fff] text-white backdrop-blur-sm",
        "border border-[#4D6E55]/80 shadow-[0_4px_30px_rgba(0,0,0,0.15)]",
        "overflow-hidden group transition-transform duration-300 hover:-translate-y-1",
        // ➤ greenish spotlight hover effect
        "before:absolute before:inset-0 before:bg-[radial-gradient(1200px_400px_at_-10%_-10%,rgba(255,255,255,0.08),transparent_70%)] before:opacity-70",
        "after:pointer-events-none after:absolute after:inset-0 after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-300",
        "after:bg-[radial-gradient(240px_240px_at_var(--mx,0px)_var(--my,0px),rgba(255,255,255,0.2),transparent_70%)]",
        className,
      ].join(" ")}
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        (e.currentTarget as HTMLDivElement).style.setProperty(
          "--mx",
          `${e.clientX - r.left}px`
        );
        (e.currentTarget as HTMLDivElement).style.setProperty(
          "--my",
          `${e.clientY - r.top}px`
        );
      }}
    >
      {/* green shimmer border */}
      <span
        className="pointer-events-none absolute inset-[-1px] rounded-3xl opacity-30 group-hover:opacity-80 transition-opacity duration-300"
        style={{
          background:
            "conic-gradient(from 180deg, rgba(77,110,85,0.15), rgba(255,255,255,0.25) 30%, rgba(77,110,85,0.25) 60%, rgba(77,110,85,0.15) 100%)",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: 1,
          borderRadius: 24,
        }}
      />

      {/* soft green glow under cards */}
      <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[140%] h-48 bg-[#4D6E55]/40 blur-[60px]" />

      <div className="relative">{children}</div>
    </div>
  );
}

export default function NeoSixGrid() {
  return (
    <section
      className="relative py-16 md:py-24"
      style={{
        backgroundColor: "#ffffff", // white page background
      }}
    >


      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-3 text-[#101711]">
            Connect with markets worldwide
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-xl">
            Stay connected to global financial hubs and expand your reach with
            powerful tools designed for trading worldwide.
          </p>
        </div>

        <Highlighter
          className={[
            "grid gap-6",
            "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
            "auto-rows-[140px] md:auto-rows-[160px]",
          ].join(" ")}
        >
          {/* Currencies */}
          <div className="xl:col-span-2 xl:row-span-2 h-full">
            <HighlighterItem>
              <GlowCard className="h-full">
                <div className="p-6 md:p-8 h-full flex flex-col justify-between">
                  <h3 className="text-[#101711] text-2xl font-semibold">
                    Currencies
                  </h3>
                  <Image
                    src={FeatureImg02}
                    alt="Currencies"
                    width={536}
                    height={230}
                    className="w-full max-w-sm self-end"
                    priority
                  />
                </div>
              </GlowCard>
            </HighlighterItem>
          </div>

          {/* Precious Metals */}
          <div className="xl:col-span-2 xl:row-span-1">
            <HighlighterItem>
              <GlowCard className="h-full">
                <div className="p-6 md:p-8 h-full flex items-center justify-between relative overflow-visible">
                  <div>
                    <h4 className="text-[#101711] text-2xl font-semibold">
                      Precious Metals
                    </h4>
                  </div>

                  <div className="relative w-[220px] h-[150px] -mt-6">
                    <Image
                      src={FeatureImg04}
                      alt="Precious Metals"
                      fill
                      className="object-contain object-bottom"
                      priority
                    />
                  </div>
                </div>
              </GlowCard>
            </HighlighterItem>
          </div>

          {/* Energies */}
          <div className="xl:col-span-2 xl:row-span-3 lg:col-span-3">
            <HighlighterItem>
              <GlowCard className="h-full">
                <div className="p-6 md:p-8 h-full flex flex-col items-start">
                  <h3 className="text-[#101711] text-2xl font-semibold">
                    Energies
                  </h3>
                </div>
                <div className="h-full">
                  <Image
                    src={FeatureImg07}
                    alt="Energies"
                    width={504}
                    height={400}
                    className="inset-0 m-auto md:w-[90%] object-contain"
                    priority
                  />
                </div>
              </GlowCard>
            </HighlighterItem>
          </div>

          {/* Indices */}
          <div className="xl:col-span-2 xl:row-span-2 h-full">
            <HighlighterItem>
              <GlowCard className="h-full">
                <div className="p-6 md:p-8 h-full flex flex-col justify-between">
                  <h3 className="text-[#101711] text-2xl font-semibold">
                    Indices
                  </h3>
                  <Image
                    src={FeatureImg06}
                    alt="Indices"
                    width={536}
                    height={230}
                    className="w-full max-w-sm self-end"
                    priority
                  />
                </div>
              </GlowCard>
            </HighlighterItem>
          </div>

          {/* Stocks */}
          <div className="xl:col-span-2 xl:row-span-3 lg:col-span-3">
            <HighlighterItem>
              <GlowCard className="h-full">
                <div className="p-6 md:p-8 h-full flex flex-col items-start">
                  <h3 className="text-[#101711] text-2xl font-semibold">
                    Stocks
                  </h3>
                </div>
                <div className="h-full">
                  <Image
                    src={FeatureImg05}
                    alt="Stocks"
                    width={504}
                    height={400}
                    className="inset-0 m-auto md:w-[90%] object-contain"
                    priority
                  />
                </div>
              </GlowCard>
            </HighlighterItem>
          </div>

          {/* Crypto CFD */}
          <div className="xl:col-span-4 xl:row-span-2">
            <HighlighterItem>
              <GlowCard className="h-full">
                <div className="p-6 md:p-8 h-full flex flex-col items-start">
                  <h4 className="text-[#101711] text-2xl font-semibold">
                    Crypto CFD
                  </h4>
                  <div className="mt-auto self-center relative w-[300px] h-[260px]">
                    <Image
                      src={FeatureImg08}
                      alt="Crypto CFD"
                      fill
                      className="object-contain object-center"
                      priority
                    />
                  </div>
                </div>
              </GlowCard>
            </HighlighterItem>
          </div>
        </Highlighter>
      </div>
    </section>
  );
}
