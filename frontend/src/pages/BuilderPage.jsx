import ResumePreview from "../components/preview/ResumePreview"
import PersonalInfoForm from "../components/forms/PersonalInfoForm"

const BuilderPage = () => {

    return (
        <div className="flex h-screen">

            <div className="w-1/2 overflow-y-scroll p-5 border-r">
                <PersonalInfoForm />
            </div>

            <div className="w-1/2 bg-gray-100 overflow-y-scroll p-5">
                <ResumePreview />
            </div>

        </div>
    )
}

export default BuilderPage