import axios from "axios";

const api = axios.create({
  // Yahan /api/ confirm hai, kyunki aapke Django urls.py mein path('api/', ...) hai
  baseURL: "https://dropai-1-geqa.onrender.com/api/", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;