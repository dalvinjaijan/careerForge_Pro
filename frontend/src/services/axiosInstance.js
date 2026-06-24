import axios from "axios";
import { store } from "../redux/store";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_API}`,
  withCredentials: true,
});

// api.interceptors.request.use(
//   (config) => {

//     const token =
//       store.getState().auth
//         .accessToken;

//     if (token) {

//       config.headers.Authorization =
//         `Bearer ${token}`;

//     }

//     return config;
//   },

//   (error) =>
//     Promise.reject(error)

// );

export default api;