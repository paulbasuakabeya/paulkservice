import { Helmet } from "react-helmet-async";
import AboutMe from "../components/about/aboutMe";
import ClientTestimonials from "../components/home/clientestimonial";
import StayInTouch from "../components/home/stayinTouch";
import VideoPlayer from "../components/about/videoplayer";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>À propos de Paul K Service | Développement Web & IT</title>
        <meta
          name="description"
          content="Découvrez Paul K Service, entreprise spécialisée en développement web, technologies informatiques et marketing digital. Fondée par Paul Kabeya, ingénieur en télécommunications."
        />
        <meta
          name="keywords"
          content="Paul K Service, développement web, ingénierie informatique, marketing digital, réseaux, télécommunications, Kinshasa, Congo"
        />
        <meta property="og:title" content="Paul K Service - À propos" />
        <meta
          property="og:description"
          content="Découvrez notre parcours, nos valeurs et notre expertise dans les nouvelles technologies et le développement web."
        />
        <meta property="og:url" content="https://paulkservice.vercel.app/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://paulkservice.vercel.app/logo.png" />
      </Helmet>

      <div className="h-40 flex flex-col justify-center items-center bg-violet-100">
        <h2 className="text-4xl font-bold text-center font-poppins">About Me</h2>
        <div className="w-20 h-0.5 bg-blue-500 mt-2 rounded"></div>
      </div>

      <AboutMe />
      <ClientTestimonials />
      <VideoPlayer />
      <StayInTouch />
    </div>
  );
};

export default About;


// import AboutMe from "../components/about/aboutMe";
// import ClientTestimonials from "../components/home/clientestimonial";
// import StayInTouch from "../components/home/stayinTouch";
// import VideoPlayer from "../components/about/videoplayer";

// const About = () => {
//     return (
//       <div>
//         <div className="h-40 flex flex-col justify-center items-center bg-violet-100">
//           <h2 className="text-4xl font-bold text-center font-poppins">About Me</h2>
//           <div className="w-20 h-0.5 bg-blue-500 mt-2 rounded"></div>
//         </div>
        
//         <AboutMe />
//         <ClientTestimonials/>
//         <VideoPlayer/>
//         <StayInTouch/>
//       </div>
//     );
//   };
//   export default About;
