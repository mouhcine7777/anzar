"use client";
import StickyMenu from "../../components/StickyMenu";
import CocktailsHero from "./components/CocktailsHero";
import CocktailsMenu from "./components/CocktailsMenu";




export default function Home() {
  return (
    <main>
      <StickyMenu />
      <CocktailsHero />
      <CocktailsMenu />
    </main>
  );
}


