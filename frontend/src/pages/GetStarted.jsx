import React from 'react'
import { useNavigate } from 'react-router-dom'

const GetStarted = () => {

    const navigate=useNavigate()
  return (
    <div className="grid grid-cols-3 gap-10 px-8 pt-8">

        <div className="shadow-xl p-8 rounded-2xl border-2 border-[#0CDBB4]">
          <h3 className="text-2xl font-semibold mb-4">Dashboard</h3>

        
        </div>

        <div className="shadow-xl p-8 rounded-2xl border-2 border-[#0CDBB4]" onClick={()=>navigate('/upload-resume')}>
          <h3 className="text-2xl font-semibold mb-4">upload Resume</h3>

        </div>

        <div className="shadow-xl p-8 rounded-2xl border-2 border-[#0CDBB4]" onClick={()=>navigate('/resume-builder')}>
          <h3 className="text-2xl font-semibold mb-4">Create Resume</h3>

        </div>
      </div>
  )
}

export default GetStarted
