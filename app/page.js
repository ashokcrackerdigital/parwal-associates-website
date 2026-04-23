import AboutUsSection from "../components/AboutUsSection";
import HeroShowcase from "../components/HeroShowcase";
import ServicesPreview from "../components/ServicesPreview";
import VisionMissionSection from "../components/VisionMissionSection";
import ContactCtaSection from "../components/ContactCtaSection";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroShowcase />
      <AboutUsSection />
      <VisionMissionSection />

      <ServicesPreview />

      <ContactCtaSection />
    </div>
  );
}
