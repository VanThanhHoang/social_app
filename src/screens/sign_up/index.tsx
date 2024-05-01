import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
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
import reduxStorage from '@/redux/store/reduxStorage';
import CustomToast from '@/components/Toast/CutomToast';
import Toast from 'react-native-toast-message';
import { login } from '@/network/callAPI';

const SigninScreen = () => {
    const { t } = useTranslation();
    const navigation = useNavigation<NativeStackNavigationProp<LoginStackParamList>>();

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [rememberMe, setrememberMe] = useState(false);
    const toastConfig = {
        success: (props: any) => (
          <View style={styles.CustumToast}>
            <Text style={{ color: 'black', fontSize: 14,alignSelf:"center", fontWeight: "600" }}>{props.text1}</Text>
          </View>
        ),
        error: (props: any) => (
          <View style={styles.CustumToast2}>
            <Text style={{ color: 'black', fontSize: 14, fontWeight: "600",alignSelf:"center", marginStart: 10 }}>{props.text1}</Text>
          </View>
        ),
    
      };
    useEffect(() => {
        reduxStorage.getItem('email').then((email: any) => {
            if (email) {
                setemail(email);
            }
        });
        reduxStorage.getItem('password').then((password: any) => {
            if (password) {
                setpassword(password);
            }
        });
        reduxStorage.getItem('rememberMe').then((rememberMeValue: any) => {
            setrememberMe(rememberMeValue === 'true');
        });
    }, []);
    const handleLogin = async () => {
        try {
            const response: any = await login(email, password);
            if (response?.status === "success") {
                console.log('Login success:', response.data);
                CustomToast({
                    type: 'success',
                    message: 'Login success 🎉',
                });
                if (rememberMe) {
                    reduxStorage.setItem('email', email);
                    reduxStorage.setItem('password', password);
                }
            } else {
                CustomToast({
                    type: 'error',
                    message: 'Login failed 😢',

                });
                // console.log('Login failed with response:', response);
            }
        } catch (error) {
            console.error('Login failed with error:', error);
        }
    };
    return (
        <View style={styles.container}>
            <HeaderBarEditProfile
                back={t('Back')}
                IconBackComponent={<FontAwesomeIcon icon={faChevronLeft} size={15} color="#000" style={{ marginRight: 8 }} />}
                onPressBack={() => navigation.goBack()}
            />
            <Text style={styles.welcome}>Welcome back 👋</Text>
            <Text style={styles.please}>Please enter your email & password to sign in</Text>
            <TextInputSignIn2 placeholder="Email" title="Email" showIcon iconType='email' onChangText={(text: string) => setemail(text)} value={email} />
            <TextInputSignIn2 placeholder="Password" title="Password" showIcon iconType='password' onChangText={(text: string) => setpassword(text)} value={password}/>
            <Checkbox label="Remember me"
                email={email}
                password={password}
                onCheckChange={(isChecked) => setrememberMe(isChecked)}
                initialChecked={rememberMe} />
            <View style={{ width: 370, height: 1, borderColor: colors.gray, borderWidth: 0.2, marginTop: 30 }} />
            <TextSignUp />
            <View style={{ marginTop: 200 }}>
                <ButtonBottom title={t('Sign in')} backgroundColor='#5E4EA0' color='#FFFFFF' onPress={handleLogin} />
            </View>
            <Toast config={toastConfig} />
        </View>
    )
}

export default SigninScreen

const styles = StyleSheet.create({
    CustumToast2: {
        backgroundColor: colors.white,
        padding: 16,
        borderRadius: 8,
        width: 356,
        height: 70,
        borderLeftColor: colors.red,
        borderRightColor: colors.red,
        borderLeftWidth: 4,
        borderRightWidth: 4,
        justifyContent: 'center',
      },
    CustumToast: {
        backgroundColor: colors.white,
        padding: 16,
        borderRadius: 8,
        width: 356,
        height: 70,
        borderLeftColor: colors.purple,
        borderLeftWidth: 4,
        justifyContent: 'center',
        borderRightColor: colors.purple,
        borderRightWidth: 4,
      },
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