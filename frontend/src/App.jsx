import React from 'react'
import LandingPage from './pages/landingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignupPage from './pages/SignupPage'

const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<LandingPage />} />

        {/* <Route path="/login" element={<LoginPage />} /> */}

        <Route path="/signup" element={<SignupPage />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App