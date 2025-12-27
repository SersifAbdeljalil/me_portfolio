// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import des composants principaux
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

// Import des pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Loader au démarrage */}
        <Loader />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Contenu principal */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Pied de page */}
        <Footer />
        
        {/* Bouton retour en haut */}
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;