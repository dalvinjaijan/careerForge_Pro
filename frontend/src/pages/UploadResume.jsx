import React, { useState } from 'react'
import Navbar from '../Components/landing/Navbar'
import { IoMdCloudUpload } from "react-icons/io";

import api from '../services/axiosInstance';
import { useDispatch } from 'react-redux';
import { setResumeText } from '../redux/slices/uploadResumeSlice';
import { useNavigate } from 'react-router-dom';

const UploadResume = () => {

  
  const dispatch = useDispatch()
  const [file, setFile] = useState(null);
  const navigate=useNavigate()

  const uploadResume = async () => {

    try {
       const formData = new FormData();

  formData.append("resume", file);

  const response = await api.post(
    `${import.meta.env.VITE_BACKEND_API}/resume/upload`,
    formData
      );
    dispatch(
  setResumeText(
    response.data.extractedText
      )
      );
      navigate("/ats-optimizer");
      
    } catch (error) {
      console.log(error.data.message)
    }

 

  console.log(response.data);
};

  return (
    <div>
      <Navbar />
      <div className="bg-[#eafef6] h-screen w-auto flex justify-center items-center">
        <div className="h-9/12 w-340 bg-white mt-20 rounded-xl shadow-xl">
          <h1 className="text-center text-3xl font-semibold text-blue-900 mt-10">
            Upload Your Resume
          </h1>
          <p className="text-gray-500 text-center mt-2">
            Drag and drop your PDF files or browse to begin
          </p>
          <div className="bg-[#cfffed] h-70 w-200 m-auto mt-5 rounded-2xl border-dotted border-4 border-[#2ba377] flex flex-col justify-center items-center gap-3">
            <IoMdCloudUpload className="text-7xl text-[#19674a] cursor-pointer hover:scale-110 transition hover:text-emerald-900" />
            <p className="text-xl text-green-950 font-semibold">
              Drag & Drop PDF Files Here
            </p>
            <p>or</p>

            {file ? <button className='bg-emerald-600 text-white px-10 py-2 rounded shadow-xl hover:scale-105 transition hover:bg-emerald-900 cursor-pointer hover:shadow-4xl' onClick={uploadResume}>
              Upload Resume
            </button> : <input className="bg-emerald-600 text-white pl-24 py-2 rounded shadow-xl hover:scale-105 transition hover:bg-emerald-900 cursor-pointer hover:shadow-4xl"
              type="file"
              accept=".pdf"
              onChange={(e) =>
                setFile(e.target.files[0])
              }
            />}

          </div>
          <p className="text-gray-500 text-center mt-3">
            Files must be PDF format (.pdf) and under 10MB.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UploadResume
