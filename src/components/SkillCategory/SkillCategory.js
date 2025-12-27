// src/components/SkillCategory/SkillCategory.js
import React, { useState } from 'react';
import SkillCard from '../SkillCard/SkillCard';
import './SkillCategory.css';

// Import des icônes
import { 
  ChevronDown,
  ChevronUp,
  Award,
  CheckCircle2
} from 'lucide-react';

function SkillCategory({ category }) {
  const [isExpanded, setIsExpanded] = useState(true);

  const {
    title,
    icon,
    description,
    skills,
    color
  } = category;

  // Calculer les statistiques de la catégorie
  const totalSkills = skills.length;
  const averageLevel = (skills.reduce((sum, skill) => sum + skill.percentage, 0) / totalSkills).toFixed(0);
  const expertSkills = skills.filter(skill => skill.level >= 4).length;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={`skill-category ${isExpanded ? 'expanded' : 'collapsed'}`}
      style={{ '--category-color': color || 'var(--color-primary)' }}
    >
      {/* En-tête de la catégorie */}
      <div className="category-header" onClick={toggleExpand}>
        <div className="category-header-left">
          <div className="category-icon">
            {icon}
          </div>
          
          <div className="category-info">
            <h2 className="category-title">{title}</h2>
            {description && (
              <p className="category-description">{description}</p>
            )}
          </div>
        </div>

        <div className="category-header-right">
          {/* Statistiques */}
          <div className="category-stats">
            <div className="stat-item">
              <Award size={16} />
              <span className="stat-value">{totalSkills}</span>
              <span className="stat-label">compétences</span>
            </div>
            
            {expertSkills > 0 && (
              <div className="stat-item">
                <CheckCircle2 size={16} />
                <span className="stat-value">{expertSkills}</span>
                <span className="stat-label">expert</span>
              </div>
            )}
            
            <div className="stat-item average">
              <span className="stat-value">{averageLevel}%</span>
              <span className="stat-label">moyenne</span>
            </div>
          </div>

          {/* Bouton expand/collapse */}
          <button 
            className="expand-btn"
            aria-label={isExpanded ? 'Réduire' : 'Développer'}
          >
            {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
      </div>

      {/* Barre de progression globale de la catégorie */}
      <div className="category-progress">
        <div className="category-progress-bar">
          <div 
            className="category-progress-fill"
            style={{ width: `${averageLevel}%` }}
          >
            <span className="progress-text">{averageLevel}%</span>
          </div>
        </div>
      </div>

      {/* Grille de compétences */}
      <div className={`skills-grid ${isExpanded ? 'visible' : 'hidden'}`}>
        {skills.map((skill, index) => (
          <SkillCard 
            key={index} 
            skill={{
              ...skill,
              color: color || skill.color // Utiliser la couleur de la catégorie si non spécifiée
            }} 
          />
        ))}
      </div>

      {/* Badge de nombre de compétences */}
      <div className="category-badge">
        <span>{totalSkills}</span>
      </div>
    </div>
  );
}

export default SkillCategory;