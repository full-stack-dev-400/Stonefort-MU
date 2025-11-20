// components/clients.tsx
import Image from "next/image";
import Particles from "./particles";

/* ========== Payment Logos ========== */
import Maya from "@/public/images/Maya.webp";
import UPI from "@/public/images/UPI.webp";
import Visa from "@/public/images/Visa.webp";
import BankTransfer from "@/public/images/Bank-Transfer.webp";
import Bitcoin from "@/public/images/BitCoin.png";
import Cryptos from "@/public/images/Cryptos.webp";
import FAB from "@/public/images/FAB.webp";
import GPay from "@/public/images/G-Pay.webp";
import Help2Pay from "@/public/images/Help2-pay.webp";
import MasterCardSecure from "@/public/images/Mastercard-Secure-Code.webp";
import Mastercard from "@/public/images/MAstercard.webp";
import MyFatoorah from "@/public/images/My-Faatoorah.webp";
import PaymentAsia from "@/public/images/Payment-Asia.webp";
import VerifiedVisa from "@/public/images/Verified-by-VISA.webp";
import ApplePay from "@/public/images/Apple-Pay.webp";
import EasyPaisa from "@/public/images/EasyPaisa.webp";
import GCash from "@/public/images/G-Cash.webp";
import Korapay from "@/public/images/Korapay.webp";

/* ========== Logos Array ========== */
const logos = [
  { src: Maya, alt: "Maya" },
  { src: UPI, alt: "UPI" },
  { src: Visa, alt: "Visa" },
  { src: BankTransfer, alt: "Bank Transfer" },
  { src: Bitcoin, alt: "Bitcoin" },
  { src: Cryptos, alt: "Cryptocurrencies" },
  { src: FAB, alt: "First Abu Dhabi Bank" },
  { src: GPay, alt: "Google Pay" },
  { src: Help2Pay, alt: "Help2Pay" },
  { src: MasterCardSecure, alt: "MasterCard SecureCode" },
  { src: Mastercard, alt: "Mastercard" },
  { src: MyFatoorah, alt: "My Fatoorah" },
  { src: PaymentAsia, alt: "Payment Asia" },
  { src: VerifiedVisa, alt: "Verified by Visa" },
  { src: ApplePay, alt: "Apple Pay" },
  { src: EasyPaisa, alt: "EasyPaisa" },
  { src: GCash, alt: "GCash" },
  { src: Korapay, alt: "Korapay" },
];

/* ========== Component ========== */
export default function Clients() {
  return (
    <section
  className="relative py-20 md:py-24 bg-no-repeat"
  style={{
    backgroundImage: "url('/images/payment-bg.webp')", // or .webp if you saved as webp
    backgroundColor: "#101711",        // fallback / left side color
    backgroundSize: "auto 100%",       // full height, keep aspect ratio
    backgroundPosition: "right center" // keep cards fully on the right
  }}
  aria-labelledby="payment-logos-title"
>

      <h2 id="payment-logos-title" className="sr-only">
        Payment Methods & Partners
      </h2>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* ========= New Heading + Description + Points ========= */}
        <div className="text-center mb-12 md:mb-16">
<h2
  className="
    text-[white]
    pb-4 font-semibold leading-[1.05]

    max-sm:text-[24px]
    text-[24px]
    sm:text-[40px]
    md:text-[52px]
    lg:text-[64px]
  "
>
            Your Funds, Your Control
          </h2>
                      <p           className="
            max-w-3xl mx-auto mt-3 
            text-[#fff]
            text-[20px]      /* ← set text to exactly 20px */
            leading-[1.5]    /* optional: smoother reading */
          "
          >
            Your money, your way: secure, seamless, and always accessible.
          </p>

          {/* Bullet Points */}
{/* Bullet Points */}
<div className="flex flex-col md:flex-row gap-4 mt-8 justify-center">

  {/* Effortless Deposits */}
  <div className="bg-[#fff] text-white px-6 py-4 rounded-xl shadow-lg border border-white/10 flex items-center gap-3">
    <svg xmlns="http://www.w3.org/2000/svg" 
         width="22" height="22" fill="none" stroke="currentColor" 
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
         className="text-[#4d6e55]">
      <path d="M12 3v12" />
      <path d="M8 11l4 4 4-4" />
      <rect x="3" y="15" width="18" height="6" rx="2" />
    </svg>
    <span className="text-base">Effortless Deposits</span>
  </div>

  {/* Instant Withdrawals */}
  <div className="bg-[#fff] text-white px-6 py-4 rounded-xl shadow-lg border border-white/10 flex items-center gap-3">
    <svg xmlns="http://www.w3.org/2000/svg"
         width="22" height="22" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
         className="text-[#4d6e55]">
      <path d="M12 21V9" />
      <path d="M16 13l-4-4-4 4" />
      <rect x="3" y="3" width="18" height="6" rx="2" />
    </svg>
    <span className="text-base">Instant Withdrawals</span>
  </div>

  {/* Zero Fees */}
  <div className="bg-[#fff] text-white px-6 py-4 rounded-xl shadow-lg border border-white/10 flex items-center gap-3">
    <svg xmlns="http://www.w3.org/2000/svg"
         width="22" height="22" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
         className="text-green-400">
      <path d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10z" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
    <span className="text-base">Zero Fees</span>
  </div>

</div>

        </div>

        {/* =================== Background Particles =================== */}
        <Particles
          className="absolute inset-0 -z-10"
          quantity={8}
          staticity={30}
          ease={50}
          color="#4D6E55"
        />

        {/* =================== Infinite Scrolling Logos =================== */}
        <div className="overflow-hidden w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div
            className="
              inline-flex w-full flex-nowrap overflow-hidden items-center
              h-[60px] md:h-[80px]
              [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]
            "
          >
            {/* Loop 1 */}
            <ul
              className="
                flex animate-infinite-scroll items-center justify-center
                [&_li]:mx-8
                [&_li]:h-[60px] md:[&_li]:h-[80px]
                [&_img]:h-[60px] md:[&_img]:h-[80px]
                [&_img]:w-auto [&_img]:object-contain [&_img]:max-w-none
              "
            >
              {logos.map((logo, index) => (
                <li key={`row1-${index}`} className="flex items-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={155}
                    height={300}
                    className="rounded-md"
                    style={{ backgroundColor: "#101711" }}
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>

            {/* Loop 2 */}
            <ul
              className="
                flex animate-infinite-scroll items-center justify-center
                [&_li]:mx-8
                [&_li]:h-[60px] md:[&_li]:h-[80px]
                [&_img]:h-[60px] md:[&_img]:h-[80px]
                [&_img]:w-auto [&_img]:object-contain [&_img]:max-w-none
              "
              aria-hidden="true"
            >
              {logos.map((logo, index) => (
                <li key={`row2-${index}`} className="flex items-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={155}
                    height={300}
                    className="rounded-md"
                    style={{ backgroundColor: "#101711" }}
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
