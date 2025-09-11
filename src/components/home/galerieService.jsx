import React, { useEffect, useState, useRef } from 'react';
import img1 from '../../assets/portfolio-2 (1).png';
import img2 from '../../assets/portfolio-2.png';
import img3 from '../../assets/portfolio-3.png';
import img4 from '../../assets/portfolio-4.png';
import img5 from '../../assets/portfolio-6-1.png';
import img6 from '../../assets/portfolio-15.jpg';

const images = [img1, img2, img3, img4, img5, img6];

const GalleryService = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const count = isMobile ? 1 : 3;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Créer une copie de toutes les images glissables
  const sliderImages = [...images, ...images.slice(0, count)];

  return (
    <section className="px-6 py-16 bg-violet-100bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-2">My Galerie Service</h2>
      <p className="text-gray-700">Mes réalisations et projets à travers cette galerie dédiée.</p>
      <span className="block h-0.5 w-24 bg-blue-500 mx-auto mt-1 rounded-full"></span>

      <div className="overflow-hidden w-full max-w-6xl mx-auto mt-10">
        <div
          className="flex transition-transform duration-[3000ms] ease-in-out"
          style={{
            transform: `translateX(-${(startIndex * 100) / sliderImages.length}%)`,
            width: `${(sliderImages.length * 100) / count}%`,
          }}
        >
          {sliderImages.map((src, index) => (
            <div
              key={index}
              className="w-full"
              style={{ flex: `0 0 ${100 / sliderImages.length}%` }}
            >
              <div className="mx-2 h-64 overflow-hidden rounded-lg shadow-md">
                <img
                  src={src}
                  alt={`gallery-${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryService;
