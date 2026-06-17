import { useSelector } from "react-redux";

const ResumePreview = () => {
  const resume = useSelector((state) => state.resume);

  return (
    <div className="bg-white max-w-4xl mx-auto p-10 shadow-xl min-h-screen">

      {/* Header */}
      <div className="text-center border-b pb-4">
        <h1 className="text-4xl font-bold text-gray-800">
          {resume.fullName || "Your Name"}
        </h1>

        <div className="flex justify-center gap-4 mt-2 text-gray-600 text-sm">
          <span>{resume.email}</span>
          <span>|</span>
          <span>{resume.phone}</span>
        </div>
      </div>

      {/* Summary */}
      <section className="mt-20">
        <h2 className="text-xl font-bold border-b pb-2 uppercase">
          Professional Summary
        </h2>

        <p className="mt-3 text-gray-700 leading-relaxed">
          {resume.summary || "Your professional summary will appear here."}
        </p>
      </section>

      {/* Experience */}
      <section className="mt-6">
        <h2 className="text-xl font-bold border-b pb-2 uppercase">
          Experience
        </h2>

        {resume.experience?.length > 0 ? (
          resume.experience.map((exp, index) => (
            <div key={index} className="mt-4">

              <div className="flex justify-between">

                <h3 className="font-semibold text-lg">
                  {exp.role}
                </h3>

                <span className="text-sm text-gray-500">
                  {exp.startDate} - {exp.endDate}
                </span>

              </div>

              <p className="font-medium text-gray-700">
                {exp.company}
              </p>

              <p className="text-gray-600 mt-1">
                {exp.description}
              </p>

            </div>
          ))
        ) : (
          <p className="mt-3 text-gray-500">
            Experience details will appear here.
          </p>
        )}
      </section>

      {/* Education */}
      <section className="mt-6">
        <h2 className="text-xl font-bold border-b pb-2 uppercase">
          Education
        </h2>

        {resume.education?.length > 0 ? (
          resume.education.map((edu, index) => (
            <div key={index} className="mt-4">

              <div className="flex justify-between">

                <h3 className="font-semibold text-lg">
                  {edu.degree}
                </h3>

                <span className="text-sm text-gray-500">
                  {edu.startYear} - {edu.endYear}
                </span>

              </div>

              <p className="text-gray-700">
                {edu.institute}
              </p>

            </div>
          ))
        ) : (
          <p className="mt-3 text-gray-500">
            Education details will appear here.
          </p>
        )}
      </section>

      {/* Skills */}
      <section className="mt-6">
        <h2 className="text-xl font-bold border-b pb-2 uppercase">
          Skills
        </h2>

        {resume.skills?.length > 0 ? (
          <div className="flex flex-wrap gap-2 mt-3">

            {resume.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 rounded-md text-sm"
              >
                {skill}
              </span>
            ))}

          </div>
        ) : (
          <p className="mt-3 text-gray-500">
            Skills will appear here.
          </p>
        )}
      </section>

    </div>
  );
};

export default ResumePreview;