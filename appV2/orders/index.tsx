import {Text, View} from 'react-native';
import {Link} from 'expo-router';

const Orders = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text>Orders</Text>
            <Link href={''}>Go home</Link>
        </View>
    );
};

export default Orders;
