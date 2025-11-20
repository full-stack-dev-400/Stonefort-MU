import Image from "next/image";

import HeroBg from "@/public/images/herobg.webp";
import TradingElement from "@/public/images/trading-element.webp";

// Flags
import Flaguae from "@/public/images/flags/uae.png";
import FlagMauritius from "@/public/images/flags/mauritius.png";
import FlagStLucia from "@/public/images/flags/st-lucia.png";
import FlagStVincent from "@/public/images/flags/st-vincent-and-the-grenadines.png";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* ===== Background Image ===== */}
      <div className="absolute inset-0 -z-20" aria-hidden="true">
        <Image
          src={HeroBg}
          alt="Hero Background"
          fill
          priority
          placeholder="blur"
          className="object-cover object-center opacity-90"
        />
      </div>

      {/* ===== Right-side Trading Element ===== */}
      <div
        className="
          absolute right-0
          top-20 bottom-auto          /* BELOW 1440px → top-right with padding */
          xl:top-auto xl:bottom-20    /* 1440px+ → bottom-right */
          -z-10
        "
      >
        <Image
          src={TradingElement}
          alt="Trading Element"
          width={400}
          height={400}
          className="
            object-contain opacity-95 pointer-events-none select-none

            /* BELOW 1440px → smaller */
            w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]

            /* 1440px+ → normal size */
            xl:w-[400px]
          "
        />
      </div>





      {/* ===== Content ===== */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-16 md:pt-52 md:pb-32 min-h-[520px] md:min-h-[640px] flex flex-col justify-between">
        {/* Top copy */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6" data-aos="fade-down">
            <div className="inline-flex relative before:absolute ">
              <a
                className="btn-sm py-0.5 text-slate-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(#4D6E55,#4D6E55)_padding-box,linear-gradient(#4D6E55,#4D6E55_75%,transparent_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/50 before:rounded-full before:pointer-events-none shadow-sm"
                href="#0"
              >
                <span className="relative inline-flex items-center text-[#fff]">
                  Powering Your Trading Journey
                  <span className="tracking-normal text-[#fff] group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </span>
              </a>
            </div>
          </div>

            <h1
              className="
                bg-clip-text text-transparent bg-gradient-to-r 
                from-slate-200/60 via-slate-200 to-slate-200/60 
                pb-4 font-semibold
                leading-[1.05]     /* FIXED TIGHT LINE HEIGHT */

                text-[32px]        /* Mobile */
                sm:text-[40px]     /* Small screens */
                md:text-[52px]     /* Tablets */
                lg:text-[64px]     /* Laptops */
                xl:text-[72px]     /* Large screens */
                2xl:text-[80px]    /* Big desktops */
              "
              data-aos="fade-down"
            >
              Trade Limitless <br/>With Stonefor Securities
            </h1>



            <p
              className="
                text-[20px]        /* exact 20px */
                text-slate-300 
                mb-8
              "
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Unlock global market potential with our secure platform, expert support, and innovative trading tools; your gateway to smarter, more confident investing.
            </p>


          {/* CTA buttons */}
          <div
            className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <a
              className="btn text-[#ffffff] bg-gradient-to-r from-[#4D6E55]/80 via-[#88918b] to-[#4D6E55]/80 hover:bg-white w-full transition duration-150 ease-in-out group"
              href="#0"
            >
              Open An Account
              <span className="tracking-normal text-[#fff] group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                -&gt;
              </span>
            </a>
            <a
              className="btn text-[#ffffff] bg-gradient-to-r from-[#4D6E55]/80 via-[#88918b] to-[#4D6E55]/80 hover:bg-white w-full transition duration-150 ease-in-out group"
              href="#0"
            >
              <span>Login</span>
            </a>
          </div>
        </div>

        {/* ===== Regulation Boxes (bottom of hero) ===== */}
        <div
  className="mt-10 flex flex-wrap justify-center gap-3 md:gap-4"
  data-aos="fade-up"
  data-aos-delay="500"
>
  <RegBox label="SCA" flag={Flaguae} />
  <RegBox label="FSC" flag={FlagMauritius} />
  <RegBox label="St. Lucia" flag={FlagStLucia} />
  <RegBox label="St. Vincent" flag={FlagStVincent} />
</div>
      </div>
    </section>
  );
}

/** Boxy pill like the screenshot: rounded, border, translucent bg, chevron */
/** Frosted “box” with border, blur and chevron (screenshot style) */
function RegBox({ label, flag }: { label: string; flag: any }) {
  return (
    <div
      className={[
        // layout
        "group relative inline-flex items-center gap-2 px-4 py-2",
        // shape
        "rounded-2xl",
        // visible border
        "border border-[101711]",
        // frosted glass (works where backdrop-filter is supported)
        "bg-white/10 supports-[backdrop-filter]:backdrop-blur-md",
        // add a bit of saturation for the ‘mirror’ look
        "supports-[backdrop-filter]:[backdrop-filter:saturate(140%)_blur(10px)]",
        // subtle inner ring and hover tint
        "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]",
        "hover:bg-white/15 transition-colors",
        // text
        "text-slate-900 md:text-slate-100", // if your hero is dark keep slate-100
      ].join(" ")}
    >
      <Image
        src={flag}
        alt={`${label} flag`}
        width={18}
        height={18}
        className="rounded-full"
      />
      <span className="text-sm font-semibold">{label}</span>
      <svg
        className="w-3.5 h-3.5 opacity-80"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10 7.293 6.707A1 1 0 1 1 8.707 5.293l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0z" />
      </svg>

      {/* subtle highlight sheen */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-60"></span>
    </div>
  );
}

