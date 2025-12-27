// src/pages/Home.js
import React from 'react';
import Hero from '../components/Hero/Hero';
import Button from '../components/Button/Button';
import { Link } from 'react-router-dom';
import './Home.css';
import image from './image.png';
import acidProductionImage from "./image/Industrial Process Optimization.png";   
import renvantticket from "./image/Ticket Marketplace CAN2025.png"
// Import des icônes Lucide React
import { 
  Code2, 
  Brain, 
  Cpu, 
  Award,
  Briefcase,
  Calendar,
  ArrowRight,
  ExternalLink,
  Mail,
  Sparkles,
  Target,
  Rocket,
  Users,
  TrendingUp,
    Layout,
  Zap,
  Smartphone,
  Hexagon,
  Code,
  Flame,
  BarChart3,
  Bot,
  Wrench,
  Radio,
  Network,
  Container,
  Boxes,
  GitBranch,
  Terminal
} from 'lucide-react';

function Home() {
  return (
    <div className="home-page">
      {/* Section Hero */}
      <Hero />

      {/* Section À propos - Aperçu */}
      <section className="home-about section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <div className="section-badge">
                <Award size={16} />
                <span>À propos</span>
              </div>
              <h2 className="section-title">À propos de moi</h2>
              <p className="section-description">
                Je suis Sersif Abdeljalil, étudiant en Master Ingénierie Informatique et Analyse de Données 
                à l'Université Chouaib Doukkali. Développeur Full-Stack passionné avec une expertise 
                en développement web/mobile, IoT et systèmes embarqués.
              </p>
              <p className="section-description">
                Spécialisé dans l'Intelligence Artificielle, l'analyse de données et le développement 
                d'applications innovantes. J'ai travaillé sur des projets d'optimisation industrielle 
                chez OCP/KOFERT et développé des solutions IoT pour l'agriculture de précision.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <Code2 size={24} />
                  </div>
                  <span className="highlight-text">Full-Stack Development</span>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <Brain size={24} />
                  </div>
                  <span className="highlight-text">AI & Data Science</span>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <Cpu size={24} />
                  </div>
                  <span className="highlight-text">IoT & Embedded Systems</span>
                </div>
              </div>
              <Link to="/about">
                <Button variant="primary" size="medium">
                  En savoir plus
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
            <div className="about-image">
              <div className="image-wrapper">
                <img 
                  src={image}
                  alt="Sersif Abdeljalil" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Expérience Professionnelle */}
      {/* Section Expérience Professionnelle */}
<section className="home-experience section">
  <div className="container">
    <div className="section-header">
      <div className="section-badge">
        <Briefcase size={16} />
        <span>Expérience</span>
      </div>
      <h2 className="section-title">Expérience Professionnelle</h2>
      <p className="section-subtitle">
        Projets et missions réalisés
      </p>
    </div>

    <div className="experience-timeline">
      {/* Expérience OCP */}
      <div className="experience-item">
        <div className="experience-icon">
          <Briefcase size={24} />
        </div>
        <div className="experience-wrapper">
          <div className="experience-date">
            <span className="date-badge">
              <Calendar size={14} />
              Août 2025 - Oct 2025
            </span>
          </div>
          <div className="experience-content">
            <h3 className="experience-title">Data Scientist / Process Engineer</h3>
            <h4 className="experience-company">
              <TrendingUp size={18} />
              OCP/KOFERT (OCP Group)
            </h4>
            <ul className="experience-list">
              <li>Modèles ML (XGBOOST) pour optimisation production - amélioration de 15%</li>
              <li>Analyse de datasets industriels &gt;10GB, identification de patterns d'optimisation</li>
              <li>Implémentation de contrôle de processus avancé (APC)</li>
              <li>Dashboards Python/Plotly pour monitoring KPI en temps réel</li>
            </ul>
            <div className="experience-tags">
              <span className="tag">Python</span>
              <span className="tag">XGBOOST</span>
              <span className="tag">Plotly</span>
              <span className="tag">Big Data</span>
            </div>
          </div>
        </div>
      </div>

      {/* Expérience Bibliothèque */}
      <div className="experience-item">
        <div className="experience-icon">
          <Briefcase size={24} />
        </div>
        <div className="experience-wrapper">
          <div className="experience-date">
            <span className="date-badge">
              <Calendar size={14} />
              Jan 2024 - Avril 2024
            </span>
          </div>
          <div className="experience-content">
            <h3 className="experience-title">Développeur Full-Stack</h3>
            <h4 className="experience-company">
              <Code2 size={18} />
              Bibliothèque Iqra El Jadida
            </h4>
            <ul className="experience-list">
              <li>Application SaaS de gestion de bibliothèque - API REST Node.js/Express + React Native</li>
              <li>Modélisation et optimisation MySQL pour gestion des prêts/retours</li>
              <li>Déploiement en production avec monitoring de performance</li>
            </ul>
            <div className="experience-tags">
              <span className="tag">Node.js</span>
              <span className="tag">React Native</span>
              <span className="tag">MySQL</span>
              <span className="tag">Express</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Section Projets Techniques */}
      <section className="home-projects section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Rocket size={16} />
              <span>Projets</span>
            </div>
            <h2 className="section-title">Projets Techniques Majeurs</h2>
            <p className="section-subtitle">
              Découvrez mes réalisations innovantes
            </p>
          </div>

          <div className="projects-grid">
            {/* Projet Chatbot */}
            <div className="project-card">
              <div className="project-image">
                <img 
                  src={renvantticket} 
                  alt="Chatbot Scientifique Intelligent" 
                />
                <div className="project-overlay">
                  <Button variant="secondary">
                    Voir le projet
                    <ExternalLink size={16} />
                  </Button>
                </div>
              </div>
              <div className="project-info">
                <div className="project-header">
                  <Brain size={24} />
                  <h3 className="project-title">Chatbot Scientifique Intelligent</h3>
                </div>
                <p className="project-description">
                  Assistant virtuel utilisant Hugging Face transformers + intégration 
                  Scopus API pour classification d'articles scientifiques.
                </p>
                <div className="project-tags">
                  <span className="tag">NLP</span>
                  <span className="tag">Python</span>
                  <span className="tag">Transformers</span>
                  <span className="tag">Scopus API</span>
                </div>
              </div>
            </div>

            {/* Projet Marketplace */}
            <div className="project-card">
              <div className="project-image">
                <img 
                  src={acidProductionImage}
                  alt="Marketplace de Billets" 
                />
                <div className="project-overlay">
                  <Button variant="secondary">
                    Voir le projet
                    <ExternalLink size={16} />
                  </Button>
                </div>
              </div>
              <div className="project-info">
                <div className="project-header">
                  <Code2 size={24} />
                  <h3 className="project-title">Revent Ticket Marketplace</h3>
                </div>
                <p className="project-description">
                  Architecture microservices pour plateforme de revente de billets. 
                  Frontend React responsive + API Node.js/Express.
                </p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">Microservices</span>
                  <span className="tag">REST API</span>
                </div>
              </div>
            </div>
          </div>

          <div className="section-cta">
            <Link to="/projects">
              <Button variant="outline" size="large">
                Voir tous les projets
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      {/* Section Compétences */}
<section className="home-skills section">
  <div className="container">
    <div className="section-header">
      <div className="section-badge">
        <Sparkles size={16} />
        <span>Compétences</span>
      </div>
      <h2 className="section-title">Compétences Techniques</h2>
      <p className="section-subtitle">
        Expertise et niveaux de maîtrise dans les technologies modernes
      </p>
    </div>

    <div className="skills-categories">
      {/* Web & Mobile Development */}
      <div className="skill-category">
        <div className="category-header">
          <Code2 size={24} />
          <h3 className="category-title">Web & Mobile Development</h3>
        </div>
        <div className="skills-list">
          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">React.js</span>
              <span className="skill-level">Expert</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '95%'}}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">Node.js / Express</span>
              <span className="skill-level">Avancé</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '90%'}}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">React Native</span>
              <span className="skill-level">Avancé</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '85%'}}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">Next.js</span>
              <span className="skill-level">Intermédiaire</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '80%'}}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">Angular</span>
              <span className="skill-level">Intermédiaire</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '75%'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Science & AI */}
      <div className="skill-category">
        <div className="category-header">
          <Brain size={24} />
          <h3 className="category-title">Data Science & Intelligence Artificielle</h3>
        </div>
        <div className="skills-list">
          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">Python</span>
              <span className="skill-level">Expert</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '95%'}}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">Machine Learning (Scikit-learn)</span>
              <span className="skill-level">Avancé</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '90%'}}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">TensorFlow / Keras</span>
              <span className="skill-level">Avancé</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '85%'}}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">Pandas / NumPy</span>
              <span className="skill-level">Expert</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '92%'}}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">PyTorch</span>
              <span className="skill-level">Intermédiaire</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '80%'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* IoT & Embedded Systems */}
      <div className="skill-category">
        <div className="category-header">
          <Cpu size={24} />
          <h3 className="category-title">IoT & Systèmes Embarqués</h3>
        </div>
        <div className="skills-list">
          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">Arduino / ESP32</span>
              <span className="skill-level">Avancé</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '88%'}}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">C / C++</span>
              <span className="skill-level">Avancé</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '85%'}}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">Capteurs & Actuateurs</span>
              <span className="skill-level">Avancé</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '90%'}}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">Protocoles IoT (MQTT, HTTP)</span>
              <span className="skill-level">Intermédiaire</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '78%'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Databases & DevOps */}
      <div className="skill-category">
        <div className="category-header">
          <Target size={24} />
          <h3 className="category-title">Bases de Données & DevOps</h3>
        </div>
        <div className="skills-list">
          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">MySQL / MongoDB</span>
              <span className="skill-level">Avancé</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '88%'}}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">Docker</span>
              <span className="skill-level">Intermédiaire</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '80%'}}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">Git / GitHub</span>
              <span className="skill-level">Expert</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '93%'}}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">Kubernetes</span>
              <span className="skill-level">Débutant</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '65%'}}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">Linux</span>
              <span className="skill-level">Avancé</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '85%'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Statistiques globales */}
    <div className="skills-stats">
      <div className="stat-item">
        <div className="stat-icon">
          <Code2 size={32} />
        </div>
        <div className="stat-content">
          <span className="stat-number">15+</span>
          <span className="stat-label">Technologies maîtrisées</span>
        </div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">
          <Rocket size={32} />
        </div>
        <div className="stat-content">
          <span className="stat-number">10+</span>
          <span className="stat-label">Projets réalisés</span>
        </div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">
          <Award size={32} />
        </div>
        <div className="stat-content">
          <span className="stat-number">4+</span>
          <span className="stat-label">Années d'expérience</span>
        </div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">
          <TrendingUp size={32} />
        </div>
        <div className="stat-content">
          <span className="stat-number">15%</span>
          <span className="stat-label">Amélioration OCP</span>
        </div>
      </div>
    </div>

    <div className="section-cta">
      <Link to="/skills">
        <Button variant="outline" size="large">
          Voir le portfolio complet
          <ArrowRight size={18} />
        </Button>
      </Link>
    </div>
  </div>
</section>

      {/* Section Call to Action */}
      <section className="home-cta section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-icon">
              <Users size={48} />
            </div>
            <h2 className="cta-title">Vous avez un projet en tête ?</h2>
            <p className="cta-description">
              Je recherche des opportunités de stage de fin d'études et des projets 
              collaboratifs. Discutons ensemble de vos besoins en développement 
              Full-Stack, IoT, ou Data Science.
            </p>
            <div className="cta-buttons">
              <Link to="/contact">
                <Button variant="primary" size="large">
                  <Mail size={18} />
                  Me contacter
                </Button>
              </Link>
              <a href="mailto:abdosarsif28@gmail.com">
                <Button variant="outline" size="large">
                  <Mail size={18} />
                  Envoyer un email
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;