import Link from 'next/link'
import Logo from './logo'

import MobileMenu from './mobile-menu'


export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-1">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop menu links */}
            <ul className="flex grow justify-center flex-wrap items-center">
            <li className="relative group">
              <Link
                href="#"
                className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
              >
                Client
              </Link>

              {/* Dropdown Menu */}
              <ul className="absolute left-0 hidden group-hover:block bg-slate-800 shadow-lg rounded-md mt-2 w-48">
                <li>
                  <Link
                    href="/account-type"
                    className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                  >
                    Account Type
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                  >
                    Funding and Widthdrawal
                  </Link>
                </li>
              </ul>
            </li>
              <li className="relative group">
                <Link
                  href="#"
                  className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                >
                  Products
                </Link>

                {/* Dropdown Menu */}
                <ul className="absolute left-0 hidden group-hover:block bg-slate-800 shadow-lg rounded-md mt-2 w-56">
                  <li>
                    <Link
                      href="/products/currencies"
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      Currencies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/precious-metals"
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      Precious Metals
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/energies"
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      Energies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/indices"
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      Indices
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/stocks"
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      Stocks
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/crypto-cfd"
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      Crypto CFD
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <Link
                  href="#"
                  className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                >
                  Plateforms
                </Link>

                {/* Dropdown */}
                <ul className="absolute left-0 hidden group-hover:block bg-slate-800 shadow-lg rounded-md mt-2 w-48">
                  <li>
                    <Link
                      href="/plateforms/metatrader5"
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      MetaTrader 5
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="relative group">
                <Link
                  href="#"
                  className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                >
                  Tools
                </Link>

                {/* Dropdown Menu */}
                <ul className="absolute left-0 hidden group-hover:block bg-slate-800 shadow-lg rounded-md mt-2 w-64">
                  <li>
                    <Link
                      href="/tools/autochartist"
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      Autochartist
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tools/economic-calendar"
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      Economic Calendar
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tools/news-sentiment"
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      News Sentiment
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tools/performance-statistics"
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      Performance Statistics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tools/academy"
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      Academy
                    </Link>
                  </li>
                </ul>
              </li>


              <li className="relative group">
                <Link
                  href="/about"
                  className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                >
                  About Us
                </Link>

                {/* Dropdown Menu */}
                <ul className="absolute left-0 hidden group-hover:block bg-slate-800 shadow-lg rounded-md mt-2 w-64">
                  <li>
                    <Link
                      href="/about/discover-stonefort"
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      Discover Stonefort
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/events-sponsorships"
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      Events &amp; Sponsorships
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/careers"
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/legal"
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      Legal
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="relative group">
                <Link
                  href="/integrations"
                  className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                >
                  Education
                </Link>

                {/* Dropdown Menu */}
                <ul className="absolute left-0 hidden group-hover:block bg-slate-800 shadow-lg rounded-md mt-2 w-64">
                  <li>
                    <Link
                      href="/education/trading-guides"
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      Trading Guides
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/education/technical-analysis"
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      Technical Analysis
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/education/fundamental-analysis"
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      Fundamental Analysis
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/education/glossary"
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      Glossary
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="#">Support</Link>
              </li>

              {/* <li>
                <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/customers">Customers</Link>
              </li>
              <li>
                <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/changelog">Changelog</Link>
              </li>  */}
            </ul>

          </nav>

          {/* Desktop sign in links */}
          <ul className="flex-1 flex justify-end items-center">
            <li>
              <Link className="btn text-[#ffffff] bg-gradient-to-r from-[#4D6E55]/80 via-[#4D6E55] to-[#4D6E55]/80 hover:bg-white w-full transition duration-150 ease-in-out group" href="/signin">Sign in</Link>
            </li>
            <li className="ml-6">
              <Link className="btn text-[#ffffff] bg-gradient-to-r from-[#4D6E55]/80 via-[#4D6E55] to-[#4D6E55]/80 hover:bg-white w-full transition duration-150 ease-in-out group" href="/signup">
                <span className="relative inline-flex items-center">
                  Sign up <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                </span>
              </Link>
            </li>
          </ul>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
