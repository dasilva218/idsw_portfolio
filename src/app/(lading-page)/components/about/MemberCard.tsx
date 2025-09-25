"use client";
import Link from "next/link";
import { JSX } from "react";

type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
};
interface TeamMemberCardProps {
  member: TeamMember;
}

type socialIcons = {
  name: string;
  href: string;
  svg: JSX.Element;
}

const Member: TeamMember = {
  name: "DA SILVA Wilfrid",
  role: "Formateur / Développeur",
  imageUrl: "/assets/imgs/smoking2.jpeg"
};

const socialIcons: socialIcons[] = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/wilfrid-iveke-da-silva-a6a7591a2",
    svg: (
      <svg
        className="size-6 transition-transform duration-200 hover:scale-110"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
        ></path>
      </svg>
    ),
  },
]

function TeamMemberCard() {
  return (
    <div className="group flex flex-col items-center text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-xl dark:shadow-gray-900/20 dark:hover:shadow-gray-900/40 transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:-translate-y-1">
      <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        <img
          className="relative w-full h-full rounded-full object-cover object-top ring-4 ring-white dark:ring-gray-800 group-hover:ring-gray-100 dark:group-hover:ring-gray-700 transition-all duration-300"
          src={Member.imageUrl}
          alt={`Portrait of ${Member.name}`}
          // Basic fallback in case image fails to load
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = `https://placehold.co/200x200/E2E8F0/4A5568?text=${"member.name".split(' ').map(n => n[0]).join('')}`;
          }}
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{Member.name}</h3>
      <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4 px-3 py-1 bg-gray-50 dark:bg-gray-800 rounded-full">{Member.role}</p>
      <div className="flex space-x-3">
        {socialIcons.map((icon) => (
          <Link
            key={icon.name}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={icon.name}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            href={icon.href}
          >
            {icon.svg}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TeamMemberCard;

