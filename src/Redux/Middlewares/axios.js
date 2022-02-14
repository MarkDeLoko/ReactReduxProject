import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const API_URL = 'http://localhost:3003/'
const clients = axios.create({
  baseURL: API_URL,
  responseType: 'json',
});

const options = {
  returnRejectedPromiseOnError: true,
  interceptors: {
    request: [
      ({getState}, config) => {
        const {token} = getState().authReducer;
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
    ],
  },
};

export default axiosMiddleware(clients, options);
