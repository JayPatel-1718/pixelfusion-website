import React, { useState } from 'react'
import { Instagram, Facebook, Linkedin, Mail, MapPin, Phone, Send, Check } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.target)

    try {
      // Use your unique Formspree ID here
      const response = await fetch('https://formspree.io/f/xzdarger', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setSubmitStatus('success')
        e.target.reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'pixelfusion14@gmail.com'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Mumbai, India'
    },
    {
      icon: <Phone size={24} />,
      label: 'Call Us',
      value: '+91 9313619495'
    }
  ]

  const socialLinks = [
    {
      icon: <Instagram size={20} />,
      href: 'https://www.instagram.com/pixelfusion.agency_/',
      label: 'Instagram'
    },
    {
      icon: <Facebook size={20} />,
      href: '#',
      label: 'Facebook'
    },
    {
      icon: <Linkedin size={20} />,
      href: '#',
      label: 'LinkedIn'
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
              <input type="hidden" name="_subject" value="New Website Inquiry - PixelFusion" />
              <div className="contact-form-group">
                <label htmlFor="name" className="contact-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
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
                  placeholder="Tell us about your project..."
                  rows="5"
                  className="contact-textarea"
                  required
                />
              </div>

              <button
                type="submit"
                className={`contact-submit ${isSubmitting ? 'submitting' : ''} ${submitStatus === 'success' ? 'success' : ''} ${submitStatus === 'error' ? 'error' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="contact-spinner"></span>
                    Sending...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '20px', height: '20px', marginRight: '8px' }}>
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Message Sent!
                  </>
                ) : submitStatus === 'error' ? (
                  'Failed to Send. Try again?'
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
