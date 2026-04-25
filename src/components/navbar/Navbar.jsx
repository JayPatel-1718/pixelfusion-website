import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Box, Menu, X } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import './Navbar.css'

const navLinks = [
  { label: 'Home', href: '/#hero', hash: '#hero' },
  { label: 'Products', href: '/products', hash: '' },
  { label: 'Solutions', href: '/#solutions', hash: '#solutions' },
  { label: 'Our Work', href: '/#portfolio', hash: '#portfolio' },
  { label: 'About Us', href: '/#founders', hash: '#founders' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('/#hero')
  
  const navigate = useNavigate()
  const location = useLocation()
  const [ctaColorIndex, setCtaColorIndex] = useState(0)

  const colors = [
    '#E07A2F', // Original Orange
    '#3B82F6', // Blue
    '#10B981', // Green
    '#8B5CF6', // Purple
    '#F43F5E', // Rose
    '#F2542D'  // Sunset
  ]

  const handleCtaHover = () => {
    setCtaColorIndex((prev) => (prev + 1) % colors.length)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavLinkClick = (e, link) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    setActiveLink(link.href)

    if (link.href === '/products') {
      navigate('/products')
      window.scrollTo(0, 0)
    } else {
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          document.getElementById(link.hash.substring(1))?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        document.getElementById(link.hash.substring(1))?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    setActiveLink('/#hero')
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleContactClick = () => {
    setIsMobileMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        {/* Logo */}
        <a href="/" className="navbar__logo" onClick={handleLogoClick}>
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
                onClick={(e) => handleNavLinkClick(e, link)}
                className={`navbar__link ${activeLink === link.href ? 'navbar__link--active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <MagneticButton 
            variant="primary" 
            className="navbar__cta" 
            onClick={handleContactClick}
            onMouseEnter={handleCtaHover}
            style={{ 
              background: colors[ctaColorIndex],
              borderColor: colors[ctaColorIndex],
              transition: 'background 0.5s ease, border-color 0.5s ease, transform 0.1s ease-out'
            }}
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
                  className={`navbar__mobile-link ${activeLink === link.href ? 'navbar__mobile-link--active' : ''}`}
                  onClick={(e) => handleNavLinkClick(e, link)}
                >
                  {link.label}
                </a>
              ))}
              <MagneticButton 
                variant="primary" 
                className="navbar__mobile-cta" 
                onClick={handleContactClick}
                onMouseEnter={handleCtaHover}
                style={{ 
                  background: colors[ctaColorIndex],
                  borderColor: colors[ctaColorIndex],
                  transition: 'background 0.5s ease, border-color 0.5s ease, transform 0.1s ease-out'
                }}
              >
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
