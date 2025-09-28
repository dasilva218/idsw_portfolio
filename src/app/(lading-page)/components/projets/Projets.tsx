import { projects, typeProjet } from "@/datas/projets";
import { Github, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Title from "./Title";

export default function Projets() {

  const [Projects] = useState<Array<typeProjet>>(projects)


  return (
    <section className=" min-h-screen mt-10" id={"Projects"} >
      <Title title="Mes Projets" />
      <div className="grid md:grid-cols-3 gap-4">
        {Projects.map((project) => (
          <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg ">
            <Image
              src={project.image}
              alt={project.title}
              className="w-full rounded-xl h-56 object-cover"
            />
            <div>
              <h1 className="my-2 font-bold">
                {project.title}
              </h1>
              <p className="text-sm">{project.description}</p>

            </div>
            <div className="flex flex-wrap gap-2 my-3">
              {project.technologies.map((tech) => (
                <span className="">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex border justify-center ">
              <Btn className="flex border w-2/3" href={project.demoLink} >
                Demo
                <Video className="w-4 border" />
              </Btn>
              <Btn className="btn border btn-neutral w-1/3 ml-2" href={project.repoLink} >
                <Github className="w-4 border " />
              </Btn>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


function Btn({ className, href, children }: { href: string, className: string, children: React.ReactNode }) {
  return (
    <Link className={className} href={href} >
      {children}
    </Link>
  )
}