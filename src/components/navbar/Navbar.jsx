import { useState, useEffect } from 'react'
import { Box, Menu, X } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import './Navbar.css'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Products', href: '#products' },
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

  const handleNavLinkClick = (href) => {
    setActiveLink(href)
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        {/* Logo */}
        <a href="#hero" className="navbar__logo" onClick={() => setActiveLink('#hero')}>
          <div className="navbar__logo-image-container">
            <img src="/PF OF Text W.png" alt="PixelFusion Logo" className="navbar__logo-image" />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar__desktop">
          <div className="navbar__links">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleNavLinkClick(link.href)}
                className={`navbar__link ${activeLink === link.href ? 'navbar__link--active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <MagneticButton variant="primary" className="navbar__cta" onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            setActiveLink('#contact')
          }}>
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
                  className={`navbar__mobile-link ${activeLink === link.href ? 'navbar__mobile-link--active' : ''}`}
                  onClick={() => handleNavLinkClick(link.href)}
                >
                  {link.label}
                </a>
              ))}
              <MagneticButton variant="primary" className="navbar__mobile-cta" onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                handleNavLinkClick('#contact')
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
