import {Pressable, Text, View} from 'react-native';
import {Link, router} from 'expo-router';

const TabsHome = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text>This is Tabs index page</Text>
            <Link href={''}>Go home</Link>
        </View>
    );
}

export default TabsHome
