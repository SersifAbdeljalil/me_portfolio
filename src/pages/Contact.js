// src/pages/Contact.js
import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactInfo from '../components/ContactInfo/ContactInfo';
import './Contact.css';

// Import des icônes
import { 
  MessageSquare,
  Send,
  Sparkles
} from 'lucide-react';

function Contact() {
  
  // Scroll vers le haut au chargement de la page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <div className="contact-container">
        
        {/* En-tête de la page */}
        <div className="contact-header">
          <div className="header-icon">
            <MessageSquare size={48} />
            <Sparkles className="sparkle-icon" size={24} />
          </div>
          <h1 className="contact-title">Contactez-moi</h1>
          <p className="contact-subtitle">
            Une question ? Un projet ? Une opportunité de collaboration ?<br />
            N'hésitez pas à me contacter, je serais ravi d'échanger avec vous !
          </p>
          <div className="title-divider">
            <span className="divider-dot"></span>
            <span className="divider-line"></span>
            <span className="divider-dot"></span>
          </div>
        </div>

        {/* Layout 2 colonnes : Formulaire + Informations */}
        <div className="contact-content">
          
          {/* Colonne gauche : Formulaire */}
          <div className="contact-left">
            <ContactForm />
          </div>

          {/* Colonne droite : Informations */}
          <div className="contact-right">
            <ContactInfo />
          </div>
        </div>

        {/* Section CTA finale */}
        <div className="contact-footer-cta">
          <div className="cta-content">
            <Send className="cta-icon" size={32} />
            <h3>Prêt à démarrer un projet ?</h3>
            <p>Je suis toujours ouvert à de nouvelles opportunités et collaborations</p>
          </div>
        </div>
      </div>

      {/* Décorations de fond */}
      <div className="contact-bg-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-circle circle-3"></div>
      </div>
    </div>
  );
}

export default Contact;
