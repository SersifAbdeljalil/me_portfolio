// src/components/Hero/Hero.js
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Hero.css';
import MeImage from "../../pages/Me.jpg";
import cv from "../../pages/cv_sersif_abdeljalil.pdf";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-container container">
        
        {/* Contenu texte */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Disponible pour stage de fin d'études
          </div>

          <h1 className="hero-title">
            Bonjour, je suis
            <span className="hero-name"> Sersif Abdeljalil</span>
          </h1>

          <h2 className="hero-subtitle">
            Full-Stack Developer | Software Engineer
          </h2>

          <p className="hero-description">
            Étudiant en Master Ingénierie Informatique et Analyse de Données. 
            Passionné par le développement Full-Stack, l'Intelligence Artificielle, 
            l'IoT et les systèmes embarqués. Je transforme vos idées en solutions 
            digitales innovantes et performantes.
          </p>

          {/* Boutons d'action */}
          <div className="hero-buttons">
            <Link to="/contact">
              <Button variant="primary" size="large">
                Me contacter
              </Button>
            </Link>
            
            <a 
              href={cv}
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="large">
                Télécharger CV
              </Button>
            </a>
          </div>
        </div>
        {/* Image / Avatar */}
        <div className="hero-image">
          <div className="image-wrapper">
            <div className="image-background"></div>
            <div className="image-container">
              {/* Remplacez par votre vraie photo */}
              <img 
                src={MeImage} 
                alt="Sersif Abdeljalil" 
                className="profile-image"
              />
            </div>
            
            {/* Décorations */}
            <div className="decoration decoration-1"></div>
            <div className="decoration decoration-2"></div>
            <div className="decoration decoration-3"></div>
          </div>

        
          </div>
        </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;