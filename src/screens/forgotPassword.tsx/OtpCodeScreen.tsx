import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderBarEditProfile from '@/screens/createProfileScreen/component/HeaderBarEditProfile'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoginStackParamList } from '@/navigation/login';
import HeaderForgot from './componnents/header';
import OTPDigitsInput from './componnents/OtpInput';
import OtpInput from './componnents/OtpInput';
import Footer from './componnents/Footer';
import ButtonBottom from '@/screens/createProfileScreen/component/ButtonBottom';
import { LoginStackEnum } from '@/navigation/login';


const OtpCodeScreen = () => {
    const { t } = useTranslation();
    const navigation = useNavigation<NativeStackNavigationProp<LoginStackParamList>>();
    return (
        <View style={styles.container}>
            <HeaderBarEditProfile
                back={t('Back')}
                IconBackComponent={<FontAwesomeIcon icon={faChevronLeft} size={15} color="#000" style={{ marginRight: 8 }} />}
                onPressBack={() => navigation.goBack()}
            />
            <HeaderForgot title='OTP code verification 🔐'
                title2={`We have sent an OTP code to your email thp010620@gmail.com. Enter the code below to verify your account`}
            />
            <OtpInput />
            <Footer />
            <View style={{ marginTop: 400 }}>
                <ButtonBottom title={t('Continue')} backgroundColor='#5E4EA0' color='#FFFFFF' onPress={() => navigation.navigate(LoginStackEnum.CreactNewPassScreen)} />
            </View>
        </View>
    )
}

export default OtpCodeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
    },
})