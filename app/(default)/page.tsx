// app/page.tsx
export const metadata = {
  title: "Home",
  description: "Page description",
};

// Force this page to be statically generated (no SSR)
export const dynamic = "force-static";

import Hero from "@/components/home/hero";
import MarqueeTicker from '@/components/home/MarqueeTicker';
import Features02 from "@/components/home/features-02";
import Features03 from "@/components/features-03";
import TestimonialsCarousel from "@/components/home/testimonials-carousel";
import Features04 from "@/components/features-04";
// import Pricing from "./pricing-section";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import PricingBoxes from "@/components/home/PricingBoxes";
import Payment from "@/components/clients";
import ExpandCards from "@/components/home/ExpandCards";
import DiscoverOpportunities from "@/components/home/DiscoverOpportunities";
import { PlatformsTabs } from "@/components/VerticalTabs";
import EconomicCalendar from "@/components/home/EconomicCalendar";
import BalanceGuard from "@/components/home/BalanceGuard";
import HowItWorks from "@/components/home/HowItWorks";
import AwardCertificate from "@/components/home/AwardCertificate";





// 👇 slider + product images
import ProductHeroSlider from "@/components/ProductHeroSlider";
import DeviceA from "@/public/images/Terminalmt5.webp";
import DeviceB from "@/public/images/CRM.webp";
import HoverGlowCard from "@/components/registrationsteps";
import ProductsShowcase from "@/components/home/ProductsShowcase";


// 👇 define slides once at module scope
const slides = [
  {
    id: "a",
    title: "Stonefort platforms",
    headline: "MetaTrader 5",
    copy:
      "Experience seamless trading with Stonefort’s MetaTrader 5 platform designed for speed, precision, and access to global markets.",
    img: DeviceA,
  },
  {
    id: "b",
    title: "Stonefort CRM",
    headline: "CRM",
    copy:
      "Stonefort CRM gives traders secure access to deposits, withdrawals, and account management everything in one simple dashboard.",
    img: DeviceB,
  },

];

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeTicker speedSeconds={26} />
      <ExpandCards />
      <ProductsShowcase />
      <EconomicCalendar />
      <PlatformsTabs />
      <PricingBoxes />
      <HoverGlowCard /> 
      <Payment />  
      <DiscoverOpportunities />
      <BalanceGuard />
      <HowItWorks />
      <AwardCertificate />


      {/* <TestimonialsCarousel /> */}
      {/* <Features02 /> */}
      {/* <ProductHeroSlider slides={slides} autoPlayMs={6500} /> */}
      {/* <Features03 /> */}
      {/* <Features04 /> */}
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      {/* <Cta /> */}
    </>
  );
}
