// components
import {ThemedView} from '@/components/ThemedView';
import {ThemedText} from '@/components/ThemedText';

const TabsHome = () => {
    return (
        <ThemedView
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <ThemedText>HOME PAGE (IOS)</ThemedText>
            <ThemedText>Header is hidden</ThemedText>
        </ThemedView>
    );
}

export default TabsHome