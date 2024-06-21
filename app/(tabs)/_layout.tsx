import {Tabs} from 'expo-router'

const TabLayout = () => {

    return <Tabs>
        <Tabs.Screen name={'index'} />
        <Tabs.Screen name={'admins/[id]'} />
        <Tabs.Screen name={'users/[id]'} />
    </Tabs>

}
export default TabLayout;