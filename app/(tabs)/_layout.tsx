import {Tabs} from 'expo-router';
import {useThemeColor} from '../../hooks/useThemeColor';
import {color} from '../../constants/Colors';

const TabLayout = () => {

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
    }

    return <Tabs>
        <Tabs.Screen name={'home'} options={{...defaultScreenOptions, tabBarLabel: 'Home', headerShown: false}}/>
        <Tabs.Screen name={'users'} options={{...defaultScreenOptions, tabBarLabel: 'Users', headerShown: false}}/>
        <Tabs.Screen name={'admins'} options={{
            ...defaultScreenOptions,
            tabBarLabel: 'Admins',
            headerTitle: 'Admins',
        }}/>
    </Tabs>;

};
export default TabLayout;