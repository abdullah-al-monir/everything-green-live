import axios, { AxiosInstance, AxiosError } from 'axios';
import Cookie from 'js-cookie';
import { ApiError, AuthResponse } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookie.get('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle responses
axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiError>) => {
    if (error.response?.status === 401) {
      Cookie.remove('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const apiClient = {
  // Auth endpoints
  login: (email: string, password: string) =>
    axiosInstance.post<AuthResponse>('/auth/login', { email, password }),

  register: (payload: {
    email: string;
    username: string;
    fullName: string;
    password: string;
  }) => axiosInstance.post<AuthResponse>('/auth/register', payload),

  logout: () => axiosInstance.post('/auth/logout'),

  // User endpoints
  getProfile: () => axiosInstance.get('/users/profile'),

  updateProfile: (payload: any) =>
    axiosInstance.patch('/users/profile', payload),

  deleteProfile: () => axiosInstance.delete('/users/profile'),

  getUser: (id: string) => axiosInstance.get(`/users/${id}`),

  // Add token to cookie
  setToken: (token: string) => {
    Cookie.set('authToken', token, { 
      expires: 7,
      secure: true,
      sameSite: 'strict'
    });
  },

  // Remove token from cookie
  removeToken: () => {
    Cookie.remove('authToken');
  },

  // Get token
  getToken: () => Cookie.get('authToken'),
};

export default axiosInstance;