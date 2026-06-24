import {
  createSlice,
} from "@reduxjs/toolkit";

const emptyResume = {

  fullName: "",

  email: "",

  phone: "",

  location: "",

  linkedin: "",

  github: "",

  summary: "",

  skills: [],

  experience: [],

  projects: [],

  education: [],

};

const initialState = {

  originalResume:
    emptyResume,

  optimizedResume:
    emptyResume,

  jobDescription: "",
    resumeId: null,
  atsScore: 0,

  matchedKeywords: [],

  missingKeywords: [],

  suggestions: [],

  loading: false,
};

const uploadResumeSlice =
  createSlice({
    name: "resume",

    initialState,

    reducers: {

      setOriginalResume: (
        state,
        action
      ) => {

        state.originalResume =
          action.payload;
      },

      setOptimizedResume: (
        state,
        action
      ) => {

        state.optimizedResume =
          action.payload;
      },
      setResumeId: (
  state,
  action
) => {
  state.resumeId =
    action.payload;
},

      setJobDescription: (
        state,
        action
      ) => {

        state.jobDescription =
          action.payload;
      },

      setATSScore: (
        state,
        action
      ) => {

        state.atsScore =
          action.payload.score;

        state.matchedKeywords =
          action.payload
            .matchedKeywords ||
          [];

        state.missingKeywords =
          action.payload
            .missingKeywords ||
          [];

        state.suggestions =
          action.payload
            .suggestions || [];
      },

      setLoading: (
        state,
        action
      ) => {

        state.loading =
          action.payload;
      },

      resetResume: (
        state
      ) => {

        state.originalResume =
          emptyResume;

        state.optimizedResume =
          emptyResume;

        state.jobDescription =
          "";

        state.atsScore = 0;

        state.matchedKeywords =
          [];

        state.missingKeywords =
          [];

        state.suggestions =
          [];

        state.loading =
          false;
      },
    },
  });

export const {

  setOriginalResume,

  setOptimizedResume,

  setJobDescription,

  setATSScore,

  setLoading,

  resetResume,
  setResumeId

} =
  uploadResumeSlice.actions;

export default
  uploadResumeSlice.reducer;