// src/components/SkillCard/SkillCard.js
import React, { useState } from 'react';
import './SkillCard.css';

// Import des icônes
import { 
  TrendingUp,
  Award,
  CheckCircle2
} from 'lucide-react';

function SkillCard({ skill }) {
  const [isHovered, setIsHovered] = useState(false);

  const {
    name,
    icon,
    level,
    percentage,
    experience,
    projects,
    description,
    color
  } = skill;

  // Déterminer le niveau textuel
  const getLevelText = (level) => {
    const levels = {
      1: 'Débutant',
      2: 'Intermédiaire',
      3: 'Avancé',
      4: 'Expert',
      5: 'Maître'
    };
    return levels[level] || 'Débutant';
  };

  return (
    <div 
      className="skill-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ '--skill-color': color || 'var(--color-primary)' }}
    >
      {/* En-tête de la carte */}
      <div className="skill-header">
        <div className="skill-icon-wrapper">
          <div className="skill-icon">
            {icon}
          </div>
        </div>
        
        <div className="skill-info">
          <h3 className="skill-name">{name}</h3>
          <span className="skill-level">{getLevelText(level)}</span>
        </div>
      </div>

      {/* Description (visible au hover) */}
      {description && (
        <div className={`skill-description ${isHovered ? 'visible' : ''}`}>
          <p>{description}</p>
        </div>
      )}

      {/* Barre de progression */}
      <div className="skill-progress-container">
        <div className="progress-header">
          <span className="progress-label">Maîtrise</span>
          <span className="progress-percentage">{percentage}%</span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${percentage}%` }}
          >
            <span className="progress-shine"></span>
          </div>
        </div>
      </div>

      {/* Métadonnées */}
      <div className="skill-meta">
        {experience && (
          <div className="meta-item">
            <TrendingUp size={16} />
            <span>{experience}</span>
          </div>
        )}
        {projects && (
          <div className="meta-item">
            <Award size={16} />
            <span>{projects} {projects > 1 ? 'projets' : 'projet'}</span>
          </div>
        )}
      </div>

      {/* Badge de niveau (coins) */}
      <div className="skill-badge">
        <CheckCircle2 size={20} />
      </div>
    </div>
  );
}

export default SkillCard;