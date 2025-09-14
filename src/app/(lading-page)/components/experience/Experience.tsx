"use client";

import React, { memo, useCallback, useState } from "react";

// Helper components to make this example self-contained.
// In a real app, import icons from 'lucide-react' and your Badge from your UI library.
const ChevronDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
);
const ChevronUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
);
const Code = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 18 6-6-6-6" /><path d="m8 6-6 6 6 6" /></svg>
);
const Palette = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" /></svg>
);
const Badge = ({ children, className = "", ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold ${className}`} {...props}>
    {children}
  </span>
);

// --- TYPES ---
type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface TimelineItemData {
  id: string;
  title: string;
  type?: string;
  duration: string;
  icon: IconType;
  responsibilities: string[];
  skills?: string[];
}

type ExpandMode = "multi" | "single";

interface ProfessionalTimelineProps {
  data: TimelineItemData[];
  defaultExpandedIds?: string[]; // defaults to all items expanded
  expandMode?: ExpandMode;       // "multi" | "single" (default: "multi")
}

// --- MOCK DATA ---
const timelineData: TimelineItemData[] = [
  {
    id: "timeline-item-1",
    title: "Formateur en développement web & web mobile École 241 (Ogooué Labs Entrepreneuriat)",
    // type: "Full-time",
    duration: "Juillet. 2023 – Août 2025",
    icon: Code,
    responsibilities: [
      "Conception et animation de modules en présentiel, basés sur la pédagogie active (projets fil rouge,travaux pratiques en binômes) ",
      "Accompagnement de groupes de 15–25 apprenants : définition des objectifs, feedback continu et évaluation par compétences",
      "Mise en place d’un tableau de bord de suivi individuel des apprenants (suivi des livrables, progression)",
      "25 apprenants formés par promotion",
    ],
    // skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
  },
  {
    id: "timeline-item-2",
    title: "Formateur en ligne (2 mois) 241 CommunityJuin 2024(Ogooué Labs Entrepreneuriat) ",
    // type: "Full-time",
    duration: "Juin 2024",
    icon: Code,
    responsibilities: [
      "Conception et animation d’un parcours de formation intensif à distance",
      "Utilisation d’outils collaboratifs(plateforme de l’école, Zoom) pour projets de groupe",
      "Recueil de feedback quotidien et adaptation du rythme pédagogique"
    ],
    // skills: ["Creativity", "UI/UX Design", "Figma"],
  },
  {
    id: "timeline-item-3",
    title: "Contrôleur facturation S.E.E.G. (Société d’Énergie et d’Eau du Gabon)",
    // type: "Full-time",
    duration: "2009 – 2013",
    icon: Code,
    responsibilities: [
      "Élaboration d’un système de contrôle des instances et factures des clients moyenne tension",
      "Mise en place et suivi d’un historique de consommation clients(analyse des écarts mensuels)",
      "Réduction des erreurs de facturation de 0 % grâce à l’automatisation des contrôles"
    ],
    // skills: ["React", "Vue.js", "JavaScript", "CSS", "HTML"],
  },
  {
    id: "timeline-item-4",
    title: "Développeur consultant CKDO (Aéroport de Libreville)",
    // type: "Full-time",
    duration: "2020 – 2023",
    icon: Code,
    responsibilities: [
      "Développement d’une application métier de suivi des inventaires",
      "Intégration d’un module d’authentification et création d’un tableau de bord analytique",
    ],
    skills: ["PHP", "codeIgniter", "JavaScript", "CSS", "HTML"],
  },
  {
    id: "timeline-item-5",
    title: "Développeur Web & Base de données SBPRO (Maison d’édition)",
    // type: "Full-time",
    duration: "2016 – 2018",
    icon: Code,
    responsibilities: [
      "Gestion des inventaires et conception de la base de données clients et produits",
      "Développement et maintenance du site web de la maison d’édition",
      "Conception graphique du magazine Izeva et création d’objets publicitaires"
    ],
    // ,skills: ["React", "Vue.js", "JavaScript", "CSS", "HTML"],
  },
  {
    id: "timeline-item-6",
    title: "Développeur prototype web E‐Startup Challenge",
    // type: "Full-time",
    duration: "2020",
    icon: Code,
    responsibilities: [
      "Conception du prototype web NTCHINA .",
    ],
    skills: ["PHP", "codeIgniter", "JavaScript", "CSS", "HTML"],
  },
  {
    id: "timeline-item-7",
    title: "Développeur Backend Ogooué Labs Entrepreneuriat",
    // type: "Full-time",
    duration: "2020",
    icon: Code,
    responsibilities: [
      "Contribution à l’élaboration du système d’inscription de la plateforme business",
    ],
    skills: ["PHP", "codeIgniter", "JavaScript", "CSS", "HTML"],
  }
];

const formationData: TimelineItemData[] = [
  {
    id: "devweb",
    title: "Formation Développement Web & Web Mobile École 241",
    // type: "Full-time",
    duration: "2019 – 2020",
    icon: Code,
    responsibilities: [
      "Certification Simplon Formation accélérée et pratique à travers la pédagogie inversée",
    ],
    // skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
  },
  {
    id: "formateur",
    title: "Formation de formateur en pédagogie active",
    // type: "Full-time",
    duration: "MAI 2024",
    icon: Code,
    responsibilities: [
      "Organisée par SIMPLON AFRICA Vise à doter les formateurs des compétences pour enseigner efficacement le développement web et web mobile, avec un focus sur la pédagogie active, les briefs projets et la déontologie du formateur",
    ],
    // skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
  },
  {
    id: "referent",
    title: "Formation des Référents Pédagogiques (CAPAC’IT 4 AFRICA) ",
    // type: "Full-time",
    duration: "MAI 2025",
    icon: Code,
    responsibilities: [
      "Intégration et évaluation des compétences transversales dans la formation professionnelle",
      "Intégration de L’IA au service de la pédagogie",
    ],
    // skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
  },
]

// --- COMPONENTS ---
interface TimelineItemContentProps {
  item: TimelineItemData;
}

const TimelineItemContent = memo(function TimelineItemContent({ item }: TimelineItemContentProps) {
  return (
    <div className="mt-6 space-y-4">
      {/* Responsibilities */}
      <ul className="space-y-3">
        {item.responsibilities.map((responsibility, idx) => (
          <li
            key={`${item.id}-resp-${idx}`}
            className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400"
          >
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
            <span className="leading-relaxed">{responsibility}</span>
          </li>
        ))}
      </ul>

      {/* Skills */}
      {/* <div className="flex flex-wrap gap-2 pt-2">
        {item.skills.map((skill, skillIdx) => (
          <Badge
            key={`${item.id}-skill-${skillIdx}`}
            className="bg-slate-100 text-slate-700 dark:bg-gray-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-gray-700 transition-colors px-3 py-1"
          >
            {skill}
          </Badge>
        ))}
      </div> */}
    </div>
  );
});
TimelineItemContent.displayName = "TimelineItemContent";

interface TimelineItemProps {
  item: TimelineItemData;
  expanded: boolean;
  onToggle: (id: string) => void;
}

const TimelineItem = memo(function TimelineItem({
  item,
  expanded,
  onToggle,
}: TimelineItemProps) {
  const Icon = item.icon;
  const headerId = `timeline-header-${item.id}`;
  const contentId = `timeline-content-${item.id}`;

  return (
    <li className="relative">
      {/* Timeline marker with icon */}
      <div className="absolute left-1 top-5 w-6 h-6 bg-slate-400 dark:bg-slate-500 rounded-full border-2 border-white dark:border-black flex items-center justify-center">
        <Icon className="w-3.5 h-3.5 text-white dark:text-black" />
      </div>

      {/* Card */}
      <div className="ml-14 pb-8">
        <div className="bg-white/50 dark:bg-gray-950 rounded-lg p-4 border border-slate-200/80 dark:border-gray-800/50 transition-all duration-200">
          <button
            id={headerId}
            className="w-full text-left group cursor-pointer"
            onClick={() => onToggle(item.id)}
            aria-expanded={expanded}
            aria-controls={contentId}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mt-1">
                  <span>{item.type}</span>
                  <span aria-hidden>•</span>
                  <span>{item.duration}</span>
                </div>
              </div>

              <div className="text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
            </div>
          </button>

          {expanded && (
            <div id={contentId} role="region" aria-labelledby={headerId}>
              <TimelineItemContent item={item} />
            </div>
          )}
        </div>
      </div>
    </li>
  );
});
TimelineItem.displayName = "TimelineItem";

// --- MAIN TIMELINE ---
export function ProfessionalTimeline({
  data,
  defaultExpandedIds,
  expandMode = "multi",
}: ProfessionalTimelineProps) {
  const initial = defaultExpandedIds ?? data.map((d) => d.id);
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set(initial));

  const onToggle = useCallback(
    (id: string) => {
      setExpanded((prev) => {
        const next = new Set(prev);
        if (expandMode === "single") {
          return prev.has(id) ? new Set() : new Set([id]);
        }
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        return next;
      });
    },
    [expandMode]
  );

  return (
    <ol className="relative">
      {/* Vertical timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-300 dark:bg-gray-800" aria-hidden />

      {data.map((item) => (
        <TimelineItem
          key={item.id}
          item={item}
          expanded={expanded.has(item.id)}
          onToggle={onToggle}
        />
      ))}
    </ol>
  );
}

// --- APP ENTRY POINT ---
function Experience() {
  return (
    <section id="Experiences" className="min-h-screen py-3 px-3 border-t-1 border-t-blue-950  transition-colors duration-300">
      <div className="grid sm:grid-cols-2">
        {/* section exprerience */}
        <div className="max-w-3xl mx-auto">
          <header className="flex justify-center items-center ">
            <h1 className="text-3xl p-2 font-bold text-slate-800 dark:text-slate-100">Expérience Professionnelle</h1>
          </header>
          {/* Set expandMode="single" for accordion behavior */}
          <ProfessionalTimeline data={timelineData} expandMode="multi" />
        </div>
        {/* section formation */}
        <div className="max-w-3xl mx-auto">
          <header className="flex justify-center items-center ">
            <h1 className="text-3xl p-2 font-bold text-slate-800 dark:text-slate-100">Formations & Diplômes</h1>
          </header>
          {/* Set expandMode="single" for accordion behavior */}
          <ProfessionalTimeline data={formationData} expandMode="single" />
        </div>

      </div>
    </section>
  );
}

export default Experience