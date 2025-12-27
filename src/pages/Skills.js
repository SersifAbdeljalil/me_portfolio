// src/pages/Skills.js
import React, { useState, useEffect } from 'react';
import './Skills.css';

// Import des composants
import SkillCategory from '../components/SkillCategory/SkillCategory';

// Import des données
import { skillsData, totalSkills, categories } from '../data/skills';

// Import des icônes
import { 
  Award, 
  TrendingUp,
  Target,
  Zap,
  CheckCircle2,
  Search,
  X
} from 'lucide-react';

function Skills() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(skillsData);
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  // Calculer les statistiques globales
  const calculateGlobalStats = () => {
    const allSkills = skillsData.flatMap(category => category.skills);
    const totalPercentage = allSkills.reduce((sum, skill) => sum + skill.percentage, 0);
    const averageLevel = (totalPercentage / allSkills.length).toFixed(0);
    const expertSkills = allSkills.filter(skill => skill.level >= 4).length;
    const totalProjects = allSkills.reduce((sum, skill) => sum + (skill.projects || 0), 0);

    return {
      totalSkills: allSkills.length,
      averageLevel,
      expertSkills,
      totalProjects
    };
  };

  const stats = calculateGlobalStats();

  // Filtrer les compétences
  useEffect(() => {
    let filtered = skillsData;

    // Filtrage par catégorie
    if (selectedCategory !== 'Tous') {
      filtered = skillsData.filter(category => category.title === selectedCategory);
    }

    // Filtrage par recherche
    if (searchTerm) {
      filtered = filtered.map(category => ({
        ...category,
        skills: category.skills.filter(skill =>
          skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          skill.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(category => category.skills.length > 0);
    }

    setFilteredData(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="skills-page">
      {/* En-tête de la page */}
      <section className="skills-header">
        <div className="container">
          <div className="header-content">
            <div className="header-icon">
              <Award size={48} />
            </div>
            <h1 className="page-title">Mes Compétences</h1>
            <p className="page-description">
              Un aperçu complet de mes compétences techniques acquises à travers 
              mes projets, mes études et mes expériences professionnelles.
            </p>

            {/* Statistiques globales */}
            <div className="global-stats">
              <div className="stat-card">
                <div className="stat-icon">
                  <Award size={32} />
                </div>
                <div className="stat-info">
                  <span className="stat-number">{stats.totalSkills}</span>
                  <span className="stat-label">Compétences</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <TrendingUp size={32} />
                </div>
                <div className="stat-info">
                  <span className="stat-number">{stats.averageLevel}%</span>
                  <span className="stat-label">Maîtrise moyenne</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <CheckCircle2 size={32} />
                </div>
                <div className="stat-info">
                  <span className="stat-number">{stats.expertSkills}</span>
                  <span className="stat-label">Niveau Expert</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <Target size={32} />
                </div>
                <div className="stat-info">
                  <span className="stat-number">{stats.totalProjects}</span>
                  <span className="stat-label">Projets réalisés</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section principale */}
      <section className="skills-main">
        <div className="container">
          
          {/* Barre de recherche et filtres */}
          <div className="skills-controls">
            <div className="search-bar">
              <Search size={20} />
              <input
                type="text"
                placeholder="Rechercher une compétence..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              {searchTerm && (
                <button 
                  className="clear-search"
                  onClick={() => setSearchTerm('')}
                  aria-label="Effacer la recherche"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Filtres de catégories */}
            <div className="category-filters">
              <button
                className={`filter-btn ${selectedCategory === 'Tous' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('Tous')}
              >
                <Zap size={18} />
                Toutes
              </button>
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`filter-btn ${selectedCategory === category.name ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.name)}
                  style={{ '--filter-color': category.color }}
                >
                  {category.name}
                  <span className="filter-count">{category.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Message si recherche active */}
          {searchTerm && (
            <div className="search-info-banner">
              <Search size={20} />
              <span>
                Résultats pour "<strong>{searchTerm}</strong>" : 
                {' '}{filteredData.reduce((sum, cat) => sum + cat.skills.length, 0)} compétence(s) trouvée(s)
              </span>
            </div>
          )}

          {/* Liste des catégories de compétences */}
          <div className="skills-categories">
            {filteredData.length > 0 ? (
              filteredData.map((category, index) => (
                <SkillCategory 
                  key={index} 
                  category={category} 
                />
              ))
            ) : (
              <div className="no-skills">
                <Award size={64} />
                <h3>Aucune compétence trouvée</h3>
                <p>
                  {searchTerm 
                    ? `Aucune compétence ne correspond à "${searchTerm}"`
                    : `Aucune compétence dans la catégorie "${selectedCategory}"`
                  }
                </p>
                <button 
                  className="reset-btn"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('Tous');
                  }}
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
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

export default Skills;