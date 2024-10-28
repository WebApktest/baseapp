import axios from 'axios';
import {store} from '../store';
import { API_URL } from '../config';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: API_URL.BASE_URL,
});

// Add a request interceptor to include the Authorization header
axiosInstance.interceptors.request.use(
  config => {
    const state = store.getState();
    const token = state.auth.token;
console.log(token)
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;