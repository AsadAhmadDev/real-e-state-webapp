import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import pages (to be created)
import Home from './pages/Home'
import Listings from './pages/Listings'
import Signup from './pages/Signup'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
