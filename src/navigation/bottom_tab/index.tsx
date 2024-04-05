import React from 'react';
import HomeIcon from '@/assets/icons/HomeIcon';
import {LoginScreen} from '@/screens';
import {HomeScreen} from '@/screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SvgProps} from 'react-native-svg';
import SearchIcon from '@/assets/icons/SearchIcon';
import PostIcon from '@/assets/icons/PostIcon';
import StarIcon from '@/assets/icons/StarIcon';
import ProfileIcon from '@/assets/icons/ProfileIcon';
const Tab = createBottomTabNavigator();
type BottomTabProps = {
  icon: (props: SvgProps) => React.JSX.Element;
  name: string;
  component: () => React.JSX.Element;
};
const BottomTabs: BottomTabProps[] = [
  {
    icon: HomeIcon,
    name: 'Home',
    component: HomeScreen,
  },
  {
    icon: SearchIcon,
    name: 'Search',
    component: LoginScreen,
  },
  {
    icon: PostIcon,
    name: 'Post',
    component: LoginScreen,
  },
  {
    icon: StarIcon,
    name: 'Notification',
    component: LoginScreen,
  },
  {
    icon: ProfileIcon ,
    name: 'Profile',
    component: LoginScreen,
  },
];
function AppBottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: '#5E4EA0',
        tabBarInactiveTintColor: '#C8C8C8',
      }}>
      {
        BottomTabs.map((tab, index) => (
          <Tab.Screen
            key={index}
            name={tab.name}
            component={tab.component}
            options={{
              tabBarIcon: ({color}) => <tab.icon color={color} />,
            }}
          />
        ))
      }
    </Tab.Navigator>
  );
}
export default AppBottomTab;
