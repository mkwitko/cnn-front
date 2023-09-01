import axios from 'axios';
import Cookies from 'js-cookie';

export const CnnApi = axios.create({
  baseURL: 'https://cnn-backend.onrender.com',
  responseType: 'json',
});

CnnApi.interceptors.request.use(async (config) => {
  config.headers['Content-Type'] = 'application/json';
  config.headers.userId = Cookies.get('auth');

  return config;
});

CnnApi.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    const data: any = {
      ...error.response.data.error,
      status: error.response.status,
    };
    return Promise.reject(data);
  }
);
