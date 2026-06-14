import { useState } from "react";
import { useSelector } from "react-redux";

const ATSOptimizerPage = () => {

  const resume =
    useSelector(
      state => state.resume
    );

  const [
    jobDescription,
    setJobDescription
  ] = useState("");

  const [
    atsResult,
    setAtsResult
  ] = useState(null);

  const [
    optimizedExperience,
    setOptimizedExperience
  ] = useState("");

  const [
    loading,
    setLoading
  ] = useState(false);

  const analyzeATS = async () => {

    setLoading(true);

    const response =
      await fetch(
        "http://localhost:3000/api/resume/analyze",
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

    setLoading(false);
  };

  const rewriteResume = async () => {

    setLoading(true);

    const response =
      await fetch(
        "http://localhost:3000/api/resume/rewrite",
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

    setOptimizedExperience(
      data.optimizedExperience
    );

    setLoading(false);
  };

  return (
    <div className="max-w-7xl mx-auto p-10">

      <h1 className="text-3xl font-bold mb-6">
        ATS Optimizer
      </h1>

      <textarea
        rows={12}
        value={jobDescription}
        onChange={(e) =>
          setJobDescription(
            e.target.value
          )
        }
        placeholder="Paste Job Description"
        className="w-full border p-4 rounded-lg"
      />

      <button
        onClick={analyzeATS}
        className="mt-5 bg-indigo-600 text-white px-6 py-3 rounded-lg"
      >
        Analyze ATS
      </button>

      {loading && (
        <p className="mt-4">
          Processing...
        </p>
      )}

      {atsResult && (

        <div className="mt-10">

          <h2 className="text-2xl font-bold">
            ATS Score:
            {" "}
            {atsResult.score}%
          </h2>

          <h3 className="mt-5 font-semibold">
            Missing Keywords
          </h3>

          <ul className="list-disc pl-6">

            {atsResult
              .missingKeywords
              .map((keyword,index)=>(
                <li key={index}>
                  {keyword}
                </li>
            ))}

          </ul>

          <button
            onClick={rewriteResume}
            className="mt-5 bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            Rewrite Resume
          </button>

        </div>

      )}

      {optimizedExperience && (

        <div className="mt-10">

          <h2 className="text-2xl font-bold mb-4">
            Optimized Experience
          </h2>

          <div className="border rounded-lg p-5 whitespace-pre-wrap">

            {optimizedExperience}

          </div>

        </div>

      )}

    </div>
  );
};

export default ATSOptimizerPage;