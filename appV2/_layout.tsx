import {Stack} from 'expo-router';
import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import {useEffect} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import {useColorScheme} from 'react-native';
import {color} from '../constants/Colors';
import {useThemeColor} from '../hooks/useThemeColor';

const RootLayout = () => {
    // Constants
    const colorScheme = useColorScheme();
    const backgroundColor = useThemeColor(color.background);

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
                        backgroundColor: backgroundColor,
                    }
                }}/>
                <Stack.Screen name="orders/index" options={{
                    headerTitle: 'Orders',
                    headerStyle: {
                        backgroundColor: backgroundColor,
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
