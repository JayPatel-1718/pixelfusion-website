import { useEffect, useRef, useState, useCallback } from 'react'
import { ArrowRight } from 'lucide-react'
import Badge from '../ui/Badge'
import MagneticButton from '../ui/MagneticButton'
import './Hero.css'
import './ShinyText.css'

const services = [
  'Social Media',
  'Design',
  'UI/UX',
  'Web Development',
  'Growth'
]

const clients = [
  { id: 1, name: 'HANDWRITE AI' },
  { id: 2, name: 'SATTIRE' },
  { id: 3, name: 'SVT ARCHITECTS' },
]

function Hero() {
  const sectionRef = useRef(null)
  const [scrollY, setScrollY] = useState(0)
  const [isInView, setIsInView] = useState(false)

  // Scroll listener for float animation
  const handleScroll = useCallback(() => {
    if (isInView) {
      setScrollY(window.scrollY)
    }
  }, [isInView])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const getFloatOffset = (index) => {
    if (!isInView) return 0
    const baseSpeed = 0.02
    const direction = index % 2 === 0 ? 1 : -1
    return scrollY * baseSpeed * direction
  }

  return (
    <section className="hero" id="hero" ref={sectionRef}>
      <div className="hero__background">
        <div className="hero__gradient hero__gradient--green"></div>
        <div className="hero__gradient hero__gradient--orange"></div>
        <div className="hero__gradient hero__gradient--fade"></div>
      </div>

      <div className="hero__container">
        <div className="hero__content">
          {/* Badge */}
          <Badge>
            A CREATIVE STUDIO FOR MODERN BRANDS
          </Badge>

          {/* Main Headline */}
          <h1 className="hero__headline">
            Turning Creative Ideas Into{' '}
            <span className="hero__headline-gradient shiny-text">
              Scalable Digital Growth.
            </span>
          </h1>

          {/* Services List */}
          <p className="hero__services">
            {services.map((service, index) => (
              <span key={service} className="hero__service-item">
                {service}
                {index < services.length - 1 && (
                  <span className="hero__service-separator">·</span>
                )}
              </span>
            ))}
          </p>

          {/* CTA Buttons */}
          <div className="hero__actions">
            <MagneticButton variant="glass">
              Start a Project
            </MagneticButton>
            <MagneticButton variant="glass">
              View Our Work
              <ArrowRight size={18} />
            </MagneticButton>
          </div>

          {/* Integrated Logos Section */}
          <div className="hero__logos">
            <p className="hero__logos-title">Trusted by innovative brands</p>
            <div className="hero__logos-grid">
              {clients.map((client, index) => {
                const floatOffset = getFloatOffset(index)
                return (
                  <div
                    key={client.id}
                    className="hero__logo-card"
                    style={{ transform: `translateY(${floatOffset}px)` }}
                  >
                    <span className="hero__logo-text">{client.name}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Scrolling Appreciation Ticker */}
          <div className="hero__ticker">
            <div className="hero__ticker-track">
              <span className="hero__ticker-item">The most innovative agency we've ever worked with ✦</span>
              <span className="hero__ticker-item">PixelFusion transformed our digital presence ✦</span>
              <span className="hero__ticker-item">Exceptional creativity and scaling growth ✦</span>
              <span className="hero__ticker-item">A true partner in digital excellence ✦</span>
              {/* Duplicate for seamless loop */}
              <span className="hero__ticker-item">The most innovative agency we've ever worked with ✦</span>
              <span className="hero__ticker-item">PixelFusion transformed our digital presence ✦</span>
              <span className="hero__ticker-item">Exceptional creativity and scaling growth ✦</span>
              <span className="hero__ticker-item">A true partner in digital excellence ✦</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animation placeholders for react-bits integration */}
      <div className="hero__animations">
        <div className="hero__animation-slot" data-animation="particles"></div>
        <div className="hero__animation-slot" data-animation="text-reveal"></div>
        <div className="hero__animation-slot" data-animation="glow"></div>
      </div>
    </section>
  )
}

export default Hero
