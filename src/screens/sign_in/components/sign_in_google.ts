import { ANSI_COLOR_CODES, useLogger } from '@/utils';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
const logger = useLogger('signInWithGoole',ANSI_COLOR_CODES.fgBlue);
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoginStackParamList, LoginStackEnum } from '@/navigation/login';

export const signInWithGoole = async () => {
  // const navigation = useNavigation<NativeStackNavigationProp<LoginStackParamList>>();
  try {
    await GoogleSignin.hasPlayServices();
    const {idToken}= await GoogleSignin.signIn();
    // navigation.navigate(LoginStackEnum.CreateProfileScreen);
    logger({idToken})
    return idToken;
  } catch (error) {
    logger({error})
  }
};
