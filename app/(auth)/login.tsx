// react
import { useEffect, useState } from 'react';
import { Button, TextInput, useColorScheme } from 'react-native';

// components
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

// constants
import { Colors } from '@/constants/Colors';

// expo
import { router } from 'expo-router';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk, registerThunk } from '@/store/thunks/authThunks';
import { AuthCredentials, DEFAULT_AUTH_CREDENTIALS, SIsAuthenticated } from '@/store/slices/authSlice';

const Login = () => {
  // Selectors
  const isAuthenticated = useSelector(SIsAuthenticated);

  // States
  const [credentials, setCredentials] = useState<AuthCredentials>(DEFAULT_AUTH_CREDENTIALS);
  const theme = useColorScheme() ?? 'light';

  // Dispatch
  const dispatch: any = useDispatch();

  useEffect(() => {
    if (isAuthenticated) router.push('/home');
  }, [isAuthenticated]);

  const login = async () => {
   await dispatch(loginThunk(credentials))
  };
  const register = async () => {
    await dispatch(registerThunk(credentials));
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
      <Button title={'Login'} onPress={() => login()} />
      <Button title={'Register'} onPress={() => register()} />
    </ThemedView>
  );
};

export default Login;