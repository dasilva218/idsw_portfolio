import { Code, Database, Globe, Layers, Lock, Server } from "lucide-react";

const frontendSkills = [
  {
    id: 1,
    title: "Réaliser une interface utilisateur web statique",
    description: "Conception et intégration d'interfaces utilisateur avec HTML5, CSS3 et des outils de design moderne",
    icon: <Globe className="w-8 h-8 text-accent" />,
    technologies: ["HTML5", "CSS3", "Tailwind CSS", "Figma"],
    level: "Expert"
  },
  {
    id: 2,
    title: "Maîtriser les frameworks et bibliothèques front-end",
    description: "Développement d'applications complexes avec les frameworks JavaScript modernes",
    icon: <Code className="w-8 h-8 text-accent" />,
    technologies: ["React", "Next.js", "TypeScript",],
    level: "Expert"
  },
  {
    id: 3,
    title: "Réaliser une interface utilisateur web dynamique",
    description: "Création d'expériences interactives avec gestion d'état et communication API",
    icon: <Layers className="w-8 h-8 text-accent" />,
    technologies: ["JavaScript ES6+", "DOM API", "Fetch API", "WebSockets", "Progressive Web Apps"],
    level: "Avancé"
  }
];

const backendSkills = [
  {
    id: 4,
    title: "Programmation Serveur",
    description: "Développement d'applications serveur robustes et performantes",
    icon: <Server className="w-8 h-8 text-accent" />,
    technologies: ["Node.js", "Express.js", "TypeScript", "JavaScript"],
    level: "Avancé"
  },
  {
    id: 5,
    title: "API RESTful",
    description: "Conception et développement d'APIs REST respectant les standards",
    icon: <Code className="w-8 h-8 text-accent" />,
    technologies: ["REST", "GraphQL", "Postman", "Swagger", "JWT"],
    level: "Expert"
  },
  {
    id: 6,
    title: "Bases de Données",
    description: "Gestion et optimisation de bases de données relationnelles et NoSQL",
    icon: <Database className="w-8 h-8 text-accent" />,
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Prisma"],
    level: "Avancé"
  },
  {
    id: 7,
    title: "Architecture Serveur",
    description: "Conception d'architectures scalables et maintenables",
    icon: <Layers className="w-8 h-8 text-accent" />,
    technologies: ["Microservices", "Docker"],
    level: "Intermédiaire"
  },
  {
    id: 8,
    title: "Sécurité Applicative",
    description: "Implémentation de bonnes pratiques de sécurité web",
    icon: <Lock className="w-8 h-8 text-accent" />,
    technologies: ["OWASP", "HTTPS/TLS", "CORS", "Input Validation", "OAuth 2.0"],
    level: "Intermédiaire"
  }
];

const SkillCard = ({ skill }: { skill: typeof frontendSkills[0] }) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "badge-success";
      case "Avancé": return "badge-warning";
      case "Intermédiaire": return "badge-info";
      default: return "badge-neutral";
    }
  };

  return (
    <div className="bg-base-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="flex items-start mb-4">
        <div className="mr-4 p-3 bg-base-200 rounded-lg">
          {skill.icon}
        </div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
            <h3 className="text-lg font-bold text-accent mb-2">
              {skill.title}
            </h3>
            <span className={`badge ${getLevelColor(skill.level)} badge-sm self-start`}>
              {skill.level}
            </span>
          </div>
        </div>
      </div>

      <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
        {skill.description}
      </p>

      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-neutral-300">Technologies maîtrisées :</h4>
        <div className="flex flex-wrap gap-2">
          {skill.technologies.map((tech, index) => (
            <span key={index} className="badge badge-outline badge-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

function Skill() {
  return (
    <section className="bg-base-200 p-10 mb-10 md:mb-32" id="Skills">
      {/* <Title title="Compétences Techniques" /> */}
      <div className="max-w-7xl mx-auto">
        {/* Frontend Development */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-accent mb-4">
              Développeur Frontend
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Spécialisé dans la création d'interfaces utilisateur modernes, responsives et performantes
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frontendSkills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>

        {/* Backend Development */}
        <div className="mb-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-accent mb-4">
              Développeur Backend
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Expert en architecture serveur, APIs robustes et systèmes sécurisés
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {backendSkills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>

        {/* Compétences transversales */}
        <div className="bg-base-300 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-center mb-6 text-accent">
            Compétences Transversales
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold mb-2">Pédagogie Active</h3>
              <p className="text-sm text-neutral-400">
                Formation et accompagnement d'équipes techniques avec des méthodes collaboratives
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold mb-2">Architecture Logicielle</h3>
              <p className="text-sm text-neutral-400">
                Conception de systèmes robustes, scalables et maintenables
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold mb-2">DevOps & Déploiement</h3>
              <p className="text-sm text-neutral-400">
                Intégration continue, containerisation et monitoring des applications
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;