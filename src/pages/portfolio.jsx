import ServiceSection from "../components/portfolio/serviceSection";
import ExperienceEducation from "../components/portfolio/experience";

const Portfolio = () => {
    return (
      <div> 
        <div className="h-40 flex flex-col justify-center items-center bg-violet-100">
          <h2 className="text-4xl font-bold text-center">Portfolio</h2>
          <div className="w-20 h-1 bg-blue-500 mt-2 rounded"></div>
       </div>
        <ServiceSection />
        <ExperienceEducation />
      </div>
    );
  };
  export default Portfolio;
