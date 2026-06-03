import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateResume } from "../../redux/slices/resumeSlice"

const ExperienceForm = () => {

  const dispatch = useDispatch()

  const experiences =
    useSelector(
      state => state.resume.experience
    )

  const [experience, setExperience] =
    useState({
      company: "",
      role: "",
      description: "",
      startDate: "",
      endDate: ""
    })

  const addExperience = () => {

    dispatch(
      updateResume({
        experience: [
          ...experiences,
          experience
        ]
      })
    )

    setExperience({
      company: "",
      role: "",
      description: "",
      startDate: "",
      endDate: ""
    })
  }

  return (
    <div className="mb-10">

      <h2 className="text-2xl font-bold mb-5">
        Experience
      </h2>

      <input
        placeholder="Company"
        value={experience.company}
        onChange={(e) =>
          setExperience({
            ...experience,
            company: e.target.value
          })
        }
        className="border p-3 w-full mb-3"
      />

      <input
        placeholder="Role"
        value={experience.role}
        onChange={(e) =>
          setExperience({
            ...experience,
            role: e.target.value
          })
        }
        className="border p-3 w-full mb-3"
      />

      <textarea
        placeholder="Description"
        value={experience.description}
        onChange={(e) =>
          setExperience({
            ...experience,
            description: e.target.value
          })
        }
        className="border p-3 w-full mb-3"
      />

      <button
        onClick={addExperience}
        className="bg-indigo-600 text-white px-5 py-2 rounded"
      >
        Add Experience
      </button>

    </div>
  )
}

export default ExperienceForm