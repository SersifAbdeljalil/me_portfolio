// src/components/Loader/Loader.js
import React, { useEffect, useState } from 'react';
import './Loader.css';

function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler le chargement
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 secondes

    return () => clearTimeout(timer);
  }, []);

  // Ne rien afficher si le chargement est terminé
  if (!isLoading) return null;

  return (
    <div className="loader-wrapper">
      <div className="loader-container">
        {/* Logo ou initiales */}
        <div className="loader-logo">
          <span className="logo-text">AS</span>
        </div>

        {/* Spinner animé */}
        <div className="loader-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>

        {/* Texte de chargement */}
        <p className="loader-text">Chargement en cours...</p>

        {/* Barre de progression */}
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;