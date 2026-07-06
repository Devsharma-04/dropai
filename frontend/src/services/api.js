// src/services/api.js
import axios from 'axios';

const api = axios.create({
  // Purana URL hata kar ye NAYA URL daalo:
  baseURL: 'https://dropai-1-geqa.onrender.com/', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;