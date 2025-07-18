import React, { useState } from 'react';
import { FaDesktop, FaBullhorn, FaCogs, FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center transition duration-300 hover:shadow-lg">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">
        {description}
      </p>
      <div
        className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center transition duration-300 cursor-pointer ${
          clicked
            ? 'bg-blue-600 text-white rotate-45 border-4 border-dashed border-blue-800'
            : 'bg-blue-200 text-blue-600'
        }`}
        onClick={() => setClicked(!clicked)}
      >
        <FaArrowRight />
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section className="px-6 py-16 bg-gray-50 overflow-x-hidden">
      {/* Titre principal */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">What Services I'm Providing</h2>
        <div className="inline-block relative">
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <span className="block h-0.5 w-24 bg-blue-500 mx-auto mt-1 rounded-full"></span>
        </div>
      </div>

      {/* Trois blocs de service */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        <ServiceCard
          icon={<FaDesktop />}
          title="UI/UX Design"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        />
        <ServiceCard
          icon={<FaBullhorn />}
          title="Digital Marketing"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        />
        <ServiceCard
          icon={<FaCogs />}
          title="Web Development"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        />
      </div>

      {/* Section vidéo */}
      <div className="text-center mt-20">
        <h2 className="text-4xl font-bold mb-4">Working Process</h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className="h-64 max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Working Process Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
