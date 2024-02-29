import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {useAppDispatch, useAppSelector} from '@/redux/store';
import {useLogger} from '@/utils';
import {fetchUserById} from '@/redux/action';
import {useNavigation} from '@react-navigation/native';
import {signInWithGoole} from './components/sign_in_google';
import {AppStackNames} from '@/navigation/config';

const LoginScreen = () => {
  const navigation: any = useNavigation();
  const dispatch = useAppDispatch();
  const {isLoading} = useAppSelector(state => state.app);
  useEffect(() => {
    dispatch(fetchUserById(123));
  }, []);
  const {t} = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={signInWithGoole}>
        <Text>Login with google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{backgroundColor: 'red', padding: 10, marginTop: 10}}
        onPress={() => {
          navigation.navigate(AppStackNames.Screen3);
        }}>
        <Text>navigate qua top tab</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
