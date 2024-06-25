import {ThemedView} from '@/components/ThemedView';
import {ThemedText} from '@/components/ThemedText';
import {useState} from "react";
import {AuthCredentials, DEFAULT_AUTH_CREDENTIALS, useAuth} from "@/context/AuthContext";
import {Button, TextInput, useColorScheme} from "react-native";
import {router} from "expo-router";
import {color, Colors} from '@/constants/Colors';

const Login = () => {
    const [credentials, setCredentials] = useState<AuthCredentials>(DEFAULT_AUTH_CREDENTIALS);
    const {onLogin, onRegister} = useAuth();
    const theme = useColorScheme() ?? 'light';

    const login = async () => {
        console.log('login');
        const result = await onLogin!(credentials);
        if(result) router.push('/home');
        if (result && result.error) alert(result.msg ?? 'Login error')
    };
    const register = async () => {
        console.log('register');
        const result = await onRegister!(credentials);
        if (result && result.error) {
            alert(result.msg ?? 'Login error')
        } else {
            login();
        }
    };

    return (
        <ThemedView
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <ThemedText>LOGIN</ThemedText>
            <TextInput style={{color: Colors[theme].text}} placeholder={'Email'} onChangeText={(text: string) => setCredentials({...credentials, email: text})}></TextInput>
            <TextInput style={{color: Colors[theme].text}} placeholder={'Password'} onChangeText={(text: string) => setCredentials({...credentials, password: text})} secureTextEntry={true}></TextInput>
            <Button title={'Login'} onPress={() => login()}/>
            <Button title={'Register'} onPress={() => register()}/>
        </ThemedView>
    );
}

export default Login