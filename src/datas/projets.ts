import { StaticImageData } from 'next/image';
import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.png';
import img4 from '../assets/projects/4.png';
import img5 from '../assets/projects/5.png';
import img6 from '../assets/projects/6.png';

export const projects: Array<typeProjet> = [
  {
    id: 1,
    title: 'Gestionnaire de tâches',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
    technologies: ['React', 'Node.js', 'Tailwind CSS'],
    demoLink: '#',
    repoLink: '#',
    image: img1,
  },
  {
    id: 2,
    title: 'Plateforme E-commerce',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
    technologies: ['Next.js', 'TypeScript', 'Prisma'],
    demoLink: '#',
    repoLink: '#',
    image: img2,
  },
  {
    id: 3,
    title: 'Portfolio interactif',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    demoLink: '#',
    repoLink: '#',
    image: img3,
  },
  {
    id: 4,
    title: 'Application de Chat en temps réel',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
    technologies: ['React', 'Socket.io', 'Express.js'],
    demoLink: '#',
    repoLink: '#',
    image: img4,
  },
  {
    id: 5,
    title: 'Système de réservation de salles',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
    technologies: ['Next.js', 'MongoDB', 'Chakra UI'],
    demoLink: '#',
    repoLink: '#',
    image: img5,
  },
  {
    id: 6,
    title: 'Analyseur de sentiment',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
    technologies: ['Python', 'Flask', 'NLTK'],
    demoLink: '#',
    repoLink: '#',
    image: img6,
  },
];

export type typeProjet = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demoLink: string;
  repoLink: string;
  image: StaticImageData;
}