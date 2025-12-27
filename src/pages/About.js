// src/components/About/About.js
import React from 'react';
import './About.css';
import cv from "../pages/cv_sersif_abdeljalil.pdf";
import profilePic from "../pages/Me.jpg";

import { 
  Code2, 
  Database, 
  Brain, 
  Cpu, 
  Award, 
  GraduationCap,
  Briefcase,
  Target,
  Rocket,
  Zap,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Download,
  TrendingUp,
  User
} from 'lucide-react';

function About() {
  const expertise = [
    {
      icon: <Code2 size={32} />,
      title: "Full-Stack Development",
      description: "Développement d'applications web et mobile avec React, Node.js, React Native",
      skills: ["React.js", "Node.js", "Express", "React Native", "Next.js"]
    },
    {
      icon: <Database size={32} />,
      title: "Data Science & AI",
      description: "Analyse de données, Machine Learning et Deep Learning pour l'optimisation industrielle",
      skills: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "XGBoost"]
    },
    {
      icon: <Cpu size={32} />,
      title: "IoT & Systèmes Embarqués",
      description: "Solutions IoT pour l'agriculture de précision et l'automatisation industrielle",
      skills: ["Arduino", "ESP32", "C", "Capteurs", "MQTT"]
    },
    {
      icon: <Brain size={32} />,
      title: "Intelligence Artificielle",
      description: "Développement de chatbots intelligents et modèles de traitement du langage naturel",
      skills: ["NLP", "Transformers", "LLM", "PyTorch", "Keras"]
    }
  ];

  const timeline = [
    {
      type: "work",
      icon: <Briefcase size={24} />,
      period: "Août 2025 - Octobre 2025",
      title: "Data Scientist / Process Engineer",
      organization: "OCP Group (KOFERT)",
      location: "Maroc",
      achievements: [
        "Modèles ML (XGBOOST) - amélioration de 15% de l'efficacité production",
        "Analyse de datasets industriels >10GB",
        "Implémentation APC (Advanced Process Control)",
        "Dashboards Python/Plotly pour monitoring temps réel"
      ]
    },
    {
      type: "work",
      icon: <Briefcase size={24} />,
      period: "Janvier 2024 - Avril 2024",
      title: "Full-Stack Developer",
      organization: "Bibliothèque Iqra El Jadida",
      location: "Maroc",
      achievements: [
        "Application SaaS de gestion bibliothèque",
        "API REST Node.js/Express + React Native",
        "Modélisation et optimisation MySQL",
        "Déploiement production avec monitoring"
      ]
    },
    {
      type: "education",
      icon: <GraduationCap size={24} />,
      period: "2024 - Présent",
      title: "Master Ingénierie Informatique et Analyse de Données",
      organization: "Université Chouaib Doukkali",
      location: "El Jadida, Maroc",
      achievements: [
        "Spécialisation en analyse de données et Big Data",
        "Architecture logicielle",
        "Projets de recherche en IA appliquée"
      ]
    },
    {
      type: "education",
      icon: <GraduationCap size={24} />,
      period: "2020 - 2024",
      title: "Licence Mathématiques et Informatique",
      organization: "Université Chouaib Doukkali",
      location: "El Jadida, Maroc",
      achievements: [
        "Algorithmes et structures de données",
        "Statistiques et probabilités",
        "Projets de développement logiciel"
      ]
    }
  ];

  const values = [
    {
      icon: <Target size={28} />,
      title: "Rigueur",
      description: "Approche méthodique et attention aux détails dans chaque projet"
    },
    {
      icon: <Rocket size={28} />,
      title: "Innovation",
      description: "Recherche constante de solutions créatives et technologies émergentes"
    },
    {
      icon: <Zap size={28} />,
      title: "Performance",
      description: "Optimisation continue pour des résultats mesurables et impactants"
    }
  ];

  return (
    <div className="about-section">
      {/* En-tête de la page */}
      <section className="about-header-banner">
        <div className="container">
          <div className="about-header">
            <div className="header-icon">
              <User size={48} />
            </div>
            <h1 className="page-title">À Propos de Moi</h1>
            <p className="page-description">
              Développeur Full-Stack passionné, spécialisé en IA, Data Science et IoT. 
              Je combine expertise technique et vision stratégique pour créer des solutions innovantes.
            </p>
          </div>
        </div>
      </section>

      {/* Section principale */}
      <section className="about-main">
        <div className="container">
          
          {/* Profil et stats */}
          <div className="about-profile">
            <div className="profile-content">
              <div className="profile-image-wrapper">
                <div className="profile-image-bg"></div>
                <img 
                  src={profilePic} 
                  alt="Sersif Abdeljalil" 
                  className="profile-image"
                />
                <div className="profile-badge">
                  <CheckCircle2 size={18} />
                  <span>Disponible</span>
                </div>
              </div>

              <div className="profile-info">
                <h3 className="profile-name">Sersif Abdeljalil</h3>
                <p className="profile-title">Full-Stack Developer | Software Engineer</p>
                
                <p className="profile-bio">
                  Étudiant en Master Ingénierie Informatique et Analyse de Données, 
                  je recherche un stage de fin d'études pour approfondir mes compétences 
                  en développement Full-Stack, Intelligence Artificielle et IoT. Expérience 
                  concrète en optimisation de processus industriels chez OCP Group avec 
                  résultats mesurables (+15% d'efficacité).
                </p>

                <div className="profile-contact">
                  <a href="mailto:abdosarsif28@gmail.com" className="contact-item">
                    <Mail size={18} />
                    <span>abdosarsif28@gmail.com</span>
                  </a>
                  <a href="tel:+212776867058" className="contact-item">
                    <Phone size={18} />
                    <span>+212 776 867 058</span>
                  </a>
                  <div className="contact-item">
                    <MapPin size={18} />
                    <span>El Jadida, Maroc</span>
                  </div>
                </div>

                <div className="profile-actions">
                  <a 
                    href={cv}
                    download
                    className="btn-primary"
                  >
                    <Download size={18} />
                    Télécharger CV
                  </a>
                  <a 
                    href="https://github.com/SersifAbdeljalil" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                  <a 
                    href="https://linkedin.com/in/sersif-abdeljalil" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    <Linkedin size={18} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Domaines d'expertise */}
          <div className="expertise-section">
            <h3 className="subsection-title">Domaines d'Expertise</h3>
            <div className="expertise-grid">
              {expertise.map((item, index) => (
                <div key={index} className="expertise-card">
                  <div className="expertise-icon">{item.icon}</div>
                  <h4 className="expertise-title">{item.title}</h4>
                  <p className="expertise-description">{item.description}</p>
                  <div className="expertise-skills">
                    {item.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Parcours */}
          <div className="timeline-section">
            <h3 className="subsection-title">Parcours Professionnel & Académique</h3>
            <div className="timeline">
              {timeline.map((item, index) => (
                <div key={index} className={`timeline-item ${item.type}`}>
                  <div className="timeline-icon">{item.icon}</div>
                  <div className="timeline-content">
                    <span className="timeline-period">{item.period}</span>
                    <h4 className="timeline-title">{item.title}</h4>
                    <p className="timeline-organization">
                      {item.organization} • {item.location}
                    </p>
                    <ul className="timeline-achievements">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={16} />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Valeurs */}
          <div className="values-section">
            <h3 className="subsection-title">Mes Valeurs</h3>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section d'encouragement */}
          <div className="learning-banner">
            <div className="banner-icon">
              <TrendingUp size={40} />
            </div>
            <div className="banner-content">
              <h3>Apprentissage continu</h3>
              <p>
                Je suis constamment en train d'apprendre de nouvelles technologies 
                et d'améliorer mes compétences existantes pour rester à jour dans 
                le monde du développement en évolution rapide.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default About;