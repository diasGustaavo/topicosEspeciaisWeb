import axios from "axios";

const api = axios.create({
  // baseURL: "https://zodielapi.onrender.com/api",
  baseURL: "http://localhost:3333/api",
});

export default api;
