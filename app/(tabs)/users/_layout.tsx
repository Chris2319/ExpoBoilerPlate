import {Stack} from 'expo-router';
import {useThemeColor} from '../../../hooks/useThemeColor';
import {color} from '../../../constants/Colors';
import {Button} from "react-native";
import {useAuth} from "@/context/AuthContext";

const StackLayout = () => {
    const { onLogout} = useAuth();

    // TODO: Find a global reusable way for this.
    // Do we need a ThemedScreen?
    const backgroundColor = useThemeColor(color.background);
    const textColor = useThemeColor(color.text);

    return (
        <Stack>
            <Stack.Screen name={'index'} options={{
                headerTitle: 'Users',
                headerStyle: {
                    backgroundColor: backgroundColor,
                },
                headerRight: () => <Button onPress={onLogout} title={'Logout'} />,
                headerTintColor: textColor,
            }}/>
        </Stack>
    );

};
export default StackLayout;