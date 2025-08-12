import AboutContent from "@/components/organisms/AboutContent";
import HeroSection from "@/components/organisms/HeroSection";


export default function Home() {
  return (
    <main className="min-h-screen text-foreground">
      <HeroSection />
      <AboutContent />
    </main>
    );
  }
