// Redux
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '@/store/store';
import { AuthCredentials } from '@/store/slices/authSlice';

const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const loginThunk = createAsyncThunk('loginThunk', async (credentials: AuthCredentials, {
  getState,
  dispatch,
}): Promise<any> => {
  try {
    // examples:
    // const state = getState() as RootState;
    // state.profile.data.userName = '';
    // dispatch(setProfile({...}));
    const response = await axios.post(`${API_URL}/auth`, { email: credentials.email, password: credentials.password });

    // TODO: Used for testing - UPDATE WITH TOKEN
    // axios.defaults.headers.common['Authorization'] = `${response.data.token}`

    return response.data;
  } catch (error) {
    throw error;
  }
});

export const registerThunk = createAsyncThunk('registerThunk', async (credentials: AuthCredentials, {
  getState,
  dispatch,
}): Promise<any> => {
  try {
    // examples:
    // const state = getState() as RootState;
    // state.profile.data.userName = '';
    // dispatch(setProfile({...}));
    return await axios.post(`${API_URL}/users`, credentials);
  } catch (error) {
    throw error;
  }
});