// src/components/ContactForm/ContactForm.js
import React, { useState } from 'react';
import './ContactForm.css';

// Import des icônes
import { 
  Send,
  User,
  Mail,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Loader
} from 'lucide-react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [submitMessage, setSubmitMessage] = useState('');

  // Gérer les changements dans les champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Effacer l'erreur du champ modifié
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Valider le formulaire
  const validateForm = () => {
    const newErrors = {};

    // Validation du nom
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Le nom doit contenir au moins 2 caractères';
    }

    // Validation de l'email
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    // Validation du sujet
    if (!formData.subject.trim()) {
      newErrors.subject = 'Le sujet est requis';
    }

    // Validation du message
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Soumettre le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus('loading');

    try {
      // Simuler un envoi (remplacez par votre API)
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Succès
      setStatus('success');
      setSubmitMessage('Message envoyé avec succès ! Je vous répondrai bientôt.');
      
      // Réinitialiser le formulaire après 3 secondes
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setStatus('idle');
        setSubmitMessage('');
      }, 3000);

    } catch (error) {
      setStatus('error');
      setSubmitMessage('Une erreur est survenue. Veuillez réessayer.');
      
      setTimeout(() => {
        setStatus('idle');
        setSubmitMessage('');
      }, 3000);
    }
  };

  return (
    <div className="contact-form-wrapper">
      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        
        {/* En-tête du formulaire */}
        <div className="form-header">
          <h3 className="form-title">Envoyez-moi un message</h3>
          <p className="form-description">
            Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais.
          </p>
        </div>

        {/* Champ Nom */}
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            <User size={18} />
            Nom complet
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`form-input ${errors.name ? 'error' : ''}`}
            placeholder="Votre nom"
            disabled={status === 'loading'}
          />
          {errors.name && (
            <span className="error-message">
              <AlertCircle size={14} />
              {errors.name}
            </span>
          )}
        </div>

        {/* Champ Email */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            <Mail size={18} />
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-input ${errors.email ? 'error' : ''}`}
            placeholder="votre.email@exemple.com"
            disabled={status === 'loading'}
          />
          {errors.email && (
            <span className="error-message">
              <AlertCircle size={14} />
              {errors.email}
            </span>
          )}
        </div>

        {/* Champ Sujet */}
        <div className="form-group">
          <label htmlFor="subject" className="form-label">
            <MessageSquare size={18} />
            Sujet
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`form-input ${errors.subject ? 'error' : ''}`}
            placeholder="Sujet de votre message"
            disabled={status === 'loading'}
          />
          {errors.subject && (
            <span className="error-message">
              <AlertCircle size={14} />
              {errors.subject}
            </span>
          )}
        </div>

        {/* Champ Message */}
        <div className="form-group">
          <label htmlFor="message" className="form-label">
            <MessageSquare size={18} />
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`form-textarea ${errors.message ? 'error' : ''}`}
            placeholder="Écrivez votre message ici..."
            rows="6"
            disabled={status === 'loading'}
          />
          {errors.message && (
            <span className="error-message">
              <AlertCircle size={14} />
              {errors.message}
            </span>
          )}
        </div>

        {/* Message de status */}
        {submitMessage && (
          <div className={`status-message ${status}`}>
            {status === 'success' && <CheckCircle2 size={20} />}
            {status === 'error' && <AlertCircle size={20} />}
            <span>{submitMessage}</span>
          </div>
        )}

        {/* Bouton submit */}
        <button
          type="submit"
          className="submit-btn"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? (
            <>
              <Loader size={20} className="spinner" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send size={20} />
              Envoyer le message
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;