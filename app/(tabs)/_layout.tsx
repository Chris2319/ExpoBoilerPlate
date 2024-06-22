import {Tabs} from 'expo-router';

const TabLayout = () => {

    return <Tabs>
        <Tabs.Screen name={'home'} options={{tabBarLabel: 'Home'}}/>
        <Tabs.Screen name={'users'} options={{tabBarLabel: 'Users', headerShown: false}}/>
        <Tabs.Screen name={'admins'} options={{tabBarLabel: 'Admins'}}/>
    </Tabs>;

};
export default TabLayout;