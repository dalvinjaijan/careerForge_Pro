import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  resumes: [],

  selectedResume: null,

  totalResumes: 0,

  averageATS: 0,

  highestATS: 0,

  loading: false,

};

const dashboardSlice = createSlice({

  name: "dashboard",

  initialState,

  reducers: {

    setDashboard: (
      state,
      action
    ) => {

      state.resumes =
        action.payload.resumes;

      state.totalResumes =
        action.payload.totalResumes;

      state.averageATS =
        action.payload.averageATS;

      state.highestATS =
        action.payload.highestATS;

    },

    setSelectedResume: (
      state,
      action
    ) => {

      state.selectedResume =
        action.payload;

    },

    addResume: (
      state,
      action
    ) => {

      state.resumes.unshift(
        action.payload
      );

      state.totalResumes++;

    },

    updateResume: (
      state,
      action
    ) => {

      const index =
        state.resumes.findIndex(
          resume =>
            resume._id ===
            action.payload._id
        );

      if (index !== -1) {

        state.resumes[index] =
          action.payload;

      }

      if (
        state.selectedResume &&
        state.selectedResume._id ===
          action.payload._id
      ) {

        state.selectedResume =
          action.payload;

      }

    },

    deleteResume: (
      state,
      action
    ) => {

      state.resumes =
        state.resumes.filter(
          resume =>
            resume._id !==
            action.payload
        );

      state.totalResumes =
        state.resumes.length;

      if (
        state.selectedResume?._id ===
        action.payload
      ) {

        state.selectedResume =
          null;

      }

    },

    setLoading: (
      state,
      action
    ) => {

      state.loading =
        action.payload;

    },

    resetDashboard: (
      state
    ) => {

      state.resumes = [];

      state.selectedResume =
        null;

      state.totalResumes = 0;

      state.averageATS = 0;

      state.highestATS = 0;

      state.loading = false;

    },

  },

});

export const {

  setDashboard,

  setSelectedResume,

  addResume,

  updateResume,

  deleteResume,

  setLoading,

  resetDashboard,

} = dashboardSlice.actions;

export default dashboardSlice.reducer;