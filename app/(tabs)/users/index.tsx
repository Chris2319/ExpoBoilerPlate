import {Link} from 'expo-router';
import {ThemedView} from '../../../components/ThemedView';
import {ThemedText} from '../../../components/ThemedText';

const UsersHome = () => {
    return (
        <ThemedView
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <ThemedText>USERS HOME</ThemedText>
            <Link href={'home'}><ThemedText>Go home</ThemedText></Link>
            <Link href={'users/1'}><ThemedText>Go to user 1</ThemedText></Link>
            <Link href={'users/2'}><ThemedText>Go to user 2</ThemedText></Link>
        </ThemedView>
    );
}

export default UsersHome