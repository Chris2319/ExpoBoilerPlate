// react
import { useEffect } from 'react';
import { Platform } from 'react-native';

// expo
import { Slot } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// redux
import { Provider } from 'react-redux';
import { store, persistor } from '@/store/store';
import { PersistGate } from 'redux-persist/integration/react';

// tanstack
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
// import { getTodos, postTodo } from '../my-api'

const RootLayout = () => {
  // Constants
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const client = new QueryClient();

  // Effects
  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) return null;
  return (
    <Provider store={store}>
      {Platform.OS === 'web' ? (
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={client}>
            <Slot />
          </QueryClientProvider>
        </PersistGate>
      ) : (
        <QueryClientProvider client={client}>
          <Slot />
        </QueryClientProvider>
      )}
    </Provider>
  );
};

export default RootLayout;
