import axios from 'axios';

export const CnnApi = axios.create({
  baseURL: 'http://localhost:3000',
  responseType: 'json',
});

CnnApi.interceptors.request.use(async (config) => {
  config.headers['Content-Type'] = 'application/json';

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
