import React, { useState, useEffect } from 'react'
import './Testimonials.css'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(3)

  const testimonials = [
    {
      id: 1,
      name: 'Ananya Sharma',
      role: 'Marketing Head, Vayu Digital',
      avatar: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Working with PixelFusion was a complete game-changer. They understood our brand ethos and translated it into a design and strategy that truly resonates with our Indian audience.'
    },
    {
      id: 2,
      name: 'Rohan Mehta',
      role: 'Founder, Sattire',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'The posters and creative designs delivered by PixelFusion helped us boost our social engagement by 200%. Their attention to detail and cultural nuance is unmatched.'
    },
    {
      id: 3,
      name: 'Priyanka Iyer',
      role: 'Founder, Handwrite AI',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Extremely professional and creative. The UI/UX overhaul of our platform as per the latest trends has received glowing feedback from our users. Highly recommended!'
    },
    {
      id: 4,
      name: 'Arjun Gupta',
      role: 'Director, SVT Architects',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'PixelFusion helped us redefine our digital identity. Their design thinking approach is world-class, but their understanding of the local market needs is what sets them apart.'
    },
    {
      id: 5,
      name: 'Kavita Reddy',
      role: 'Growth Lead, NextZen Tech',
      avatar: 'https://images.unsplash.com/photo-1589317621122-2c45037196ee?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'The best decision we made for our rebrand was choosing PixelFusion. They deliver on their promise of high-end aesthetics and digital excellence every single time.'
    },
    {
      id: 6,
      name: 'Siddharth Nair',
      role: 'Creative Director, Prism Media',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'A brilliant team that knows exactly how to catch the users eye. Their poster designs and visual storytelling have significantly improved our lead conversions.'
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
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              className="testimonials-nav-btn"
              onClick={goToNext}
              aria-label="Next testimonials"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
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
