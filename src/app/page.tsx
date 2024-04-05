"use client";
import Image from "next/image";
import LandingPage from "@/component/LandingPage";
import Navbar from "@/component/Navbar";
import FeatureSection from "@/component/FeatureSection";
import CallToAction from "@/component/CallToAction";
import HeroSection from "@/component/HeroSection";
import Page from "@/component/Page";
import Appbar from "@/component/Appbar";

export default function Home() {
  return (
    <main>
      <Appbar />
      <HeroSection />
      <FeatureSection />
      <CallToAction />
    </main>
  );
}
