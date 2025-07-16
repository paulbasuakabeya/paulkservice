



import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Outlet } from "react-router-dom";
import './App.css'
import Navbar from './components/navbar';

import Home from './pages/home';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Footer from './components/footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="text-xl poppins">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />

    </Router>
  );
};

export default App;
