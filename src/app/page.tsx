"use client";
import Image from "next/image";
import LandingPage from "@/component/LandingPage";
import Navbar from "@/component/Navbar";
import FeatureSection from "@/component/FeatureSection";
import CallToAction from "@/component/CallToAction";
import HeroSection from "@/component/HeroSection";
import Page from "@/component/Page";
import Appbar from "@/component/Appbar";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Home() {
  const { data: session } = useSession();
  console.log(session);

  if (session) {
    // rendering components for logged in users
    return <Page />;
  }

  // rendering components for not logged in users
  return (
    <main>
      <Appbar />
      <HeroSection />
      <FeatureSection />
      <CallToAction />
    </main>
  );
  {
    /**return (
    <div>
      <p>Not Signed In</p>
      <button onClick={() => signIn("google")}>Sign in with google</button>
      <button onClick={() => signIn("github")}>Sign in with github</button>
    </div>
  ); */
  }
  {
    /**<div>
        <p>Welcome {session.user?.name}. Signed In As</p>
        <p>{session.user?.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div> */
  }
}
