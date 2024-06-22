import {Stack} from 'expo-router';
import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import {useEffect} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import {useColorScheme} from '../hooks/useColorScheme';
import {Colors} from '../constants/Colors';

const RootLayout = () => {
    // Constants
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    // Effects
    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack>
                <Stack.Screen name="index" options={{
                    headerTitle: 'Home',
                    headerStyle: {
                        backgroundColor: Colors[colorScheme ?? 'light'].background,
                    }
                }}/>
                <Stack.Screen name="orders/index" options={{
                    headerTitle: 'Orders',
                    headerStyle: {
                        backgroundColor: Colors[colorScheme ?? 'light'].background,
                    }
                }}/>
                <Stack.Screen name="(tabs)" options={{
                    headerShown: false
                }}/>
            </Stack>
        </ThemeProvider>
    );
};

export default RootLayout;
