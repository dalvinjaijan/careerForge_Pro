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
import ResumePreview from './pages/ResumePreview'
import ResumePDFPage from './pages/ResumePdfPage'
import PaymentSuccessPage from './pages/PaymentSuccessfullPage'
import DashboardPage from './pages/DashboardPage'

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
          <Route path='/resume-preview' element={<ResumePreview />} />
        
          <Route path="/payment-success" element={<PaymentSuccessPage />}/>
          <Route path="/dashboard" element={<DashboardPage/>}/>
          
        </Route >
          <Route
  path="/resume-pdf/:resumeId"
  element={
    <ResumePDFPage />
  }
/>
      </Routes>

    </BrowserRouter>
  )
}

export default App