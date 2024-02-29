import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllScreen from '@/screens/AllScreen';
import MentionsScreen from '@/screens/MentionsScreen';
import Constants from 'expo-constants';
import {StyleSheet, View, Text} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const TopTabNa = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.text}>Notification</Text>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.container,
          tabBarLabelStyle: styles.tabLabel,
          tabBarIndicatorStyle: {backgroundColor: '#5E4EA0'},
        }}>
        <Tab.Screen name="All" component={AllScreen} />
        <Tab.Screen name="Mentions" component={MentionsScreen} />
      </Tab.Navigator>
    </>
  );
};

export default TopTabNa;
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
  tabLabel: {
    color: '#484848',
    width: 70,
    height: 21,
    lineHeight: 21,
  },
  header: {
    width: 154,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5E4EA0',
    padding: 10,
  },
});
