import axios from "axios";

const api = axios.create({
  baseURL: `https://asrm-admin.kz`,
});

api.interceptors.request.use(
  function(config) {
    const access_token = localStorage.getItem("token");

    if (access_token) {
      config.headers.Authorization = `Basic ${access_token}`;
    }

    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default api;
