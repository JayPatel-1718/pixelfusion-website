import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Badge from '../ui/Badge'
import MagneticButton from '../ui/MagneticButton'
import './Hero.css'
import './ShinyText.css'
import LiquidBackground from './LiquidBackground'

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
    const [isInView, setIsInView] = useState(false)

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

    return (
        <section className={`hero ${isInView ? 'is-visible' : ''}`} id="hero" ref={sectionRef}>
            <div className="hero__background">
                <LiquidBackground />
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
                        <MagneticButton variant="glass" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Start a Project
                        </MagneticButton>
                        <MagneticButton variant="glass" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                            View Our Work
                            <ArrowRight size={18} />
                        </MagneticButton>
                    </div>

                    {/* Integrated Logos Section */}
                    <div className="hero__logos">
                        <p className="hero__logos-title">Trusted by innovative brands</p>
                        <div className="hero__logos-grid">
                            {clients.map((client) => (
                                <div
                                    key={client.id}
                                    className="hero__logo-card"
                                >
                                    <span className="hero__logo-text">{client.name}</span>
                                </div>
                            ))}
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
        </section>
    )
}

export default Hero
