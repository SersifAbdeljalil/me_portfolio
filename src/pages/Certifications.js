// src/pages/Certifications.js
import React, { useState, useEffect } from 'react';
import './Certifications.css';
import CertificationCard from '../components/CertificationCard/CertificationCard';
import CertificationModal from '../components/CertificationModal/CertificationModal';
import { certificationsData, certificationCategories } from '../data/certifications';
import { Award, Filter, Search, TrendingUp } from 'lucide-react';

function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCertifications, setFilteredCertifications] = useState(certificationsData);
  const [selectedCertification, setSelectedCertification] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Animation d'entrée
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Filtrage des certifications
  useEffect(() => {
    let filtered = certificationsData;

    // Filtre par catégorie
    if (selectedCategory !== 'Tous') {
      filtered = filtered.filter(cert => cert.category === selectedCategory);
    }

    // Filtre par recherche
    if (searchTerm) {
      filtered = filtered.filter(cert =>
        cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cert.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredCertifications(filtered);
  }, [selectedCategory, searchTerm]);

  // Ouvrir le modal
  const handleViewDetails = (certification) => {
    setSelectedCertification(certification);
    setIsModalOpen(true);
  };

  // Fermer le modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCertification(null), 300);
  };

  // Statistiques
  const stats = {
    total: certificationsData.length,
    verified: certificationsData.filter(c => c.verified).length,
    categories: certificationCategories.length - 1
  };

  return (
    <div className={`certifications-page ${isVisible ? 'visible' : ''}`}>
      
      {/* Hero Section */}
      <section className="certifications-hero">
        <div className="container">
          <div className="hero-content">        
            <h1 className="hero-title">
              Mes <span className="highlight">Certifications</span>
            </h1>
            <p className="hero-description">
              Découvrez mes certifications professionnelles et mes compétences validées 
              par des organismes reconnus dans le domaine de la technologie.
            </p>
            
            {/* Stats */}
            <div className="certifications-stats">
              <div className="stat-item">
                <Award className="stat-icon" />
                <div className="stat-info">
                  <span className="stat-number">{stats.total}</span>
                  <span className="stat-label">Certifications</span>
                </div>
              </div>
              <div className="stat-item">
                <TrendingUp className="stat-icon" />
                <div className="stat-info">
                  <span className="stat-number">{stats.verified}</span>
                  <span className="stat-label">Vérifiées</span>
                </div>
              </div>
              <div className="stat-item">
                <Filter className="stat-icon" />
                <div className="stat-info">
                  <span className="stat-number">{stats.categories}</span>
                  <span className="stat-label">Catégories</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="certifications-filters">
        <div className="container">
          
          {/* Barre de recherche */}
          <div className="search-bar">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Rechercher une certification, compétence..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button 
                className="clear-search"
                onClick={() => setSearchTerm('')}
              >
                ×
              </button>
            )}
          </div>

          {/* Filtres par catégorie */}
          <div className="category-filters">
            {certificationCategories.map((category) => (
              <button
                key={category.name}
                className={`category-btn ${selectedCategory === category.name ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.name}
                <span className="category-count">{category.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="certifications-grid-section">
        <div className="container">
          
          {/* Résultats */}
          <div className="results-info">
            <p>
              {filteredCertifications.length} certification{filteredCertifications.length > 1 ? 's' : ''} trouvée{filteredCertifications.length > 1 ? 's' : ''}
            </p>
          </div>

          {/* Grid */}
          {filteredCertifications.length > 0 ? (
            <div className="certifications-grid">
              {filteredCertifications.map((certification, index) => (
                <div
                  key={certification.id}
                  className="certification-grid-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CertificationCard
                    certification={certification}
                    onViewDetails={handleViewDetails}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <Award size={64} />
              <h3>Aucune certification trouvée</h3>
              <p>Essayez de modifier vos critères de recherche</p>
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
      </section>

      {/* Modal */}
      <CertificationModal
        certification={selectedCertification}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default Certifications;