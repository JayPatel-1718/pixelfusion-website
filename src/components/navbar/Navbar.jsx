import { useState, useEffect } from 'react'
import { Box, Menu, X } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import './Navbar.css'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Our Work', href: '#portfolio' },
  { label: 'About Us', href: '#founders' },
]


function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('#hero')


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
        onClick={() => setActiveLink(link.href)}
        className={`navbar__link ${
          activeLink === link.href ? 'navbar__link--active' : ''
        }`}
      >
        {link.label}
      </a>
    ))}
  </div>

  <MagneticButton
    variant="primary"
    className="navbar__cta"
    onClick={() =>
      document
        .getElementById('contact')
        ?.scrollIntoView({ behavior: 'smooth' })
    }
  >
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
