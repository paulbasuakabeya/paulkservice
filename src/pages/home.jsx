import HeroSection from "../components/home/herosection";
import AboutMe from "../components/home/aboutme";
import ServicesSection from "../components/home/serviceSection";
import WorkExperience from "../components/home/workexperience";
import GalleryService from "../components/home/galerieService";
import ClientTestimonials from "../components/home/clientestimonial";
import StayInTouch from "../components/home/stayinTouch";

const Home = () => {
    return (
      <div> 
        <HeroSection/>
        <AboutMe/>
        <ServicesSection/>
        <WorkExperience/>
        <GalleryService/>
        <ClientTestimonials/>
        <StayInTouch/>
      </div>
    );
  };
  export default Home;
