// src/components/CertificationModal/CertificationModal.js
import React, { useEffect } from 'react';
import './CertificationModal.css';

// Import des icônes
import { 
  X,
  Award,
  Calendar,
  Download,
  ExternalLink,
  CheckCircle2,
  Tag,
  Shield,
  Target,
  BookOpen
} from 'lucide-react';

function CertificationModal({ certification, isOpen, onClose }) {
  // Fermer avec la touche Échap
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !certification) return null;

  const {
    title,
    issuer,
    date,
    credentialId,
    badgeImage,
    category,
    level,
    skills,
    objectives,
    description,
    verified,
    pdfPath,
    verificationLink
  } = certification;

  const handleDownload = () => {
    if (pdfPath) {
      window.open(pdfPath, '_blank');
    }
  };

  const handleVerify = () => {
    if (verificationLink) {
      window.open(verificationLink, '_blank');
    }
  };

  return (
    <div className="cert-modal-overlay" onClick={onClose}>
      <div className="cert-modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Bouton de fermeture */}
        <button className="cert-modal-close" onClick={onClose} aria-label="Fermer">
          <X size={24} />
        </button>

        {/* En-tête avec badge */}
        <div className="cert-modal-header">
          <div className="cert-modal-badge">
            <img src={badgeImage} alt={title} />
            {verified && (
              <div className="badge-verified-icon">
                <Shield size={24} />
              </div>
            )}
          </div>

          <div className="cert-modal-title-section">
            <div className="cert-modal-meta-tags">
              <span className="cert-modal-category">
                <Tag size={14} />
                {category}
              </span>
              <span className="cert-modal-level">{level}</span>
            </div>
            <h2 className="cert-modal-title">{title}</h2>
            <p className="cert-modal-issuer">{issuer}</p>
            
            <div className="cert-modal-info">
              <div className="info-item">
                <Calendar size={18} />
                <span>{date}</span>
              </div>
              {credentialId && (
                <div className="info-item">
                  <Award size={18} />
                  <span>ID: {credentialId}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Actions principales */}
        <div className="cert-modal-actions">
          {pdfPath && (
            <button className="cert-action-btn primary" onClick={handleDownload}>
              <Download size={20} />
              Télécharger le certificat
            </button>
          )}
          {verificationLink && (
            <button className="cert-action-btn secondary" onClick={handleVerify}>
              <ExternalLink size={20} />
              Vérifier l'authenticité
            </button>
          )}
        </div>

        {/* Contenu scrollable */}
        <div className="cert-modal-content">
          
          {/* Description */}
          {description && (
            <div className="cert-modal-section">
              <h3 className="section-title">
                <BookOpen size={20} />
                Description
              </h3>
              <p className="section-text">{description}</p>
            </div>
          )}

          {/* Objectifs d'apprentissage */}
          {objectives && objectives.length > 0 && (
            <div className="cert-modal-section">
              <h3 className="section-title">
                <Target size={20} />
                Objectifs d'apprentissage
              </h3>
              <ul className="objectives-list">
                {objectives.map((objective, index) => (
                  <li key={index}>
                    <CheckCircle2 size={18} />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Compétences acquises */}
          {skills && skills.length > 0 && (
            <div className="cert-modal-section">
              <h3 className="section-title">
                <Award size={20} />
                Compétences acquises
              </h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Indicateur de vérification */}
          {verified && (
            <div className="cert-verification-footer">
              <CheckCircle2 size={20} />
              <span>Cette certification a été vérifiée et est authentique</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CertificationModal;