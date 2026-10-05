import { useState } from 'react'

import DynamicForm from '../components/forms/DynamicForm'
import Button from '../components/ui/Button/Button'
import Table from '../components/ui/Table/Table'

const buttonVariants = [
  { label: 'Primary', variant: 'primary' },
  { label: 'Secondary', variant: 'secondary' },
  { label: 'Outline', variant: 'outline' },
  { label: 'Success', variant: 'success' },
  { label: 'Danger', variant: 'danger' },
  { label: 'Link', variant: 'link' },
]

const sizeExamples = [
  { label: 'Small', variant: 'primary', size: 'small' },
  { label: 'Medium', variant: 'secondary', size: 'medium' },
  { label: 'Large', variant: 'outline', size: 'large' },
]

const demoFields = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'password', label: 'Password', type: 'password', required: true },
  { name: 'age', label: 'Age', type: 'number', min: 0 },
  { name: 'date', label: 'Date', type: 'date' },
]

const tableColumns = [
  { key: 'customer', header: 'Customer' },
  { key: 'service', header: 'Service' },
  { key: 'status', header: 'Status' },
  { key: 'amount', header: 'Amount' },
]

const tableData = [
  { id: 1, customer: 'Ava Johnson', service: 'Internet Service', status: 'Active', amount: '$89.00' },
  { id: 2, customer: 'Noah Smith', service: 'Water Bill', status: 'Pending', amount: '$45.50' },
  { id: 3, customer: 'Emma Davis', service: 'Support Request', status: 'Resolved', amount: '$0.00' },
]

const ComponentDemo = () => {
  const [lastSubmitted, setLastSubmitted] = useState(null)

  const handleFormSubmit = (values) => {
    setLastSubmitted(values)
    console.log('Submitted form values:', values)
  }

  return (
    <section style={{ padding: '2rem', color: '#0f172a' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Component Demo</h1>

        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>Buttons</h2>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem' }}>
            {buttonVariants.map((button) => (
              <Button key={button.variant} variant={button.variant}>
                {button.label}
              </Button>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <Button variant="primary" disabled>
              Disabled
            </Button>
            <Button variant="secondary" loading>
              Loading
            </Button>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {sizeExamples.map((button) => (
              <Button
                key={button.label}
                variant={button.variant}
                size={button.size}
              >
                {button.label}
              </Button>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>Reusable Table</h2>
          <Table columns={tableColumns} data={tableData} />
        </div>

        <div>
          <h2 style={{ marginBottom: '1rem' }}>Reusable Form</h2>
          <DynamicForm
            title="Demo Form"
            fields={demoFields}
            submitText="Save"
            onSubmit={handleFormSubmit}
          />

          {lastSubmitted && (
            <div
              style={{
                marginTop: '1.5rem',
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                padding: '1rem',
              }}
            >
              <h3 style={{ marginTop: 0 }}>Submitted Data</h3>
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                {JSON.stringify(lastSubmitted, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ComponentDemo
