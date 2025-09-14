"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import LogoImg from "../hero/LogoImg";


const MenuIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const MENU = [
    { section: '#hero', link: 'Accueil' },
    { section: '#About', link: 'À propos' },
    { section: '#Skills', link: 'Compétences' },
    { section: '#Experiences', link: 'Expériences' },
    // { section: '#Projects', link: 'Projets' }
  ]

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);
  return (
    <>
      <header className="  px-4 bg-transparent sm:px-6 lg:px-8 transition-all duration-300">
        <nav className="flex items-center justify-between mx-auto">
          <div className="flex items-center gap-2">
            <LogoImg />
            {/* <Logo className="h-15 w-15" /> */}
            {/* <StackerLogo className="h-8 w-8" /> */}
            {/* <span className="font-bold text-2xl text-gray-900 dark:text-white">
              IDSW
            </span> */}
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {MENU.map(({ section, link }) => (
              <Link
                key={section}
                href={section}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div
          className="absolute inset-0 bg-black/60 dark:bg-black/80"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        <div
          className={`relative z-50 bg-white dark:bg-gray-900 h-full w-4/5 max-w-sm ml-auto p-6 flex flex-col transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between mb-8">
            <span className="font-bold text-2xl text-gray-900 dark:text-white">
              Menu
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col items-start gap-5">
            {MENU.map(({ link, section }) => (
              <Link
                key={link}
                href={section}
                className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-lg w-full text-left py-2"
              >
                {link}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;