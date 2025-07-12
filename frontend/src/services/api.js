import axios from 'axios';

// Set your backend URL here
const API = axios.create({
  baseURL: 'http://localhost:9090', // Change this to your backend port if needed
});

// Add JWT token to headers automatically if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
