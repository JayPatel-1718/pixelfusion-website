import { useRef, useState, useCallback } from 'react'
import './MagneticButton.css'

function MagneticButton({ 
  children, 
  variant = 'glass', 
  className = '', 
  onClick,
  ...props 
}) {
  const buttonRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = useCallback((e) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Calculate distance from center with damping
    const distance = 6
    const x = (e.clientX - centerX) / distance
    const y = (e.clientY - centerY) / distance

    // Limit the movement range
    const maxMovement = 20
    const clampedX = Math.max(-maxMovement, Math.min(maxMovement, x))
    const clampedY = Math.max(-maxMovement, Math.min(maxMovement, y))

    setPosition({ x: clampedX, y: clampedY })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 })
    setIsHovered(false)
  }, [])

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])

  return (
    <button
      ref={buttonRef}
      className={`magnetic-button magnetic-button--${variant} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      {...props}
    >
      <span 
        className="magnetic-button__content"
        style={{
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
      >
        {children}
      </span>
    </button>
  )
}

export default MagneticButton
