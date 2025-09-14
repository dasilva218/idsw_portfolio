import { JSX } from "react";
import { SkillCard } from "./Skill";

type TypeSkill = {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  technologies: string[];
  level: string;
}[]

type typeDescription = {
  skills: TypeSkill[];
  title: string;
  description: string
}

export default function ContentCardSkill({ skills, title, description }: { skills: TypeSkill, title: string, description: string }) {
  return (
    <div className="p-5">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-accent mb-4">
          {title}
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
}