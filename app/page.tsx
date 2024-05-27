import Hero from "./home/components/Hero";
import Highlight from "./home/components/Highlight";
import Interaction from "./home/components/Interaction";
import OurWork from "./home/components/OurWork";
import Service from "./home/components/Service";
import WhyChooseUs from "./home/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <OurWork />
      <WhyChooseUs />
      <Highlight />
      <Interaction />
    </>
  );
}
