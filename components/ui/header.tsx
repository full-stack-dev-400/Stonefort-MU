"use client";

import Link from "next/link";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import MegaMenu from "../MegaMenu";

export default function Header() {
return (
<header className="absolute w-full z-30">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="flex items-center justify-between h-16 md:h-20">

      {/* Branding */}
      <div className="flex-1">
        <Logo />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex lg:grow justify-center relative">


        <ul className="flex items-center space-x-6">

          {/* MARKET */}
          <MegaMenu
            label="Market"
            group={{
              title: "Market",
              description:
                "Explore global markets with institutional-grade pricing, deep liquidity, and advanced trading tools.",
              button: "Learn More",
              href: "/market",
              columns: [
                {
                  heading: "Markets",
                  items: [
                    { label: "Forex CFD", href: "/markets/forex" },
                    { label: "Indices CFD", href: "/markets/indices" },
                    { label: "Metal CFD", href: "/markets/metals" },
                    { label: "Stock CFD", href: "/markets/stocks" },
                    { label: "Commodity CFD", href: "/markets/commodities" },
                    { label: "Crypto CFD", href: "/markets/crypto" },
                  ],
                },
                {
                  heading: "Trading Conditions",
                  items: [
                    { label: "Spreads & Fees", href: "/trading/fees" },
                    { label: "Execution Speed", href: "/trading/execution" },
                    { label: "Market Hours", href: "/trading/hours" },
                  ],
                },
              ],
            }}
          />

          {/* PLATFORM */}
          <MegaMenu
            label="Platform"
            group={{
              title: "Platform",
              description:
                "Trade seamlessly on Stonefort’s advanced trading platform built for precision and speed.",
              button: "Learn More",
              href: "/platform",
              columns: [
                {
                  heading: "Trading Platform",
                  items: [
                    { label: "MetaTrader 5", href: "/platform/mt5" },
                    { label: "MetaTrader Web", href: "/platform/mt5-web" },
                    { label: "SFX Mobile App", href: "/platform/mobile" },
                    { label: "SFX Web", href: "/platform/web" },
                  ],
                },
                {
                  heading: "Trading Tools",
                  items: [
                    { label: "Auto Chartist", href: "/tools/autochartist" },
                    { label: "Copy Trade", href: "/tools/copy-trade" },
                    { label: "VPS Hosting", href: "/tools/vps" },
                    { label: "Calculator", href: "/tools/calculator" },
                  ],
                },
              ],
            }}
          />

          {/* TRADING */}
          <MegaMenu
            label="Trading"
            group={{
              title: "Trading",
              description:
                "Trade with confidence using our secure infrastructure and competitive trading accounts.",
              button: "Learn More",
              href: "/trading",
              columns: [
                {
                  heading: "Account Types",
                  items: [
                    { label: "Starter", href: "/trading/starter" },
                    { label: "Advance", href: "/trading/advance" },
                    { label: "Elite", href: "/trading/elite" },
                    { label: "Demo", href: "/trading/demo" },
                    { label: "PAMM", href: "/trading/pamm" },
                  ],
                },
                {
                  heading: "Extras",
                  items: [
                    { label: "Fund Your Account", href: "/funding" },
                    { label: "Negative Balance Guard", href: "/nbp" },
                    { label: "Trading Fees & Conditions", href: "/fees" },
                  ],
                },
              ],
            }}
          />

          {/* ACADEMY */}
          <MegaMenu
            label="Academy"
            group={{
              title: "Academy",
              description:
                "Master the markets with guides, webinars, e-books, and articles crafted for all skill levels.",
              button: "Explore Academy",
              href: "/academy",
              columns: [
                {
                  heading: "Learning",
                  items: [
                    { label: "Overview", href: "/academy" },
                    { label: "Articles", href: "/academy/articles" },
                    { label: "E-Book", href: "/academy/ebook" },
                    { label: "Trading Terms", href: "/academy/terms" },
                    { label: "Blogs", href: "/academy/blogs" },
                    { label: "Glossary", href: "/academy/glossary" },
                  ],
                },
              ],
            }}
          />

          {/* COMPANY */}
          <MegaMenu
            label="Company"
            group={{
              title: "Company",
              description:
                "Stonefort Securities delivers a secure, high-performance trading environment with a global presence.",
              button: "About Us",
              href: "/about",
              columns: [
                {
                  heading: "About",
                  items: [
                    { label: "About Us", href: "/about" },
                    { label: "Regulatory Supervision", href: "/about/regulatory" },
                    { label: "Legal Documents", href: "/about/legal" },
                    { label: "Contact Us", href: "/about/contact" },
                    { label: "Privacy Policy", href: "/about/privacy" },
                  ],
                },
              ],
            }}
          />

          {/* PROMOTIONS */}
          <MegaMenu
            label="Promotions"
            group={{
              title: "Promotions",
              description:
                "Boost your trading experience with exclusive Stonefort rewards and loyalty benefits.",
              button: "View Promotions",
              href: "/promotions",
              columns: [
                {
                  heading: "Offers",
                  items: [
                    { label: "Bonus", href: "/promotions/bonus" },
                    { label: "Loyalty Program", href: "/promotions/loyalty" },
                  ],
                },
              ],
            }}
          />

        </ul>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu />

    </div>
  </div>
</header>
);
}