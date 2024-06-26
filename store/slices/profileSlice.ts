import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getProfileDetailsThunk } from '@/store/thunks/profileThunks';

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
  extraReducers(builder) {
    builder.addCase(getProfileDetailsThunk.pending, (state) => {
      state.loaders = {
        ...state.loaders,
        profileDetailsThunk: true,
      };
    });
    builder.addCase(getProfileDetailsThunk.fulfilled, (state) => {
      state.loaders = {
        ...state.loaders,
        profileDetailsThunk: false,
      };
    });
    builder.addCase(getProfileDetailsThunk.rejected, (state) => {
      state.loaders = {
        ...state.loaders,
        profileDetailsThunk: false,
      };
    });
  }
});

export const SProfileData = (state: RootState) => state.profile.data;

export const { setProfile} = profileSlice.actions;


export default profileSlice.reducer;