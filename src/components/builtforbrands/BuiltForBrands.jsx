import React, { useState } from 'react'
import './BuiltForBrands.css'

const BuiltForBrands = () => {
  const [mockups, setMockups] = useState([
    { id: 1, image: null, name: 'App Design 1' },
    { id: 2, image: null, name: 'App Design 2' },
    { id: 3, image: null, name: 'App Design 3' }
  ])

  const handleImageUpload = (id, e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setMockups(prev => prev.map(m => 
          m.id === id ? { ...m, image: reader.result } : m
        ))
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = (id) => {
    setMockups(prev => prev.map(m => 
      m.id === id ? { ...m, image: null } : m
    ))
  }

  return (
    <section className="builtforbrands-section">
      <div className="builtforbrands-container">
        {/* Header */}
        <div className="builtforbrands-header">
          <h2 className="builtforbrands-title">
            Built For Brands That Value{' '}
            <span className="builtforbrands-title-accent">Consistency, Clarity, and Growth.</span>
          </h2>
          <p className="builtforbrands-subtitle">
            We craft digital experiences that help brands stand out, connect with their audience, 
            and drive meaningful results through thoughtful design and strategic execution.
          </p>
        </div>

        {/* Mobile Mockups Grid */}
        <div className="builtforbrands-mockups">
          {mockups.map((mockup) => (
            <div key={mockup.id} className="builtforbrands-mockup-card">
              <div className="builtforbrands-mockup-frame">
                {mockup.image ? (
                  <div className="builtforbrands-mockup-image">
                    <img src={mockup.image} alt={mockup.name} />
                    <button 
                      className="builtforbrands-remove-btn"
                      onClick={() => removeImage(mockup.id)}
                      aria-label="Remove image"
                    >
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                ) : (
                  <div className="builtforbrands-mockup-placeholder">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
                      <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="builtforbrands-placeholder-text">Upload Image</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(mockup.id, e)}
                      className="builtforbrands-upload-input"
                    />
                  </div>
                )}
              </div>
              <div className="builtforbrands-mockup-info">
                <span className="builtforbrands-mockup-name">{mockup.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BuiltForBrands
