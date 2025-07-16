import {
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaEnvelope,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaWhatsapp,
  } from "react-icons/fa";
  import { useState } from "react";
  
  // Composant réutilisable pour un bloc de contact
  const ContactCard = ({ icon: Icon, color, title, subtitle }) => (
    <div className="flex flex-col items-center bg-white p-6 shadow-md rounded-xl hover:shadow-xl transform hover:scale-105 transition duration-300">
      <Icon className={`text-3xl mb-4 ${color}`} />
      <p className="font-semibold text-xl text-center">{title}</p>
      <p className="text-xl mt-1 text-gray-600 text-center">{subtitle}</p>
    </div>
  );
  
  const ContactPage = () => {
    const [message, setMessage] = useState("");
  
    return (
        
    
    <main className="min-h-screen p-4 sm:p-6 md:p-10 lg:px-24 xl:px-32 bg-gray-50 text-gray-800 overflow-x-hidden">

        {/* Section contact */}
        <section className=" grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 lg:gap-16 mb-12 max-w-7xl mx-auto">

          <ContactCard
            icon={FaPhoneAlt}
            color="text-blue-600"
            title="Tel: +243 814961180/994720837"
            subtitle="Lundi - Samedi, 24h/24"
          />
          <ContactCard
            icon={FaMapMarkerAlt}
            color="text-green-600"
            title="56, Av Banza-Boma, C/Mont-Ngafula"
            subtitle="Lundi - Samedi, 24h/24"
          />
          <ContactCard
            icon={FaEnvelope}
            color="text-red-600"
            title="paulbasuakabeya@gmail.com"
            subtitle="Lundi - Samedi, 24h/24"
          />
        </section>
  
        {/* Formulaire */}
        <section className="bg-white p-8 shadow-lg rounded-xl max-w-7xl mx-auto mb-12">
          <h2 className="text-2xl font-semibold mb-2">Get In Touch</h2>
          <div className="w-20 h-0.5 bg-blue-600 mb-6"></div>
  
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Enter your name"
              required
              aria-label="Name"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
  
            <input
              type="email"
              placeholder="Enter email address"
              required
              aria-label="Email"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
  
            <div>
              <textarea
                placeholder="Enter your message"
                maxLength={1000}
                required
                aria-label="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
              />
              <p className="text-sm text-right text-gray-500">
                {message.length} of 1000 max characters.
              </p>
            </div>
  
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </section>
  
        {/* Réseaux sociaux */}
        <footer className="flex justify-center gap-6 text-xl mb-10">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            className="text-sky-500 hover:text-sky-700"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            className="text-blue-700 hover:text-blue-900"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            className="text-pink-500 hover:text-pink-700"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/243999999999"
            aria-label="WhatsApp"
            className="text-green-500 hover:text-green-700"
          >
            <FaWhatsapp />
          </a>
        </footer>
      </main>
    );
  };
  
  export default ContactPage;
  
