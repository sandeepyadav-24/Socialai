import Image from "next/image";
import LandingPage from "@/component/LandingPage";
import Navbar from "@/component/Navbar";
import FeatureSection from "@/component/FeatureSection";
import CallToAction from "@/component/CallToAction";
import HeroSection from "@/component/HeroSection";
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <CallToAction />
    </main>
  );
}
