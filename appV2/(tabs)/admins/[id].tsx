import {Text, View} from 'react-native';
import {Link} from 'expo-router';

const Admin = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text>Admin</Text>
            <Link href={''}>Go home</Link>
        </View>
    );
};

export default Admin;
