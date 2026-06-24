import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");


const initialState = {
  accessToken: token || null,
  user: user
      ? JSON.parse(user)
      : null,
  isAuthenticated: !!token,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setCredentials: (state, action) => {
      state.accessToken =
        action.payload.accessToken;

      state.user =
        action.payload.user;

      state.isAuthenticated = true;
    },

    logout: (state) => {
      state.accessToken = null;
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const {
  setCredentials,
  logout,
} = authSlice.actions;

export default authSlice.reducer;