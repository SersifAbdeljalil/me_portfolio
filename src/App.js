// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import des composants (à créer plus tard)
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
// import Projects from './pages/Projects';
// import Skills from './pages/Skills';
// import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/projects" element={<Projects />} /> */}
            {/* <Route path="/skills" element={<Skills />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
            
            {/* Route temporaire pour tester */}
            <Route path="/" element={
              <div style={{ 
                minHeight: '100vh', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '20px',
                paddingTop: '80px'
                
              }}>
                <h1>Portfolio en construction 🚧</h1>
                <p>Les composants seront ajoutés progressivement</p>
              </div>
            } />
          </Routes>
        </main>
        
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;