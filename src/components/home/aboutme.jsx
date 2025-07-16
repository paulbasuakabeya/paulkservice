import React from 'react';
import Pc from '../../assets/section-1-bg1.jpg';

const AboutMe = () => {
  return (
    <section className="bg-white text-gray-900 px-6 py-12 md:py-20 md:px-16 overflow-hidden">
      {/* Titre principal centré */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <div className="inline-block relative">
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p> <br />
          <span className="block h-0.5 w-24 bg-blue-500 mx-auto mt-1 rounded-full"></span>
        </div>
      </div>

      {/* Grille 3 colonnes avec marges horizontales sur PC */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto items-start mx-0 md:mx-20">
        {/* Bloc gauche */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="inline-block relative mb-4">
              <h2 className="text-2xl font-semibold">
                Developing With a Passion While Exploring The World.
              </h2>
              <br />
              <span className="block h-0.5 w-20 bg-blue-500 mt-1 rounded-full"></span>
            </div>

            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* Bouton mobile */}
            <div className="md:hidden">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full mt-2">
                Contact Me
              </button>
            </div>
          </div>

          {/* Bouton desktop */}
          <div className="hidden md:block mt-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full">
              Contact Me
            </button>
          </div>
        </div>

        {/* Bloc milieu centré verticalement */}
        <div className="flex flex-col justify-center h-full space-y-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Bloc image */}
        <div className="relative bg-blue-500 p-2 rounded-lg shadow-lg overflow-hidden h-[250px] md:h-[450px] lg:h-[500px]">
          <img
            src={Pc}
            alt="About me"
            className="w-full h-full object-cover rounded-lg relative z-10 -translate-x-1 -translate-y-1"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;