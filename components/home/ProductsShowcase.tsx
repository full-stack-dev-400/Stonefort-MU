'use client';

import { useMemo, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Images for tabs and icons — replace the imports below with your actual image imports
import BgWaves from '@/public/images/white-futuristic-building-line-texture-texture-3d-rendering.jpg';
import CryptoPhone from '@/public/images/_image (1).webp';
import ForexArrows from '@/public/images/forex.webp';
import CommoditiesCorn from '@/public/images/_image (2).webp';
import MetalsBars from '@/public/images/_image (3).webp';
import ETFsPie from '@/public/images/_image (4).webp';
import StocksLogos from '@/public/images/_image (5).webp';

// NEW: left background image
import DiscoverBG from '@/public/images/dicoverbg.webp';

import IconForex from '@/public/images/forex.webp';
import IconCrypto from '@/public/images/_image (1).webp';
import IconCommodities from '@/public/images/_image (2).webp';
import IconETFs from '@/public/images/_image (4).webp';
import IconMetals from '@/public/images/_image (3).webp';
import IconStocks from '@/public/images/_image (5).webp';

type Tab = {
  key: string;
  title: string;
  img: StaticImageData;
  icon: StaticImageData;
  blurb: string;
};

const TABS: Tab[] = [
  {
    key: 'forex',
    title: 'Forex',
    img: ForexArrows,
    icon: IconForex,
    blurb:
      'Forex is not a traditional exchange but a global over-the-counter (OTC) market with no central location. It operates virtually, enabling traders worldwide to buy and sell currencies anytime through a decentralized network of banks and brokers.',
  },
  {
    key: 'crypto',
    title: 'Cryptocurrencies',
    img: CryptoPhone,
    icon: IconCrypto,
    blurb:
      'Stonefort Securities lets you trade CFDs on Bitcoin, Ethereum, and other top cryptocurrencies with speed, precision, and reliability.',
  },
  {
    key: 'commodities',
    title: 'Commodities',
    img: CommoditiesCorn,
    icon: IconCommodities,
    blurb:
      'Trading commodities including energy, metals, and agricultural products connects investors worldwide and offers opportunities to diversify and profit from global market movement.',
  },
  {
    key: 'etfs',
    title: 'ETFs',
    img: ETFsPie,
    icon: IconETFs,
    blurb:
      'An ETF (Exchange-Traded Fund) is a pooled investment that trades like a stock, tracking assets such as commodities or indices. It offers diversification, low costs, and flexible trading during market hours.',
  },
  {
    key: 'metals',
    title: 'Metals',
    img: MetalsBars,
    icon: IconMetals,
    blurb:
      'Trade CFDs on gold, silver, platinum, and palladium with Stonefort Securities using live charts and advanced tools giving you flexibility to seize every market opportunity.',
  },
  {
    key: 'stocks',
    title: 'Stocks',
    img: StocksLogos,
    icon: IconStocks,
    blurb:
      'Trade CFDs on leading global stocks such as Amazon, Apple, Microsoft, and more, without owning the shares. Speculate on price movements with leverage and take advantage of advanced trading tools to maximize your market potential.',
  },
];

export default function ProductsShowcase() {
  const [idx, setIdx] = useState(0);
  const active = TABS[idx];

  const go = (dir: 1 | -1) =>
    setIdx((i) => (i + dir + TABS.length) % TABS.length);

  // Animation variants for horizontal slide
  const variants = useMemo(
    () => ({
      in: { opacity: 0, x: 80, filter: 'blur(6px)' } as any,
      center: { opacity: 1, x: 0, filter: 'blur(0px)' } as any,
      out: { opacity: 0, x: -80, filter: 'blur(6px)' } as any,
    }),
    []
  );

  return (
    <section className="relative isolate pt-12 md:pt-20">
      {/* Background waves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20">
        <Image
          src={BgWaves}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-80"
          priority
        />
      </div>

      {/* LEFT side curved background image (desktop / tablet only) */}
<div className="pointer-events-none absolute inset-y-0 left-10 -z-10 hidden sm:flex items-center">
  <div
    className="
      relative

      /* MOBILE (<640px) */
      w-[120px] h-[260px]

      /* SMALL TABLET (640–767px) */
      sm:w-[150px] sm:h-[300px]

      /* TABLET (768–1023px) → smaller */
      md:w-[170px] md:h-[320px]

      /* DESKTOP (1024–1279px) */
      lg:w-[220px] lg:h-[360px]

      /* LARGE DESKTOP (1280px+) */
      xl:w-[320px] xl:h-[500px]

      /* POSITION */
      -translate-y-[60px]
      xl:translate-y-0
      -translate-x-10 md:-translate-x-16
    "
  >
    <Image
      src={DiscoverBG}
      alt=""
      fill
      className="object-contain drop-shadow-2xl"
      sizes="320px"
    />
  </div>
</div>



      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-6 md:mb-8">
<h2
  className="
    bg-clip-text text-transparent bg-gradient-to-r 
    from-slate-200/60 via-slate-200 to-slate-200/60 
    pb-4 font-semibold leading-[1.05]

    max-sm:text-[24px]   /* mobile small */
    text-[24px]          /* base mobile */
    sm:text-[40px]       /* small tablet */
    md:text-[52px]       /* tablet */
    lg:text-[64px]       /* desktop */

  "
>
  Our <span className="text-[#4D6E55]">Products</span>
</h2>



        <p
          className="
            max-w-3xl mx-auto mt-3 
            text-slate-600
            text-[20px]      /* ← set text to exactly 20px */
            leading-[1.5]    /* optional: smoother reading */
          "
        >
          Experience next-generation trading with{' '}
          <strong>Stonefort Securities</strong>, advanced platforms built for
          stability, precision, and speed. Enjoy ultra-tight spreads and deep
          liquidity from top-tier banks and prime brokers for a competitive
          edge in every trade.
        </p>

        </div>

        {/* Tabs */}
        <div className="relative z-20 flex flex-wrap justify-center gap-3 mb-6 md:mb-10">
          {TABS.map((t, i) => {
            const activeTab = i === idx;
            return (
              <button
                key={t.key}
                onClick={() => setIdx(i)}
                className={[
                  'inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm md:text-base border transition-all bg-white/70 backdrop-blur',
                  activeTab
                    ? 'border-[#4D6E55] text-[#4D6E55] shadow-[0_0_0_3px_rgba(77,110,85,0.08)]'
                    : 'border-slate-300/70 text-slate-700 hover:border-[#4D6E55]/50 hover:text-[#4D6E55]',
                ].join(' ')}
              >
                <Image
                  src={t.icon}
                  alt={t.title}
                  width={22}
                  height={22}
                  className="object-contain drop-shadow-sm"
                />
                {t.title}
              </button>
            );
          })}
        </div>

        {/* Content area */}
<div
  className="
    relative z-10 
    max-w-4xl mx-auto
    md:max-w-3xl
    lg:max-w-4xl

    mt-6 md:mt-20

    /* NORMAL CONTENT PADDING */
    px-4 sm:px-6 md:px-8

    /* EXTRA SAFE SPACE FOR ARROWS */
    md:px-12 
 
  "
>



          <div className="grid md:grid-cols-12 items-center gap-8 md:gap-10">
            {/* Right image comes first on mobile so text doesn't feel cramped */}
            <div className="order-1 md:order-2 md:col-span-5 md:justify-self-end flex justify-center md:justify-end mt-2 md:mt-0">
              <div
                className="
                  relative
                  /* MOBILE: smallest */
                  w-[160px] h-[160px]

                  /* sm: slightly bigger */
                  sm:w-[190px] sm:h-[190px]

                  /* md (768px–1023px): still small */
                  md:w-[200px] md:h-[200px]

                  /* lg (1024+): normal size */
                  lg:w-[280px] lg:h-[280px]

                  /* xl (1280+): large size */
                  xl:w-[320px] xl:h-[320px]
                "
              >


                {/* Radial contrast backdrop */}
                <div className="absolute inset-0 -z-10 pointer-events-none">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,23,17,0.18),rgba(16,23,17,0.06)_55%,transparent_75%)]" />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.key + '-img'}
                    className="absolute inset-0 z-10"
                    initial={{ opacity: 0, x: 80, scale: 0.96 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -80, scale: 0.96 }}
                    transition={{ duration: 0.45 }}
                  >
                    <Image
                      src={active.img}
                      alt={active.title}
                      fill
                      className="object-contain drop-shadow-2xl"
                      sizes="(min-width:1536px) 620px, (min-width:1280px) 560px, (min-width:1024px) 520px, 70vw"
                      priority={false}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Left text */}
            <div className="order-2 md:order-1 md:col-span-7 pr-1 md:pr-4">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={active.key + '-title'}
                  className="
                    font-extrabold text-[#4d6e55]
                    text-2xl
                    sm:text-3xl
                    md:text-4xl
                    lg:text-5xl
                    xl:text-6xl
                  "
                  
                  initial="in"
                  animate="center"
                  exit="out"
                  variants={variants}
                  transition={{ duration: 0.45 }}
                >
                  {active.title}
                </motion.h3>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={active.key + '-text'}
                  className="
                    mt-3 md:mt-4
                    text-slate-700 max-w-2xl
                    text-xs
                    sm:text-sm
                    md:text-base
                  "

                  initial="in"
                  animate="center"
                  exit="out"
                  variants={variants}
                  transition={{ duration: 0.45, delay: 0.05 }}
                >
                  {active.blurb}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Arrows - same position but they won't overlap image now */}
{/* Navigation Arrows - now placed OUTSIDE the content box on desktop */}
{/* Prev Arrow */}
<button
  aria-label="Previous"
  onClick={() => go(-1)}
  className="
    absolute
    top-1/2 -translate-y-1/2

    /* MOBILE: inside, but not too close to text */
    left-2

    /* TABLET (768–1023px): hug the container edge, not the text */
    md:left-0

    /* DESKTOP (1024px+): move further out */
    lg:-left-10
    xl:-left-14

    w-9 h-9 md:w-10 md:h-10
    rounded-full border border-slate-300
    bg-white/80 backdrop-blur
    grid place-items-center
    hover:border-[#4D6E55] hover:text-[#4D6E55]
  "
>
  ‹
</button>



{/* Next Arrow */}
<button
  aria-label="Next"
  onClick={() => go(1)}
  className="
    absolute
    top-1/2 -translate-y-1/2

    /* MOBILE: inside */
    right-2

    /* TABLET (768–1023px): hug container edge */
    md:right-0

    /* DESKTOP (1024px+): move further out */
    lg:-right-10
    xl:-right-14

    w-9 h-9 md:w-10 md:h-10
    rounded-full border border-slate-300
    bg-white/80 backdrop-blur
    grid place-items-center
    hover:border-[#4D6E55] hover:text-[#4D6E55]
  "
>
  ›
</button>




        </div>

        {/* CTA: separate on mobile so it never sits on top of the image/text */}
        <div className="mt-8 flex justify-center md:mt-10">
          <a
            href="/register"
            className="inline-flex items-center gap-2 px-6 py-3 text-[white] bg-[#4D6E55] rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-[#4D6E55] border border-[#4D6E55]"
          >
            Open an Account
            <span className="text-xl leading-none">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
