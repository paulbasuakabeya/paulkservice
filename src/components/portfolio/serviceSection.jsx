import React from "react";
import MobileSlider from "./mobileslide"; // adapte le chemin si besoin

// Import des images
import un from "../../assets/portfolio-2.png";
import deux from "../../assets/portfolio-4.png";
import trois from "../../assets/portfolio-3.png";
import quatre from "../../assets/portfolio-15.jpg";
import cinq from "../../assets/portfolio-115-1024x587.jpg";
import six from "../../assets/portoflio-1-1024x587.png";
import sept from "../../assets/portoflio-151-1024x535.jpg";
import huit from "../../assets/portfolio-10-1024x587.jpg";
import neuf from "../../assets/portfolio-11-1024x587.jpg";

const bloc1Images = [
  { src: deux, alt: "Aperçu principal du projet" },
  { src: trois, alt: "Aperçu d'interface mobile" },
  { src: quatre, alt: "Page d'accueil" },
];

const bloc2Images = [
  { src: cinq, alt: "Fonctionnalité 1" },
  { src: six, alt: "Fonctionnalité 2" },
  { src: sept, alt: "Fonctionnalité 3" },
];

const bloc3Images = [
  { src: huit, alt: "Interface utilisateur" },
  { src: neuf, alt: "Tableau de bord" },
  { src: un, alt: "Vue complète du projet" },
];

const ServiceSection = () => {
  return (
    <section className="p-8 md:py-16 md:px-32 space-y-12 bg-white text-gray-800">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
      What Service You Will Get From Me
      </h1>
      <p className="text-lg text-center text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      {/* Mobile : 3 sliders avec directions différentes */}
      <MobileSlider images={bloc1Images} reverse={false} />
      <MobileSlider images={bloc2Images} reverse={true} /> {/* slide inverse */}
      <MobileSlider images={bloc3Images} reverse={false} />

      {/* Desktop : affichage classique */}
      <div className="hidden md:block space-y-12">
        {/* Bloc 1 */}
        <div className="flex gap-12">
          <img
            src={deux}
            alt="Aperçu principal du projet"
            className="w-3/5 max-h-96 object-cover rounded shadow transition-transform duration-300 hover:scale-105"
          />
          <div className="w-2/5 flex flex-col gap-12">
            <img
              src={trois}
              alt="Aperçu d'interface mobile"
              className="rounded shadow transition-transform duration-300 hover:scale-105"
            />
            <img
              src={quatre}
              alt="Page d'accueil"
              className="rounded shadow transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Bloc 2 */}
        <div className="grid grid-cols-3 gap-12">
          <img
            src={cinq}
            alt="Fonctionnalité 1"
            className="rounded shadow w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
          />
          <img
            src={six}
            alt="Fonctionnalité 2"
            className="rounded shadow w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
          />
          <img
            src={sept}
            alt="Fonctionnalité 3"
            className="rounded shadow w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Bloc 3 */}
        <div className="flex gap-12">
          <div className="w-2/5 flex flex-col gap-4">
            <img
              src={huit}
              alt="Interface utilisateur"
              className="max-h-68 object-cover rounded shadow transition-transform duration-300 hover:scale-105"
            />
            <img
              src={neuf}
              alt="Tableau de bord"
              className="rounded shadow transition-transform duration-300 hover:scale-105"
            />
          </div>
          <img
            src={un}
            alt="Vue complète du projet"
            className="w-3/5 max-h-96 object-cover rounded shadow transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
