import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo / Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Paul K Service</h2>
          <p className="text-sm text-gray-400">
            Spécialisé en développement web, réseaux informatiques et marketing digital. Votre solution numérique clé en main.
          </p>
        </div>

        {/* Navigation dynamique avec React Router */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white">home</Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-white">Portefolio</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">À propos</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="text-sm space-y-2">
            <li>Email: contact@paulkservice.com</li>
            <li>Téléphone: +243 000 000 000</li>
            <li>Adresse: Kinshasa, RDC</li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Paul K Service. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
