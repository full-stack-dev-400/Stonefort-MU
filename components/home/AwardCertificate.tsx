export default function AwardCertificate() {
  return (
    <section className="py-[clamp(6vw,72px,72px)] bg-white">
      <div className="w-[min(1100px,92vw)] mx-auto">

        {/* Frame */}
        <article
          className="
            relative overflow-hidden rounded-[22px]
            p-[clamp(16px,2.4vw,24px)]
            bg-gradient-to-br from-[#4d6e55]/80 via-transparent to-[#1E4862]/20
            shadow-[0_18px_48px_rgba(0,0,0,0.10)]
            border border-[#4d6e55]/10
            transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(0,0,0,0.12)]
          "
        >

          {/* Ribbon */}
          <span
            className="
              absolute top-[28px] right-[-40px] z-20
              bg-[#DAE1B7] text-[#223647] font-extrabold
              px-10 py-[6px] rotate-[32deg]
              shadow-[0_8px_20px_rgba(0,0,0,0.12)]
              border border-[#1E4862]/10
              flex items-center gap-1
            "
          >
            <strong className="font-black">Winner</strong>· 2025
          </span>

          {/* Paper */}
          <div
            className="
              rounded-[18px]
              bg-[repeating-linear-gradient(0deg,transparent_0_23px,rgba(218,225,183,0.06)_23px_24px)]
              bg-[url('/images/awards.webp'),radial-gradient(120%_120%_at_50%_0%,white_0%,#fbfdf8_70%)]
              bg-no-repeat bg-left bg-contain
              p-[clamp(16px,2.2vw,22px)]
              border border-[#4d6e55]/10
            "
          >
            {/* Inner Box */}
            <div
              className="
                text-center rounded-[14px]
                p-[clamp(18px,3.2vw,36px)]
                border border-dashed border-[#4d6e55]/20
              "
            >
              <h3
                className="
                  text-[#000] font-black
                  text-[clamp(20px,2.4vw,28px)] tracking-tight mb-3
                "
              >
                Best Emerging Broker
              </h3>

              {/* Award line */}
              <p
                className="
                  flex justify-center flex-wrap gap-2 
                  text-[#4d6e55] font-bold mb-3
                "
              >
                <span className="font-black">Money Expo India 2025</span>
                <span className="opacity-40">•</span>
                <a className="underline underline-offset-4" href="#" />
              </p>

              {/* Description */}
              <p
                className="
                  max-w-[58ch] mx-auto text-[#4d6e55]
                  leading-[1.65] mb-4
                "
              >
                Stonefort Securities was honored as the Best Emerging Broker at
                Money Expo India 2025, recognizing our leadership in the
                evolving world of trading.
              </p>
            </div>
          </div>

          {/* Wax Seal */}
          <span
            className="
              absolute right-6 bottom-0 z-30
              w-[82px] h-[82px] grid place-items-center
              rounded-full rotate-[-6deg]
              bg-[#DAE1B7] shadow-[0_8px_22px_rgba(0,0,0,0.18)]
              border border-[#1E4862]/20
            "
          >
            {/* Seal SVG */}
            <svg
              viewBox="0 0 64 64"
              width="64"
              height="64"
              aria-label="Verified seal"
            >
              <defs>
                <radialGradient id="wax" cx="50%" cy="45%" r="60%">
                  <stop offset="0%" stopColor="#f3f7f1" />
                  <stop offset="100%" stopColor="#4d6e55" />
                </radialGradient>
              </defs>

              <circle
                cx="32"
                cy="32"
                r="28"
                fill="url(#wax)"
                stroke="#4d6e55"
                strokeOpacity=".25"
                strokeWidth="2"
              />
              <path
                d="M22 33l6 6 14-14"
                fill="none"
                stroke="#4d6e55"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </article>
      </div>
    </section>
  );
}
