import { HeroSection } from "./components/hero-section/HeroSection";
import Navbar from "./components/navbar/Navbar";
import { HeroSectionTwo } from "./components/hero-section-2/HeroSectionTwo";
import HeroSectionThree from "./components/hero-section-3/HeroSectionThree";
import { Grid } from "./components/layout-grid/Grid";
import { TabSection } from "./components/tab-section/TabSection";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <Navbar className="top-2" />
      </div>
      <div className="w-full flex items-center justify-center">
        <HeroSection />
      </div>
      <HeroSectionTwo />

      <div>
        <Grid />
      </div>
      <div className="relative w-full flex items-center justify-center">
        <HeroSectionThree />
      </div>
      <div>
        <TabSection className="bg-black" />
      </div>
    </>
  );
}

export default App;
