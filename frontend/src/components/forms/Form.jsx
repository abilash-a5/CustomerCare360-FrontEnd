const Form = ({
  children,
  onSubmit,
  className = '',
  ...rest
}) => {
  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const values = Object.fromEntries(formData.entries())

    if (onSubmit) {
      onSubmit(values, event)
    }
  }

  return (
    <form
      {...rest}
      className={className}
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '100%',
      }}
    >
      {children}
    </form>
  )
}

export default Form
