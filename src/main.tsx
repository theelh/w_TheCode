import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Welcome from './pages/welcome.tsx'
import About from './pages/about.tsx'
import Project from './pages/projects.tsx'
import Contact from './pages/contact.tsx'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Welcome />} /> {/* fallback */}
      </Routes>
    </Router>
  </React.StrictMode>
)
