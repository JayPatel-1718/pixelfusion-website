import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitStatus('success')
    setFormData({ name: '', email: '', message: '' })
    
    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus(null), 3000)
  }

  const contactInfo = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: 'Email',
      value: 'hello@pixelfusion.studio'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 13C13.6569 13 15 11.6569 15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      label: 'Location',
      value: 'San Francisco, CA'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      label: 'Availability',
      value: 'Mon - Fri, 9AM - 6PM PST'
    }
  ]

  const socialLinks = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8C17.5 8 18.5 6.5 18.5 5C18.5 3.5 17.5 2 16 2C14.5 2 13.5 3.5 13.5 5C13.5 6.5 14.5 8 16 8Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 15C11.5 15 13.5 13.5 13.5 11.5C13.5 9.5 11.5 8 9 8C6.5 8 4.5 9.5 4.5 11.5C4.5 13.5 6.5 15 9 15Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 18.5C2 20.5 4 22 6 22H7C7 22 8 22 9 22H15C16 22 17 22 18 22H18C20 22 22 20.5 22 18.5V17.5C22 16.5 22 16 22 15V10C22 8.5 21 7.5 20 7.5" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      href: '#',
      label: 'LinkedIn'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23 3C20.5 3.5 17.5 4 15 4C12 4 9 3 6 2C4.5 1.5 3 2 2 3C1 4 1.5 5.5 3 6.5C3.5 7 4 7.5 4.5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M2 17C3 19.5 5 21.5 8 22C10 22 12 21 14 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M15 21C17.5 21 19.5 19.5 20 17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      href: '#',
      label: 'Twitter'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      href: '#',
      label: 'Dribbble'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M18 8V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M6 8V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M18 16V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M6 16V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      href: '#',
      label: 'Instagram'
    }
  ]

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-grid">
          {/* Left Column - Contact Info */}
          <div className="contact-info">
            <h2 className="contact-title">Let's Create Something Amazing Together</h2>
            <p className="contact-subtitle">
              Ready to bring your vision to life? We're here to help you build digital experiences that make an impact.
            </p>

            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-detail-item">
                  <div className="contact-detail-icon">
                    {item.icon}
                  </div>
                  <div className="contact-detail-text">
                    <span className="contact-detail-label">{item.label}</span>
                    <span className="contact-detail-value">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-social">
              <span className="contact-social-label">Follow us</span>
              <div className="contact-social-links">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.href} 
                    className="contact-social-link"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-group">
                <label htmlFor="name" className="contact-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="contact-input"
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="email" className="contact-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="contact-input"
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="message" className="contact-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows="5"
                  className="contact-textarea"
                  required
                />
              </div>

              <button 
                type="submit" 
                className={`contact-submit ${isSubmitting ? 'submitting' : ''} ${submitStatus === 'success' ? 'success' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="contact-spinner"></span>
                    Sending...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Message Sent!
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
