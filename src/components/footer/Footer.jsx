import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163C7.029 2.163 2.182 6.985 2.182 11.917C2.182 15.99 5.622 19.3 9.45 19.3H10.35V12.98H7.455V9.37H9.45V7.023C9.45 4.658 10.884 3.354 13.029 3.354C14.271 3.354 15.003 3.414 15.003 3.414V5.655H14.019C12.396 5.655 12.006 6.495 12.006 7.354V9.37H15.003L14.565 12.98H12.006V19.3C15.87 19.3 19.818 15.99 19.818 11.917C19.818 6.985 14.97 2.163 12 2.163Z" fill="currentColor"/>
        </svg>
      ),
      href: 'https://facebook.com',
      label: 'Facebook'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.161C14.209 2.161 16.154 3.022 17.746 4.614C19.338 6.206 20.199 8.15 20.199 10.359C20.199 12.568 19.338 14.513 17.746 16.105C16.154 17.697 14.209 18.558 12 18.558C9.791 18.558 7.846 17.697 6.254 16.105C4.662 14.513 3.801 12.568 3.801 10.359C3.801 8.15 4.662 6.206 6.254 4.614C7.846 3.022 9.791 2.161 12 2.161ZM12 4.661C10.402 4.661 9.098 5.286 8.099 6.285C7.1 7.284 6.475 8.588 6.475 10.186C6.475 11.784 7.1 13.088 8.099 14.087C9.098 15.086 10.402 15.711 12 15.711C13.598 15.711 14.902 15.086 15.901 14.087C16.9 13.088 17.525 11.784 17.525 10.186C17.525 8.588 16.9 7.284 15.901 6.285C14.902 5.286 13.598 4.661 12 4.661ZM12 7.911C13.17 7.911 14.115 8.513 14.115 9.436C14.115 10.359 13.17 10.961 12 10.961C10.83 10.961 9.885 10.359 9.885 9.436C9.885 8.513 10.83 7.911 12 7.911ZM16.725 11.096C16.725 11.68 16.381 12.173 15.885 12.521C15.389 12.869 14.723 13.043 14.023 13.043C13.323 13.043 12.657 12.869 12.161 12.521C11.665 12.173 11.321 11.68 11.321 11.096C11.321 10.512 11.665 10.019 12.161 9.671C12.657 9.323 13.323 9.149 14.023 9.149C14.723 9.149 15.389 9.323 15.885 9.671C16.381 10.019 16.725 10.512 16.725 11.096Z" fill="currentColor"/>
        </svg>
      ),
      href: 'https://instagram.com',
      label: 'Instagram'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452H16.61V13.149C16.61 11.43 15.862 10.008 13.825 10.008C11.703 10.008 10.898 11.227 10.898 12.854V20.452H7.083V7.548H10.532V8.896C10.88 7.774 11.941 6.632 13.992 6.632C17.053 6.632 20.447 8.715 20.447 12.455V20.452ZM5.337 5.116C4.563 5.116 4.099 4.584 4.099 3.714C4.099 2.82 4.585 2.276 5.378 2.276C6.171 2.276 6.647 2.82 6.647 3.714C6.647 4.584 6.172 5.116 5.337 5.116ZM3.063 20.452H7.488V7.548H3.063V20.452ZM21.221 2.116C21.221 1.226 20.735 0.682 20.003 0.682C19.271 0.682 18.785 1.226 18.785 2.116C18.785 3.006 19.259 3.549 20.003 3.549C20.747 3.549 21.221 3.006 21.221 2.116Z" fill="currentColor"/>
        </svg>
      ),
      href: 'https://linkedin.com',
      label: 'LinkedIn'
    }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Navigation Links */}
        <nav className="footer-nav">
          <div className="footer-logo">
            <span className="footer-logo-text">PixelFusion</span>
          </div>
          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href}
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.href)
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Row */}
        <div className="footer-bottom">
          {/* Copyright */}
          <p className="footer-copyright">
            © {currentYear} PixelFusion. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="footer-social">
            {socialLinks.map((social) => (
              <a 
                key={social.label}
                href={social.href}
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
