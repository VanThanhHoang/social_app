import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import VnpicProfile from './VnpicProfile';
import RepliesProfile from './RepliesProfile';
import { NavigationContainer } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const Tab = createMaterialTopTabNavigator();
interface Props {
  scrollY: any; // hoặc thay any bằng kiểu dữ liệu phù hợp nếu có
}

const TopTabProfile:React.FC<Props> = ({ scrollY }) => {
  const {t} = useTranslation();
  return (
      <Tab.Navigator
        initialRouteName="Vnpic"
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: '#5E4EA0',
            height: 3,
            borderRadius: 2,
          },
          tabBarLabelStyle: {
            fontSize: 16,
            fontFamily: 'Roboto',
            fontWeight: 'bold',
          },
        }}>
        <Tab.Screen name="Vnpic">
          {() => <VnpicProfile scrollY={scrollY} />}
        </Tab.Screen>
        <Tab.Screen name={t('Replies')}>
          {() => <RepliesProfile scrollY={scrollY} />}
        </Tab.Screen>
      </Tab.Navigator>
  );
};

export default TopTabProfile;