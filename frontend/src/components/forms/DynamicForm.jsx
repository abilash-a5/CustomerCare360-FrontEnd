import Form from './Form'
import Button from '../ui/Button/Button'

const allowedTypes = ['text', 'email', 'number', 'password', 'date']

const inputStyle = {
  width: '100%',
  padding: '0.75rem 0.9rem',
  borderRadius: '8px',
  border: '1px solid #d1d5db',
  fontSize: '0.95rem',
  boxSizing: 'border-box',
}

const DynamicForm = ({
  title,
  fields = [],
  submitText = 'Submit',
  onSubmit,
  className = '',
}) => {
  const handleSubmit = (values) => {
    if (onSubmit) {
      onSubmit(values)
    }
  }

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '620px',
        backgroundColor: '#ffffff',
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        padding: '1.5rem',
        boxSizing: 'border-box',
      }}
    >
      {title && (
        <h3 style={{ margin: '0 0 1.25rem', fontSize: '1.35rem', color: '#0f172a' }}>
          {title}
        </h3>
      )}

      <Form onSubmit={handleSubmit} className={className}>
        {fields.map((field) => {
          const {
            name,
            label,
            type = 'text',
            required = false,
            placeholder,
            value,
            min,
            max,
            ...rest
          } = field

          const inputType = allowedTypes.includes(type) ? type : 'text'

          return (
            <div key={name} style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              {label && (
                <label htmlFor={name} style={{ fontWeight: 600, color: '#1f2937' }}>
                  {label}
                  {required ? ' *' : ''}
                </label>
              )}

              <input
                id={name}
                name={name}
                type={inputType}
                required={required}
                placeholder={placeholder || label || name}
                defaultValue={value}
                min={min}
                max={max}
                style={inputStyle}
                {...rest}
              />
            </div>
          )
        })}

        <Button type="submit" variant="primary" size="medium">
          {submitText}
        </Button>
      </Form>
    </div>
  )
}

export default DynamicForm
