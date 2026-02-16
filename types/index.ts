export interface User {
  id: string;
  email: string;
  username: string;
  fullName: string;
  bio?: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: User;
  token?: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  username: string;
  fullName: string;
  password: string;
  confirmPassword: string;
}

export interface UpdateProfilePayload {
  username?: string;
  fullName?: string;
  bio?: string;
  avatar?: string;
}

export interface ApiError {
  success: boolean;
  message: string;
  code?: string;
}