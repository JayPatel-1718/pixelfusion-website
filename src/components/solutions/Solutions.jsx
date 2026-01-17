import { useEffect, useRef, useState, useCallback } from 'react'
import { 
  Megaphone, 
  Palette, 
  Layout, 
  Globe,
  ArrowRight,
  Sparkles
} from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import './Solutions.css'
import '../hero/ShinyText.css'

const solutions = [
  {
    id: 1,
    type: 'social',
    icon: Megaphone,
    title: 'Social Media Management',
    description: 'Strategy-led content, platform-native creatives, and consistent execution to grow reach, engagement, and brand loyalty.'
  },
  {
    id: 2,
    type: 'branding',
    icon: Palette,
    title: 'Branding & Design Studio',
    description: 'Visual identities, marketing creatives, and design systems built to make your brand instantly recognizable and memorable.'
  },
  {
    id: 3,
    type: 'website',
    icon: Globe,
    title: 'Website Development',
    description: 'Fast, modern, and responsive websites engineered with performance, usability, and conversion in mind. From clean front-end architecture to scalable back-end structures, we build websites that load fast, adapt seamlessly across devices, and are designed to turn visitors into customers while growing alongside your brand.'
  },
  {
    id: 4,
    type: 'ux',
    icon: Layout,
    title: 'UI/UX Design',
    description: 'User-first interfaces, deeply considered user journeys, and scalable design systems—crafted through UX research, user behavior analysis, wireframing, prototyping, and interaction design.'
  }
]

function Solutions() {
  const sectionRef = useRef(null)
  const [visibleCards, setVisibleCards] = useState(new Set())

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
        threshold: 0.1
      }
    )

    const cards = sectionRef.current?.querySelectorAll('.solution-card')
    cards?.forEach((card, index) => {
      observer.observe(card)
    })

    return () => {
      cards?.forEach(card => observer.unobserve(card))
    }
  }, [])

  return (
    <section className="solutions-section" id="solutions" ref={sectionRef}>
      <div className="solutions-container">
        {/* Header */}
        <div className="solutions-header">
          <h2 className="solutions-title">
            <span className="solutions-title-white">Empowering Your Business With</span><br />
            <span className="solutions-title-gradient shiny-text">
              <Sparkles size={32} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
              Innovative Solutions
            </span>
          </h2>
          <p className="solutions-subtitle">
            From product engineering to AI-led automation, PixelFusion partners with startups 
            and enterprises to build scalable, secure, and future-ready systems.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="solutions-grid">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            const isVisible = visibleCards.has(index)
            
            return (
              <div
                key={solution.id}
                className={`solution-card solution-card--${solution.type} ${isVisible ? 'visible' : ''}`}
                data-index={index}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="solution-card-icon">
                  <Icon size={24} />
                </div>
                
                <h3 className="solution-card-title">{solution.title}</h3>
                
                <div className="solution-card-content">
                  <p className="solution-card-description">{solution.description}</p>
                  
                  {solution.type === 'website' && (
                    <MagneticButton variant="glass" className="solutions-cta">
                      View Our Work
                      <ArrowRight size={18} />
                    </MagneticButton>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Solutions
