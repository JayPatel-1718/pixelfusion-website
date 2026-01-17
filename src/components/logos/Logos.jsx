import { useEffect, useRef, useState, useCallback } from 'react'
import './Logos.css'

// Client logos data - replace with actual SVG imports
const clients = [
  { id: 1, name: 'Nebula', initial: 'N' },
  { id: 2, name: 'Vertex', initial: 'V' },
  { id: 3, name: 'Orbit', initial: 'O' },
  { id: 4, name: 'Quantum', initial: 'Q' },
  { id: 5, name: 'Hyperion', initial: 'H' },
  { id: 6, name: 'Zenith', initial: 'Z' },
  { id: 7, name: 'Pulsar', initial: 'P' },
  { id: 8, name: 'Apex', initial: 'A' },
  { id: 9, name: 'Nova', initial: 'N' },
  { id: 10, name: 'Cyber', initial: 'C' },
]

function Logos() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isInView, setIsInView] = useState(false)

  // Intersection Observer for reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          // Staggered reveal - start animation after small delay
          setTimeout(() => {
            setIsVisible(true)
          }, 100)
        }
      },
      {
        root: null,
        rootMargin: '-50px',
        threshold: 0.1,
      }
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

  // Scroll listener for float animation
  const handleScroll = useCallback(() => {
    if (isInView) {
      setScrollY(window.scrollY)
    }
  }, [isInView])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Calculate float offset based on scroll position
  const getFloatOffset = (index) => {
    if (!isInView) return 0
    const baseSpeed = 0.03
    const direction = index % 2 === 0 ? 1 : -1
    return scrollY * baseSpeed * direction
  }

  return (
    <section className="logos-section" ref={sectionRef}>
      <div className="logos-container">
        <h3 className={`logos-title ${isVisible ? 'visible' : ''}`}>
          Trusted by innovative brands worldwide
        </h3>
        
        <div className="logos-grid">
          {clients.map((client, index) => {
            const floatOffset = getFloatOffset(index)
            
            return (
              <div
                key={client.id}
                className={`logo-card ${isVisible ? 'revealed' : ''} ${isInView ? 'floating' : ''}`}
                style={{
                  transform: `translateY(${floatOffset}px)`,
                  transitionDelay: isVisible ? `${index * 80}ms` : '0ms',
                }}
              >
                <span className="logo-placeholder">{client.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Logos
