import { useState } from "react";
import { useSelector } from "react-redux";

const ATSOptimizerPage = () => {

  const resume = useSelector(
    state => state.resume
  );

  const [jobDescription, setJobDescription] =
    useState("");

  const [atsResult, setAtsResult] =
    useState(null);

  const analyzeATS = async () => {

    const response = await fetch(
      "http://localhost:5000/api/ats/analyze",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json"
        },
        body: JSON.stringify({
          resume,
          jobDescription
        })
      }
    );

    const data =
      await response.json();

    setAtsResult(data);
  };

  return (
    <div className="max-w-7xl mx-auto p-10">

      <h1 className="text-3xl font-bold mb-5">
        ATS Optimizer
      </h1>

      <textarea
        rows={12}
        placeholder="Paste Job Description"
        value={jobDescription}
        onChange={(e) =>
          setJobDescription(
            e.target.value
          )
        }
        className="w-full border p-4 rounded-lg"
      />

      <button
        onClick={analyzeATS}
        className="mt-5 bg-indigo-600 text-white px-5 py-3 rounded-lg"
      >
        Analyze ATS
      </button>

      {atsResult && (

        <div className="mt-10">

          <h2 className="text-2xl font-bold">
            ATS Score:
            {atsResult.score}%
          </h2>

          <h3 className="mt-5 font-semibold">
            Missing Keywords
          </h3>

          <ul>

            {
              atsResult.missingKeywords.map(
                (keyword, index) => (
                  <li key={index}>
                    • {keyword}
                  </li>
                )
              )
            }

          </ul>

        </div>

      )}

    </div>
  );
};

export default ATSOptimizerPage;