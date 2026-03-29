import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './components/HomePage'
import ProjectPage from './components/ProjectPage'

function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
