// src/components/ProjectFilter/ProjectFilter.js
import React from 'react';
import './ProjectFilter.css';

// Import des icônes
import { 
  Layers, 
  Code2, 
  Brain, 
  Cpu, 
  Smartphone,
  Database,
  Globe
} from 'lucide-react';

function ProjectFilter({ categories, activeCategory, onFilterChange }) {
  
  // Mapping des icônes par catégorie
  const categoryIcons = {
    'Tous': <Layers size={18} />,
    'Full-Stack': <Code2 size={18} />,
    'AI': <Brain size={18} />,
    'IoT': <Cpu size={18} />,
    'Mobile': <Smartphone size={18} />,
    'Data Science': <Database size={18} />,
    'Web': <Globe size={18} />
  };

  return (
    <div className="project-filter">
      <div className="filter-container">
        <div className="filter-header">
          <Layers size={24} />
          <h3 className="filter-title">Filtrer par catégorie</h3>
        </div>
        
        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`filter-btn ${activeCategory === category.name ? 'active' : ''}`}
              onClick={() => onFilterChange(category.name)}
            >
              <span className="filter-icon">
                {categoryIcons[category.name] || <Layers size={18} />}
              </span>
              <span className="filter-label">{category.name}</span>
              <span className="filter-count">{category.count}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectFilter;