"use client"

import { useState } from "react";
import Heading from "./components/Heading";
import Hero from "./components/Hero";
import ColorSection from "./components/ColorSection";

export default function Home() {
  const [selectedWatch, setSelectedWatch] = useState({ src: "/iwatch-hero.png", bg: "#B6CCDA" });

  return (
    <div>
      <Heading />
      <Hero selectedWatch={selectedWatch} />
      <ColorSection setSelectedWatch={setSelectedWatch} />
    </div>
  );
}