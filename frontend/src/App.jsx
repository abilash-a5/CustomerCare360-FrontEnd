import { Routes, Route } from 'react-router-dom'

import MainLayout from './components/layout/MainLayout'
import HomePage from './pages/HomePage'
import ComponentDemo from './pages/ComponentDemo'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demopage" element={<ComponentDemo />} />
      </Routes>
    </MainLayout>
  )
}

export default App
