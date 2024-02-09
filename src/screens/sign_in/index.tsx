import {SafeAreaView, StyleSheet, Text,TouchableOpacity} from "react-native";
import React, {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {useAppDispatch, useAppSelector} from "@/redux/store"; 
import {useLogger} from "@/utils";
import {fetchUserById} from "@/redux/action";
import { signInWithGoole } from "./components/sign_in_google";
const LoginScreen = () => {
    const dispatch = useAppDispatch();
    const {isLoading} = useAppSelector(state => state.app);
        useEffect(() => {
        dispatch(fetchUserById(123))
    }, []);
    const {t} = useTranslation()
    return <SafeAreaView style={styles.container}>
       <TouchableOpacity onPress={signInWithGoole}>
       <Text>Login with google</Text>
       </TouchableOpacity>
    </SafeAreaView>;
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default LoginScreen
