import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import {createContext, useContext, useEffect, useState} from "react";
import {router} from 'expo-router';

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
const TOKEN_KEY = 'jwt';
const API_URL = 'https://api.developbetterapps.com'; //TODO: Used for testing - UPDATE URL
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

export const AuthProvider = ({children}: any) => {
    // States
    const [authState, setAuthState] = useState<AuthState>(DEFAULT_AUTH_STATE);

    // Effects
    useEffect(() => {
        console.log('authState: ', authState)
        if (!authState.authenticated) router.replace('/login')
    }, [authState]);

    // useEffect(() => {
    //     const loadToken = async () => {
    //         try {
    //             const token = await SecureStore.getItemAsync(TOKEN_KEY);
    //             if (token) {
    //                 // axios.defaults.headers.common['Authorization'] = `${token}`;
    //                 setAuthState({
    //                     token: token,
    //                     authenticated: true,
    //                 });
    //             }
    //         }catch (error) {
    //             console.error('SecureStore error:', error);
    //         }
    //     }
    //     loadToken()
    // }, []);


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
            // await SecureStore.setItemAsync(TOKEN_KEY, token);

            return result;
        } catch (e) {
            return {error: true, msg: (e as any).msg}
        }
    }

    const logout = async () => {
        // await SecureStore.deleteItemAsync(TOKEN_KEY);
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