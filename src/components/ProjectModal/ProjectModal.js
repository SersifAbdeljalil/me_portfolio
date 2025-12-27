// src/components/ProjectModal/ProjectModal.js
import React, { useEffect } from 'react';
import './ProjectModal.css';

// Import des icônes
import { 
  X,
  ExternalLink, 
  Github, 
  Calendar,
  Tag,
  CheckCircle2,
  Award,
  Users,
  Target,
  Lightbulb,
  TrendingUp
} from 'lucide-react';

function ProjectModal({ project, isOpen, onClose }) {
  // Fermer avec la touche Échap
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Bloquer le scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const {
    title,
    description,
    image,
    category,
    technologies,
    date,
    github,
    demo,
    longDescription,
    features,
    challenges,
    results,
    team,
    duration
  } = project;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Bouton de fermeture */}
        <button className="modal-close" onClick={onClose} aria-label="Fermer">
          <X size={24} />
        </button>

        {/* Image principale */}
        <div className="modal-image">
          <img src={image} alt={title} />
          <div className="modal-image-overlay">
            <span className="modal-category">
              <Tag size={16} />
              {category}
            </span>
          </div>
        </div>

        {/* Contenu */}
        <div className="modal-content">
          
          {/* En-tête */}
          <div className="modal-header">
            <h2 className="modal-title">{title}</h2>
            <p className="modal-description">{description}</p>

            {/* Meta informations */}
            <div className="modal-meta">
              <div className="meta-item">
                <Calendar size={18} />
                <span>{date}</span>
              </div>
              {duration && (
                <div className="meta-item">
                  <Target size={18} />
                  <span>{duration}</span>
                </div>
              )}
              {team && (
                <div className="meta-item">
                  <Users size={18} />
                  <span>{team}</span>
                </div>
              )}
            </div>

            {/* Liens d'action */}
            <div className="modal-actions">
              {demo && (
                <a 
                  href={demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="action-btn primary"
                >
                  <ExternalLink size={18} />
                  Voir la démo
                </a>
              )}
              {github && (
                <a 
                  href={github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="action-btn secondary"
                >
                  <Github size={18} />
                  Code source
                </a>
              )}
            </div>
          </div>

          {/* Technologies */}
          <div className="modal-section">
            <h3 className="section-title">
              <Tag size={20} />
              Technologies utilisées
            </h3>
            <div className="technologies-grid">
              {technologies.map((tech, index) => (
                <span key={index} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Description détaillée */}
          {longDescription && (
            <div className="modal-section">
              <h3 className="section-title">
                <Lightbulb size={20} />
                À propos du projet
              </h3>
              <p className="section-text">{longDescription}</p>
            </div>
          )}

          {/* Fonctionnalités */}
          {features && features.length > 0 && (
            <div className="modal-section">
              <h3 className="section-title">
                <CheckCircle2 size={20} />
                Fonctionnalités principales
              </h3>
              <ul className="features-list">
                {features.map((feature, index) => (
                  <li key={index}>
                    <CheckCircle2 size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Défis et solutions */}
          {challenges && challenges.length > 0 && (
            <div className="modal-section">
              <h3 className="section-title">
                <Target size={20} />
                Défis techniques et solutions
              </h3>
              <ul className="challenges-list">
                {challenges.map((challenge, index) => (
                  <li key={index}>
                    <div className="challenge-item">
                      <strong>Défi :</strong> {challenge.problem}
                    </div>
                    <div className="solution-item">
                      <strong>Solution :</strong> {challenge.solution}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Résultats */}
          {results && results.length > 0 && (
            <div className="modal-section">
              <h3 className="section-title">
                <TrendingUp size={20} />
                Résultats et impact
              </h3>
              <div className="results-grid">
                {results.map((result, index) => (
                  <div key={index} className="result-card">
                    <Award size={24} />
                    <p>{result}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default ProjectModal;