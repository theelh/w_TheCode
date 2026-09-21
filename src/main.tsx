import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import "@designcodeio/threeui/style.css";
import Welcome from './pages/welcome.tsx'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router basename="/w_TheCode">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="*" element={<Welcome />} /> {/* fallback */}
      </Routes>
    </Router>
  </React.StrictMode>
)
