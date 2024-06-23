import {Link} from 'expo-router';
import {ThemedText} from '../../../components/ThemedText';
import {ThemedView} from '../../../components/ThemedView';

const Admin = () => {
    return (
        <ThemedView
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <ThemedText>Admin</ThemedText>
            <Link href={''}><ThemedText>Go home</ThemedText></Link>
        </ThemedView>
    );
};

export default Admin;
