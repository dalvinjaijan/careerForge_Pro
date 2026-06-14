import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_API}`,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest =
      error.config;

    if (
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const res =
        await api.get(
          "/auth/refresh-token"
        );

      const newToken =
        res.data.accessToken;

      store.dispatch(
        setCredentials({
          accessToken: newToken,
        })
      );

      originalRequest.headers.Authorization =
        `Bearer ${newToken}`;

      return api(originalRequest);
    }

    return Promise.reject(error);
  }
);

export default api;