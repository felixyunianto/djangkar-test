import FAQ from "./components/FAQ";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Highlight from "./components/Highlight";
import Legality from "./components/Legality";
import VisionMission from "./components/VisionMission";

export default function About() {
  return (
    <>
      <Hero />
      <VisionMission />
      <Legality />
      <FAQ />
      <Highlight />
      <Gallery />
    </>
  );
}
