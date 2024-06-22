import {Text, View} from 'react-native';
import {Link} from 'expo-router';

const User = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text>User</Text>
            <Link href={''}>Go home</Link>
        </View>
    );
};

export default User;
