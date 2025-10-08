import { Helmet } from "react-helmet-async";
import ServiceSection from "../components/portfolio/serviceSection";
import ExperienceEducation from "../components/portfolio/experience";

const Portfolio = () => {
  return (
    <div>
      {/* --- Balises SEO --- */}
      <Helmet>
        <title>Portfolio | Paul K Service</title>
        <meta
          name="description"
          content="Découvrez les projets et services réalisés par Paul K Service : développement web, marketing digital, solutions informatiques et plus."
        />
        <meta
          name="keywords"
          content="Paul K Service, portfolio, projets web, marketing digital, services IT, développement web, expérience, éducation"
        />
        <meta property="og:title" content="Portfolio - Paul K Service" />
        <meta
          property="og:description"
          content="Parcourez les réalisations de Paul K Service : sites web, applications, projets digitaux et solutions IT sur mesure."
        />
        <meta property="og:url" content="https://paulkservice.vercel.app/portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://paulkservice.vercel.app/logo.png" />
      </Helmet>

      {/* --- Section titre --- */}
      <div className="h-40 flex flex-col justify-center items-center bg-violet-100">
        <h2 className="text-4xl font-bold text-center">Portfolio</h2>
        <div className="w-20 h-1 bg-blue-500 mt-2 rounded"></div>
      </div>

      {/* --- Contenu du Portfolio --- */}
      <ServiceSection />
      <ExperienceEducation />
    </div>
  );
};

export default Portfolio;




// import ServiceSection from "../components/portfolio/serviceSection";
// import ExperienceEducation from "../components/portfolio/experience";

// const Portfolio = () => {
//     return (
//       <div> 
//         <div className="h-40 flex flex-col justify-center items-center bg-violet-100">
//           <h2 className="text-4xl font-bold text-center">Portfolio</h2>
//           <div className="w-20 h-1 bg-blue-500 mt-2 rounded"></div>
//        </div>
//         <ServiceSection />
//         <ExperienceEducation />
//       </div>
//     );
//   };
//   export default Portfolio;
