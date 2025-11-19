// components/home/BalanceGuard.tsx
import Image from "next/image";
// ⬇️ Update the path/name to wherever you save the shield image
import BalanceGuardImg from "@/public/images/balance-guard.webp";
import BG from "@/public/images/bg.webp";

export default function BalanceGuard() {
  return (
    <section className="relative z-10 pt-12 pb-16 md:pt-10 md:pb-20">



      {/* Dark background strip */}
      <div className="absolute inset-0 -z-10" style={{ backgroundColor: "#101711", }} />


      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-10 md:gap-14 md:grid-cols-2">
          {/* --- Left: Copy --- */}
          <div className="max-w-xl space-y-5">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#fff]">
              Protection
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[white]">
              Stonefort Balance Guard
            </h2>

            <p className="text-base md:text-lg text-[#fff]">
              Your Stonefort Securities account includes{" "}
              
                free Negative Balance Protection
              
              , ensuring your losses never exceed your deposited funds.
            </p>

            <button className="inline-flex items-center justify-center rounded-full bg-[#4D6E55] px-6 py-3 text-sm font-semibold text-[white]  transition hover:bg-[#5b8367]">
              Learn More
            </button>
          </div>

          {/* --- Right: 3D Shield visual --- */}
          <div className="relative flex justify-center">
            {/* Glow behind the element */}
            <div className="absolute -inset-6 md:-inset-10 rounded-full  blur-3xl" />

            <div className="relative">
              <Image
                src={BalanceGuardImg}
                alt="Stonefort Balance Guard – Negative Balance Protection"
                className="w-full max-w-md animate-float"
                priority
              />

              {/* Base glow */}
              <div className="pointer-events-none absolute inset-x-10 -bottom-6 h-8 rounded-full bg-emerald-500/40 blur-2xl opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
