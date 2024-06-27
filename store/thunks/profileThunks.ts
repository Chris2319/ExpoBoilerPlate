// Redux
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { AuthCredentials } from '@/store/slices/authSlice';

// axios
import axios from 'axios';

export const getProfileDetailsThunk = createAsyncThunk('getProfileDetailsThunk', async (credentials: AuthCredentials | undefined, {
  getState,
  dispatch,
}): Promise<any> => {
  try {
    // examples:
    // const state = getState() as RootState;
    // state.profile.data.userName = '';
    // dispatch(setProfile({...}));
    const result = await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/users`, credentials);
    return result.data;

  } catch (error) {
    throw error;
  }
});
