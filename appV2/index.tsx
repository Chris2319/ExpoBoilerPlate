import {Pressable} from 'react-native';
import {Link, router} from 'expo-router';
import {ThemedText} from '../components/ThemedText';
import {ThemedView} from '../components/ThemedView';

const Home = () => {
    return (
        <ThemedView
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <ThemedText>This is the Home page</ThemedText>

            <Link href={'orders'}> <ThemedText>Go orders page</ThemedText></Link>
            <Pressable onPress={() => {
                router.push({
                    pathname: '/(tabs)'
                });
            }}>
                <ThemedText>Go tabs index</ThemedText>
            </Pressable>
            <Pressable onPress={() => {
                router.push('(tabs)/admins/1');
            }}>
                <ThemedText>Go to admin tab</ThemedText>
            </Pressable>
            <Pressable onPress={() => {
                router.push('(tabs)/users/1');
            }}>
                <ThemedText>Go to users tab</ThemedText>
            </Pressable>
        </ThemedView>
    );
};

export default Home;
