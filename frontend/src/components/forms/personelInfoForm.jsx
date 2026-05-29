import { useDispatch, useSelector } from "react-redux"
import { updateResume } from "../../redux/slices/resumeSlice.js"

const PersonalInfoForm = () => {

    const dispatch = useDispatch()

    const resume = useSelector((state) => state.resume)

    const handleChange = (e) => {

        dispatch(updateResume({
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="space-y-4">

            <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={resume.fullName}
                onChange={handleChange}
                className="border p-3 w-full"
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={resume.email}
                onChange={handleChange}
                className="border p-3 w-full"
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