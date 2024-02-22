import React from "react";
import {Provider} from "react-redux";
import store, {persistor, useAppSelector} from "@/redux/store";
import {PersistGate} from "redux-persist/integration/react";
import AppNavigator from "@/navigation";
import {useLogger} from "@/utils";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import CreateProfileScreen from "./screens/createProfileScreen/CreateProfileScreen";
import EditBioScreen from "./screens/createProfileScreen/EditBioScreen";
import PrivacyProfileScreen from "./screens/createProfileScreen/PrivacyProfileScreen";
const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <PrivacyProfileScreen/>
            </PersistGate>
        </Provider>
    );
};
export default App;
