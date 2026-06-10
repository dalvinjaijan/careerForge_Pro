import PersonalInfoForm from "../components/forms/PersonelInfoForm"
import EducationForm from "../components/forms/EducationForm"
import ExperienceForm from "../components/forms/ExperienceForm"
import SkillsForm from "../components/forms/SkillsForm"
import ResumePreview from "../components/preview/ResumePreview"
import { useNavigate } from "react-router-dom"

const ResumeBuilderPage = () => {
const navigate=useNavigate()
  return (
    <div className="flex h-screen">

      <div className="w-1/2 overflow-y-auto border-r p-8">

        <PersonalInfoForm />

        <EducationForm />

        <ExperienceForm />

        <SkillsForm />
        <button
          onClick={() => navigate("/ats-optimizer")}
          className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-lg"
        >
          next
        </button>

      </div>

      <div className="w-1/2 bg-gray-100 overflow-y-auto p-8">

        <ResumePreview />

      </div>

    </div>
  )
}

export default ResumeBuilderPage  