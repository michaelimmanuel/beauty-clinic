import AboutContent from "@/components/organisms/AboutContent";
import ContactSection from "@/components/organisms/ContactSection";
import HeroSection from "@/components/organisms/HeroSection";
import OurServicesSection from "@/components/organisms/ServiceSection";


export default function Home() {
  return (
    <main className="min-h-screen text-foreground">
      <HeroSection />
      <AboutContent />
      <OurServicesSection />
      <ContactSection />
    </main>
    );
  }
