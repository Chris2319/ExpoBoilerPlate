import {Text, View} from 'react-native';
import {Link} from 'expo-router';

const AdminsHome = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text>ADMIN HOME</Text>
            <Link href={'home'}>Go home</Link>
        </View>
    );
}

export default AdminsHome