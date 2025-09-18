import AboutMe from "../components/about/aboutMe";
import ClientTestimonials from "../components/home/clientestimonial";
import StayInTouch from "../components/home/stayinTouch";
import VideoPlayer from "../components/about/videoplayer";

const About = () => {
    return (
      <div>
        <div className="h-40 flex flex-col justify-center items-center bg-violet-100">
          <h2 className="text-4xl font-bold text-center font-poppins">About Me</h2>
          <div className="w-20 h-0.5 bg-blue-500 mt-2 rounded"></div>
        </div>
        
        <AboutMe />
        <ClientTestimonials/>
        <VideoPlayer/>
        <StayInTouch/>
      </div>
    );
  };
  export default About;
