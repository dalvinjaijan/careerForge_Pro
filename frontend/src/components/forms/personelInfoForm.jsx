import { useDispatch, useSelector } from "react-redux"
import { updateResume } from "../../redux/slices/resumeSlice"

const PersonalInfoForm = () => {

  const dispatch = useDispatch()

  const resume = useSelector(
    state => state.resume
  )

  const handleChange = (e) => {

    dispatch(
      updateResume({
        [e.target.name]: e.target.value
      })
    )
  }

  return (
    <div className="mb-10">

      <h2 className="text-2xl font-bold mb-5">
        Personal Information
      </h2>

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={resume.fullName}
        onChange={handleChange}
        className="border p-3 w-full mb-3"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={resume.email}
        onChange={handleChange}
        className="border p-3 w-full mb-3"
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={resume.phone}
        onChange={handleChange}
        className="border p-3 w-full mb-3"
      />

      <textarea
        name="summary"
        placeholder="Professional Summary"
        value={resume.summary}
        onChange={handleChange}
        className="border p-3 w-full"
      />

    </div>
  )
}

export default PersonalInfoForm