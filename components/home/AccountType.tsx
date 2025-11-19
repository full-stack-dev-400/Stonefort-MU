'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Transition } from '@headlessui/react'
import Particles from '../particles'
import Illustration from '@/public/images/glow-top.svg'

/* ---------- Small plan card + data (added) ---------- */
type Pair = [string, string]
type Plan = { title: string; subtitle: string; pairs: Pair[] }

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className="w-full max-w-md rounded-2xl border border-white/10 bg-transparent backdrop-blur-sm p-6 shadow-[0_8px_30px_rgba(0,0,0,.35)]">
      <div className="mb-5">
        <h4 className="text-2xl font-bold text-white leading-none">{plan.title}</h4>
        <p className="text-slate-400">{plan.subtitle}</p>
      </div>
      <div className="grid gap-3 text-slate-300">
        {plan.pairs.map(([l, r], idx) => (
          <div key={idx} className="flex items-center justify-between gap-6 border-b border-white/5 pb-2 last:border-b-0">
            <span className="whitespace-nowrap">{l}</span>
            <span className="font-semibold">{r}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const plans: Record<number, Plan> = {
  1: {
    title: 'Starter',
    subtitle: 'Accounts',
    pairs: [
      ['Starts at $50', 'Leverage 1:500'],
      ['Spreads (Pips) 1.3', 'Zero Commission'],
      ['Stop-out 20%', 'Margin Call 50%'],
    ],
  },
  2: {
    title: 'Advanced',
    subtitle: 'Accounts',
    pairs: [
      ['Starts at $3000', 'Leverage 1:500'],
      ['Spreads (Pips) 1.0', 'Zero Commission'],
      ['Stop-out 20%', 'Margin call 50%'],
    ],
  },
  3: {
    title: 'Elite',
    subtitle: 'Accounts',
    pairs: [
      ['Starts at $10,000', 'Leverage 1:200'],
      ['Spreads (Pips) 0.01', 'Commission $8'],
      ['Stop-out 50%', 'Margin Call 70%'],
    ],
  },
}

/* ---------- Component ---------- */
export default function AccountType() {
  const [tab, setTab] = useState<number>(1)

  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Illustration */}
        <div className="absolute inset-0 -z-10 -mx-28 rounded-t-[3rem] pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10">
            <Image src={Illustration} className="max-w-none" width={1404} height={658} alt="Features Illustration" />
          </div>
        </div>

        <div className="pt-16 pb-12 md:pt-52 md:pb-20">

          <div>

            {/* Section content */}
            <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0">

              {/* Content */}
              <div className="md:w-7/12 lg:w-1/2 order-1 md:order-none max-md:text-center" data-aos="fade-down">
                {/* Content #1 */}
                <div>
                  <div className="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">The security first platform</div>
                </div>
                <h3 className="h3 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3">Simplify your security with authentication services</h3>
                <p className="text-lg text-slate-400 mb-8">Define access roles for the end-users, and extend your authorization capabilities to implement dynamic access control.</p>
                <div className="mt-8 max-w-xs max-md:mx-auto space-y-2">
                  <button
                    className={`flex items-center text-sm font-medium text-slate-50 rounded-sm border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100 ${tab !== 1 ? 'border-slate-700 opacity-50' : 'border-purple-700 shadow-sm shadow-purple-500/25'}`}
                    onClick={() => setTab(1)}
                  >
                    <svg className="shrink-0 fill-slate-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                      <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm0 14V2H2v12h12Zm-3-7H5a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0 4H5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span>Simplify your security</span>
                  </button>
                  <button
                    className={`flex items-center text-sm font-medium text-slate-50 rounded-sm border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100 ${tab !== 2 ? 'border-slate-700 opacity-50' : 'border-purple-700 shadow-sm shadow-purple-500/25'}`}
                    onClick={() => setTab(2)}
                  >
                    <svg className="shrink-0 fill-slate-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                      <path d="M2 6H0V2a2 2 0 0 1 2-2h4v2H2v4ZM16 6h-2V2h-4V0h4a2 2 0 0 1 2 2v4ZM14 16h-4v-2h4v-4h2v4a2 2 0 0 1-2 2ZM6 16H2a2 2 0 0 1-2-2v-4h2v4h4v2Z" />
                    </svg>
                    <span>Customer identity</span>
                  </button>
                  <button
                    className={`flex items-center text-sm font-medium text-slate-50 rounded-sm border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100 ${tab !== 3 ? 'border-slate-700 opacity-50' : 'border-purple-700 shadow-sm shadow-purple-500/25'}`}
                    onClick={() => setTab(3)}
                  >
                    <svg className="shrink-0 fill-slate-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                      <path d="M14.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-8 8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l8-8ZM15 7c.6 0 1 .4 1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.6 0 1 .4 1 1s-.4 1-1 1C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6c0-.6.4-1 1-1Z" />
                    </svg>
                    <span>Adaptable authentication</span>
                  </button>
                </div>
              </div>

              {/* Image / Right side */}
              <div className="md:w-5/12 lg:w-1/2" data-aos="fade-up" data-aos-delay="100">
                <div className="relative py-24 -mt-12">

                  {/* Particles animation */}
                  <Particles className="absolute inset-0 -z-10" quantity={8} staticity={30} />

                  <div className="flex items-center justify-center">
                    {/* NOTE: removed fixed w-48 h-48 to let the card size naturally */}
                    <div className="relative flex justify-center items-center">
                      {/* Halo effect */}
                      <svg className="absolute inset-0 -z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-none blur-md" width="480" height="480" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="pulse-a" x1="50%" x2="50%" y1="100%" y2="0%">
                            <stop offset="0%" stopColor="#A855F7" />
                            <stop offset="76.382%" stopColor="#FAF5FF" />
                            <stop offset="100%" stopColor="#6366F1" />
                          </linearGradient>
                        </defs>
                        <g fillRule="evenodd">
                          <path className="pulse" fill="url(#pulse-a)" fillRule="evenodd" d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z" />
                          <path className="pulse pulse-1" fill="url(#pulse-a)" fillRule="evenodd" d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z" />
                          <path className="pulse pulse-2" fill="url(#pulse-a)" fillRule="evenodd" d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z" />
                        </g>
                      </svg>

                      {/* Grid */}
                      <div className="absolute inset-0 -z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[500px] h-[500px] rounded-full overflow-hidden [mask-image:_radial-gradient(black,_transparent_60%)]">
                        <div className="h-[200%] animate-endless">
                          <div className="absolute inset-0 [background:repeating-linear-gradient(transparent,transparent_48px,var(--color-white)_48px,var(--color-white)_49px)] blur-[2px] opacity-20" />
                          <div className="absolute inset-0 [background:repeating-linear-gradient(transparent,transparent_48px,var(--color-purple-500)_48px,var(--color-purple-500)_49px)]" />
                          <div className="absolute inset-0 [background:repeating-linear-gradient(90deg,transparent,transparent_48px,var(--color-white)_48px,var(--color-white)_49px)] blur-[2px] opacity-20" />
                          <div className="absolute inset-0 [background:repeating-linear-gradient(90deg,transparent,transparent_48px,var(--color-purple-500)_48px,var(--color-purple-500)_49px)]" />
                        </div>
                      </div>

                      {/* Cards switched by tab (replacing old SVG tiles) */}
                      <Transition
                        as="div"
                        show={tab === 1}
                        className="transform transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] data-closed:absolute data-enter:data-closed:-rotate-[6deg] data-leave:data-closed:rotate-[6deg] data-closed:opacity-0 duration-500"
                        unmount={false}
                        appear
                      >
                        <PlanCard plan={plans[1]} />
                      </Transition>

                      <Transition
                        as="div"
                        show={tab === 2}
                        className="transform transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] data-closed:absolute data-enter:data-closed:-rotate-[6deg] data-leave:data-closed:rotate-[6deg] data-closed:opacity-0 duration-500"
                        unmount={false}
                        appear
                      >
                        <PlanCard plan={plans[2]} />
                      </Transition>

                      <Transition
                        as="div"
                        show={tab === 3}
                        className="transform transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] data-closed:absolute data-enter:data-closed:-rotate-[6deg] data-leave:data-closed:rotate-[6deg] data-closed:opacity-0 duration-500"
                        unmount={false}
                        appear
                      >
                        <PlanCard plan={plans[3]} />
                      </Transition>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
