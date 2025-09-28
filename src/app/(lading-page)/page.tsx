"use client"
import { useEffect, useState } from "react";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Orbiting from "./components/experience/Orbiting";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HeroSection from "./components/hero/HeroSection";
import Skill from "./components/skill/Skill";

export default function Home() {
  const [isSticky, setIsSticky] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [])

  return (
    <main className="p-5 md:px-[6%] bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-black dark:via-gray-900 dark:to-black transition-colors" >
      <header className={`${isSticky ? 'bg-black shadow-xl' : 'bg-transparent'} sticky top-0 z-20 transition-all duration-300`}>
        {/* <NavBar /> */}
        <Header />
      </header>
      {/* <Hero /> */}
      <HeroSection />
      <About />
      <Experience />
      <Skill />
      {/* <Projets /> */}
      <Orbiting />
      <Footer />
    </main>
  );
}

// "ogl": "^1.0.11",