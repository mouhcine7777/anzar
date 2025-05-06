"use client";
import StickyMenu from "../../components/StickyMenu";
import DessertsHero from "./components/DessertsHero";
import DessertMenu from "./components/DessertMenu";




export default function Home() {
  return (
    <main>
      <StickyMenu />
      <DessertsHero />
      <DessertMenu />
    </main>
  );
}


