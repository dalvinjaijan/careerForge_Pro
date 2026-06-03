import PersonalInfoForm from "../components/forms/PersonelInfoForm"
import EducationForm from "../components/forms/EducationForm"
import ExperienceForm from "../components/forms/ExperienceForm"
import SkillsForm from "../components/forms/SkillsForm"
import ResumePreview from "../components/preview/ResumePreview"

const ResumeBuilderPage = () => {

  return (
    <div className="flex h-screen">

      <div className="w-1/2 overflow-y-auto border-r p-8">

        <PersonalInfoForm />

        <EducationForm />

        <ExperienceForm />

        <SkillsForm />

      </div>

      <div className="w-1/2 bg-gray-100 overflow-y-auto p-8">

        <ResumePreview />

      </div>

    </div>
  )
}

export default ResumeBuilderPage