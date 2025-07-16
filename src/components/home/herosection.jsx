import React from 'react';
import { FaWhatsapp, FaFacebook, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import heroBg from '../../assets/h1_hero-bg.png';

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row bg-violet-100 overflow-hidden">
      {/* Colonne gauche */}
      <div className="relative w-full md:w-1.5/3 flex flex-col justify-center px-8 md:pl-[240px] md:pr-20">
        
        {/* Icônes sociaux visibles uniquement sur md+ */}
        <div className="hidden md:flex flex-col fixed left-[60px] top-1/2 -translate-y-1/2 gap-5 text-indigo-600 text-xl z-10">
          <a href="#"><FaWhatsapp /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaGithub /></a>
          <a href="#"><FaTwitter /></a>
        </div>

        {/* Texte principal */}
        <div className="text-justify text-gray-800 text-base max-w-xl mx-auto py-8 md:py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">
            I'm Web Developer <br />
            <span className="text-indigo-600">Natalie E. Watson</span>
          </h1>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus nec ullamcorper mattis, pulvinar dapibus leo ullamcorper.
          </p>
          <div className="text-center md:text-left">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Colonne droite (image) */}
      <div className="w-full md:w-1.5/3 h-full md:h-screen">
        <img
          src={heroBg}
          alt="Hero"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
