import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 1000,
  headers: {'Authorization': `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`}
});

export default axiosInstance;