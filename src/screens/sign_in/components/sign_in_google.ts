import { ANSI_COLOR_CODES, useLogger } from '@/utils';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
const logger = useLogger('signInWithGoole',ANSI_COLOR_CODES.fgBlue);
export const signInWithGoole = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const {idToken}= await GoogleSignin.signIn();
    logger({idToken})
    return idToken;
  } catch (error) {
    logger({error})
  }
};
