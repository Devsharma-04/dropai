import axios from "axios";

const api = axios.create({
  baseURL: "https://dropai-backend.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;