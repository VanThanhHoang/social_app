import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store, { persistor, useAppSelector } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import AppNavigator from "@/navigation";
const App = () => {
    //tesst
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppNavigator/>
            </PersistGate>
        </Provider>
    );
};
export default App;
