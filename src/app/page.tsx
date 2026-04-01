import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FarmerStory from "@/components/FarmerStory";
import ProductJourney from "@/components/ProductJourney";
import ProductSection from "@/components/ProductSection";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";
import HowItMade from "@/components/HowItMade";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col overflow-x-hidden">
        <HeroSection />
        <ProductSection />
        <HowItMade />
        <FarmerStory />
        <ProductJourney />
        <BenefitsSection />
      </main>
      <Footer />
    </>
  );
}
