import { Code2, Layers2 } from "lucide-react";

export default function Transversale() {
  return (
    <div className="bg-base-300 p-8 rounded-2xl">
      <h2 className="text-2xl font-bold text-center mb-6 text-accent">
        Compétences Transversales
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Code2 className="w-8 h-8 text-accent" />
          </div>
          <h3 className="font-bold mb-2">Pédagogie Active</h3>
          <p className="text-sm leading-relaxed text-neutral-400">
            Formation et accompagnement d'équipes techniques avec des méthodes collaboratives
          </p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Layers2 className="w-8 h-8 text-accent" />
          </div>
          <h3 className="font-bold mb-2">Architecture Logicielle</h3>
          <p className="text-sm text-neutral-400">
            Conception de systèmes robustes, scalables et maintenables
          </p>
        </div>
        {/* <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold mb-2">DevOps & Déploiement</h3>
              <p className="text-sm text-neutral-400">
                Intégration continue, containerisation et monitoring des applications
              </p>
            </div> */}
      </div>
    </div>
  );
}