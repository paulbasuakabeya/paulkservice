import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // icônes modernes
import clsx from 'clsx';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="w-full bg-violet-100 shadow-md top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-indigo-600">MyLogo</div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          {links.map(link => (
            <li key={link.name}>
              <Link to={link.path} className="hover:text-indigo-600">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hire Me button (Desktop only) */}
        <div className="hidden md:block">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
            Hire Me
          </button>
        </div>

        {/* Menu button (Mobile only) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (slide from left) */}
      <div
        className={clsx(
          "fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          menuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-5">
          <div className="text-xl font-bold text-indigo-600 mb-6">MyLogo</div>
          <ul className="flex flex-col gap-6 text-gray-700 font-medium">
            {links.map(link => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={handleLinkClick}
                  className="block hover:text-indigo-600"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition">
              Hire Me
            </button>
          </div>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
        />
      )}
    </nav>
  );
};

export default Navbar;
