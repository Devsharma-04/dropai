import axios from 'axios';

const api = axios.create({
  // Sirf ye URL change karna hai:
  baseURL: 'https://dropai-1-geqa.onrender.com/', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;