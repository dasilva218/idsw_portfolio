import TrueFocus from "@/components/TrueFocus";
import Background from "../Background";
import TeamMemberCard from "./MemberCard";

function About() {
  return (
    <Background>
      <div className="relative flex gap-10 items-center flex-row-reverse h-full  w-full px-4 py-20 sm:px-6 lg:px-5 lg:py-3">

        <div className="w-full flex items-center flex-col text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            Résumé professionnel :
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text  mb-6">
            <TrueFocus
              sentence="Développeur JavaScript"
              manualMode={false}
              blurAmount={5}
              borderColor="white"
              glowColor="rgba(0, 255, 0, 0.6)"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />

          </h2>
          <p className="md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Formateur passionné et développeur web expérimenté, j’utilise la pédagogie active pour concevoir et animer des programmes dynamiques qui favorisent l’apprentissage par projet. En parallèle, je mène des développements fullstack, de la conception à la mise en production, en traduisant les besoins métiers en solutions techniques robustes.
          </p>
        </div>

        <div className="">
          <div className="">
            <TeamMemberCard />
          </div>
          {/* <div className="">droite</div> */}
        </div>

      </div>
    </Background>
  );
}

export default About;


