function skill() {
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

export default skill;