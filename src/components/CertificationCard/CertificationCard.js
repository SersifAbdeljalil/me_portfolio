// src/components/CertificationCard/CertificationCard.js
import React from 'react';
import './CertificationCard.css';

// Import des icônes
import { 
  Award,
  Calendar,
  Download,
  ExternalLink,
  CheckCircle2,
  Tag,
  Shield
} from 'lucide-react';

function CertificationCard({ certification, onViewDetails }) {
  const {
    title,
    issuer,
    date,
    badgeImage,
    category,
    level,
    skills,
    verified,
    pdfPath,
    verificationLink
  } = certification;

  // Couleur par niveau
  const getLevelColor = (level) => {
    const colors = {
      'Foundation': '#3B82F6',
      'Intermediate': '#10B981',
      'Advanced': '#F59E0B',
      'Expert': '#8B5CF6'
    };
    return colors[level] || '#64FFDA';
  };

  const handleDownload = (e) => {
    e.stopPropagation();
    if (pdfPath) {
      window.open(pdfPath, '_blank');
    }
  };

  const handleVerify = (e) => {
    e.stopPropagation();
    if (verificationLink) {
      window.open(verificationLink, '_blank');
    }
  };

  return (
    <div 
      className="certification-card"
      onClick={() => onViewDetails(certification)}
    >
      {/* Badge vérifié */}
      {verified && (
        <div className="verified-badge">
          <Shield size={16} />
          <span>Vérifié</span>
        </div>
      )}

      {/* Image du badge */}
      <div className="certification-badge">
        <img src={badgeImage} alt={title} />
        <div className="badge-overlay">
          <Award size={32} />
        </div>
      </div>

      {/* Contenu */}
      <div className="certification-content">
        
        {/* En-tête */}
        <div className="certification-header">
          <div className="cert-category-level">
            <span className="cert-category">
              <Tag size={14} />
              {category}
            </span>
            <span 
              className="cert-level"
              style={{ '--level-color': getLevelColor(level) }}
            >
              {level}
            </span>
          </div>
        </div>

        {/* Titre et émetteur */}
        <h3 className="certification-title">{title}</h3>
        <p className="certification-issuer">{issuer}</p>

        {/* Date */}
        <div className="certification-date">
          <Calendar size={16} />
          <span>{date}</span>
        </div>

        {/* Compétences */}
        <div className="certification-skills">
          {skills.slice(0, 3).map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
          {skills.length > 3 && (
            <span className="skill-tag more">
              +{skills.length - 3}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="certification-actions">
          <button 
            className="action-btn primary"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(certification);
            }}
          >
            <Award size={16} />
            Voir détails
          </button>

          <div className="action-links">
            {pdfPath && (
              <button
                className="icon-btn"
                onClick={handleDownload}
                title="Télécharger le certificat"
              >
                <Download size={18} />
              </button>
            )}
            {verificationLink && (
              <button
                className="icon-btn"
                onClick={handleVerify}
                title="Vérifier l'authenticité"
              >
                <ExternalLink size={18} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Indicateur vérifié (en bas) */}
      {verified && (
        <div className="verification-indicator">
          <CheckCircle2 size={16} />
          <span>Certification vérifiée</span>
        </div>
      )}
    </div>
  );
}

export default CertificationCard;