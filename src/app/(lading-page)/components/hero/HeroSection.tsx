import Link from "next/link";


export default function HeroSection() {
  return (
    <section className="relative z-5 min-h-screen font-sans" id="hero" >
      <main className="flex border items-center justify-center text-center w-full">
        <div className=" flex flex-col items-center justify-center py-10 sm:py-16 px-4 max-w-5xl mx-auto">
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
    </section>
  );
}



