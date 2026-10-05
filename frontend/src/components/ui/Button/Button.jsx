import './Button.css'

const Button = ({
  children,
  type = 'button',
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'medium',
  className = '',
  loading = false,
}) => {
  const safeVariant = ['primary', 'secondary', 'outline', 'success', 'danger', 'link'].includes(variant)
    ? variant
    : 'primary'
  const safeSize = ['small', 'medium', 'large'].includes(size) ? size : 'medium'

  const buttonClasses = [
    'cc-button',
    `cc-button--${safeVariant}`,
    `cc-button--${safeSize}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading}
      className={buttonClasses}
    >
      {loading ? 'Loading...' : children}
    </button>
  )
}

export default Button
