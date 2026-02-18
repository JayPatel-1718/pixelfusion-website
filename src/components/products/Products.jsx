import React from 'react'
import { ExternalLink, Smartphone, ShieldCheck, Zap, BarChart3, Users, Moon, Sun, Monitor, AppWindow } from 'lucide-react'
import './Products.css'

const Products = () => {
  return (
    <section className="products-section" id="products">
      <div className="products-container">
        <div className="section-header">
          <span className="section-badge">Featured Product</span>
          <h2 className="section-title">Automate Your Hotel <span className="text-gradient">From Mobile.</span></h2>
          <p className="section-subtitle">
            Rooomio is an all-in-one Management Ecosystem. Eliminate paper trails, generate dynamic
            QR codes for guests, and provide a high-end digital concierge experience without
            making guests download a single app.
          </p>
        </div>

        <div className="product-showcase">
          <div className="product-main-card">
            <div className="product-glow"></div>
            <div className="product-content">
              <div className="product-header">
                <div className="product-logo-box">
                  <div className="product-logo-placeholder">R</div>
                </div>
                <div className="product-title-group">
                  <h3 className="product-name">Rooomio</h3>
                  <span className="product-tagline">The Future of Mobile-First Hospitality Infrastructure.</span>
                </div>
              </div>

              <div className="comparison-container">
                <div className="comparison-box old-way">
                  <h5>The Old Way</h5>
                  <ul>
                    <li><span>✕</span> Paper check-in forms and logs</li>
                    <li><span>✕</span> Guests must download heavy hotel apps</li>
                    <li><span>✕</span> Scattered meal management</li>
                  </ul>
                </div>
                <div className="comparison-box new-way">
                  <h5>The Rooomio Way</h5>
                  <ul>
                    <li><span>✓</span> Instant digital registration</li>
                    <li><span>✓</span> QR-based Web Concierge (No App)</li>
                    <li><span>✓</span> Real-time Room & Meal Sync</li>
                  </ul>
                </div>
              </div>

              <div className="product-actions">
                <a href="https://roomio-landing-page.vercel.app/" target="_blank" rel="noopener noreferrer" className="product-btn btn-primary">
                  Launch Now <ExternalLink size={18} />
                </a>
                <button className="product-btn btn-secondary">
                  See How It Works
                </button>
              </div>
            </div>

            <div className="product-visuals">
              <div className="visual-container">
                <div className="mockup-frame">
                  <div className="mockup-screen">
                    <div className="screen-content">
                      <div className="screen-header">
                        <div className="screen-logo">Rooomio</div>
                        <div className="screen-profile"></div>
                      </div>

                      <div className="screen-welcome">
                        <span className="welcome-tag">SCAN FOR CONCIERGE</span>
                        <h5 className="welcome-text">Explore your luxury digital amenity</h5>
                      </div>

                      <div className="screen-stats-compact">
                        <div className="mini-stat">
                          <span className="m-label">ACTIVE GUESTS</span>
                          <span className="m-value">124</span>
                        </div>
                        <div className="mini-stat">
                          <span className="m-label">REVENUE STATS</span>
                          <span className="m-value">₹1.2L+</span>
                        </div>
                      </div>

                      <div className="screen-grid">
                        <div className="grid-item">
                          <div className="item-icon">🍽️</div>
                          <span>Order</span>
                        </div>
                        <div className="grid-item">
                          <div className="item-icon">✨</div>
                          <span>Clean</span>
                        </div>
                        <div className="grid-item">
                          <div className="item-icon">🛎️</div>
                          <span>Bell</span>
                        </div>
                        <div className="grid-item">
                          <div className="item-icon">💬</div>
                          <span>Chat</span>
                        </div>
                      </div>

                      <div className="screen-button">
                        Unlock Your Room
                      </div>
                    </div>
                  </div>
                  <div className="glow-effect"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="features-intro">
            <h4>One App, Total Control</h4>
            <p>Everything you need to run a 5-star property from your pocket.</p>
          </div>

          <div className="features-bento-grid">
            <div className="bento-item">
              <div className="bento-icon-box"><Monitor /></div>
              <h4>Admin HQ</h4>
              <p>Monitor entire property occupancy, revenue, and active meal plans in real-time.</p>
            </div>

            <div className="bento-item">
              <div className="bento-icon-box"><Smartphone /></div>
              <h4>Digital Bridge</h4>
              <p>Generate unique session-based QR codes for guests. No passwords, no accounts.</p>
            </div>

            <div className="bento-item">
              <div className="bento-icon-box"><AppWindow /></div>
              <h4>Web Concierge</h4>
              <p>Guests view amenities, stay details, and countdown timers via browser.</p>
            </div>

            <div className="bento-item bento-ai">
              <div className="bento-icon-box"><Zap /></div>
              <div className="ai-tag">Sub-second</div>
              <h4>Instant Sync</h4>
              <p>Built with Firebase for sub-second database updates across all staff devices.</p>
            </div>

            <div className="bento-item">
              <div className="bento-icon-box"><ShieldCheck /></div>
              <h4>Guest Privacy</h4>
              <p>Session-based isolation ensuring guest data is safe and secure.</p>
            </div>

            <div className="bento-item">
              <div className="bento-icon-box"><BarChart3 /></div>
              <h4>AI Insights</h4>
              <p>Integrated smart insights for occupancy prediction and revenue growth.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
