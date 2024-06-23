import {View} from 'react-native';
import {Link} from 'expo-router';
import {ThemedText} from '../../../components/ThemedText';
import {ThemedView} from '../../../components/ThemedView';

const User = () => {
    return (
        <ThemedView
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <ThemedText>User</ThemedText>
            <Link href={''}><ThemedText>Go home</ThemedText></Link>
        </ThemedView>
    );
};

export default User;
