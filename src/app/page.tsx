"use client";
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import YearRoadmapTimeline from '@/components/sections/layouts/roadmap/YearRoadmapTimeline';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <>
      <NavbarLayoutFloatingInline navItems={[{ name: "Home", id: "hero" }, { name: "About", id: "about" }, { name: "How to Buy", id: "how-to-buy" }, { name: "Tokenomics", id: "tokenomics" }, { name: "Roadmap", id: "roadmap" }, { name: "Footer", id: "footer" }]} logoSrc="/images/logo.svg" logoWidth={120} logoHeight={40} buttonText="Learn How to Buy" onButtonClick={() => {}} className="bg-transparent" buttonClassName="bg-accent" />
      <TokenBillboardHero title="Welcome to MemePulse!" subtitle="Join the fun and get your tokens now!" contractAddress="0x1234567890abcdef" copyButtonText="Copy Address" copiedText="Address Copied!" />
      <SplitAbout description="MemePulse is a vibrant community-driven memecoin aimed at bringing people together through fun and engagement." />
      <HowToBuy2D variant="simple" />
      <NumberGridTokenomics title="Key Metrics" description="Important values and stats regarding the tokenomics of MemePulse." kpiItems={[{ value: "$1M", description: "Total Market Cap" }, { value: "1B", description: "Total Supply" }, { value: "500K", description: "Circulating Supply" }]} />
      <YearRoadmapTimeline items={[{ year: "2023", title: "Launch", description: "Our journey begins here!" }, { year: "2024", title: "Expansion", description: "Growing our community and offerings." }, { year: "2025", title: "Mainstream Adoption", description: "Aim to be the next big name in memecoins!" }]} className="bg-transparent" />
      <FooterLogoEmphasis logoSrc="/images/logo.svg" logoAlt="MemePulse Logo" columns={[{ items: [{ label: "Terms of Service", onClick: () => {} }, { label: "Privacy Policy", onClick: () => {} }, { label: "Contact Us", onClick: () => {} }] }]} copyrightText="© 2023 MemePulse. All rights reserved." onPrivacyClick={() => {}} className=" bg-transparent" containerClassName="p-4" logoClassName="h-10 p-2" columnsClassName="grid grid-cols-3 gap-4" columnClassName="flex flex-col" itemClassName="text-white" />
    </>
  );
}