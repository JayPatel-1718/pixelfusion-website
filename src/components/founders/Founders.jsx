import React, { useState } from 'react'
import './Founders.css'

const Founders = () => {
  const [hoveredAvatar, setHoveredAvatar] = useState(null)

  const founders = [
    {
      id: 1,
      name: 'Alex Chen',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Sarah Miller',
      role: 'Technical Lead',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'James Wilson',
      role: 'Strategy Director',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face'
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
              both beautiful and functional. We're proud of the work we do and the relationships 
              we build with our clients.
            </p>
          </div>

          {/* Right Column - Team Avatars */}
          <div className="founders-visuals">
            <div className="founders-avatar-group">
              {founders.map((founder, index) => (
                <div
                  key={founder.id}
                  className={`founder-avatar-wrapper ${hoveredAvatar === founder.id ? 'hovered' : ''}`}
                  style={{
                    '--index': index,
                    zIndex: hoveredAvatar === founder.id ? 10 : index + 1
                  }}
                  onMouseEnter={() => setHoveredAvatar(founder.id)}
                  onMouseLeave={() => setHoveredAvatar(null)}
                >
                  <div className="founder-avatar">
                    <img src={founder.image} alt={founder.name} />
                  </div>
                  <div className="founder-tooltip">
                    <span className="founder-name">{founder.name}</span>
                    <span className="founder-role">{founder.role}</span>
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
