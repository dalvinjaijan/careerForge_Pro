import React from 'react'
import LandingPage from './pages/landingPage'

const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<LandingPage />} />

        {/* <Route path="/login" element={<LoginPage />} />

        <Route path="/signup" element={<SignupPage />} /> */}

      </Routes>

    </BrowserRouter>
  )
}

export default App