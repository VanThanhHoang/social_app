import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen } from '@/screens';
import CreateProfileScreen from '@/screens/createProfileScreen/CreateProfileScreen';
import EditBioScreen from '@/screens/createProfileScreen/EditBioScreen';
import FollowAccountScreen from '@/screens/createProfileScreen/FollowAccountScreen';
import JoinVerses from '@/screens/createProfileScreen/JoinVerses';
import { NavigationContainer } from '@react-navigation/native';
import EditLinkScreen from '@/screens/createProfileScreen/EditLinkScreen';
import PrivacyScreen from '@/screens/profileScreens/PrivacyScreen';
import PrivacyProfileScreen from '@/screens/createProfileScreen/PrivacyProfileScreen';

const Stack = createNativeStackNavigator<LoginStackParamList>();

export enum LoginStackEnum {
    Login = "Login",
    CreateProfileScreen = "CreateProfileScreen",
    EditBioScreen = "EditBioScreen",
    EditLinkScreen = "EditLinkScreen",
    PrivacyProfileScreen = "PrivacyProfileScreen",
    FollowAccountScreen = "FollowAccountScreen",
    JoinVerses = "JoinVerses",

}

export type LoginStackParamList = {
    [LoginStackEnum.Login]: undefined;
    [LoginStackEnum.CreateProfileScreen]: undefined;
    [LoginStackEnum.EditBioScreen]: undefined;
    [LoginStackEnum.EditLinkScreen]: undefined;
    [LoginStackEnum.PrivacyProfileScreen]: undefined;
    [LoginStackEnum.FollowAccountScreen]: undefined;
    [LoginStackEnum.JoinVerses]: undefined;

}

interface LoginProps {
    name: LoginStackEnum ;
    component: () => React.JSX.Element;
    options?: any;
}

export const LoginStack: LoginProps[] = [
    {
        name: LoginStackEnum.Login,
        component: LoginScreen,
        options: {}
    },
    {
        name: LoginStackEnum.CreateProfileScreen,
        component: CreateProfileScreen,
        options: {}
    },
    {
        name: LoginStackEnum.EditBioScreen,
        component: EditBioScreen,
        options: {}
    },
    {
        name: LoginStackEnum.EditLinkScreen,
        component: EditLinkScreen,
        options: {}
    },
    {
        name: LoginStackEnum.PrivacyProfileScreen,
        component: PrivacyProfileScreen,
        options: {}
    },
    {
        name: LoginStackEnum.FollowAccountScreen,
        component: FollowAccountScreen,
        options: {}
    },
    {
        name: LoginStackEnum.JoinVerses,
        component: JoinVerses,
        options: {}
    },
]

const LoginNavigation = () => {
    return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                {
                    LoginStack.map((stack, index) => (
                        <Stack.Screen
                            key={index}
                            name={stack.name}
                            component={stack.component}
                            options={stack.options}
                        />
                    ))
                }
            </Stack.Navigator>
    )
}

export default LoginNavigation

const styles = StyleSheet.create({})