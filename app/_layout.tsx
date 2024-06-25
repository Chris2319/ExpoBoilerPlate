import {Slot} from 'expo-router';
import {useFonts} from 'expo-font';
import {useEffect} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import {AuthProvider} from "@/context/AuthContext";

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
        <AuthProvider>
            <Slot/>
        </AuthProvider>
    );
};

export default RootLayout;


