import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store, { persistor, useAppSelector } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import AppNavigator from "@/navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const App = () => {
    //tesst
    return (
        <GestureHandlerRootView style={{flex:1}}>
            <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppNavigator/>
            </PersistGate>
        </Provider>
        </GestureHandlerRootView>
    );
};
export default App;
