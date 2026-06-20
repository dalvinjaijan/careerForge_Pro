import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  originalResume: "",
  optimizedResume: "",
  jobDescription: "",
  atsScore: 0,
  missingKeywords: [],
  loading: false,
};

const uploadResumeSlice = createSlice({
  name: "resume",

  initialState,

  reducers: {

    setResumeText: (state, action) => {
      state.originalResume = action.payload;
    },

    setJobDescription: (state, action) => {
      state.jobDescription = action.payload;
    },

    setATSResult: (state, action) => {
      state.atsScore = action.payload.score;
      state.missingKeywords =
        action.payload.missingKeywords;
    },

    setOptimizedResume: (state, action) => {
      state.optimizedResume =
        action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

  },
});

export const {
  setResumeText,
  setJobDescription,
  setATSResult,
  setOptimizedResume,
  setLoading,
} = uploadResumeSlice.actions;

export default uploadResumeSlice.reducer;