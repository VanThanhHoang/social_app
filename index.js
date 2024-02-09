/**
 * @format
 */
// import gesture handle
import '@/language/i18n';
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {FIREBASE_WEB_CLIENT_ID} from "@env"
GoogleSignin.configure({
    webClientId:FIREBASE_WEB_CLIENT_ID
});
AppRegistry.registerComponent(appName, () => App);
