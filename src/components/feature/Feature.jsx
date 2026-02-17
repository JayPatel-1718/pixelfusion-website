import { useEffect, useRef, useState, useCallback } from 'react'
import {
  Compass,
  Layers,
  Grid,
  Megaphone,
  Sparkles,
  Zap,
  Target,
  PenTool
} from 'lucide-react'
import './Feature.css'

const featureCards = [
  {
    id: 1,
    icon: Compass,
    title: "Creative Leadership First",
    description: "We build scalable products and technology solutions guided by a clear vision of long-term impact, not short-term wins.",
    delay: 0
  },
  {
    id: 2,
    icon: Layers,
    title: "System-Driven Design",
    description: "From brand identity to content and digital products, we build structured design systems that ensure consistency, clarity, and scalability across all platforms.",
    delay: 100
  },
  {
    id: 3,
    icon: Grid,
    title: "Design + Execution Under One Roof",
    description: "Strategy, design, content, and development work together seamlessly — no gaps, no misalignment, no handoff chaos.",
    delay: 200
  },
  {
    id: 4,
    icon: Megaphone,
    title: "Built for Growing Brands",
    description: "We specialize in startups and growing businesses that need premium design direction without the cost or complexity of an in-house creative team.",
    delay: 300
  }
]

const phoneScreens = [
  {
    type: 'earbuds',
    icon: Zap,
    label: 'Pixel Pro'
  },
  {
    type: 'website',
    icon: Target,
    label: 'Build a Premium Brand'
  },
  {
    type: 'notebook',
    icon: PenTool,
    label: 'Studio'
  }
]

function Feature() {
  const sectionRef = useRef(null)
  const [visibleCards, setVisibleCards] = useState(new Set())
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.dataset.index)
            setVisibleCards(prev => new Set([...prev, cardIndex]))
          }
        })
      },
      {
        root: null,
        rootMargin: '-50px',
        threshold: 0.15
      }
    )

    const cards = sectionRef.current?.querySelectorAll('.feature-card')
    cards?.forEach((card, index) => {
      observer.observe(card)
    })

    return () => {
      cards?.forEach(card => observer.unobserve(card))
    }
  }, [])

  // Mouse move for 3D tilt effect
  const handleMouseMove = useCallback((e) => {
    if (!sectionRef.current || window.innerWidth <= 1024) return

    const rect = sectionRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMousePosition({ x, y })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setMousePosition({ x: 0, y: 0 })
  }, [])

  return (
    <section
      className="feature-section"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="feature-container">
        {/* Header */}
        <div className="feature-header">
          <h2 className="feature-title">
            <span className="feature-title-white">Built For Brands That Value </span>
            <span className="feature-title-accent">Consistency, Clarity, and Growth.</span>
          </h2>
          <p className="feature-subtitle">
            Pixel Fusion brings strategic thinking, creative systems, and execution
            that's designed for real platforms — not just presentations.
          </p>
        </div>

        {/* Main Content */}
        <div className="feature-main">
          {/* Left Cards */}
          <div className="feature-cards feature-cards-left">
            {featureCards.slice(0, 2).map((card, index) => {
              const Icon = card.icon
              const isVisible = visibleCards.has(index)

              return (
                <div
                  key={card.id}
                  className={`feature-card ${isVisible ? 'visible' : ''}`}
                  data-index={index}
                  style={{
                    transitionDelay: `${card.delay}ms`,
                    transform: window.innerWidth > 1024
                      ? `rotateX(${-mousePosition.y * 3}deg) rotateY(${mousePosition.x * 3}deg)`
                      : 'none'
                  }}
                >
                  <div className="feature-card-icon">
                    <Icon size={24} />
                  </div>
                  <div className="feature-card-content">
                    <h3 className="feature-card-title">{card.title}</h3>
                    <p className="feature-card-description">{card.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Center - Phone Mockups */}
          <div className="feature-center">
            <div className="feature-lines">
              <div className="feature-line feature-line-left"></div>
              <div className="feature-line feature-line-right"></div>
            </div>

            <div className="feature-phones">
              {phoneScreens.map((screen, index) => {
                const Icon = screen.icon
                return (
                  <div
                    key={index}
                    className={`feature-phone ${index === 1 ? 'feature-phone-center' : ''}`}
                    style={{
                      animationDelay: `${index * -1}s`
                    }}
                  >
                    <div className="feature-phone-screen">
                      <div className="phone-content">
                        {screen.type === 'website' && (
                          <>
                            <div className="phone-logo-display">
                              <Sparkles size={28} color="#ffffff" />
                            </div>
                            <span className="phone-website-text">{screen.label}</span>
                          </>
                        )}

                        {screen.type === 'earbuds' && (
                          <>
                            <div className="phone-earbuds"></div>
                            <span className="phone-earbuds-text">{screen.label}</span>
                          </>
                        )}

                        {screen.type === 'notebook' && (
                          <>
                            <div className="phone-notebook-display"></div>
                            <div className="phone-pen-display"></div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Cards */}
          <div className="feature-cards feature-cards-right">
            {featureCards.slice(2, 4).map((card, index) => {
              const Icon = card.icon
              const actualIndex = index + 2
              const isVisible = visibleCards.has(actualIndex)

              return (
                <div
                  key={card.id}
                  className={`feature-card ${isVisible ? 'visible' : ''}`}
                  data-index={actualIndex}
                  style={{
                    transitionDelay: `${card.delay}ms`,
                    transform: window.innerWidth > 1024
                      ? `rotateX(${-mousePosition.y * 3}deg) rotateY(${mousePosition.x * 3}deg)`
                      : 'none'
                  }}
                >
                  <div className="feature-card-icon">
                    <Icon size={24} />
                  </div>
                  <div className="feature-card-content">
                    <h3 className="feature-card-title">{card.title}</h3>
                    <p className="feature-card-description">{card.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature
