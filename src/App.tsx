import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store, {persistor, useAppSelector} from '@/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigator from '@/navigation';
import messaging from '@react-native-firebase/messaging';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Alert} from 'react-native';
import CustomToast from './components/Toast/CutomToast';
import { use } from 'i18next';
const App = () => {

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      CustomToast({
        type: 'success',
        message: remoteMessage.notification?.body ,
      });
    });
    return unsubscribe;
  }, []);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};
export default App;
