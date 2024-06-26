import {
  combineReducers,
  configureStore,
  PreloadedStateShapeFromReducersMapObject,
  ReducerFromReducersMapObject, Tuple,
} from '@reduxjs/toolkit';
import { Reducer } from 'redux';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import thunk from 'redux-thunk';
import profileSlice, { IProfileSlice } from '@/store/slices/profileSlice';
import authSlice, { IAuthSlice } from '@/store/slices/authSlice';
import { Platform } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const SecureStoreStorage = {
  getItem: async (key: string): Promise<string | null> => {
    const value = await SecureStore.getItemAsync(key);
    return value;
  },
  setItem: async (key: string, value: string): Promise<void> => {
    await SecureStore.setItemAsync(key, value);
  },
  removeItem: async (key: string): Promise<void> => {
    await SecureStore.deleteItemAsync(key);
  },
};

const createWebStorage = (type: 'localStorage' | 'sessionStorage') => {
  if (typeof window !== 'undefined' && typeof window[type] !== 'undefined') {
    return {
      getItem: (key: string) => Promise.resolve(window[type].getItem(key)),
      setItem: (key: string, value: string) => Promise.resolve(window[type].setItem(key, value)),
      removeItem: (key: string) => Promise.resolve(window[type].removeItem(key)),
    };
  }
  return {
    getItem: (_: string) => Promise.resolve(null),
    setItem: (_: string, __: string) => Promise.resolve(),
    removeItem: (_: string) => Promise.resolve(),
  };
};

type IRootState = {
  auth: IAuthSlice,
  profile: IProfileSlice
}

let storage;

if (Platform.OS === 'web') {
  storage = createWebStorage('sessionStorage');
} else {
  storage = SecureStoreStorage;
}

const persistConfig: PersistConfig<IRootState> = {
  key: 'root',
  storage: storage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  auth: authSlice,
  profile: profileSlice,
});

const persistedReducer: Reducer<IRootState> = persistReducer(persistConfig, rootReducer) as ReducerFromReducersMapObject<IRootState>;

export const store = configureStore({
  reducer: persistedReducer,
  preloadedState: undefined as unknown as PreloadedStateShapeFromReducersMapObject<IRootState>,
});
export const persistor = Platform.OS === 'web' ? persistStore(store) : null;
export type RootState = ReturnType<typeof store.getState>;