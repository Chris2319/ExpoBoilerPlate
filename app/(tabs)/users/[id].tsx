import {Link, Stack, useGlobalSearchParams} from 'expo-router';
import {ThemedView} from '../../../components/ThemedView';
import {ThemedText} from '../../../components/ThemedText';
import {useThemeColor} from '../../../hooks/useThemeColor';
import {color} from '../../../constants/Colors';

const User = () => {
    const {id} = useGlobalSearchParams();

    // TODO: Find a global reusable way for this.
    // Do we need a ThemedScreen?
    const backgroundColor = useThemeColor(color.background);
    const textColor = useThemeColor(color.text);

    return (
        <ThemedView
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Stack.Screen options={{
                headerTitle: `User ID: ${id}`,
                headerStyle: {
                    backgroundColor: backgroundColor,
                },
                headerTintColor: textColor,
            }}/>
            <ThemedText>User</ThemedText>
            <Link href={''}><ThemedText>Go home</ThemedText></Link>
        </ThemedView>
    );
};

export default User;
