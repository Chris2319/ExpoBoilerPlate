// react
import {Button} from "react-native";

// expo
import {Tabs, Redirect} from 'expo-router';
import {Ionicons} from "@expo/vector-icons";

// hooks
import {useThemeColor} from '@/hooks/useThemeColor';

// constants
import {color} from '@/constants/Colors';

// context
import {useAuth} from "@/context/AuthContext";

const TabLayout = () => {
    const {authState, onLogout} = useAuth();

    // TODO: Find a global reusable way for this.
    // Do we need a Tabs / ThemedTabScreen?
    const backgroundColor = useThemeColor(color.background);
    const textColor = useThemeColor(color.text);

    const defaultScreenOptions = {
        tabBarActiveTintColor: textColor,
        tabBarInactiveTintColor: textColor,
        tabBarStyle: {
            backgroundColor: backgroundColor
        },
        headerStyle: {
            backgroundColor: backgroundColor,
        },
        headerTintColor: textColor,
    };

    if (!authState?.authenticated) return <Redirect href="/login"/>;
    return <Tabs>
        <Tabs.Screen name={'home'} options={{
            ...defaultScreenOptions,
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarIcon: ({color, size}) => (
                <Ionicons name={'home'} color={color} size={size}/>
            )
        }}/>
        <Tabs.Screen name={'orders'} options={{
            ...defaultScreenOptions,
            tabBarLabel: 'Orders',
            headerShown: false,
            tabBarIcon: ({color, size}) => (
                <Ionicons name={'home'} color={color} size={size}/>
            )
        }}/>
        <Tabs.Screen name={'profile'} options={{
            ...defaultScreenOptions,
            tabBarLabel: 'Profile',
            headerTitle: 'Profile',
            headerRight: () => <Button onPress={onLogout} title={'Logout'}/>,
            tabBarIcon: ({color, size}) => (
                <Ionicons name={'home'} color={color} size={size}/>
            )
        }}/>
    </Tabs>;

};
export default TabLayout;