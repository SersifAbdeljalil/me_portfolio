// src/pages/Projects.js
import React, { useState, useEffect } from 'react';
import './Projects.css';

// Import des composants
import ProjectCard from '../components/ProjectCard/ProjectCard';
import ProjectFilter from '../components/ProjectFilter/ProjectFilter';
import ProjectModal from '../components/ProjectModal/ProjectModal';

// Import des données
import { projectsData, categories } from '../data/projects';

// Import des icônes
import { 
  Briefcase, 
  Search,
  Filter,
  X
} from 'lucide-react';

function Projects() {
  // États
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  // Filtrer les projets par catégorie et recherche
  useEffect(() => {
    let filtered = projectsData;

    // Filtrage par catégorie
    if (activeCategory !== 'Tous') {
      filtered = filtered.filter(project => project.category === activeCategory);
    }

    // Filtrage par recherche
    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    setFilteredProjects(filtered);
  }, [activeCategory, searchTerm]);

  // Gérer le changement de catégorie
  const handleFilterChange = (category) => {
    setActiveCategory(category);
    setSearchTerm(''); // Réinitialiser la recherche lors du changement de filtre
  };

  // Ouvrir le modal avec un projet
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Fermer le modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Attendre la fin de l'animation
  };

  // Toggle filter visibility (mobile)
  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className="projects-page">
      {/* En-tête de la page */}
      <section className="projects-header">
        <div className="container">
          <div className="header-content">
            <div className="header-icon">
              <Briefcase size={48} />
            </div>
            <h1 className="page-title">Mes Projets</h1>
            <p className="page-description">
              Découvrez mes réalisations en développement web, intelligence artificielle, 
              IoT et data science. Chaque projet reflète ma passion pour la technologie 
              et l'innovation.
            </p>
          
          </div>
        </div>
      </section>

      {/* Section principale */}
      <section className="projects-main">
        <div className="container">
          
          {/* Barre de recherche et toggle filter (mobile) */}
          <div className="projects-controls">
            <div className="search-bar">
              <Search size={20} />
              <input
                type="text"
                placeholder="Rechercher un projet, une technologie..."
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

            {/* Bouton toggle filter (mobile uniquement) */}
            <button 
              className="toggle-filter-btn"
              onClick={toggleFilterVisibility}
              aria-label="Afficher les filtres"
            >
              <Filter size={20} />
              <span>Filtres</span>
            </button>
          </div>

          <div className="projects-content">
            
            {/* Sidebar avec filtres */}
            <aside className={`projects-sidebar ${isFilterVisible ? 'visible' : ''}`}>
              <ProjectFilter 
                categories={categories}
                activeCategory={activeCategory}
                onFilterChange={handleFilterChange}
              />
              
              {/* Bouton fermer (mobile) */}
              <button 
                className="close-filter-btn"
                onClick={toggleFilterVisibility}
              >
                <X size={20} />
                <span>Fermer</span>
              </button>
            </aside>

            {/* Grille de projets */}
            <div className="projects-grid-container">
              
              {/* Affichage du filtre actif */}
              <div className="active-filter-info">
                <span className="filter-label">
                  {activeCategory === 'Tous' 
                    ? `Tous les projets (${filteredProjects.length})`
                    : `${activeCategory} (${filteredProjects.length})`
                  }
                </span>
                {searchTerm && (
                  <span className="search-info">
                    Résultats pour "{searchTerm}"
                  </span>
                )}
              </div>

              {/* Grille de projets */}
              {filteredProjects.length > 0 ? (
                <div className="projects-grid">
                  {filteredProjects.map((project) => (
                    <div 
                      key={project.id}
                      onClick={() => handleProjectClick(project)}
                    >
                      <ProjectCard project={project} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-projects">
                  <Briefcase size={64} />
                  <h3>Aucun projet trouvé</h3>
                  <p>
                    {searchTerm 
                      ? `Aucun projet ne correspond à "${searchTerm}"`
                      : `Aucun projet dans la catégorie "${activeCategory}"`
                    }
                  </p>
                  <button 
                    className="reset-btn"
                    onClick={() => {
                      setActiveCategory('Tous');
                      setSearchTerm('');
                    }}
                  >
                    Réinitialiser les filtres
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Modal de détails du projet */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default Projects;