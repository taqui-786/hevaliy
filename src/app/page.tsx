import NavBar from "@/components/ui/NavBar";
import Hero from "@/components/ui/Hero";
import WelcomeSection from "@/components/ui/WelcomeSection";
import Testimonial from "@/components/ui/Testimonial";
import Footer from "@/components/Footer";
import HealingSection from "@/components/ui/HealingSection";
import SupportSection from "@/components/ui/SupportSection";
import SubscribeSection from "@/components/ui/Subscription";
import Image from "next/image";

export default function HomePage() {
  return (
    <div
      className="min-h-screen relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/Topographic 5.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "contain", // or "auto"
        backgroundPosition: "center",
        mixBlendMode: "screen",
        backgroundColor: "#fff",
      }}
    >
      <NavBar />
      <Hero />
      <WelcomeSection />
      <HealingSection />
      <SupportSection />
      <Testimonial />
      <SubscribeSection isCommunityPage={false} />
      <Footer />
    </div>

  );
}
