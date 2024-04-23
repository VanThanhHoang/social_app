import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import HeaderBarEditProfile from '@/screens/createProfileScreen/component/HeaderBarEditProfile'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { colors } from '@/theme';
import TextInputSignIn from './components/TextInput';
import Checkbox2 from './components/Checkbox';
import TextSignUp from './components/TextSignUp';
import ButtonBottom from '@/screens/createProfileScreen/component/ButtonBottom';
import GenderDropdown from './components/Date';
import { text } from '@fortawesome/fontawesome-svg-core';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoginStackParamList } from '@/navigation/login';


const SignUpScreen = () => {
    const { t } = useTranslation();
    const navigation = useNavigation<NativeStackNavigationProp<LoginStackParamList>>();
    const [isChecked, setIsChecked] = useState(false);
    return (
        <ScrollView nestedScrollEnabled={true} style={styles.container}>
            <HeaderBarEditProfile
                back={t('Back')}
                IconBackComponent={<FontAwesomeIcon icon={faChevronLeft} size={15} color="#000" style={{ marginRight: 8 }} />}
                onPressBack={() => navigation.goBack()}
            />
            <Text style={styles.welcome}>Creact account  </Text>
            <Text style={styles.please}>Join our community and personalize your news experience</Text>
            <TextInputSignIn placeholder="Email" title="Email" showIcon iconType='email' />
            <TextInputSignIn placeholder='Full name' title='Full name' showIcon iconType='name' />
            <TextInputSignIn placeholder='Gender' title='Gender' showIcon iconType='sex' />
            <TextInputSignIn placeholder='Date of birth' title='Date of birth' showIcon iconType='birthday' />
            <TextInputSignIn placeholder="Password" title="Password" showIcon iconType='password' />
            <TextInputSignIn placeholder="Confirm Password" title="Confirm Password" showIcon iconType='password' />
            <Checkbox2
                label="I agree to Newsline"
                onCheckChange={(newCheckState) => setIsChecked(newCheckState)}
            />
            <View style={{ width: 370, height: 1, borderColor: colors.gray, borderWidth: 0.2, marginTop: 30 }} />
            <TextSignUp />
            <View style={{ marginTop: 30 }}>
                <TouchableOpacity
                    disabled={!isChecked}
                    onPress={() => {""}}
                    style={[styles.btn, { backgroundColor: isChecked ? '#5E4EA0' : '#A9A9A9' }]}
                >
                    <Text style={styles.text}>{t('Sign up')}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: '700',
        color: '#FFFFFF',
    },
    btn: {
        paddingHorizontal: 24,
        paddingVertical: 12,
        backgroundColor: '#5E4EA0',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
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