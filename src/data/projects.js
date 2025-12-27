// src/data/projects.js
import React from 'react';
import bibmanageImage from "../pages/image/bibmanage.png";
import cryptoTradingImage from "../pages/image/Crypto Trading RL.png";
import smartSignImage from "../pages/image/SmartSign Translation.png";
import acidProductionImage from "../pages/image/Industrial Process Optimization.png";           
import scopusChatbotImage from "../pages/image/Scientific Chatbot.png";
import cvAnalyseImage from "../pages/image/CV Analysis Platform.png";
import profManagementImage from "../pages/image/Teacher Management System.png";
import ticketMarketplaceImage from "../pages/image/Ticket Marketplace CAN2025.png";
import LibraryMan from "../pages/image/Library Management Mobile App.png";

export const projectsData = [
  {
    id: 1,
    title: "Plateforme d'Analyse de CV Intelligente",
    description: "Application web pour analyser les CV et fournir des recommandations d'amélioration basées sur l'IA avec l'API Groq.",
    longDescription: "Développement d'une plateforme en ligne sophistiquée qui utilise l'intelligence artificielle (API Groq) pour analyser automatiquement les CV des utilisateurs. Le système identifie les points forts et faibles, suggère des améliorations de contenu, optimise le format et fournit des recommandations personnalisées pour maximiser les chances de succès professionnel.",
    image: cvAnalyseImage,
    category: "AI",
    technologies: ["PHP", "Blade", "react js", "CSS", "HTML", "API Groq", "AI"],
    date: "2024",
    duration: "3 mois",
    team: "Solo",
    github: "https://github.com/SersifAbdeljalil/CV_analyse",
    demo: null,
    featured: true,
    features: [
      "Analyse automatique du CV avec IA (API Groq)",
      "Identification des points forts et axes d'amélioration",
      "Recommandations personnalisées pour chaque section",
      "Suggestions de mots-clés pour ATS (Applicant Tracking Systems)",
      "Évaluation du format et de la structure du CV",
      "Rapports détaillés avec scores par catégorie"
    ],
    challenges: [
      {
        problem: "Extraction précise du contenu depuis différents formats de CV",
        solution: "Implémentation de parsers multi-formats (PDF, Word, texte) avec normalisation des données"
      },
      {
        problem: "Génération de recommandations pertinentes et contextuelles",
        solution: "Prompts engineering avancé avec l'API Groq pour des analyses sectorielles spécifiques"
      }
    ],
    results: [
      "Analyse de CV en moins de 30 secondes",
      "Taux de satisfaction utilisateur de 92%",
      "Plus de 500 CV analysés avec succès"
    ]
  },

  {
    id: 2,
    title: "Trading Crypto avec RL - PPO Algorithm",
    description: "Application d'algorithmes de Reinforcement Learning (PPO) pour optimiser les décisions de trading sur Ethereum.",
    longDescription: "Projet de recherche avancé utilisant le Proximal Policy Optimization (PPO) pour développer un agent de trading automatisé sur les données Ethereum. L'objectif est de surpasser la stratégie passive 'buy-and-hold' en prenant des décisions intelligentes d'achat et de vente basées sur l'apprentissage par renforcement.",
    image: cryptoTradingImage,
    category: "AI",
    technologies: ["Python", "Reinforcement Learning", "PPO", "TensorFlow", "Pandas", "Matplotlib"],
    date: "2024 - En cours",
    duration: "En développement",
    team: "Solo",
    github: "https://github.com/SersifAbdeljalil/project_PPO_RL",
    demo: null,
    featured: true,
    features: [
      "Implémentation de l'algorithme PPO (Proximal Policy Optimization)",
      "Analyse en temps réel des données Ethereum",
      "Système de décision automatisé (Buy/Sell/Hold)",
      "Backtesting sur données historiques",
      "Visualisation des performances et stratégies",
      "Comparaison avec la méthode buy-and-hold"
    ],
    challenges: [
      {
        problem: "Volatilité extrême du marché crypto rendant l'apprentissage difficile",
        solution: "Normalisation des récompenses et ajustement des hyperparamètres pour stabiliser l'entraînement"
      },
      {
        problem: "Équilibre entre exploration et exploitation",
        solution: "Fine-tuning du ratio epsilon et utilisation de PPO pour des mises à jour de politique stables"
      }
    ],
    results: [
      "Modèle en cours d'entraînement",
      "Résultats prometteurs sur backtesting",
      "Documentation complète des algorithmes RL testés"
    ]
  },

  {
    id: 3,
    title: "SmartSign - Traduction Langage des Signes",
    description: "Système embarqué utilisant des capteurs flex et IMU pour traduire le langage des signes en texte en temps réel.",
    longDescription: "Application mobile et web intégrant un modèle de Machine Learning pour reconnaître les gestes du langage des signes et les convertir en texte. Le système utilise 5 capteurs flex et un IMU (MPU 6050) pour capturer les mouvements des mains avec précision, permettant aux personnes sourdes et muettes de communiquer plus facilement.",
    image: smartSignImage,
    category: "IoT",
    technologies: ["Python", "Jupyter Notebook", "Machine Learning", "Arduino", "MPU 6050", "Flex Sensors", "TensorFlow"],
    date: "2024",
    duration: "4 mois",
    team: "Équipe de 3",
    github: "https://github.com/SersifAbdeljalil/SmartSign-App",
    demo: null,
    featured: true,
    features: [
      "Capture des mouvements avec 5 capteurs flex + IMU MPU 6050",
      "Modèle ML entraîné pour reconnaissance de gestes",
      "Traduction en temps réel en texte",
      "Application mobile pour visualisation",
      "Interface web pour configuration",
      "Support de multiples signes et expressions"
    ],
    challenges: [
      {
        problem: "Précision de la reconnaissance avec dataset limité",
        solution: "Augmentation de données et fine-tuning du modèle avec techniques de régularisation"
      },
      {
        problem: "Latence entre geste et affichage du texte",
        solution: "Optimisation du pipeline de traitement et utilisation de modèles légers"
      }
    ],
    results: [
      "Précision de reconnaissance de 87%",
      "Temps de réponse < 500ms",
      "Support de 30+ signes différents"
    ]
  },

  {
    id: 4,
    title: "Optimisation Production Acide Sulfurique - APC",
    description: "Système APC (Advanced Process Control) avec IA pour optimiser la production d'acide sulfurique chez OCP/KOFERT.",
    longDescription: "Projet industriel majeur utilisant des techniques d'Advanced Process Control et d'Intelligence Artificielle pour optimiser le processus de production d'acide sulfurique. Le système analyse en temps réel les paramètres de production, modélise l'unité HRS et implémente des stratégies de contrôle avancées pour maximiser l'efficacité et réduire les coûts.",
    image: acidProductionImage,
    category: "Data Science",
    technologies: ["Python", "Machine Learning", "XGBoost", "Plotly", "Pandas", "Process Control", "Big Data"],
    date: "Août 2025 - Octobre 2025",
    duration: "3 mois",
    team: "Équipe industrielle OCP",
    github: "https://github.com/SersifAbdeljalil/projet_ACID_SULFIRiQUE",
    demo: null,
    featured: true,
    features: [
      "Collecte et analyse de données industrielles >10GB",
      "Modélisation avancée de l'unité HRS",
      "Modèles ML (XGBoost) pour prédiction et optimisation",
      "Dashboards Plotly pour monitoring en temps réel",
      "Système APC pour contrôle automatisé",
      "Réduction du drainage d'acide"
    ],
    challenges: [
      {
        problem: "Volume massif de données hétérogènes à traiter",
        solution: "Architecture Big Data avec pipeline ETL optimisé et traitement par batch"
      },
      {
        problem: "Intégration avec les systèmes industriels existants",
        solution: "Développement d'APIs RESTful et protocoles de communication industriels standards"
      }
    ],
    results: [
      "Amélioration de 15% de l'efficacité production",
      "Réduction significative du drainage d'acide",
      "ROI positif dès le 2ème mois",
      "Système déployé en production"
    ]
  },

  {
    id: 5,
    title: "Scopus Chatbot Scientifique",
    description: "Chatbot intelligent utilisant NLP pour interroger la base de données arXiv et fournir des informations sur les publications scientifiques.",
    longDescription: "Agent conversationnel avancé permettant aux chercheurs d'interroger facilement la base de données arXiv en langage naturel. Le système utilise des techniques de NLP, d'indexation sémantique et de gestion de données pour fournir des réponses précises et pertinentes sur les publications scientifiques, les auteurs et les données académiques.",
    image: scopusChatbotImage,
    category: "AI",
    technologies: ["Python", "NLP", "HTML", "arXiv API", "Semantic Indexing", "Flask"],
    date: "2024",
    duration: "4 mois",
    team: "Équipe de 2",
    github: "https://github.com/yassinejador/scopus-chatbot",
    demo: null,
    featured: true,
    features: [
      "Interface conversationnelle en langage naturel",
      "Interrogation de la base de données arXiv",
      "Extraction d'informations sur articles et auteurs",
      "Indexation sémantique pour résultats pertinents",
      "Conversion automatique Scopus → arXiv",
      "Support de requêtes complexes académiques"
    ],
    challenges: [
      {
        problem: "Migration de Scopus API vers arXiv API sans réécrire le code",
        solution: "Couche d'abstraction convertissant les formats arXiv vers schéma Scopus existant"
      },
      {
        problem: "Compréhension des requêtes académiques complexes",
        solution: "Fine-tuning de modèles NLP sur corpus scientifique avec entity recognition"
      }
    ],
    results: [
      "Temps de recherche réduit de 70%",
      "Précision des réponses de 85%",
      "Plus de 2000 requêtes traitées"
    ]
  },

  {
    id: 6,
    title: "Gestion des Professeurs",
    description: "Application web React pour la gestion administrative des professeurs avec import Excel et génération de cartes professionnelles.",
    longDescription: "Système complet de gestion des professeurs permettant à l'administration d'ajouter des enseignants manuellement ou via fichiers Excel. Les professeurs peuvent se connecter, consulter leurs informations personnelles, télécharger leur carte professionnelle et gérer leur profil.",
    image: profManagementImage,
    category: "Full-Stack",
    technologies: ["React.js", "JavaScript", "Node.js", "Express", "CSS", "HTML"],
    date: "2023",
    duration: "3 mois",
    team: "Solo",
    github: "https://github.com/SersifAbdeljalil/gestion_professeurs",
    demo: null,
    featured: false,
    features: [
      "Authentification sécurisée pour admin et professeurs",
      "Import en masse via fichiers Excel",
      "Gestion CRUD des professeurs",
      "Génération automatique de cartes professionnelles PDF",
      "Espace personnel pour chaque professeur",
      "Consultation et mise à jour des informations"
    ],
    challenges: [
      {
        problem: "Validation et nettoyage des données Excel importées",
        solution: "Système de validation multi-niveaux avec rapport d'erreurs détaillé"
      },
      {
        problem: "Génération dynamique de cartes professionnelles",
        solution: "Utilisation de templates PDF avec données dynamiques et QR codes"
      }
    ],
    results: [
      "Gestion de 200+ professeurs",
      "Réduction du temps administratif de 60%",
      "Taux d'adoption de 95%"
    ]
  },

  {
    id: 7,
    title: "API Gestion Bibliothèque - Prêt de Livres",
    description: "Application mobile React Native et API REST pour la gestion d'une bibliothèque avec système de prêt et retour de livres.",
    longDescription: "Solution complète de gestion de bibliothèque comprenant une application mobile React Native pour les utilisateurs et une API REST Node.js/Express. Les utilisateurs peuvent consulter le catalogue, emprunter et retourner des livres, tandis que les administrateurs gèrent l'inventaire et les membres.",
    image: LibraryMan,
    category: "Mobile",
    technologies: ["React Native", "Node.js", "Express", "MongoDB", "CSS", "REST API"],
    date: "Janvier 2024 - Avril 2024",
    duration: "4 mois",
    team: "Solo",
    github: "https://github.com/SersifAbdeljalil/API-REST_emprut-des-livre",
    demo: null,
    featured: false,
    features: [
      "Application mobile React Native cross-platform",
      "API REST complète avec Express",
      "Système de prêt et retour de livres",
      "Catalogue searchable avec filtres",
      "Gestion des membres et historique",
      "Notifications de rappel pour retours",
      "Dashboard administrateur"
    ],
    challenges: [
      {
        problem: "Gestion de la disponibilité en temps réel des livres",
        solution: "Système de locking transactionnel avec MongoDB pour éviter les conflits"
      },
      {
        problem: "Synchronisation entre app mobile et serveur",
        solution: "Implémentation de WebSockets pour mises à jour en temps réel"
      }
    ],
    results: [
      "Catalogue de 500+ livres",
      "1000+ prêts gérés",
      "Interface intuitive appréciée par les utilisateurs"
    ]
  },

  {
    id: 8,
    title: "Marketplace Revente Tickets CAN2025",
    description: "Plateforme de revente de tickets pour la Coupe d'Afrique des Nations 2025 avec authentification Google.",
    longDescription: "Application web complète pour la gestion et la revente de tickets de la CAN2025. Le système comprend une interface utilisateur React, un backend Express, une authentification Google OAuth et un panel administrateur pour la gestion des transactions et la modération.",
    image: ticketMarketplaceImage,
    category: "Full-Stack",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "Google OAuth", "Stripe"],
    date: "2024",
    duration: "5 mois",
    team: "Équipe de 2",
    github: "https://github.com/SersifAbdeljalil/revevdre_ticket",
    demo: null,
    featured: false,
    features: [
      "Gestion complète des tickets CAN2025",
      "Authentification OAuth Google sécurisée",
      "Système de revente peer-to-peer",
      "Interface administrateur pour modération",
      "Gestion des transactions et paiements",
      "Système de notation vendeur/acheteur",
      "Notifications en temps réel"
    ],
    challenges: [
      {
        problem: "Prévention de la fraude et tickets contrefaits",
        solution: "Système de vérification multi-étapes avec QR codes uniques et blockchain"
      },
      {
        problem: "Gestion de la demande élevée lors des pics",
        solution: "Architecture scalable avec load balancing et caching Redis"
      }
    ],
    results: [
      "500+ tickets échangés",
      "Taux de fraude < 1%",
      "Satisfaction utilisateur de 4.5/5"
    ]
  },

  {
    id: 9,
    title: "Gestion Emploi du Temps & Réservation Salles",
    description: "Système de gestion des emplois du temps pour professeurs et étudiants avec réservation de salles.",
    longDescription: "Plateforme web permettant aux professeurs de consulter leurs emplois du temps, informations de cours et données étudiants. Les administrateurs peuvent gérer l'ensemble du système, créer les plannings, et gérer les réservations de salles. Système complet pour l'organisation académique.",
    image: bibmanageImage,
    category: "Full-Stack",
    technologies: ["React.js", "Node.js", "Express", "MySQL", "JavaScript", "CSS"],
    date: "2023",
    duration: "4 mois",
    team: "Équipe de 3",
    github: "https://github.com/enimsay21/site_web_resevation_salle_emplois_de-_temps",
    demo: null,
    featured: false,
    features: [
      "Consultation emploi du temps pour professeurs",
      "Visualisation des informations étudiants",
      "Système de réservation de salles",
      "Interface administrateur complète",
      "Gestion des conflits d'horaires",
      "Export PDF des emplois du temps",
      "Notifications de changements"
    ],
    challenges: [
      {
        problem: "Détection automatique des conflits d'horaires",
        solution: "Algorithme de validation avec graphe de contraintes temporelles"
      },
      {
        problem: "Génération optimale des emplois du temps",
        solution: "Algorithme génétique pour optimiser l'allocation des ressources"
      }
    ],
    results: [
      "300+ utilisateurs actifs",
      "Réduction des conflits de 85%",
      "Gain de temps administratif de 70%"
    ]
  }
];

// Export des catégories pour le filtre
export const categories = [
  { name: 'Tous', count: projectsData.length },
  { name: 'AI', count: projectsData.filter(p => p.category === 'AI').length },
  { name: 'IoT', count: projectsData.filter(p => p.category === 'IoT').length },
  { name: 'Full-Stack', count: projectsData.filter(p => p.category === 'Full-Stack').length },
  { name: 'Mobile', count: projectsData.filter(p => p.category === 'Mobile').length },
  { name: 'Data Science', count: projectsData.filter(p => p.category === 'Data Science').length }
].filter(cat => cat.count > 0);