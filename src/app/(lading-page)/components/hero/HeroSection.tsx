import Link from "next/link";
import React from "react";
import Header from "../header/Header";
import LightRays from "@/components/LightRays";

function HeroSection(): React.JSX.Element {
  return (
    <section className="h-screen font-sans  bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-black dark:via-gray-900 dark:to-black transition-colors overflow-hidden">
      <LightRays
        raysOrigin="top-center"
        raysColor="#00ffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
      />
      <div className="w-full absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:20px_20px]">
        {/* desktop */}
        <Header />
        <main className="relative flex-1 flex items-center justify-center text-center w-full">
          <div className="relative flex flex-col items-center justify-center py-10 sm:py-16 px-4 max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight max-w-4xl">
              Du concept{" "}
              <span className="text-indigo-600 dark:text-indigo-400">au logiciel,</span>{" "}
              de l’apprenant au développeur.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              Développeur • Pédagogue • Innovateur
            </p>
            <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="">
              <p className="mt-8 flex items-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-md transform hover:scale-105">
                {/* <PlayIcon className="h-6 w-6" /> */}
                <span>Telecharger mon cv</span>
              </p>
            </Link>
          </div>
        </main>
      </div>
    </section>
  );
};

export default HeroSection;
