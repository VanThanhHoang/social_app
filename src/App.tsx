import React from "react";
import {Provider} from "react-redux";
import store, {persistor, useAppSelector} from "@/redux/store";
import {PersistGate} from "redux-persist/integration/react";
import AppNavigator from "@/navigation";
import {useLogger} from "@/utils";

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppNavigator/>
            </PersistGate>
        </Provider>
    );
};
export default App;
