import React, { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import photo from "../../assets/photo-about-me.jpg";

const skills = [
  { name: "JavaScript", level: "w-5/6", percent: 83 },
  { name: "CSS/Tailwind/Bootstrap/Component", level: "w-11/12", percent: 92 },
  { name: "HTML", level: "w-full", percent: 100 },
  { name: "React", level: "w-10/12", percent: 83 },
  { name: "SQL / MongoDB", level: "w-4/6", percent: 66 },
];

const SkillBar = ({ name, level, percent, animate }) => {
  return (
    <div className="w-full bg-gray-300 rounded-full h-6 overflow-hidden">
      <div
        className={`h-6 bg-blue-600 rounded-full flex items-center justify-between px-3 text-white text-sm font-medium transition-all duration-1000 ${
          animate ? level : "w-0"
        }`}
      >
        <span className="truncate">{name}</span>
        {/* <span>{percent}%</span> */}
      </div>
    </div>
  );
};

const AboutMe = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="overflow-x-hidden px-4 py-10 md:px-20">
      {/* Top 3-column layout */}
      <div className="grid md:grid-cols-3 gap-16 items-start">
        {/* Left Block with photo */}
        <div className="relative">
          <div className="absolute top-[-8px] bottom-[-4px] right-[-8px] left-0 bg-blue-200 rounded-lg z-0"></div>
          <img
            src={photo}
            alt="profile"
            className="w-full h-auto max-w-full object-cover mx-auto mb-4 relative z-10 rounded-lg p-1"
          />
        </div>

        {/* Center Block */}
        <div className="text-start">
          <h3 className="text-3xl font-bold mb-2 font-sans">
            Designing With Passion While Exploring The World
          </h3>
          <div className="w-16 h-0.5 bg-blue-500 mb-4 rounded"></div>
          <p className="break-words text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <p className="break-words text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <br />
          <p className="break-words mb-4 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <br />
          <p className="text-gray-700 font-medium">Let's talk with me.</p>
          <p className="break-words">contact@domain.com</p>
        </div>

        {/* Right Block */}
        <div className="relative">
          <h3 className="text-3xl font-bold mb-2">I Create Products Not Just Arts</h3>
          <div className="w-16 h-0.5 bg-blue-500 mb-4 rounded"></div>
          <br />
          <p className="mb-2 break-words text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <br /><br />
          <p className="mb-4 break-words text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <div className="flex gap-4 flex-wrap">
            <FaFacebookF className="text-blue-600" />
            <FaTwitter className="text-blue-400" />
            <FaLinkedinIn className="text-blue-700" />
            <FaGithub className="text-black" />
          </div>
        </div>
      </div>

      {/* Bottom 2-column layout */}
      <div className="grid md:grid-cols-2 gap-10 mt-16 items-start">
        {/* Left */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Frontend and Backend Developer</h3>
          <p className="mb-2 break-words text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <p className="mb-2 break-words text-justify">
            ullamcorper mattis, pulvinar dapibus leo...
          </p>
          <p className="mb-4 break-words text-justify">
            adipisci elit. Ut elit tellus, luctus nec ullamcorper...
          </p>
          <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition">
            Download CV
          </button>
        </div>

        {/* Right - Skills with animation */}
        <div className="flex flex-col gap-6">
          {skills.map((skill, index) => (
            <SkillBar
              key={index}
              name={skill.name}
              level={skill.level}
              percent={skill.percent}
              animate={animate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
