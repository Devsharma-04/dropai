import axios from 'axios';

const api = axios.create({
  // Yeh hai aapka NAYA Backend URL
  baseURL: 'https://dropai-1-geqa.onrender.com/', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;