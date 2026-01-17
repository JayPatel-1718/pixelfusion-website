import './Badge.css'

function Badge({ children, className = '' }) {
  return (
    <div className={`badge ${className}`}>
      {children}
    </div>
  )
}

export default Badge
