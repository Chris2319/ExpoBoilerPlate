import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface IProfileSlice {
  data: {
    userName: string
  };
  ui: any;
  loaders: any;
  alerts: any;
}

const initialState: IProfileSlice = {
  data: {
    userName: 'Chris'
  },
  ui: {},
  loaders: {},
  alerts: [],
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.data = action.payload;
    }
  },
});

export const SProfileData = (state: RootState) => state.profile.data;

export const { setProfile} = profileSlice.actions;


export default profileSlice.reducer;