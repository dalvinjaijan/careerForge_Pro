import { useSelector } from "react-redux"

const ResumePreview = () => {

    const resume = useSelector((state) => state.resume)

    return (
        <div className="bg-white p-8 shadow-lg min-h-screen">

            <h1 className="text-3xl font-bold">
                {resume.fullName}
            </h1>

            <p>{resume.email}</p>
            <p>{resume.phone}</p>

            <h2 className="text-xl mt-5 font-semibold">
                Summary
            </h2>

            <p>{resume.summary}</p>

        </div>
    )
}

export default ResumePreview