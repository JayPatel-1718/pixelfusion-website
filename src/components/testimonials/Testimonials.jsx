import React, { useState, useEffect } from 'react'
import './Testimonials.css'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(3)

  const testimonials = [
    {
      id: 1,
      name: 'James Mitchell',
      role: 'CEO, Innovate Labs',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Pixel Fusion delivered beyond our expectations. Their attention to detail and creative vision transformed our entire digital presence. The results speak for themselves.'
    },
    {
      id: 2,
      name: 'Emily Rodriguez',
      role: 'Founder, TechStart',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: "Working with Pixel Fusion was a game-changer for our startup. They didn't just give us a solution — they gave us direction. From product clarity to execution, their approach helped us move faster and smarter."
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Director, Global Ventures',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'The team at Pixel Fusion brings incredible expertise and creativity to every project. They understood our vision immediately and delivered a stunning website that exceeded all expectations.'
    },
    {
      id: 4,
      name: 'Sarah Jenkins',
      role: 'CTO, TechFlow',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'The scalability and performance of the solutions Pixel Fusion built for us have been outstanding. Our user engagement increased by 150% within the first month.'
    },
    {
      id: 5,
      name: 'David Park',
      role: 'Product Lead, ScaleUp',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Pixel Fusion transformed our entire product experience. Their design thinking approach helped us identify pain points we never knew existed.'
    },
    {
      id: 6,
      name: 'Lisa Thompson',
      role: 'Marketing Director, BrandCo',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'The website Pixel Fusion created for us has received countless compliments from our clients. It perfectly represents our brand identity and values.'
    }
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3)
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2)
      } else {
        setItemsPerPage(1)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const totalPages = Math.ceil(testimonials.length / itemsPerPage)

  const goToPrevious = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - itemsPerPage
      if (newIndex < 0) {
        return (totalPages - 1) * itemsPerPage
      }
      return newIndex
    })
  }

  const goToNext = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev + itemsPerPage
      if (newIndex >= testimonials.length) {
        return 0
      }
      return newIndex
    })
  }

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage)

  // Fill remaining slots with empty cards for consistent grid
  const emptySlots = itemsPerPage - visibleTestimonials.length

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header">
          <div className="testimonials-title-block">
            <h2 className="testimonials-title">
              Real Impact.<br />
              <span className="testimonials-title-accent">Real Results.</span>
            </h2>
            <p className="testimonials-subtitle">
              Real outcomes delivered across product, design, technology, and growth.
            </p>
          </div>

          {/* Navigation */}
          <div className="testimonials-nav">
            <button 
              className="testimonials-nav-btn" 
              onClick={goToPrevious}
              aria-label="Previous testimonials"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              className="testimonials-nav-btn" 
              onClick={goToNext}
              aria-label="Next testimonials"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="testimonials-grid">
          {visibleTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-card-content">
                {/* Avatar & Info */}
                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    <img src={testimonial.avatar} alt={testimonial.name} />
                  </div>
                  <div className="testimonial-info">
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className="testimonial-star" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                  ))}
                  <span className="testimonial-rating-text">5.0</span>
                </div>

                {/* Quote */}
                <p className="testimonial-text">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
          
          {/* Empty slots for consistent grid */}
          {[...Array(emptySlots)].map((_, i) => (
            <div key={`empty-${i}`} className="testimonial-card empty" />
          ))}
        </div>

        {/* Page Indicators */}
        <div className="testimonials-indicators">
          {[...Array(totalPages)].map((_, i) => {
            const pageIndex = i * itemsPerPage
            const isActive = currentIndex === pageIndex || 
              (currentIndex > pageIndex && currentIndex < pageIndex + itemsPerPage) ||
              (currentIndex === 0 && pageIndex === (totalPages - 1) * itemsPerPage)
            
            return (
              <div
                key={i}
                className={`testimonials-dot ${isActive ? 'active' : ''}`}
                onClick={() => setCurrentIndex(pageIndex)}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
