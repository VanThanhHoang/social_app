import React, {useState, useEffect} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';

import HeaderBarEditProfile from '@/screens/createProfileScreen/component/HeaderBarEditProfile';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import OtpInput from './componnents/OtpInput';
import TextInputSignIn2 from '@/screens/sign_up/components/TextInput';
import Footer from './componnents/Footer';
import ButtonBottom from '@/screens/createProfileScreen/component/ButtonBottom';
import {LoginStackParamList, LoginStackEnum} from '@/navigation/login';
import HeaderForgot from './componnents/header';
import AxiosInstance from '@/network/axiosInstance';
import axios from 'axios';
const OtpCodeScreen = () => {
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetFlag, setResetFlag] = useState(false);
  const {t} = useTranslation();

  const navigation =
    useNavigation<NativeStackNavigationProp<LoginStackParamList>>();

  const handleVerifyOTP = async () => {
    const email = 'trangianglong1199@gmail.com';
    const Axios = AxiosInstance();
    if (!newPassword && !confirmPassword) {
      Alert.alert('Error', 'Please fill in the new password field.');
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert(
        'Error',
        'Confirmed password does not match the new password.',
      );
      return;
    }

    try {
      const response: any = await Axios.post('auth/change_pass_otp', {
        email,
        otp: otp.toString(),
        newPass: newPassword,
      });

      if (response.status === 'success') {
        const data = response.data;
        console.log('Success:', data);
        navigation.navigate(LoginStackEnum.SignInScren);
      } else {
        console.log('Error response:', response.data);
        Alert.alert(
          'Error OTP',
          response.data.error ||
            'An error occurred while verifying OTP. Please try again later.',
        );
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      if (axios.isAxiosError(error) && error.response) {
        Alert.alert(
          'Error',
          error.response.data.error ||
            'An error occurred while verifying OTP. Please try again later.',
        );
      } else {
        Alert.alert(
          'Error',
          'An error occurred while verifying OTP. Please check your network connection and try again.',
        );
      }
    }
  };
  const resendOTP = async () => {
    const email = 'trangianglong1199@gmail.com';
    setOtp('');
    try {
      const response = await fetch(
        'https://sever-social-media-app.onrender.com/auth/send-otp',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email}),
        },
      );

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        console.error('Expected JSON response, got:', await response.text());
        Alert.alert('Error', 'Unexpected response from server.');
        return;
      }

      const data = await response.json();
      if (response.ok) {
        console.log('Resend OTP:', data.message);
      } else {
        Alert.alert('Error', data.message || 'Failed to resend OTP.');
      }
      setResetFlag(true);
    } catch (error) {
      console.error('Error resending OTP:', error);
      Alert.alert('Error', 'An error occurred while resending OTP.');
    }
  };

  useEffect(() => {
    if (resetFlag) {
      setResetFlag(false);
    }
  }, [resetFlag]);

  return (
    <View style={styles.container}>
      <HeaderBarEditProfile
        back={t('Back')}
        IconBackComponent={
          <FontAwesomeIcon
            icon={faChevronLeft}
            size={15}
            color="#000"
            style={{marginRight: 8}}
          />
        }
        onPressBack={() => navigation.goBack()}
      />
      <HeaderForgot
        title="OTP code verification 🔐"
        title2="We have sent an OTP code to your email. Enter the code below to verify your account."
      />
      <OtpInput onOtpComplete={setOtp} resetFlag={resetFlag} />
      <Footer resendOTP={resendOTP} />
      <TextInputSignIn2
        placeholder="Password"
        title="New Password"
        showIcon
        iconType="password"
        onChangeText={setNewPassword}
        value={newPassword}
      />
      <TextInputSignIn2
        placeholder="Confirm Password"
        title="Confirm New Password"
        showIcon
        iconType="password"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />
      <View style={{marginTop: 200}}>
        <ButtonBottom
          title={t('Continue')}
          backgroundColor="#5E4EA0"
          color="#FFFFFF"
          onPress={handleVerifyOTP}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
});

export default OtpCodeScreen;
