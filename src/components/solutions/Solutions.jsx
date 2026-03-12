import React, { useEffect, useRef } from 'react'
import { Share2, Palette, Globe, Layers } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import './Solutions.css'

const Solutions = () => {
    const cardsRef = useRef([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1 }
        )

        cardsRef.current.forEach((card) => {
            if (card) observer.observe(card)
        })

        return () => {
            cardsRef.current.forEach((card) => {
                if (card) observer.unobserve(card)
            })
        }
    }, [])

    const solutions = [
        {
            id: 'social',
            title: 'Social Media Strategy',
            description: 'Strategic planning and content creation to build a powerful brand presence across all social platforms.',
            icon: <Share2 />,
            className: 'solution-card--social'
        },
        {
            id: 'branding',
            title: 'Brand Identity',
            description: 'Creating cohesive visual identities that resonate with your audience and define your brand voice.',
            icon: <Palette />,
            className: 'solution-card--branding'
        },
        {
            id: 'website',
            title: 'Website Development',
            description: 'Custom, high-performance websites built with the latest technologies to ensure speed, security, and a seamless user experience. We focus on conversion-driven design and robust functionality.',
            icon: <Globe />,
            className: 'solution-card--website',
            cta: true
        },
        {
            id: 'ux',
            title: 'UI/UX Design',
            description: 'User-centric design solutions that combine aesthetics with functionality for intuitive digital experiences.',
            icon: <Layers />,
            className: 'solution-card--ux'
        }
    ]

    return (
        <section id="solutions" className="solutions-section">
            <div className="solutions-container">
                <div className="solutions-header">
                    <h2 className="solutions-title">
                        <span className="solutions-title-white">Tailored </span>
                        <span className="solutions-title-gradient">Solutions </span>
                        <span className="solutions-title-white">For Your Business</span>
                    </h2>
                    <p className="solutions-subtitle">
                        We combine creativity with technical expertise to deliver results that help your business grow in the digital landscape.
                    </p>
                </div>

                <div className="solutions-grid">
                    {solutions.map((solution, index) => (
                        <div
                            key={solution.id}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className={`solution-card ${solution.className}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="solution-card-icon">
                                {solution.icon}
                            </div>
                            <div className="solution-card-content">
                                <h3 className="solution-card-title">{solution.title}</h3>
                                <p className="solution-card-description">{solution.description}</p>
                                {solution.cta && (
                                    <MagneticButton variant="primary" className="magnetic-button" onClick={() => {
                                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                                    }}>
                                        Start Your Project
                                    </MagneticButton>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Solutions
