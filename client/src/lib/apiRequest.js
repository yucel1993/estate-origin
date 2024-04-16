import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

const apiRequest = axios.create({
  baseURL: `${API_KEY}/api`,
  withCredentials: true,
});

export default apiRequest;
