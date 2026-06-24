import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setATSScore,
  setOptimizedResume,
  setJobDescription
} from "../redux/slices/uploadResumeSlice";

import api from "../services/axiosInstance";
import { useNavigate } from "react-router-dom";

const ATSOptimizerPage = () => {

  const dispatch = useDispatch();

  const {
    originalResume,
    optimizedResume,
    
  } = useSelector(
    (state) => state.uploadedResume
    );
  
  

  const [
    jobDescription,
    settJobDescription,
  ] = useState("");

  const [
    atsResult,
    setAtsResult,
  ] = useState(null);

  const [
    loading,
    setLoading,
  ] = useState(false);

  const [
    rewriteLoading,
    setRewriteLoading,
  ] = useState(false);
  const navigate=useNavigate()

  const analyzeATS = async () => {

    try {

      setLoading(true);

      const response =
        await api.post(
    `${import.meta.env.VITE_BACKEND_API}/resume/analyze`,
              {resume:
                originalResume,
              jobDescription,
            },
          
        );
      dispatch(setATSScore(response.data))



      setAtsResult(response.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  const rewriteResume = async () => {

    try {

      setRewriteLoading(true);

      const response =
        await  api.post(
    `${import.meta.env.VITE_BACKEND_API}/resume/rewrite`,
              {resume:
                originalResume,
              jobDescription,
            },
          
        );

    
      console.log("rewritten",response.data.optimizedResume)

      dispatch(
        setOptimizedResume(
        response.data.optimizedResume
        )
      );
      dispatch(setJobDescription(jobDescription))
      navigate('/resume-preview')

    } catch (error) {

      console.log(error);

    } finally {

      setRewriteLoading(false);

    }
  };

  return (

    <div className="max-w-7xl mx-auto p-8">

      <h1 className="text-3xl font-bold mb-6">

        ATS Resume Optimizer

      </h1>

      <textarea
        rows={12}
        value={jobDescription}
        onChange={(e) =>
          settJobDescription(
            e.target.value
          )
        }
        placeholder="Paste Job Description Here..."
        className="
          w-full
          border
          rounded-lg
          p-4
          focus:outline-none
        "
      />

      <button
        onClick={analyzeATS}
        disabled={loading}
        className="
          mt-5
          bg-indigo-600
          text-white
          px-6
          py-3
          rounded-lg
        "
      >
        {loading
          ? "Analyzing..."
          : "Analyze ATS"}
      </button>

      {atsResult && (

        <div className="mt-10">

          <h2
            className="
              text-2xl
              font-bold
            "
          >
            ATS Score:
            {" "}
            {atsResult.score}%
          </h2>

          <div className="mt-6">

            <h3
              className="
                font-semibold
                text-green-600
              "
            >
              Matched Keywords
            </h3>

            <ul
              className="
                list-disc
                ml-6
              "
            >
              {atsResult
                .matchedKeywords
                ?.map(
                  (
                    keyword,
                    index
                  ) => (
                    <li
                      key={index}
                    >
                      {keyword}
                    </li>
                  )
                )}
            </ul>

          </div>

          <div className="mt-6">

            <h3
              className="
                font-semibold
                text-red-600
              "
            >
              Missing Keywords
            </h3>

            <ul
              className="
                list-disc
                ml-6
              "
            >
              {atsResult
                .missingKeywords
                ?.map(
                  (
                    keyword,
                    index
                  ) => (
                    <li
                      key={index}
                    >
                      {keyword}
                    </li>
                  )
                )}
            </ul>

          </div>

          <div className="mt-6">

            <h3
              className="
                font-semibold
              "
            >
              Suggestions
            </h3>

            <ul
              className="
                list-disc
                ml-6
              "
            >
              {atsResult
                .suggestions
                ?.map(
                  (
                    suggestion,
                    index
                  ) => (
                    <li
                      key={index}
                    >
                      {suggestion}
                    </li>
                  )
                )}
            </ul>

          </div>

          <button
            onClick={
              rewriteResume
            }
            disabled={
              rewriteLoading
            }
            className="
              mt-8
              bg-green-600
              text-white
              px-6
              py-3
              rounded-lg
            "
          >
            {rewriteLoading
              ? "Optimizing..."
              : "Rewrite Resume"}
          </button>

        </div>

      )}

     

    </div>
  );
};

export default ATSOptimizerPage;