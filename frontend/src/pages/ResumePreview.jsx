import { useDispatch, useSelector } from "react-redux";
import api from "../services/axiosInstance";
import { setResumeId } from "../redux/slices/uploadResumeSlice";
import Navbar from "../Components/landing/Navbar";

const ResumePreview = ( { pdfMode = false,
}) => {
    const { optimizedResume, originalResume, atsScore, jobDescription,resumeId } = useSelector((state) => state.uploadedResume)
    const dispatch=useDispatch()
const saveResume = async () => {

  try {

   const saveResponse= await api.post(
      "/resume/save",
      {
        originalResume,

        optimizedResume,

        atsScore,

        jobDescription,
      }
    );
dispatch(
  setResumeId(
    saveResponse.data._id
  ))
    alert(
      "Resume Saved"
    );

  } catch (error) {

   alert(
    error.response?.data?.message ||
    "Something went wrong"
  );


  }

};
  const downloadPDF = async () => {

    try {
   let currentResumeId =
      resumeId;

    // Save first if not saved
    if (!currentResumeId) {

      const saveResponse =
        await api.post(
          "/resume/save",
          {
            originalResume,
            optimizedResume,
            atsScore,
            jobDescription,
          }
        );

      currentResumeId =
        saveResponse.data.resumeId;
      dispatch(setResumeId(
        currentResumeId
      ))
    }

     const response =
      await api.get(
        `/resume/generate-pdf/${currentResumeId}`,
        {
          responseType:
            "blob",
        }
      );

    const url =
      window.URL.createObjectURL(
        new Blob(
          [response.data],
          {
            type:
              "application/pdf",
          }
        )
      );

    const link =
      document.createElement(
        "a"
      );

    link.href = url;

    link.download =
      "ATS-Resume.pdf";

    document.body.appendChild(
      link
    );

    link.click();

    link.remove();

    window.URL.revokeObjectURL(
      url
    );

  } catch (error) {

    alert(
      error.response?.data
        ?.message ||
        "Download failed"
    );

  }
};
  

  if (!optimizedResume) {
    return null;
  }

    return (
              <div className="">
      
            {!pdfMode && (
                <div>
                    <Navbar />
                    <div
                className="
              flex
              justify-between
              items-center
              mb-4
              px-12
              mt-28
            "
            >
                <h2
                    className="
                text-2xl
                font-bold
              "
                >
                    Optimized Resume
                </h2>
                <div className="flex gap-2">
                    <button className="bg-green-400 text-white px-5 py-2 rounded-lg "
                        onClick={saveResume}
                    >
                        Save Resume
                    </button>

                    <button
                        onClick={
                            downloadPDF
                        }
                        className="
                bg-blue-600
                text-white
                px-5
                py-2
                rounded-lg
              "
                    >
                        Download PDF
                    </button>
                </div>
            </div>
                </div>
                )}
 <div
      className="
        bg-white
        shadow-lg
        rounded-lg
        p-10
        text-gray-900
      "
    >

      {/* Header */}

      <div className="text-center">

        <h1
          className="
            text-4xl
            font-bold
          "
        >
          {optimizedResume.fullName}
        </h1>

        <p className="mt-2">

          {optimizedResume.email}

          {optimizedResume.phone &&
            ` | ${optimizedResume.phone}`}

          {optimizedResume.location &&
            ` | ${optimizedResume.location}`}

        </p>

        <p className="mt-1">

          {optimizedResume.linkedin &&
            `LinkedIn: ${optimizedResume.linkedin}`}

          {optimizedResume.github &&
            ` | GitHub: ${optimizedResume.github}`}

        </p>

      </div>

      {/* Summary */}

      {optimizedResume.summary && (

        <section className="mt-8">

          <h2
            className="
              text-xl
              font-bold
              border-b
              pb-2
            "
          >
            PROFESSIONAL SUMMARY
          </h2>

          <p className="mt-3">
            {optimizedResume.summary}
          </p>

        </section>

      )}

      {/* Skills */}

      {optimizedResume.skills?.length > 0 && (

        <section className="mt-8">

          <h2
            className="
              text-xl
              font-bold
              border-b
              pb-2
            "
          >
            SKILLS
          </h2>

          <div className="mt-3 flex flex-wrap gap-2">

            {optimizedResume.skills.map(
              (skill, index) => (

                <span
                  key={index}
                  className="
                    border
                    rounded
                    px-3
                    py-1
                  "
                >
                  {skill}
                </span>

              )
            )}

          </div>

        </section>

      )}

      {/* Experience */}

      {optimizedResume.experience?.company?.length > 0 && (

        <section className="mt-8">

          <h2
            className="
              text-xl
              font-bold
              border-b
              pb-2
            "
          >
            EXPERIENCE
          </h2>

          {optimizedResume.experience.map(
            (exp, index) => (

              <div
                key={index}
                className="mt-5"
              >

                <div
                  className="
                    flex
                    justify-between
                  "
                >

                  <div>

                    <h3
                      className="
                        font-bold
                        text-lg
                      "
                    >
                      {exp.position}
                    </h3>

                    <p>
                      {exp.company}
                    </p>

                  </div>

                  <p>
                    {exp.duration}
                  </p>

                </div>

                <ul
                  className="
                    list-disc
                    ml-6
                    mt-3
                  "
                >

                  {exp.achievements?.map(
                    (
                      achievement,
                      idx
                    ) => (

                      <li key={idx}>
                        {achievement}
                      </li>

                    )
                  )}

                </ul>

              </div>

            )
          )}

        </section>

      )}

      {/* Projects */}

      {optimizedResume.projects?.length > 0 && (

        <section className="mt-8">

          <h2
            className="
              text-xl
              font-bold
              border-b
              pb-2
            "
          >
            PROJECTS
          </h2>

          {optimizedResume.projects.map(
            (
              project,
              index
            ) => (

              <div
                key={index}
                className="mt-4"
              >

                <h3
                  className="
                    font-bold
                  "
                >
                  {project.title}
                </h3>

                <p className="italic">

                  {project.technologies?.join(
                    ", "
                  )}

                </p>

                <ul
                  className="
                    list-disc
                    ml-6
                    mt-2
                  "
                >

                  {project.achievements?.map(
                    (
                      item,
                      idx
                    ) => (

                      <li key={idx}>
                        {item}
                      </li>

                    )
                  )}

                </ul>

              </div>

            )
          )}

        </section>

      )}

      {/* Education */}

      {optimizedResume.education?.length > 0 && (

        <section className="mt-8">

          <h2
            className="
              text-xl
              font-bold
              border-b
              pb-2
            "
          >
            EDUCATION
          </h2>

          {optimizedResume.education.map(
            (
              edu,
              index
            ) => (

              <div
                key={index}
                className="mt-4"
              >

                <h3
                  className="
                    font-semibold
                  "
                >
                  {edu.degree}
                </h3>

                <p>
                  {edu.institution}
                </p>

                <p>
                  {edu.year}
                </p>

              </div>

            )
          )}

        </section>

      )}

    </div>
            

            </div>
           
   
  );
};

export default ResumePreview;