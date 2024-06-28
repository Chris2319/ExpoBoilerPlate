// expo
import {Link} from 'expo-router';

// components
import {ThemedView} from '@/components/ThemedView';
import {ThemedText} from '@/components/ThemedText';
import { ERoutes } from '@/constants/Enums';

const OrdersHome = () => {
    return (
        <ThemedView
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <ThemedText>ORDERS HOME</ThemedText>

            {/*DEPENDING IF NEEDED - ThemedLink*/}
            <Link href={ERoutes.orders}><ThemedText>Go home</ThemedText></Link>
            <Link href={`${ERoutes.orders}/1`}><ThemedText>Go to order 1</ThemedText></Link>
            <Link href={`${ERoutes.orders}/2`}><ThemedText>Go to order 2</ThemedText></Link>
        </ThemedView>
    );
}

export default OrdersHome