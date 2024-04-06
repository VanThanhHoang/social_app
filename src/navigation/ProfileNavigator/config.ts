import AccountScreen from "@/screens/profileScreens/AccountScreen";
import PrivacyScreen from "@/screens/profileScreens/PrivacyScreen";
import ProfileScreen from "@/screens/profileScreens/ProfileScreen";
import Setting from "@/screens/profileScreens/Setting";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum ProfileStackNames {
    Profile = "ProfileScreen",
    Setting = "Setting",
    Account = "AccountScreen",
    Privacy = "PrivacyScreen",
}

export type ProfileStackParamList = {
    [ProfileStackNames.Profile]: undefined;
    [ProfileStackNames.Setting]: undefined;
    [ProfileStackNames.Account]: undefined;
    [ProfileStackNames.Privacy]: undefined;
};

interface StackProps {
    name: ProfileStackNames;
    component: () => React.JSX.Element;
    options?: any;
}

export const ProfileStacks: StackProps[] = [
    {
        name: ProfileStackNames.Profile,
        component: ProfileScreen,
        options: {}
    },
    {
        name: ProfileStackNames.Setting,
        component: Setting,
        options: {}
    },
    {
        name: ProfileStackNames.Account,
        component: AccountScreen,
        options: {}
    },
    {
        name: ProfileStackNames.Privacy,
        component: PrivacyScreen,
        options: {}
    }
];

export type ProfileNavigatorProps =  NativeStackNavigationProp<ProfileStackParamList>;