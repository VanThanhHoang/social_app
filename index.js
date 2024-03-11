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
console.log('env',{
    env:process.env.FIREBASE_WEB_CLIENT_ID
})
GoogleSignin.configure({
    webClientId:process.env.FIREBASE_WEB_CLIENT_ID || ''
});
AppRegistry.registerComponent(appName, () => App);
