import HeroSection from "@/components/HeroSection";
import FarmerStory from "@/components/FarmerStory";
import ProductJourney from "@/components/ProductJourney";
import BenefitsSection from "@/components/BenefitsSection";
import ImpactCounter from "@/components/ImpactCounter";
import CTASection from "@/components/CTASection";
import StickyOrderButton from "@/components/StickyOrderButton";

export default function HomePage() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <HeroSection />
      <FarmerStory />
      <ProductJourney />
      <BenefitsSection />
      <ImpactCounter />
      <CTASection />
      <StickyOrderButton />
    </main>
  );
}
