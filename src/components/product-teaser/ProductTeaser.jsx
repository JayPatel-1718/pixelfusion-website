import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Smartphone, Zap } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import './ProductTeaser.css'

const ProductTeaser = () => {
  const navigate = useNavigate()

  return (
    <section className="product-teaser">
      <div className="teaser-container">
        <div className="teaser-grid">
          <div className="teaser-content">
            <div className="teaser-badge">
              <Zap size={14} />
              <span>Internal Product</span>
            </div>
            <h2 className="teaser-title">
              We Build <span className="text-gradient">Infrastructure,</span> Not Just Websites.
            </h2>
            <p className="teaser-description">
              Meet <strong>Rooomio</strong> — our flagship mobile-first hospitality ecosystem. 
              We don't just solve client problems; we architect scalable digital products 
              that redefine industry standards.
            </p>
            <div className="teaser-actions">
              <MagneticButton 
                variant="primary" 
                onClick={() => {
                  navigate('/products')
                  window.scrollTo(0, 0)
                }}
              >
                Explore Roomio
                <ArrowRight size={18} />
              </MagneticButton>
            </div>
          </div>

          <div className="teaser-visual">
            <div className="visual-card">
              <div className="visual-card-glow"></div>
              <div className="visual-card-inner">
                <div className="phone-mockup">
                  <div className="phone-screen">
                    <div className="phone-header">
                      <div className="phone-logo">R</div>
                      <div className="phone-user"></div>
                    </div>
                    <div className="phone-stats">
                      <div className="p-stat"></div>
                      <div className="p-stat"></div>
                    </div>
                    <div className="phone-grid">
                      <div className="p-item"></div>
                      <div className="p-item"></div>
                      <div className="p-item"></div>
                      <div className="p-item"></div>
                    </div>
                    <div className="phone-btn"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductTeaser
