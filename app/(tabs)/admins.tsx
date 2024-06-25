import {Link} from 'expo-router';
import {ThemedView} from '@/components/ThemedView';
import {ThemedText} from '@/components/ThemedText';

const AdminsHome = () => {
    return (
        <ThemedView
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <ThemedText>ADMIN HOME</ThemedText>

            {/*DEPENDING IF NEEDED - ThemedLink*/}
            <Link href={'home'}><ThemedText>Go home</ThemedText></Link>
        </ThemedView>
    );
}

export default AdminsHome