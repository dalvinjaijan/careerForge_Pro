import React from 'react'

const UploadResume = () => {
  return (
    <div>
      <div>
   <h1>upload your resume</h1>
      <input type="file" />
      </div>
       
      
        <div>
        <h1>paste job description </h1> 
        <input type="text" className='border-2'/>
      </div>
      <button>rewrite resume</button>
    </div>

  
  )
}

export default UploadResume
