import React from 'react';
import {View} from 'react-native';
import {StyleSheet, Platform} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import EditScreen from '@/screens/EditScreen';
import ProfileScreen from '@/screens/ProfileScreen';
import TopTabNa from './TopTabNa';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import {faBell} from '@fortawesome/free-regular-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#5E4EA0',
        tabBarInactiveTintColor: '#C6C6C6',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0,
          shadowOffset: {width: 0, height: -3},
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowOpacity: 0.8,
          elevation: 5,
          ...Platform.select({
            ios: {
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowOpacity: 0.8,
              shadowOffset: {width: 0, height: -3},
              bottom: 0,
            },
            android: {
              elevation: 5,
              bottom: 0,
            },
          }),
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              icon={faHouse}
              color={focused ? '#5E4EA0' : '#C6C6C6'}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              icon={faSearch}
              color={focused ? '#5E4EA0' : '#C6C6C6'}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Edit"
        component={EditScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              icon={faPenToSquare}
              color={focused ? '#5E4EA0' : '#C6C6C6'}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={TopTabNa}
        options={{
          tabBarLabel: 'Notification',
          headerShown: false,
          tabBarStyle: {
            ...Platform.select({
              android: {
                elevation: 0,
                shadowOpacity: 0,
                borderTopWidth: 0,
                bottom: 0,
              },
            }),
          },
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              icon={faBell}
              color={focused ? '#5E4EA0' : '#C6C6C6'}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              icon={faUser}
              color={focused ? '#5E4EA0' : '#C6C6C6'}
              size={20}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
