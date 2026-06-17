import PersonalInfoForm from "../components/forms/PersonelInfoForm"
import EducationForm from "../components/forms/EducationForm"
import ExperienceForm from "../components/forms/ExperienceForm"
import SkillsForm from "../components/forms/SkillsForm"
import ResumePreview from "../components/preview/ResumePreview"
import { useNavigate } from "react-router-dom"
import Navbar from "../Components/landing/Navbar"

const ResumeBuilderPage = () => {
const navigate=useNavigate()
  return (
    <div className="flex h-screen bg-[#eafef6]">
      <Navbar />

      <div className="w-1/2 overflow-y-auto rounded-xl mt-40 mb-20 mx-20 px-10 bg-white shadow-2xl p-10 [scrollbar-width:none] [&::-webkit-webkit-scrollbar]:hidden ">
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

      <div className="w-1/2 overflow-y-auto p-8 mt-20 [scrollbar-width:none] [&::-webkit-webkit-scrollbar]:hidden">
        <ResumePreview />
      </div>
    </div>
  );
}

export default ResumeBuilderPage  