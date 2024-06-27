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

const RootLayout = () => {
  // Constants
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  // Effects
  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) return null;
  return (
    <Provider store={store}>
      {Platform.OS === 'web' ? (
        <PersistGate loading={null} persistor={persistor}>
          <Slot />
        </PersistGate>
      ) : (
        <Slot />
      )}
    </Provider>
  );
};

export default RootLayout;
