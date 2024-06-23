import {Link} from 'expo-router';
import {ThemedText} from '../../components/ThemedText';
import {ThemedView} from '../../components/ThemedView';

const TabsHome = () => {
    return (
        <ThemedView
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <ThemedText>This is Tabs index page</ThemedText>
            <Link href={''}><ThemedText>Go home</ThemedText></Link>
        </ThemedView>
    );
}

export default TabsHome
