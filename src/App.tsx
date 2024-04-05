import React from "react";
import { Provider } from "react-redux";
import store, { persistor, useAppSelector } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import AppNavigator from "@/navigation";
import { useLogger } from "@/utils";
import FollowAccountScreen from "./screens/createProfileScreen/FollowAccountScreen";
import JoinVerses from "./screens/createProfileScreen/JoinVerses";
import CreateProfileScreen from "./screens/createProfileScreen/CreateProfileScreen";
import ProfileScreen from "./screens/profileScreens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import Setting from "./screens/profileScreens/Setting";
import PrivacyScreen from "./screens/profileScreens/PrivacyScreen";
const App = () => {
    //tesst
    return (
        // <Provider store={store}>
        //     <PersistGate loading={null} persistor={persistor}>
        //         <ProfileScreen/>
        //     </PersistGate>
        // </Provider>
        <NavigationContainer>
            <ProfileScreen />
        </NavigationContainer>

    );
};
export default App;
