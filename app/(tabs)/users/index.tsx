import {Text, View} from 'react-native';
import {Link} from 'expo-router';

const UsersHome = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text>USERS HOME</Text>
            <Link href={''}>Go home</Link>
            <Link href={'users/1'}>Go to user 1</Link>
            <Link href={'users/2'}>Go to user 2</Link>
        </View>
    );
}

export default UsersHome