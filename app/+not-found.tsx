// expo
import {Link} from 'expo-router';

// components
import {ThemedView} from '@/components/ThemedView';
import {ThemedText} from '@/components/ThemedText';

const NotFound = () => {
    return (
        <ThemedView
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <ThemedText>Your page is missing</ThemedText>
            {/*DEPENDING IF NEEDED - ThemedLink*/}
            <Link href={'/home'}><ThemedText>Go home</ThemedText></Link>
        </ThemedView>
    );
}

export default NotFound