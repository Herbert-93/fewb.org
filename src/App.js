import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Impact from './components/Impact';
import Alumni from './components/Alumni';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Impact />
      <Programs />
      <Gallery />
      <Alumni />
      <Events />
      <Contact />
    </>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar scrolled={scrolled} />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
