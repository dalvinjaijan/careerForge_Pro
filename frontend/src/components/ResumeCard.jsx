import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import api from "../services/axiosInstance";

import {
  deleteResume,
  setSelectedResume,
} from "../redux/slices/dashboardSlice";
import { setResumeFromDashboard } from "../redux/slices/uploadResumeSlice";
import { useState } from "react";

const ResumeCard = ({
  resume,
}) => {
const [coverLetter,
setCoverLetter] =
useState("");

const [open,
setOpen] =
useState(false);
  const navigate =
    useNavigate();

  const dispatch =
    useDispatch();

  const handleDelete =
    async () => {

      const confirmDelete =
        window.confirm(
          "Delete this resume?"
        );

      if (!confirmDelete)
        return;

      try {

        await api.delete(
          `/dashboard/${resume._id}`
        );

        dispatch(
          deleteResume(
            resume._id
          )
        );

        alert(
          "Resume deleted"
        );

      } catch (error) {

        alert(
          error.response?.data
            ?.message ||
            "Delete failed"
        );

      }

    };

  const handleView =
    async () => {

      try {

        const response =
          await api.get(
            `/dashboard/${resume._id}`
          );

       dispatch(
      setResumeFromDashboard(
        response.data
      )
    );


        navigate(
          `/resume-preview`
        );

      } catch (error) {

        alert(
          error.response?.data
            ?.message ||
            "Failed to load resume"
        );

      }

    };

  const handleDownload =
    () => {

      navigate(
        `/resume-pdf/${resume._id}`
      );

    };

  const generateCoverLetter =
async (resumeId) => {

  try {

    const response =
      await api.post(
        `/resume/generate-cover-letter/${resumeId}`
      );

    setCoverLetter(
      response.data.coverLetter
    );

    setOpen(true);

  }

  catch (err) {

    alert(
      err.response?.data?.message ||
      "Failed"
    );

  }

};
  return (

    <div
      className="
      bg-white
      rounded-2xl
      shadow-md
      p-6
      border
      hover:shadow-xl
      transition
      duration-300
      "
    >

      <h2
        className="
        text-xl
        font-bold
        text-gray-800
        "
      >

        {resume.title}

      </h2>

      <div className="mt-4 space-y-2">

        <p>

          <span
            className="font-semibold"
          >
            ATS Score:
          </span>

          {" "}

          {resume.atsScore}%

        </p>

        <p>

          <span
            className="font-semibold"
          >
            Created:
          </span>

          {" "}

          {new Date(
            resume.createdAt
          ).toLocaleDateString()}

        </p>

      </div>

      <div
        className="
        mt-6
        grid
        grid-cols-2
        gap-3
        "
      >

        <button
          onClick={
            handleView
          }
          className="
          bg-blue-600
          text-white
          py-2
          rounded-lg
          hover:bg-blue-700
          "
        >

          View

        </button>

        <button
          onClick={
            handleDownload
          }
          className="
          bg-green-600
          text-white
          py-2
          rounded-lg
          hover:bg-green-700
          "
        >

          Download PDF

        </button>

        <button
           onClick={() =>
    generateCoverLetter(
      resume._id
    )
  }
          className="
          bg-purple-600
          text-white
          py-2
          rounded-lg
          hover:bg-purple-700
          "
        >

          Cover Letter

        </button>

        <button
          onClick={
            handleDelete
          }
          className="
          bg-red-600
          text-white
          py-2
          rounded-lg
          hover:bg-red-700
          "
        >

          Delete

        </button>

      </div>

      {
open && (

<div className="fixed inset-0 bg-black/50 flex justify-center items-center">

<div className="bg-white w-[900px] h-[700px] rounded-xl p-6 overflow-auto">

<h2 className="text-2xl font-bold mb-5">

Generated Cover Letter

</h2>

<textarea

readOnly

value={coverLetter}

className="w-full h-[500px] border rounded-lg p-4"

/>

<div className="flex justify-end gap-3 mt-5">

<button

onClick={()=>{
navigator.clipboard.writeText(
coverLetter
);
alert("Copied!");
}}

className="bg-green-600 text-white px-5 py-2 rounded-lg"

>

Copy

</button>

<button

onClick={()=>
setOpen(false)
}

className="bg-gray-500 text-white px-5 py-2 rounded-lg"

>

Close

</button>

</div>

</div>

</div>

)
}

    </div>

  );

};

export default ResumeCard;