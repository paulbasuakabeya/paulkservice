import React from 'react';

const ExperienceCard = ({ title, years, description, level = 75 }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-start flex flex-col gap-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-gray-500">{years}</p>
      <p className="text-lg text-gray-600">{description}</p>

      {/* Thermomètre horizontal bleu */}
      <div className="w-full bg-gray-200 rounded-full h-8 mt-4 overflow-hidden relative">
        <div
          className="h-full bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold transition-all duration-500"
          style={{ width: `${level}%` }}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

const WorkExperience = () => {
  return (
    <section className="px-4 py-16 bg-gray-50 overflow-x-hidden">
      {/* Titre principal */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
        <div className="inline-block relative">
          <p className="text-gray-700">
            Mon expérience et mes compétences dans le numérique.
          </p>
          <span className="block h-0.5 w-24 bg-blue-500 mx-auto mt-1 rounded-full"></span>
        </div>
      </div>

      {/* Deux blocs en haut */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto mb-12">
        <ExperienceCard
          title="UI/UX Designer"
          years="Depuis-2022"
          description="Je crée des interfaces modernes, intuitives et attrayantes pour offrir une expérience utilisateur fluide et agréable."
          level={85}
        />
        <ExperienceCard
          title="Reséaux Informatique"
          years="Depuis-2018"
          description="J’assure la configuration, la gestion et la sécurisation des réseaux pour garantir performance et fiabilité."
          level={75}
        />
      </div>

      {/* Trois blocs en bas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
        <ExperienceCard
          title="Web Developer"
          years="Depuis-2018"
          description="Je développe des sites web modernes, responsives et optimisés pour une meilleure expérience utilisateur."
          level={90}
        />
        <ExperienceCard
          title="Maintenance Informatique"
          years="Depuis-2018"
          description="J’interviens pour diagnostiquer, réparer et optimiser les systèmes afin d’assurer leur bon fonctionnement."
          level={70}
        />
        <ExperienceCard
          title="Marketing"
          years="Depuis-2018"
          description="Je conçois des stratégies digitales pour améliorer la visibilité, attirer des clients et accroître les performances."
          level={65}
        />
      </div>
    </section>
  );
};

export default WorkExperience;