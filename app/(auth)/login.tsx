// react
import { useState } from 'react';
import { Button, TextInput, useColorScheme, ActivityIndicator } from 'react-native';

// components
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

// constants
import { Colors } from '@/constants/Colors';

// redux
import {
  AuthCredentials,
  DEFAULT_AUTH_CREDENTIALS,
} from '@/store/slices/authSlice';

// hooks
import { useLogin } from '@/hooks/useLogin';

const Login = () => {
  // States
  const [credentials, setCredentials] = useState<AuthCredentials>(DEFAULT_AUTH_CREDENTIALS);
  const theme = useColorScheme() ?? 'light';

  // Tanstack
  const { mutate, isPending, isSuccess, data } = useLogin();

  const onLogin = async () => {
    mutate(credentials);
  };
  const onRegister = async () => {
    // TODO: build register hook
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
      <TextInput style={{ color: Colors[theme].text }} placeholder={'Email'}
                 onChangeText={(text: string) => setCredentials({ ...credentials, email: text })}></TextInput>
      <TextInput style={{ color: Colors[theme].text }} placeholder={'Password'}
                 onChangeText={(text: string) => setCredentials({ ...credentials, password: text })}
                 secureTextEntry={true}></TextInput>
      <Button title={'Login'} onPress={() => onLogin()} />
      <Button title={'Register'} onPress={() => onRegister()} />

      {isPending && <ActivityIndicator />}
    </ThemedView>
  );
};

export default Login;