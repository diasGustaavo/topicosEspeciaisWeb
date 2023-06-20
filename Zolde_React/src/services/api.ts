import axios from "axios";

const api = axios.create({
  baseURL: "https://zodielapi.onrender.com/api",
});

export default api;
