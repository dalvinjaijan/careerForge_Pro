import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateResume } from "../../redux/slices/resumeSlice"

const EducationForm = () => {

  const dispatch = useDispatch()

  const education =
    useSelector(
      state => state.resume.education
    )

  const [edu, setEdu] = useState({
    institution: "",
    degree: "",
    startYear: "",
    endYear: ""
  })

  const addEducation = () => {

    dispatch(
      updateResume({
        education: [...education, edu]
      })
    )

    setEdu({
      institution: "",
      degree: "",
      startYear: "",
      endYear: ""
    })
  }

  return (
    <div className="mb-10">

      <h2 className="text-2xl font-bold mb-5">
        Education
      </h2>

      <input
        placeholder="Institution"
        value={edu.institution}
        onChange={(e) =>
          setEdu({
            ...edu,
            institution: e.target.value
          })
        }
        className="border p-3 w-full mb-3"
      />

      <input
        placeholder="Degree"
        value={edu.degree}
        onChange={(e) =>
          setEdu({
            ...edu,
            degree: e.target.value
          })
        }
        className="border p-3 w-full mb-3"
      />

      <input
        placeholder="Start Year"
        value={edu.startYear}
        onChange={(e) =>
          setEdu({
            ...edu,
            startYear: e.target.value
          })
        }
        className="border p-3 w-full mb-3"
      />

      <input
        placeholder="End Year"
        value={edu.endYear}
        onChange={(e) =>
          setEdu({
            ...edu,
            endYear: e.target.value
          })
        }
        className="border p-3 w-full mb-3"
      />

      <button
        onClick={addEducation}
        className="bg-indigo-600 text-white px-5 py-2 rounded"
      >
        Add Education
      </button>

    </div>
  )
}

export default EducationForm