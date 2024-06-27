import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { loginThunk, registerThunk } from '@/store/thunks/authThunks';
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
    setAuth: (state, action) => {
      state.data = action.payload;
    },
    logout: (state) => {
      state.data.token = '';
      state.data.isAuthenticated = false;

      axios.defaults.headers.common['Authorization'] = '';
    },
  },
  extraReducers(builder) {
    // login
    builder.addCase(loginThunk.pending, (state) => {
      state.loaders = {
        ...state.loaders,
        login: true,
      };
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.data.token = action.payload.token;
      state.data.isAuthenticated = true;

      state.loaders = {
        ...state.loaders,
        login: false,
      };
    });
    builder.addCase(loginThunk.rejected, (state) => {
      state.data.isAuthenticated = false;

      state.loaders = {
        ...state.loaders,
        login: false,
      };
    });

    //register
    builder.addCase(registerThunk.pending, (state) => {
      state.loaders = {
        ...state.loaders,
        register: true,
      };
    });
    builder.addCase(registerThunk.fulfilled, (state) => {
      state.loaders = {
        ...state.loaders,
        register: false,
      };
    });
    builder.addCase(registerThunk.rejected, (state) => {
      state.loaders = {
        ...state.loaders,
        register: false,
      };
    });
  },
});

export const SIsAuthenticated = (state: RootState) => state.auth.data.isAuthenticated;
export const SToken = (state: RootState) => state.auth.data.token;
export const SAuthLoaders = (state: RootState) => state.auth.loaders;

export const { setAuth, logout } = authSlice.actions;


export default authSlice.reducer;