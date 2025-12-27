// src/components/ProjectCard/ProjectCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

// Import des icônes
import { 
  ExternalLink, 
  Github, 
  Calendar,
  Eye,
  Star,
  Code2
} from 'lucide-react';

function ProjectCard({ project }) {
  const {
    id,
    title,
    description,
    image,
    category,
    technologies,
    date,
    github,
    demo,
    featured
  } = project;

  return (
    <div className={`project-card ${featured ? 'featured' : ''}`}>
      {/* Badge Featured */}
      {featured && (
        <div className="featured-badge">
          <Star size={16} />
          <span>Projet Vedette</span>
        </div>
      )}

      {/* Image du projet */}
      <div className="project-card-image">
        <img src={image} alt={title} />
        <div className="project-overlay">
          <div className="overlay-buttons">
            {demo && (
              <a 
                href={demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="overlay-btn"
                title="Voir la démo"
              >
                <Eye size={20} />
                <span>Démo</span>
              </a>
            )}
            {github && (
              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="overlay-btn"
                title="Voir le code"
              >
                <Github size={20} />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Contenu de la carte */}
      <div className="project-card-content">
        {/* Catégorie et date */}
        <div className="project-meta">
          <span className="project-category">
            <Code2 size={14} />
            {category}
          </span>
          <span className="project-date">
            <Calendar size={14} />
            {date}
          </span>
        </div>

        {/* Titre */}
        <h3 className="project-card-title">{title}</h3>

        {/* Description */}
        <p className="project-card-description">{description}</p>

        {/* Technologies */}
        <div className="project-technologies">
          {technologies.slice(0, 4).map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="tech-badge more">
              +{technologies.length - 4}
            </span>
          )}
        </div>

        {/* Footer avec liens */}
        <div className="project-card-footer">
          <Link to={`/projects/${id}`} className="view-details">
            Voir les détails
            <ExternalLink size={16} />
          </Link>
          
          <div className="project-links">
            {github && (
              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
                title="Code source"
              >
                <Github size={18} />
              </a>
            )}
            {demo && (
              <a 
                href={demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
                title="Démo en ligne"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;