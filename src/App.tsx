import "./App.css";
import BrandSection from "./components/brand-section";
import FAQSection from "./components/FAQSection";
import GrowthSection from "./components/growth-section";
import HeroSection from "./components/hero-section";
import Testmonial from "./components/testmonial-section";

function App() {
  return (
    <>
      <HeroSection />
      <BrandSection />
      <Testmonial />
      <GrowthSection />
      <FAQSection />
    </>
  );
}

export default App;
