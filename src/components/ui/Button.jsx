import './Button.css'

function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  onClick,
  className = '',
  ...props 
}) {
  const classNames = [
    'button',
    `button--${variant}`,
    `button--${size}`,
    disabled && 'button--disabled',
    className
  ].filter(Boolean).join(' ')

  return (
    <button 
      className={classNames}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
