import React from "react";

const ExperienceEducation = () => {
  const experiences = [
    {
      title: "Ingénieur Réseaux et Télécoms",
      company: "ESMICOM - Kinshasa",
      period: "2017 - 2022",
      description:
        "Licence en Réseaux et Télécommunications, avec une solide base en systèmes informatiques et télécoms.",
      image: "/images/education.png",
    },
    {
      title: "Stagiaire Informatique",
      company: "CRENK - Centre Régional de Recherche Nucléaire",
      period: "2021-2022",
      description:
        "Interventions en maintenance informatique, gestion de serveur, spectromètre et autres pannes complexes.",
      image: "/images/internship.png",
    },
    {
      title: "Développeur Web Freelance",
      company: "Paul K Service",
      period: "2021 - Aujourd'hui",
      description:
        "Conception de sites web complets (frontend et backend), marketing digital, et solutions réseaux pour entreprises.",
      image: "/images/freelance.png",
    },
    {
      title: "Formation en Développement Web & Mobile",
      company: "Digital Academy",
      period: "2023",
      description:
        "Maîtrise des technologies modernes : HTML, CSS, Tailwind, JavaScript, React, Node.js, Express.js.",
      image: "/images/certificate.png",
    },
    {
      title: "Formation en Management",
      company: "Tony Elumelu Foundation",
      period: "2021",
      description:
        "Programme de formation en management, leadership et entrepreneuriat dispensé par la Tony Elumelu Foundation.",
      image: "/images/management.png",
    },
    {
      title: "Missionnaire à Temps Plein",
      company: "Église de Jésus-Christ des Saints des Derniers Jours",
      period: "2021 - 2023",
      description:
        "Service missionnaire à plein temps axé sur la formation, le leadership, la gestion humaine et le développement spirituel et communautaire.",
      image: "/images/missionary.png",
    },
  ];

  return (
    <section id="experience-education" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
          Expérience & Formation
        </h2>

        {/* GRID LAYOUT */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition"
            >
              {/* Image sans cercle */}
              <div className="w-full h-40">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Texte */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-center">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  {item.company} • {item.period}
                </p>
                <p className="mt-3 text-gray-600 dark:text-gray-300 text-center">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
