import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import HeroSection from "./components/hero/HeroSection";
import Skill from "./components/skill/Skill";

export default function Home() {
  return (
    <main className="" >
      {/* <Hero /> */}
      <HeroSection />
      <About />
      <Skill />
      <Experience />
      <Footer />
    </main>
  );
}
