"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

type SubMenuItem = {
  label: string;
  href: string;
};

type SubMenuSection = {
  title: string;
  items: SubMenuItem[];
};

type MobileMenuGroup = {
  label: string;
  sections: SubMenuSection[];
};

const menuData: MobileMenuGroup[] = [
  {
    label: "Market",
    sections: [
      {
        title: "Markets",
        items: [
          { label: "Forex CFD", href: "/markets/forex" },
          { label: "Indices CFD", href: "/markets/indices" },
          { label: "Metal CFD", href: "/markets/metals" },
          { label: "Stock CFD", href: "/markets/stocks" },
          { label: "Commodity CFD", href: "/markets/commodities" },
          { label: "Crypto CFD", href: "/markets/crypto" },
        ],
      },
    ],
  },
  {
    label: "Platform",
    sections: [
      {
        title: "Trading Platform",
        items: [
          { label: "MetaTrader 5", href: "/platform/mt5" },
          { label: "MetaTrader Web", href: "/platform/mt5-web" },
          { label: "SFX Mobile App", href: "/platform/mobile" },
          { label: "SFX Web", href: "/platform/web" },
        ],
      },
      {
        title: "Trading Tools",
        items: [
          { label: "Auto Chartist", href: "/tools/autochartist" },
          { label: "Copy Trade", href: "/tools/copy-trade" },
          { label: "VPS Hosting", href: "/tools/vps" },
          { label: "Calculator", href: "/tools/calculator" },
        ],
      },
    ],
  },
  {
    label: "Trading",
    sections: [
      {
        title: "Account Types",
        items: [
          { label: "Starter", href: "/trading/starter" },
          { label: "Advance", href: "/trading/advance" },
          { label: "Elite", href: "/trading/elite" },
          { label: "Demo", href: "/trading/demo" },
          { label: "PAMM", href: "/trading/pamm" },
        ],
      },
      {
        title: "Extras",
        items: [
          { label: "Fund Your Account", href: "/funding" },
          { label: "Negative Balance Guard", href: "/nbp" },
          { label: "Trading Fees & Conditions", href: "/fees" },
        ],
      },
    ],
  },
  {
    label: "Academy",
    sections: [
      {
        title: "Learning",
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
  },
  {
    label: "Company",
    sections: [
      {
        title: "About",
        items: [
          { label: "About Us", href: "/about" },
          { label: "Regulatory Supervision", href: "/about/regulatory" },
          { label: "Legal Documents", href: "/about/legal" },
          { label: "Contact Us", href: "/about/contact" },
          { label: "Privacy Policy", href: "/about/privacy" },
        ],
      },
    ],
  },
  {
    label: "Promotions",
    sections: [
      {
        title: "Offers",
        items: [
          { label: "Bonus", href: "/promotions/bonus" },
          { label: "Loyalty Program", href: "/promotions/loyalty" },
        ],
      },
    ],
  },
];

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [openGroupIndex, setOpenGroupIndex] = useState<number | null>(null);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // Close menu on outside click
  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      if (!mobileNav.current || !trigger.current || !mobileNavOpen) return;

      if (
        mobileNav.current.contains(event.target as Node) ||
        trigger.current.contains(event.target as Node)
      )
        return;

      setMobileNavOpen(false);
      setOpenGroupIndex(null);
    };

    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [mobileNavOpen]);

  // Close menu on ESC key press
  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      if (mobileNavOpen && event.key === "Escape") {
        setMobileNavOpen(false);
        setOpenGroupIndex(null);
      }
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [mobileNavOpen]);

  // 🔒 Fix header + lock body scroll when menu is open
  useEffect(() => {
    const header = document.querySelector("header"); // or "header.site-header" if you add that class

    if (mobileNavOpen) {
      document.body.classList.add("mobile-menu-open");
      header?.classList.add("header-fixed");
    } else {
      document.body.classList.remove("mobile-menu-open");
      header?.classList.remove("header-fixed");
    }

    return () => {
      document.body.classList.remove("mobile-menu-open");
      header?.classList.remove("header-fixed");
    };
  }, [mobileNavOpen]);

  const toggleGroup = (index: number) => {
    setOpenGroupIndex(openGroupIndex === index ? null : index);
  };

  return (
    <div className="lg:hidden flex items-center ml-4 relative">

      {/* Hamburger Button */}
      <button
        ref={trigger}
        className="group inline-flex w-8 h-8 text-slate-300 hover:text-white items-center justify-center transition"
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => {
          setMobileNavOpen(!mobileNavOpen);
          if (mobileNavOpen) setOpenGroupIndex(null);
        }}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-4 h-4 fill-current pointer-events-none"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] -translate-y-[5px] group-aria-expanded:rotate-[315deg] group-aria-expanded:translate-y-0"
            y="7"
            width="16"
            height="2"
            rx="1"
          />
          <rect
            className="origin-center group-aria-expanded:rotate-45 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]"
            y="7"
            width="16"
            height="2"
            rx="1"
          />
          <rect
            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] translate-y-[5px] group-aria-expanded:rotate-[135deg] group-aria-expanded:translate-y-0"
            y="7"
            width="16"
            height="2"
            rx="1"
          />
        </svg>
      </button>

      {/* Mobile Nav */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className={`fixed top-16 left-0 right-0 bg-[#f3f3f3] shadow-xl rounded-b-lg z-[99999] px-6 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileNavOpen
            ? "opacity-100 max-h-screen py-6 pointer-events-auto"
            : "opacity-0 max-h-0 py-0 pointer-events-none"
        }`}
      >
        <ul className="max-w-[1240px] mx-auto space-y-4">
          {menuData.map((group, index) => (
            <li
              key={group.label}
              className="border-b border-slate-300/40 last:border-none"
            >
              <button
                onClick={() => toggleGroup(index)}
                className="w-full flex justify-between items-center py-3 text-left font-semibold text-[#1c3328] hover:text-[#4D6E55] transition"
                aria-expanded={openGroupIndex === index}
              >
                {group.label}
                <svg
                  className={`w-5 h-5 ml-2 transition-transform ${
                    openGroupIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="#4D6E55"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Submenu */}
              <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                  openGroupIndex === index ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                {group.sections.map((section) => (
                  <div key={section.title} className="pt-2 pl-4">
                    <h4 className="font-semibold text-[#4D6E55] mb-1">
                      {section.title}
                    </h4>
                    <ul className="space-y-1">
                      {section.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className="block text-[#1c3328] hover:text-[#4D6E55] py-1"
                            onClick={() => {
                              setMobileNavOpen(false);
                              setOpenGroupIndex(null);
                            }}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
