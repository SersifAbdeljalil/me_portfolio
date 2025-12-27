// src/components/ContactInfo/ContactInfo.js
import React from 'react';
import './ContactInfo.css';

// Import des icônes
import { 
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Globe,
  Calendar,
  Clock,
  MessageCircle
} from 'lucide-react';

function ContactInfo() {
  
  // Informations de contact (couleurs adaptées à la palette)
  const contactDetails = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'abdosarsif28@gmail.com',
      link: 'mailto:abdosarsif28@gmail.com',
      color: '#8EB69B' // var(--color-sage)
    },
    {
      icon: <Phone size={24} />,
      label: 'Téléphone',
      value: '+212 776 867 058',
      link: 'tel:+212776867058',
      color: '#235347' // var(--color-primary)
    },
    {
      icon: <MapPin size={24} />,
      label: 'Localisation',
      value: 'El Jadida, Morocco',
      link: 'https://www.google.com/maps/place/El+Jadida,+Morocco',
      color: '#163932' // var(--color-medium)
    }
  ];

  // Réseaux sociaux (couleurs adaptées)
  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      username: '@SersifAbdeljalil',
      link: 'https://github.com/SersifAbdeljalil',
      color: '#0B2B26', // var(--color-dark)
      description: 'Voir mes projets'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      username: 'Abdeljalil Sersif',
      link: 'https://www.linkedin.com/in/sersif-abdeljalil',
      color: '#235347', // var(--color-primary)
      description: 'Connectons-nous'
    },
    {
      icon: <Twitter size={24} />,
      label: 'Twitter',
      username: '@AbdeljalilDev',
      link: 'https://twitter.com',
      color: '#163932', // var(--color-medium)
      description: 'Suivez-moi'
    },
    {
      icon: <Globe size={24} />,
      label: 'Portfolio',
      username: 'sersif-abdeljalil.dev',
      link: '#',
      color: '#8EB69B', // var(--color-sage)
      description: 'Mon site web'
    }
  ];

  // Disponibilité
  const availability = {
    status: 'Disponible',
    message: 'Actuellement disponible pour des opportunités de stage et de collaboration',
    responseTime: '24-48 heures'
  };

  return (
    <div className="contact-info-wrapper">
      {/* Coordonnées principales */}
      <div className="contact-details">
        {contactDetails.map((detail, index) => (
          <a
            key={index}
            href={detail.link}
            target={detail.link.startsWith('http') ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="contact-detail-item"
            style={{ '--item-color': detail.color }}
          >
            <div className="detail-icon">
              {detail.icon}
            </div>
            <div className="detail-content">
              <span className="detail-label">{detail.label}</span>
              <span className="detail-value">{detail.value}</span>
            </div>
          </a>
        ))}
      </div>

      {/* Carte de disponibilité */}
      <div className="availability-card">
        <div className="availability-header">
          <div className="status-indicator">
            <span className="status-dot"></span>
            <span className="status-text">{availability.status}</span>
          </div>
          <Clock size={20} />
        </div>
        <p className="availability-message">{availability.message}</p>
        <div className="response-time">
          <MessageCircle size={16} />
          <span>Temps de réponse : <strong>{availability.responseTime}</strong></span>
        </div>
      </div>

      {/* Réseaux sociaux */}
      <div className="social-section">
        <h4 className="social-title">Retrouvez-moi sur</h4>
        <div className="social-links">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{ '--social-color': social.color }}
              title={social.label}
            >
              <div className="social-icon">
                {social.icon}
              </div>
              <div className="social-info">
                <span className="social-label">{social.label}</span>
                <span className="social-username">{social.username}</span>
                <span className="social-description">{social.description}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Section horaires */}
      <div className="working-hours">
        <div className="hours-header">
          <Calendar size={20} />
          <h4>Horaires de disponibilité</h4>
        </div>
        <div className="hours-list">
          <div className="hours-item">
            <span className="day">Lundi - Vendredi</span>
            <span className="time">9h00 - 18h00</span>
          </div>
          <div className="hours-item">
            <span className="day">Weekend</span>
            <span className="time">Sur rendez-vous</span>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="contact-cta">
        <p className="cta-text">
          Vous avez un projet en tête ? Discutons-en !
        </p>
        <a href="mailto:abdosarsif28@gmail.com" className="cta-button">
          <Mail size={20} />
          Envoyer un email direct
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;