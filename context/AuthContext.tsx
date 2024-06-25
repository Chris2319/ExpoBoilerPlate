import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import {createContext, useContext, useEffect, useState} from "react";
import {router} from 'expo-router';
import {Platform} from "react-native";

// INTERFACES
export interface AuthState {
    token: string | null;
    authenticated: boolean | null
}

export interface AuthCredentials {
    email: string;
    password: string
}

export interface AuthProps {
    authState?: AuthState,
    onRegister?: (credentials: AuthCredentials) => Promise<any>,
    onLogin?: (credentials: AuthCredentials) => Promise<any>,
    onLogout?: () => Promise<any>,
}

// CONSTANTS
const IS_WEB = Platform.OS === 'web';
const TOKEN_KEY = 'jwt';
const API_URL = process.env.EXPO_PUBLIC_API_URL;
const DEFAULT_AUTH_STATE: AuthState = {
    token: null,
    authenticated: false
};
export const DEFAULT_AUTH_CREDENTIALS: AuthCredentials = {
    email: '',
    password: ''
};

// CONTEXT
const AuthContext = createContext<AuthProps>({})

export const useAuth = () => {
    return useContext(AuthContext)
}

export const setItem = async (key: string, value: string) => {
    if (IS_WEB) {
        localStorage.setItem(key, value);
    } else {
        await SecureStore.setItemAsync(key, value);
    }
};

export const getItem = async (key: string) => {
    if (IS_WEB) {
        return localStorage.getItem(key);
    } else {
        return await SecureStore.getItemAsync(key);
    }
};

export const removeItem = async (key: string) => {
    if (IS_WEB) {
        localStorage.removeItem(key);
    } else {
        await SecureStore.deleteItemAsync(key);
    }
};

export const AuthProvider = ({children}: any) => {
    // States
    const [authState, setAuthState] = useState<AuthState>(DEFAULT_AUTH_STATE);

    // Effects
    useEffect(() => {
        const loadToken = async () => {
            try {
                const token = await getItem(TOKEN_KEY);
                if (token) {
                    // axios.defaults.headers.common['Authorization'] = `${token}`;
                    setAuthState({
                        token: token,
                        authenticated: true,
                    });
                }
            }catch (error) {
                console.error('Token error:', error);
            }
        }
        loadToken()
    }, []);

    const register = async (credentials: AuthCredentials) => {
        try {
            // TODO: Used for testing - UPDATE WITH ACTUAL ENDPOINTS
            return await axios.post(`${API_URL}/users`, {email: credentials.email, password: credentials.password})
        } catch (e) {
            return {error: true, msg: (e as any).msg}
        }
    }

    const login = async (credentials: AuthCredentials) => {
        try {
            // TODO: Used for testing - UPDATE WITH ACTUAL ENDPOINTS
            const result = await axios.post(`${API_URL}/auth`, credentials);
            const token = result?.data?.token ?? ''

            // TODO: Used for testing - UPDATE WITH TOKEN
            // axios.defaults.headers.common['Authorization'] = `${token}`

            setAuthState({
                token: token,
                authenticated: true,
            });
            await setItem(TOKEN_KEY, token);

            return result;
        } catch (e) {
            return {error: true, msg: (e as any).msg}
        }
    }

    const logout = async () => {
        await removeItem(TOKEN_KEY);
        axios.defaults.headers.common['Authorization'] = '';
        setAuthState(DEFAULT_AUTH_STATE);
        router.replace('/login')
    }

    const value = {
        onRegister: (credentials: AuthCredentials) => register(credentials),
        onLogin: (credentials: AuthCredentials) => login(credentials),
        onLogout: () => logout(),
        authState,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}