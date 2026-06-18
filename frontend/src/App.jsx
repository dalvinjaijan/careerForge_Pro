import React from 'react'
import LandingPage from './pages/landingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import ResumeBuilderPage from './pages/BuilderPage'
import ProtectedRoute from './components/protectedRoute'
import ATSOptimizerPage from './pages/ATSOptimizerPage'
import UploadResume from './pages/UploadResume'
import GetStarted from './pages/GetStarted'

const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/signup" element={<SignupPage />} />
        <Route element={<ProtectedRoute />} >
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/resume-builder" element={<ResumeBuilderPage />} />
          <Route path="/ats-optimizer" element={<ATSOptimizerPage />} />
          <Route path='/upload-resume' element={<UploadResume />} />
          
        </Route >
      </Routes>

    </BrowserRouter>
  )
}

export default App