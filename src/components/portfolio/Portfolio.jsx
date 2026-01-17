import React, { useState } from 'react'
import './Portfolio.css'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects')

  const filters = [
    'All Projects',
    'UI/UX Design',
    'Branding',
    'Fintech',
    'SaaS'
  ]

  const projects = [
    {
      id: 1,
      title: 'NeoBank',
      category: 'Fintech',
      tags: ['FINTECH', 'UI/UX'],
      color: '#1a1a2e'
    },
    {
      id: 2,
      title: 'Vivid App',
      category: 'Branding',
      tags: ['LIFESTYLE', 'BRANDING'],
      color: '#ffd6c0'
    },
    {
      id: 3,
      title: 'EcoFlow',
      category: 'SaaS',
      tags: ['ENERGY', 'STRATEGY'],
      color: '#2d5a3d'
    },
    {
      id: 4,
      title: 'Orbit System',
      category: 'UI/UX Design',
      tags: ['SPACE TECH', 'UI/UX'],
      color: '#0a0a1a'
    },
    {
      id: 5,
      title: 'Luxe Collective',
      category: 'Branding',
      tags: ['FASHION', 'IDENTITY'],
      color: '#f5f0e8'
    },
    {
      id: 6,
      title: 'Aether Wallet',
      category: 'Fintech',
      tags: ['CRYPTO', 'WEB3'],
      color: '#e0f7f3'
    },
    {
      id: 7,
      title: 'Zenith Cloud',
      category: 'SaaS',
      tags: ['TECH', 'PLATFORM'],
      color: '#e8e8e8'
    },
    {
      id: 8,
      title: 'Pulse Analytics',
      category: 'SaaS',
      tags: ['HEALTH', 'SAAS'],
      color: '#1a4d4d'
    }
  ]

  const filteredProjects = activeFilter === 'All Projects' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container">
        {/* Header */}
        <div className="portfolio-header">
          <h2 className="portfolio-title">
            <span className="portfolio-title-white">Our Work</span>{' '}
            <span className="portfolio-title-accent">Snapshot</span>
          </h2>
          <p className="portfolio-subtitle">
            We bridge the gap between imagination and reality, crafting digital excellence through high-end design and cutting-edge technology.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="portfolio-filter">
          <div className="portfolio-filter-container">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`portfolio-filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-card reveal-item">
              <div 
                className="portfolio-card-image"
                style={{ backgroundColor: project.color }}
              >
                <div className="portfolio-card-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1"/>
                    <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
                    <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="portfolio-card-overlay">
                <div className="portfolio-card-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="portfolio-card-tag">{tag}</span>
                  ))}
                </div>
                <h3 className="portfolio-card-title">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="portfolio-cta">
          <button className="portfolio-button" onClick={() => console.log('Navigate to full portfolio')}>
            <span>View Full Portfolio</span>
            <svg className="portfolio-button-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
