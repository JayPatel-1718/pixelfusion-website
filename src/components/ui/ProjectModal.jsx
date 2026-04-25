import React, { useState } from 'react'
import { X } from 'lucide-react'
import './ProjectModal.css'

const ProjectModal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  if (!isOpen) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.target)

    try {
      // Formspree key used in contact form
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
        setTimeout(() => {
            onClose()
            setSubmitStatus(null)
        }, 2000)
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

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal-content" onClick={e => e.stopPropagation()}>
        <button className="project-modal-close" onClick={onClose} aria-label="Close">
          <X size={24} />
        </button>
        
        <div className="project-modal-header">
          <h3 className="project-modal-title">Start a Project</h3>
          <p className="project-modal-subtitle">Tell us what you want to build and we'll make it happen.</p>
        </div>

        <form className="project-modal-form" onSubmit={handleSubmit}>
          <input type="hidden" name="_subject" value="New Project Inquiry - PixelFusion" />
          
          <div className="project-form-row">
              <div className="project-form-group">
                <label htmlFor="modal-name" className="project-label">Name</label>
                <input type="text" id="modal-name" name="name" placeholder="Your name" className="project-input" required />
              </div>
              
              <div className="project-form-group">
                <label htmlFor="modal-email" className="project-label">Email</label>
                <input type="email" id="modal-email" name="email" placeholder="your@email.com" className="project-input" required />
              </div>
          </div>

          <div className="project-form-group">
            <label htmlFor="project-type" className="project-label">Type of Design</label>
            <select id="project-type" name="type" className="project-input project-select" defaultValue="" required>
              <option value="" disabled>Select an option</option>
              <option value="Social Media Management">Social Media Management</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Web Development">Web Development</option>
              <option value="Poster Design">Poster Design</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="project-form-group">
            <label htmlFor="modal-message" className="project-label">Message / Extra Details</label>
            <textarea id="modal-message" name="message" placeholder="Tell us more about what you want to make..." rows="4" className="project-textarea" required />
          </div>

          <button
            type="submit"
            className={`project-submit ${isSubmitting ? 'submitting' : ''} ${submitStatus === 'success' ? 'success' : ''} ${submitStatus === 'error' ? 'error' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Message Sent!' : submitStatus === 'error' ? 'Failed to Send' : 'Submit Inquiry'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ProjectModal
