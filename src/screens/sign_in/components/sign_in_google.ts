import { ANSI_COLOR_CODES, useLogger } from '@/utils';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
const logger = useLogger('signInWithGoole', ANSI_COLOR_CODES.fgBlue);
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoginStackParamList, LoginStackEnum } from '@/navigation/login';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from "@react-native-async-storage/async-storage";
import AxiosInstance from '@/network/axiosInstance';
import { localStorage } from '@/utils';
import { HomeStackNames, HomeStackParamList } from '@/navigation/HomeNavigator/config';
import { ILogin, loginWithGoogle } from '@/network';
import { setUser } from '@/redux/slice/user.slice';
import { AppDispatch } from '@/redux/store';

export const signInWithGoole = async (navigation: any, dispatch: AppDispatch) => {
  const axios = AxiosInstance();

  try {
    await GoogleSignin.hasPlayServices();
    const { idToken } = await GoogleSignin.signIn();
    const token_FCM = await setUpNotification();
    try {
      // const data = {
      //   idToken,
      //   fcm_token: token_FCM,
      // }
      // const response = await axios.post('auth/login-google', data);
      // localStorage.set('token', response.data.accessToken);
      // console.log(response.data.fcm_token, "fcm");
      // // console.log(response.status, "ádasdas");
      // console.log(response.data, "ádasdas");
      // if (response.status as any === 'success') {
      //   if (response.data.isFirstTimeLogin) {
      //     localStorage.set('userData', JSON.stringify(response.data));
      //     navigation.navigate(LoginStackEnum.CreateProfileScreen);
      //     return;
      //   }
      //   navigation.navigate(LoginStackEnum.CreateProfileScreen);
      //   localStorage.set('userData', JSON.stringify(response.data));



      // }

      // reduxLoginWithGoogle({idToken, fcm_token: token_FCM});
      // loginWithGoogle({ idToken, fcm_token: token_FCM });
      const response: any = await loginWithGoogle({ idToken, fcm_token: token_FCM });
      console.log(response, "ádasdas");
      dispatch(setUser(response.data));
      if (response.status as any === 'success') {
        if (response.data.isFirstTimeLogin) {
          navigation.navigate(LoginStackEnum.CreateProfileScreen);
          return;
        }
        navigation.navigate(LoginStackEnum.CreateProfileScreen);
      }


      // console.log(response.status, "ádasdas");
    } catch (error) {
      console.log(error, "ádasdas");
    }
    // const data: ILogin = {
    //   idToken: idToken,
    //   fcm_token: token_FCM,
    // }
    // reduxLoginWithGoogle(data);



    return idToken;
  } catch (error) {
    logger({ error })
  }

};
async function setUpNotification() {
  await messaging().registerDeviceForRemoteMessages();
  const token_FCM = await messaging().getToken();
  localStorage.set("FCM", token_FCM)
  return token_FCM;
}
try {
  setUpNotification();
} catch (e) {
  console.log(e);
}


