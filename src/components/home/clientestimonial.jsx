import React, { useEffect, useLayoutEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '../../assets/female-3-150x150.jpg';
import img2 from '../../assets/male-1.jpg';
import img3 from '../../assets/male-3.jpg';

const testimonials = [
  {
    name: 'John Doe',
    image: img1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
  {
    name: 'Jane Smith',
    image: img2,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
  {
    name: 'Paul Kabeya',
    image: img3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
];

const ClientTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const renderTestimonial = (testimonial, index) => (
    <motion.div
      key={index}
      className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center text-start w-full max-w-xs"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      {/* Symbole adapté */}
      <div className="text-5xl text-blue-500 mb-4">“</div>

      <img
        src={testimonial.image}
        alt={testimonial.name}
        loading="lazy"
        className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 mb-4"
      />

      <p className="text-lg text-gray-600 mb-4">{testimonial.text}</p>
      <span className="block h-0.5 w-10 bg-blue-400 rounded-full mb-2"></span>
      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
    </motion.div>
  );

  return (
    <section className="bg-white px-6 py-16 text-center">
      <h2 className="text-4xl font-bold mb-2">What My Clients Say</h2>
      <p className="text-gray-700 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <span className="block h-0.5 w-20 bg-blue-500 mx-auto rounded-full mb-10"></span>

      {isMobile ? (
        <div className="flex justify-center items-center">
          <AnimatePresence mode="wait">
            {renderTestimonial(testimonials[activeIndex], activeIndex)}
          </AnimatePresence>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {renderTestimonial(testimonial, index)}
            </motion.div>
          ))}
        </div>
      )}

    </section>
  );
};

export default ClientTestimonials;
