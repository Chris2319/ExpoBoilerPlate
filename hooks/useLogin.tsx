// tanstack
import { useMutation } from '@tanstack/react-query';

// axios
import axios from 'axios';

// expo
import { router } from 'expo-router';

// redux
import { AuthCredentials, AuthState, setAuth } from '@/store/slices/authSlice';
import { useDispatch } from 'react-redux';

// constants
import { ERoutes } from '@/constants/Enums';
const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const useLogin = () => {
  // Dispatch
  const dispatch: any = useDispatch();

  return useMutation({
    mutationFn: async (credentials: AuthCredentials): Promise<AuthState> => {
      const result = await axios.post(`${API_URL}/auth`, { email: credentials.email, password: credentials.password });
      return {
        token: result.data.token,
        isAuthenticated: true
      };
    },
    onSuccess: (data: AuthState) => {
      console.log('Login successful', data);
      router.push(ERoutes.home);
      dispatch(setAuth(data));
      return data
    },
    onError: (error) => {
      console.error('Login failed', error);
      // Handle login error
    },
  });
};