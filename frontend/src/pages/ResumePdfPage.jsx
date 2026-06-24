import {
  useEffect,
  useState
} from "react";

import {
  useParams
} from "react-router-dom";


import ResumePreview from "./ResumePreview";
import api from "../services/axiosInstance";
import { useDispatch } from "react-redux";
import { setOptimizedResume } from "../redux/slices/uploadResumeSlice";

const ResumePDFPage = () => {

  const { resumeId } =
    useParams();
const dispatch=useDispatch()
  const [
    resume,
    setResume
  ] = useState(null);

  useEffect(() => {

    const loadResume =
      async () => {

        const response =
          await api.get(
            `/resume/${resumeId}`
          );

        setResume(
          response.data
            .optimizedResume
          );
          dispatch(setOptimizedResume(response.data
            .optimizedResume))

      };

    loadResume();

  }, [resumeId]);

  if (!resume) {
    return <p>Loading...</p>;
  }

  return (
    <ResumePreview
      pdfMode={true}
    />
  );
};

export default ResumePDFPage;