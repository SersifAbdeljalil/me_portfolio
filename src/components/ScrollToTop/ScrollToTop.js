// src/components/ScrollToTop/ScrollToTop.js

import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Gérer la visibilité du bouton selon le scroll
  useEffect(() => {
    const toggleVisibility = () => {
      // Afficher le bouton après 300px de scroll
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Écouter l'événement de scroll
    window.addEventListener('scroll', toggleVisibility);

    // Nettoyage
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Fonction pour remonter en haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top"
          aria-label="Retour en haut de la page"
          title="Retour en haut"
        >
          <svg
            className="scroll-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}
    </>
  );
}

export default ScrollToTop;