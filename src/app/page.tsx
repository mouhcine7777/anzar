"use client";
import HeroSection from "./components/HeroSection";
import AboutAnzar from "./components/AboutAnzar";
import MotDuChef from "./components/MotDuChef";
import Artists from "./components/Artists";
import DesignerSection from "./components/DesignerSection";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutAnzar />
      <MotDuChef />
      <Artists />
      <DesignerSection />
      <Footer />
    </main>
  );
}


