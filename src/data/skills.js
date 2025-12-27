// src/data/skills.js

// Import des icônes (vous devez avoir lucide-react installé)
import { 
  Code2, 
  Database, 
  Brain, 
  Cpu, 
  Server,
  Globe,
  Smartphone,
  Box,
  GitBranch,
  Layout,
  Zap,
  Shield,
  Cloud,
  Terminal,
  Layers,
  Briefcase
} from 'lucide-react';

export const skillsData = [
  {
    title: "Frontend Development",
    icon: <Layout size={32} />,
    description: "Technologies pour créer des interfaces utilisateur modernes et réactives",
    color: "#61DAFB",
    skills: [
      {
        name: "React.js",
        icon: <Code2 size={28} />,
        level: 5,
        percentage: 95,
        experience: "3 ans",
        projects: 8,
        description: "Développement d'applications web complexes avec hooks, context API et Redux",
        color: "#61DAFB"
      },
      {
        name: "Next.js",
        icon: <Zap size={28} />,
        level: 4,
        percentage: 85,
        experience: "2 ans",
        projects: 5,
        description: "Applications SSR/SSG avec routing avancé et optimisation des performances",
        color: "#000000"
      },
      {
        name: "Angular",
        icon: <Layout size={28} />,
        level: 4,
        percentage: 80,
        experience: "2 ans",
        projects: 4,
        description: "Applications d'entreprise avec TypeScript, RxJS et Angular Material",
        color: "#DD0031"
      },
      {
        name: "HTML/CSS",
        icon: <Globe size={28} />,
        level: 5,
        percentage: 98,
        experience: "4 ans",
        projects: 15,
        description: "Maîtrise complète du HTML5 sémantique et CSS3 avec animations",
        color: "#E34F26"
      },
      {
        name: "JavaScript",
        icon: <Code2 size={28} />,
        level: 5,
        percentage: 95,
        experience: "4 ans",
        projects: 20,
        description: "ES6+, async/await, promises, manipulation DOM, événements",
        color: "#F7DF1E"
      },
      {
        name: "Tailwind CSS",
        icon: <Layers size={28} />,
        level: 5,
        percentage: 90,
        experience: "2 ans",
        projects: 10,
        description: "Utility-first CSS pour des designs responsives et personnalisés",
        color: "#06B6D4"
      }
    ]
  },

  {
    title: "Backend Development",
    icon: <Server size={32} />,
    description: "Développement d'APIs robustes et architecture serveur scalable",
    color: "#235347",
    skills: [
      {
        name: "Node.js",
        icon: <Server size={28} />,
        level: 5,
        percentage: 92,
        experience: "3 ans",
        projects: 12,
        description: "Création d'APIs REST/GraphQL, microservices et applications temps réel",
        color: "#339933"
      },
      {
        name: "Express.js",
        icon: <Zap size={28} />,
        level: 5,
        percentage: 95,
        experience: "3 ans",
        projects: 15,
        description: "Framework minimaliste pour APIs REST avec middleware personnalisés",
        color: "#000000"
      },
      {
        name: "PHP",
        icon: <Code2 size={28} />,
        level: 4,
        percentage: 85,
        experience: "3 ans",
        projects: 8,
        description: "Développement backend avec Laravel/Symfony et intégrations API",
        color: "#777BB4"
      },
      {
        name: "Python",
        icon: <Terminal size={28} />,
        level: 5,
        percentage: 95,
        experience: "4 ans",
        projects: 18,
        description: "Scripts automation, APIs Flask/FastAPI et traitement de données",
        color: "#3776AB"
      },
      {
        name: "Java EE",
        icon: <Briefcase size={28} />,
        level: 4,
        percentage: 78,
        experience: "2 ans",
        projects: 4,
        description: "Applications d'entreprise avec Spring Boot et architecture MVC",
        color: "#007396"
      }
    ]
  },

  {
    title: "Mobile Development",
    icon: <Smartphone size={32} />,
    description: "Applications mobiles cross-platform et natives",
    color: "#8EB69B",
    skills: [
      {
        name: "React Native",
        icon: <Smartphone size={28} />,
        level: 4,
        percentage: 88,
        experience: "2 ans",
        projects: 6,
        description: "Applications iOS/Android avec navigation, state management et API",
        color: "#61DAFB"
      },
      {
        name: "Expo",
        icon: <Zap size={28} />,
        level: 4,
        percentage: 85,
        experience: "2 ans",
        projects: 5,
        description: "Développement rapide avec Expo CLI, OTA updates et modules natifs",
        color: "#000020"
      }
    ]
  },

  {
    title: "Databases & Data Management",
    icon: <Database size={32} />,
    description: "Gestion de bases de données relationnelles et NoSQL",
    color: "#163932",
    skills: [
      {
        name: "MySQL",
        icon: <Database size={28} />,
        level: 5,
        percentage: 90,
        experience: "4 ans",
        projects: 15,
        description: "Modélisation, optimisation des requêtes, indexation et transactions",
        color: "#4479A1"
      },
      {
        name: "MongoDB",
        icon: <Database size={28} />,
        level: 4,
        percentage: 85,
        experience: "2 ans",
        projects: 8,
        description: "Bases NoSQL, agrégation, schémas dynamiques et réplication",
        color: "#47A248"
      },
      {
        name: "Oracle",
        icon: <Database size={28} />,
        level: 3,
        percentage: 70,
        experience: "1 an",
        projects: 3,
        description: "PL/SQL, procédures stockées et gestion de grandes bases de données",
        color: "#F80000"
      },
      {
        name: "SQL",
        icon: <Database size={28} />,
        level: 5,
        percentage: 95,
        experience: "4 ans",
        projects: 20,
        description: "Requêtes complexes, jointures, sous-requêtes et optimisation",
        color: "#CC2927"
      }
    ]
  },

  {
    title: "AI & Machine Learning",
    icon: <Brain size={32} />,
    description: "Intelligence artificielle, ML, Deep Learning et traitement de données",
    color: "#0B2B26",
    skills: [
      {
        name: "TensorFlow",
        icon: <Brain size={28} />,
        level: 4,
        percentage: 82,
        experience: "2 ans",
        projects: 6,
        description: "Réseaux de neurones, CNN, RNN pour vision et traitement du langage",
        color: "#FF6F00"
      },
      {
        name: "PyTorch",
        icon: <Brain size={28} />,
        level: 4,
        percentage: 80,
        experience: "2 ans",
        projects: 5,
        description: "Deep Learning research, modèles personnalisés et fine-tuning",
        color: "#EE4C2C"
      },
      {
        name: "Keras",
        icon: <Brain size={28} />,
        level: 4,
        percentage: 85,
        experience: "2 ans",
        projects: 7,
        description: "API haut niveau pour prototypage rapide de modèles neuronaux",
        color: "#D00000"
      },
      {
        name: "Scikit-learn",
        icon: <Brain size={28} />,
        level: 5,
        percentage: 92,
        experience: "3 ans",
        projects: 12,
        description: "ML classique, classification, régression, clustering et pipelines",
        color: "#F7931E"
      },
      {
        name: "Pandas",
        icon: <Database size={28} />,
        level: 5,
        percentage: 95,
        experience: "3 ans",
        projects: 15,
        description: "Manipulation de données, analyse exploratoire et prétraitement",
        color: "#150458"
      },
      {
        name: "NumPy",
        icon: <Database size={28} />,
        level: 5,
        percentage: 93,
        experience: "3 ans",
        projects: 15,
        description: "Calcul scientifique, algèbre linéaire et opérations matricielles",
        color: "#013243"
      },
      {
        name: "OpenCV",
        icon: <Brain size={28} />,
        level: 4,
        percentage: 80,
        experience: "2 ans",
        projects: 5,
        description: "Vision par ordinateur, détection d'objets et traitement d'images",
        color: "#5C3EE8"
      },
      {
        name: "NLP",
        icon: <Brain size={28} />,
        level: 4,
        percentage: 85,
        experience: "2 ans",
        projects: 6,
        description: "Traitement du langage naturel, transformers et analyse de texte",
        color: "#FF6B6B"
      },
      {
        name: "XGBoost",
        icon: <Brain size={28} />,
        level: 4,
        percentage: 88,
        experience: "2 ans",
        projects: 4,
        description: "Gradient boosting pour prédictions et optimisation industrielle",
        color: "#337AB7"
      }
    ]
  },

  {
    title: "IoT & Embedded Systems",
    icon: <Cpu size={32} />,
    description: "Systèmes embarqués, capteurs et solutions IoT",
    color: "#235347",
    skills: [
      {
        name: "Arduino",
        icon: <Cpu size={28} />,
        level: 5,
        percentage: 92,
        experience: "3 ans",
        projects: 10,
        description: "Programmation C/C++, interfaçage capteurs et actionneurs",
        color: "#00979D"
      },
      {
        name: "ESP32",
        icon: <Cpu size={28} />,
        level: 4,
        percentage: 88,
        experience: "2 ans",
        projects: 6,
        description: "Microcontrôleurs WiFi/Bluetooth, IoT et communication sans fil",
        color: "#E7352C"
      },
      {
        name: "C/C++",
        icon: <Terminal size={28} />,
        level: 4,
        percentage: 85,
        experience: "3 ans",
        projects: 8,
        description: "Programmation bas niveau, optimisation et systèmes temps réel",
        color: "#00599C"
      },
      {
        name: "Sensors & Actuators",
        icon: <Zap size={28} />,
        level: 5,
        percentage: 90,
        experience: "3 ans",
        projects: 12,
        description: "DHT, MPU6050, capteurs flex, relais, moteurs et protocoles I2C/SPI",
        color: "#FF9800"
      }
    ]
  },

  {
    title: "DevOps & Tools",
    icon: <Cloud size={32} />,
    description: "Outils de développement, CI/CD et conteneurisation",
    color: "#8EB69B",
    skills: [
      {
        name: "Git/GitHub",
        icon: <GitBranch size={28} />,
        level: 5,
        percentage: 95,
        experience: "4 ans",
        projects: 25,
        description: "Contrôle de version, collaboration, branching strategies et Git Flow",
        color: "#F05032"
      },
      {
        name: "Docker",
        icon: <Box size={28} />,
        level: 4,
        percentage: 82,
        experience: "2 ans",
        projects: 6,
        description: "Conteneurisation d'applications, Docker Compose et orchestration",
        color: "#2496ED"
      },
      {
        name: "Kubernetes",
        icon: <Cloud size={28} />,
        level: 3,
        percentage: 70,
        experience: "1 an",
        projects: 2,
        description: "Orchestration de conteneurs, déploiements et scaling automatique",
        color: "#326CE5"
      },
      {
        name: "Linux",
        icon: <Terminal size={28} />,
        level: 4,
        percentage: 88,
        experience: "3 ans",
        projects: 15,
        description: "Administration système, bash scripting et environnements serveur",
        color: "#FCC624"
      },
      {
        name: "Postman",
        icon: <Zap size={28} />,
        level: 5,
        percentage: 93,
        experience: "3 ans",
        projects: 20,
        description: "Tests d'API, collections, automation et documentation",
        color: "#FF6C37"
      },
      {
        name: "Jira",
        icon: <Briefcase size={28} />,
        level: 4,
        percentage: 85,
        experience: "2 ans",
        projects: 8,
        description: "Gestion de projet Agile, sprints, user stories et workflows",
        color: "#0052CC"
      }
    ]
  },

  {
    title: "Méthodologies & Soft Skills",
    icon: <Shield size={32} />,
    description: "Approches de développement et compétences professionnelles",
    color: "#163932",
    skills: [
      {
        name: "Agile/Scrum",
        icon: <Zap size={28} />,
        level: 5,
        percentage: 90,
        experience: "3 ans",
        projects: 12,
        description: "Développement itératif, daily standups, sprint planning et rétrospectives",
        color: "#009FDA"
      },
      {
        name: "Problem Solving",
        icon: <Brain size={28} />,
        level: 5,
        percentage: 95,
        experience: "4 ans",
        projects: 25,
        description: "Résolution de problèmes complexes, algorithmes et optimisation",
        color: "#FF6B6B"
      },
      {
        name: "Communication Technique",
        icon: <Globe size={28} />,
        level: 5,
        percentage: 92,
        experience: "3 ans",
        projects: 15,
        description: "Documentation, présentations techniques et travail d'équipe",
        color: "#4CAF50"
      },
      {
        name: "Leadership",
        icon: <Briefcase size={28} />,
        level: 4,
        percentage: 85,
        experience: "2 ans",
        projects: 8,
        description: "Gestion d'équipe, mentorat et coordination de projets",
        color: "#9C27B0"
      }
    ]
  }
];

// Export du nombre total de compétences
export const totalSkills = skillsData.reduce((total, category) => total + category.skills.length, 0);

// Export des catégories pour filtrage
export const categories = skillsData.map(category => ({
  name: category.title,
  color: category.color,
  count: category.skills.length
}));