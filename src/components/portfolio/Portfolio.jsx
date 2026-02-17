import React, { useState } from 'react'
import './Portfolio.css'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('Poster Design')
  const [selectedProject, setSelectedProject] = useState(null)

  // Specific categories as requested
  const filters = ['Poster Design', 'UI/UX Design', 'Logo Design', 'Thumbnail Designs', 'Insta Posts']

  const projects = [
    // Poster Design (Show first) - 1080x1920 Portraits
    {
      id: 1,
      title: 'The Tennis/Graffiti Poster',
      category: 'Poster Design',
      tags: ['POSTER', 'VIBRANT'],
      color: '#2d5a3d',
      image: 'poster.png',
      type: 'portrait'
    },
    {
      id: 2,
      title: 'The Fashion/Magazine Poster',
      category: 'Poster Design',
      tags: ['POSTER', 'CLEAN'],
      color: '#1a1a1a',
      image: 'poster3.jpg',
      type: 'portrait'
    },
    {
      id: 13,
      title: 'The BMW Car Poster',
      category: 'Poster Design',
      tags: ['POSTER', 'CLEAN'],
      color: '#1a1a1a',
      image: 'poster4.jpg',
      type: 'portrait'
    },
    {
      id: 12,
      title: 'The Minimal Tennis Poster',
      category: 'Poster Design',
      tags: ['POSTER', 'CLEAN'],
      color: '#1a1a1a',
      image: 'poster2.jpg',
      type: 'portrait'
    },
    {
      id: 14,
      title: 'The Minimal Tennis Poster',
      category: 'Poster Design',
      tags: ['POSTER', 'CLEAN'],
      color: '#1a1a1a',
      image: 'poster6.png',
      type: 'portrait'
    },
    // UI/UX Design - Now 1080x1920 Portraits as requested
    {
      id: 3,
      title: 'Aether Mobile App',
      category: 'UI/UX Design',
      tags: ['MOBILE', 'UX'],
      color: '#1a1a2e',
      image: '/Moving out ui.png',
      type: 'portrait'
    },
    {
      id: 4,
      title: 'Finance Wallet',
      category: 'UI/UX Design',
      tags: ['FINTECH', 'UI'],
      color: '#0a0a1a',
      image: '/portfolio/aether-wallet.jpg',
      type: 'portrait'
    },
    // Logo Design - 500x500 Squares
    {
      id: 5,
      title: 'Momo Town',
      category: 'Logo Design',
      tags: ['LOGO', 'BRANDING'],
      color: '#ab3e03',
      image: 'momotown.jpg',
      type: 'square'
    },
    {
      id: 6,
      title: 'Dhaara Labs Branding',
      category: 'Logo Design',
      tags: ['IDENTITY', 'MODERN'],
      color: '#000000',
      image: 'dhaaralabs.jpg',
      type: 'square'
    },
    {
      id: 17,
      title: 'Dhaara Labs',
      category: 'Logo Design',
      tags: ['IDENTITY', 'MODERN'],
      color: '#000000',
      image: 'dhaara labs 2.jpg',
      type: 'square'
    },
    // Thumbnail Designs - 1920x1080 Landscapes
    {
      id: 7,
      title: 'Gaming Essentials',
      category: 'Thumbnail Designs',
      tags: ['THUMBNAIL', 'GAMING'],
      color: '#f5f0e8',
      image: '/thumbnail.png',
      type: 'landscape'
    },
    {
      id: 18,
      title: 'Future Tech Highlights',
      category: 'Thumbnail Designs',
      tags: ['THUMBNAIL', 'TECH'],
      color: '#121212',
      image: '/thumbnail.png',
      type: 'landscape'
    },
    // Insta Posts - 1080x1080 Squares
    {
      id: 8,
      title: 'Creative Workflow',
      category: 'Insta Posts',
      tags: ['SOCIAL', 'MARKETING'],
      color: '#0a0a1a',
      image: '/socialpost.png',
      type: 'square'
    },
    {
      id: 19,
      title: 'Brand Storytelling',
      category: 'Insta Posts',
      tags: ['INSTAGRAM', 'DESIGN'],
      color: '#1a1a1a',
      image: 'image.jpg',
      type: 'square'
    }
  ]

  // Filter logic remains simple
  const filteredProjects = projects.filter(p => p.category === activeFilter)

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    document.body.style.overflow = 'hidden' // Prevent scroll
  }

  const closeLightbox = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'auto'
  }

  const navigateLightbox = (direction) => {
    if (!selectedProject) return
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id)
    let nextIndex
    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % filteredProjects.length
    } else {
      nextIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length
    }
    setSelectedProject(filteredProjects[nextIndex])
  }

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container">
        {/* Header */}
        <div className="portfolio-header">
          <h2 className="portfolio-title">
            Our <span className="portfolio-title-accent">Creations.</span>
          </h2>
          <p className="portfolio-subtitle">
            Focused excellence in digital aesthetics. Explore our specific expertise across design domains.
          </p>
        </div>

        {/* Categories Only Filter Bar */}
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

        {/* Optimized Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`portfolio-card ${project.type}`}
              onClick={() => handleProjectClick(project)}
            >
              <div className="portfolio-card-image" style={{ backgroundColor: project.color }}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <div className="portfolio-card-placeholder">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15L16 10L5 21" />
                    </svg>
                  </div>
                )}
              </div>

              <div className="portfolio-card-overlay">
                <div className="portfolio-card-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="portfolio-card-tag">{tag}</span>
                  ))}
                </div>
                <h3 className="portfolio-card-title">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="portfolio-cta">
          <button className="portfolio-button">
            <span>Project Inquiries</span>
            <svg className="portfolio-button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Lightbox / Modal */}
      {selectedProject && (
        <div className="portfolio-lightbox" onClick={closeLightbox}>
          <div className="lightbox-overlay"></div>

          <button className="lightbox-close" onClick={closeLightbox}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-nav prev" onClick={() => navigateLightbox('prev')}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="lightbox-main">
              <div className="lightbox-image-container">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              <div className="lightbox-details">
                <div className="lightbox-tags">
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className="lightbox-tag">{tag}</span>
                  ))}
                </div>
                <h3 className="lightbox-title">{selectedProject.title}</h3>
                <p className="lightbox-category">{selectedProject.category}</p>
              </div>
            </div>

            <button className="lightbox-nav next" onClick={() => navigateLightbox('next')}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Portfolio