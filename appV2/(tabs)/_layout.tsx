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
    };

    return <Tabs>
        <Tabs.Screen name={'index'} options={{...defaultScreenOptions}}/>
        <Tabs.Screen name={'admins/[id]'} options={{...defaultScreenOptions}}/>
        <Tabs.Screen name={'users/[id]'} options={{...defaultScreenOptions}}/>
    </Tabs>;

};
export default TabLayout;