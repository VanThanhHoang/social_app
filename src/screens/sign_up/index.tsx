import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderBarEditProfile from '@/screens/createProfileScreen/component/HeaderBarEditProfile'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { colors } from '@/theme';
import TextInputSignIn2 from './components/TextInput';
import Checkbox from './components/Checkbox';
import TextSignUp from './components/TextSignUp';
import ButtonBottom from '@/screens/createProfileScreen/component/ButtonBottom';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoginStackEnum, LoginStackParamList } from '@/navigation/login';

const SigninScreen = () => {
    const { t } = useTranslation();
    const navigation = useNavigation<NativeStackNavigationProp<LoginStackParamList>>();
    const handleSignUP = () => {
        navigation.navigate(LoginStackEnum.SignUpScreen)
        console.log('Sign in')
    }
    return (
        <View style={styles.container}>
            <HeaderBarEditProfile
                back={t('Back')}
                IconBackComponent={<FontAwesomeIcon icon={faChevronLeft} size={15} color="#000" style={{ marginRight: 8 }} />}
                onPressBack={() => navigation.goBack()}
            />
            <Text style={styles.welcome}>Welcome back 👋</Text>
            <Text style={styles.please}>Please enter your email & password to sign in</Text>
            <TextInputSignIn2 placeholder="Email" title="Email" showIcon iconType='email' />
            <TextInputSignIn2 placeholder="Password" title="Password" showIcon iconType='password' />
            <Checkbox label="Remember me" />
            <View style={{ width: 370, height: 1, borderColor: colors.gray, borderWidth: 0.2, marginTop: 30 }} />
            <TextSignUp />
            <View style={{marginTop:200}}>
                <ButtonBottom title={t('Sign in')} backgroundColor='#5E4EA0' color='#FFFFFF' onPress={handleSignUP} />
            </View>
        </View>
    )
}

export default SigninScreen

const styles = StyleSheet.create({
    please: {
        fontSize: 16,
        color: colors.gray,
        marginTop: 8,
    },
    welcome: {
        fontSize: 35,
        fontWeight: '700',
        color: colors.black,
        marginTop: 24,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 16,
    }
})