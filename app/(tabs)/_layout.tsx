// react
import {Button} from "react-native";

// expo
import {Tabs, Redirect} from 'expo-router';
import {Ionicons} from "@expo/vector-icons";

// hooks
import {useThemeColor} from '@/hooks/useThemeColor';

// constants
import {color} from '@/constants/Colors';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { SIsAuthenticated, logout } from '@/store/slices/authSlice';
import { ERoutes, EScreens } from '@/constants/Enums';

const TabLayout = () => {

    // Dispatch
    const dispatch: any = useDispatch();

    // Selectors
    const isAuthenticated = useSelector(SIsAuthenticated);

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

    if (!isAuthenticated) return <Redirect href={ERoutes.login}/>;
    return <Tabs>
        <Tabs.Screen name={EScreens.home} options={{
            ...defaultScreenOptions,
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarIcon: ({color, size}) => (
                <Ionicons name={'home'} color={color} size={size}/>
            )
        }}/>
        <Tabs.Screen name={EScreens.orders} options={{
            ...defaultScreenOptions,
            tabBarLabel: 'Orders',
            headerShown: false,
            tabBarIcon: ({color, size}) => (
                <Ionicons name={'home'} color={color} size={size}/>
            )
        }}/>
        <Tabs.Screen name={EScreens.profile} options={{
            ...defaultScreenOptions,
            tabBarLabel: 'Profile',
            headerTitle: 'Profile',
            headerRight: () => <Button onPress={() => dispatch(logout())} title={'Logout'}/>,
            tabBarIcon: ({color, size}) => (
                <Ionicons name={'home'} color={color} size={size}/>
            )
        }}/>
    </Tabs>;

};
export default TabLayout;