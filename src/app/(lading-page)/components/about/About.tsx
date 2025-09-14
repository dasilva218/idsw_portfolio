import TrueFocus from "@/components/TrueFocus";
import TeamMemberCard from "./MemberCard";

function About() {
  return (
    <section id="About" className="min-h-screen py-3 px-3 border-t-1 border-t-blue-950 flex items-center">

      <div className="flex gap-10 items-start flex-col-reverse sm:flex-row-reverse h-full ">

        <div className="w-full flex-2 flex items-center flex-col text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            Résumé professionnel :
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text w-2 ">
            <TrueFocus
              sentence="Développeur JavaScript"
              manualMode={false}
              blurAmount={10}
              borderColor="blue"
              glowColor="rgba(1, 255, 0, 0.6)"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          </h2>
          <div className="p-8 text-lg text-slate-300 leading-relaxed">
            <p className="mb-2">
              Passionné par le développement backend et la transmission de connaissances, je combine
              <strong className="text-blue-600 holographic-text"> 6 ans d'expérience technique</strong> avec une
              expertise unique en
              <strong className="text-purple-600 holographic-text"> pédagogie active</strong>.
            </p>
            <p className=" ">
              Mon approche ? Créer des solutions techniques robustes tout en formant les équipes aux meilleures
              pratiques. J'accompagne les développeurs dans leur montée en compétences grâce à des méthodes
              d'apprentissage innovantes et des projets concrets.
            </p>

          </div>
        </div>

        <div className="w-full flex-1 ">
          <TeamMemberCard />
        </div>
      </div>
    </section>
  );
}

export default About;


