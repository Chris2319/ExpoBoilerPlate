import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import axios from 'axios';

// INTERFACES
export interface AuthState {
  token: string | undefined;
  isAuthenticated: boolean | undefined;
}
export interface AuthLoaders {
  login: boolean;
  register: boolean;
}

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface IAuthSlice {
  data: AuthState;
  ui: any;
  loaders: AuthLoaders;
  alerts: any;
}

export const DEFAULT_AUTH_CREDENTIALS: AuthCredentials = {
  email: '',
  password: '',
};

const initialState: IAuthSlice = {
  data: {
    token: undefined,
    isAuthenticated: false,
  },
  ui: {},
  loaders: {
    login: false,
    register: false
  },
  alerts: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: { payload: AuthState; type: string }) => {
      state.data = action.payload;
    },
    logout: (state) => {
      state.data.token = '';
      state.data.isAuthenticated = false;

      axios.defaults.headers.common['Authorization'] = '';
    },
  }
});

export const SIsAuthenticated = (state: RootState) => state.auth.data.isAuthenticated;
export const SToken = (state: RootState) => state.auth.data.token;

export const { setAuth, logout } = authSlice.actions;


export default authSlice.reducer;