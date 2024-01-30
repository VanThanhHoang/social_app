import {SafeAreaView, StyleSheet, Text} from "react-native";
import React, {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {LanguageKey} from "@/language";
import {useAppDispatch, useAppSelector} from "@/redux/store";
import {useLogger} from "@/utils";
import {fetchUserById} from "@/redux/action";

const SampleScreen = () => {
    const logger = useLogger("App");
    const dispatch = useAppDispatch();
    const {isLoading} = useAppSelector(state => state.app);
        useEffect(() => {
        dispatch(fetchUserById(123))
    }, []);
    const {t} = useTranslation()
    return <SafeAreaView style={styles.container}>
        <Text>{t(LanguageKey.hello)}</Text>
    </SafeAreaView>;
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SampleScreen
