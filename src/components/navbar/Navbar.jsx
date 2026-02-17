import { useState, useEffect } from 'react'
import { Box, Menu, X } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import './Navbar.css'

const navLinks = [
  { label: 'Home', href: '#hero', active: true },
  { label: 'Solutions', href: '#solutions', active: false },
  { label: 'Our Work', href: '#portfolio', active: false },
  { label: 'About Us', href: '#founders', active: false },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        {/* Logo */}
        <a href="#home" className="navbar__logo">
          <div className="navbar__logo-icon">
            <Box size={24} />
          </div>
          <span className="navbar__logo-text">PixelFusion</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar__desktop">
          <div className="navbar__links">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`navbar__link ${link.active ? 'navbar__link--active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <MagneticButton variant="primary" className="navbar__cta" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Contact Us
          </MagneticButton>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="navbar__mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="navbar__mobile">
            <nav className="navbar__mobile-links">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`navbar__mobile-link ${link.active ? 'navbar__mobile-link--active' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <MagneticButton variant="primary" className="navbar__mobile-cta" onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                setIsMobileMenuOpen(false)
              }}>
                Contact Us
              </MagneticButton>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
