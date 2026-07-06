import axios from "axios";

const api = axios.create({
  baseURL: "https://dropai-1-geqa.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;