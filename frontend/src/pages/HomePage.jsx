import { useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button/Button'

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <section style={{ padding: '2rem', color: '#0f172a' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Home</h1>
        <p style={{ marginBottom: '1.5rem' }}>
          Welcome to the CustomerCare360 frontend. This is the main home page.
        </p>

        <Button variant="primary" size="medium" onClick={() => navigate('/demopage')}>
          Go to Component Demo
        </Button>
      </div>
    </section>
  )
}

export default HomePage
