import { useDispatch } from "react-redux"
import { updateResume } from "../../redux/slices/resumeSlice"

const SkillsForm = () => {

  const dispatch = useDispatch()

  const handleSkills = (e) => {

    dispatch(
      updateResume({
        skills: e.target.value.split(",")
      })
    )
  }

  return (
    <div>

      <h2 className="text-2xl font-bold mb-5">
        Skills
      </h2>

      <textarea
        placeholder="React, Node.js, MongoDB"
        onChange={handleSkills}
        className="border p-3 w-full"
      />

    </div>
  )
}

export default SkillsForm