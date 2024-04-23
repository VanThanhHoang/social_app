import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useLogger } from "@/utils";
import { fetchUserById } from "@/redux/action";
import { signInWithGoole } from "./components/sign_in_google";
import HomeIcon from "@/assets/icons/HomeIcon";
import LinearGradient from "react-native-linear-gradient";
import IconGoogle from "@/assets/icons/IconGoogle";
import IconFacebook from "@/assets/icons/IconFacebook";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoginStackParamList, LoginStackEnum } from '@/navigation/login';
import { colors } from "@/theme";
import SigninScreen from "../sign_up";


const LoginScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<LoginStackParamList>>();
    const dispatch = useAppDispatch();
    const { isLoading } = useAppSelector(state => state.app);
    useEffect(() => {
        dispatch(fetchUserById(123))
    }, []);
    const { t } = useTranslation()

    return <View style={styles.LoginContainer}>
        <View style={styles.TitleContainer}>
            <LinearGradient colors={['#5E4EA0', '#E693BF',]} style={styles.gradient}>
                <Text style={styles.titleStyle}>Everyone loves <Text style={{ color: '#E693BF' }}>VNPIC</Text>.</Text>
            </LinearGradient>
        </View>
        <View style={styles.ButtonLoginContainer}>
            <TouchableOpacity style={styles.ButtonLogin} onPress={signInWithGoole}>
                <Text style={styles.ButtonLoginTitle}>{t('Login with Google')}</Text>
                <IconGoogle />
            </TouchableOpacity>
            <TouchableOpacity style={styles.ButtonLogin} onPress={() => navigation.navigate(LoginStackEnum.CreateProfileScreen)}>
                <Text style={styles.ButtonLoginTitle}>{t('Login with Facebook')}</Text>
                <IconFacebook />
            </TouchableOpacity>
            <TouchableOpacity style={styles.ButtonLogin2} onPress={() => navigation.navigate(LoginStackEnum.SignInScren)}>
                <Text style={styles.ButtonLoginTitle2}>{t('Sign in with password')}</Text>
            </TouchableOpacity>
            <View style={styles.SignUp}>
                <Text style={{ color: 'black', fontWeight: '700' }}>{t('Don\'t have an account?')}</Text>
                <TouchableOpacity onPress={() => navigation.navigate(LoginStackEnum.SignUpScreen)}>
                    <Text style={{color:colors.purple, fontWeight: '700', marginStart: 5 }}>{t('Sign up')}</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>;
}
const styles = StyleSheet.create({
    SignUp: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    ButtonLogin2: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#C9C9C9',
        backgroundColor: colors.purple,
        paddingHorizontal: 24,
        paddingVertical: 10,
        alignItems: 'center',
        marginHorizontal: 16,
        marginVertical: 10,
    },
    ButtonLoginTitle2: {
        fontSize: 15,
        fontFamily: 'Roboto',
        color: 'white',
        fontWeight: '700',
        height: 33,
        marginTop: 7
    },
    ButtonLoginTitle: {
        fontSize: 14,
        fontFamily: 'Roboto',
        color: 'black',
        fontWeight: '400',
    },
    ButtonLogin: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#C9C9C9',
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 16,
        marginVertical: 10,
    },
    ButtonLoginContainer: {
        marginTop: 150,
    },
    titleStyle: {
        fontSize: 36,
        fontFamily: 'Roboto',
        color: 'white',
        fontWeight: '700',
        width: 217,
        height: 84,
        marginTop: 94,
        marginLeft: 16,
    },
    gradient: {
        flex: 1,
    },
    TitleContainer: {
        width: '100%',
        height: '40%',
        borderBottomEndRadius: 100,
        borderBottomStartRadius: 100,
        overflow: 'hidden',
    },
    LoginContainer: {
        flex: 1,
    },
})

export default LoginScreen
