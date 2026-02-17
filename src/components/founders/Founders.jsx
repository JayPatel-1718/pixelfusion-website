import React, { useState } from 'react'
import { User } from 'lucide-react'
import './Founders.css'

const Founders = () => {
  const [hoveredAvatar, setHoveredAvatar] = useState(null)

  const founders = [
    {
      id: 1,
      name: 'Jay Patel',
      role: 'Co-Founder & Creative Tech Lead',
      bio: 'Creative tech lead specializing in UI design, web applications, and cinematic video editing.',
      image: 'jay.png'
    },
    {
      id: 2,
      name: 'Raj Patel',
      role: 'Co-Founder & Design Systems Strategist',
      bio: 'Design-driven strategist blending graphic design, UI systems, and performance-focused coding.',
      image: 'raj.png'
    },
    {
      id: 3,
      name: 'Paras Thorat',
      role: 'Co-Founder & Visual Brand Designer',
      bio: 'Visual brand designer crafting impactful graphics that elevate identity and recognition.',
      image: null
    }
  ]

  return (
    <section className="founders-section" id="founders">
      <div className="founders-container">
        <div className="founders-grid">
          {/* Left Column - Story Content */}
          <div className="founders-content">
            <h2 className="founders-title">Founders</h2>
            <p className="founders-story">
              Pixel Fusion was born from a shared vision: to bridge the gap between imagination
              and reality. What started as a collaboration between three passionate creatives
              has grown into a team dedicated to crafting digital excellence. We believe that
              great design is not just about aesthetics—it's about creating meaningful experiences
              that resonate with users and drive real results for businesses.
            </p>
            <p className="founders-story">
              Our diverse backgrounds in design, technology, and strategy allow us to approach
              every project from multiple angles, ensuring that we deliver solutions that are
              both beautiful and functional.
            </p>
          </div>

          {/* Right Column - Team Avatars */}
          <div className="founders-visuals">
            <div className="founders-avatar-group">
              {founders.map((founder, index) => (
                <div
                  key={founder.id}
                  className={`founder-card-wrapper ${hoveredAvatar === founder.id ? 'hovered' : ''}`}
                  style={{
                    '--index': index,
                    zIndex: hoveredAvatar === founder.id ? 100 : index + 1
                  }}
                  onMouseEnter={() => setHoveredAvatar(founder.id)}
                  onMouseLeave={() => setHoveredAvatar(null)}
                >
                  <div className="founder-modern-card">
                    <div className="founder-image-box">
                      {founder.image ? (
                        <img src={founder.image} alt={founder.name} />
                      ) : (
                        <div className="founder-image-placeholder">
                          <User size={80} strokeWidth={1} />
                        </div>
                      )}
                    </div>
                    <div className="founder-info-content">
                      <h3 className="founder-name">{founder.name}</h3>
                      <span className="founder-role">{founder.role}</span>
                      <p className="founder-bio">{founder.bio}</p>
                      <div className="founder-social">
                        <div className="social-dot"></div>
                        <span className="social-text">View Profile</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Founders
