import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderBarEditProfile from '@/screens/createProfileScreen/component/HeaderBarEditProfile'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoginStackEnum, LoginStackParamList } from '@/navigation/login';
import HeaderForgot from './componnents/header';
import TextInputSignIn2 from '@/screens/sign_up/components/TextInput';
import ButtonBottom from '@/screens/createProfileScreen/component/ButtonBottom';

const ForgotPass = () => {
    const { t } = useTranslation();
    const navigation = useNavigation<NativeStackNavigationProp<LoginStackParamList>>();
    return (
        <View style={styles.container}>
            <HeaderBarEditProfile
                back={t('Back')}
                IconBackComponent={<FontAwesomeIcon icon={faChevronLeft} size={15} color="#000" style={{ marginRight: 8 }} />}
                onPressBack={() => navigation.goBack()}
            />
            <HeaderForgot title='Rest your password 🔑'
                title2='Please enter your email and we wil send on{"\n"}OTP code in the next step to reset your password'
            />
            <TextInputSignIn2 style={styles.Input} placeholder="Email" title="Email" showIcon iconType='email' />
            <View style={{ marginTop: 470 }}>
                <ButtonBottom title={t('Continue')} backgroundColor='#5E4EA0' color='#FFFFFF' onPress={() => navigation.navigate(LoginStackEnum.OtpCodeScreen)} />
            </View>
        </View>
    )
}

export default ForgotPass

const styles = StyleSheet.create({
    Input: {
        marginTop: 30,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
    },
})