import {Stack} from 'expo-router';
import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import {useEffect} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import {useColorScheme} from '../hooks/useColorScheme';

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
                <Stack.Screen name="(tabs)" options={{
                    headerShown: false
                }}/>
            </Stack>
        </ThemeProvider>
    );
};

export default RootLayout;
