import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { loginThunk, registerThunk } from '@/store/thunks/authThunks';
import axios from 'axios';

// INTERFACES
export interface AuthState {
  token: string | undefined;
  isAuthenticated: boolean | undefined;
}

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface IAuthSlice {
  data: AuthState;
  ui: any;
  loaders: any;
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
  loaders: {},
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
        loginThunk: true,
      };
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.data.token = action.payload.token;
      state.data.isAuthenticated = true;

      state.loaders = {
        ...state.loaders,
        loginThunk: false,
      };
    });
    builder.addCase(loginThunk.rejected, (state) => {
      state.data.isAuthenticated = false;

      state.loaders = {
        ...state.loaders,
        loginThunk: false,
      };
    });

    //register
    builder.addCase(registerThunk.pending, (state) => {
      state.loaders = {
        ...state.loaders,
        registerThunk: true,
      };
    });
    builder.addCase(registerThunk.fulfilled, (state) => {
      state.loaders = {
        ...state.loaders,
        registerThunk: false,
      };
    });
    builder.addCase(registerThunk.rejected, (state) => {
      state.loaders = {
        ...state.loaders,
        registerThunk: false,
      };
    });
  },
});

export const SIsAuthenticated = (state: RootState) => state.auth.data.isAuthenticated;
export const SToken = (state: RootState) => state.auth.data.token;

export const { setAuth, logout } = authSlice.actions;


export default authSlice.reducer;