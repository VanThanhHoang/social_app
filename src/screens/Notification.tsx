import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllScreen from './AllScreen';
import MentionsScreen from './MentionsScreen';
import Constants from 'expo-constants';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const TopTabNa = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={styles.header}>
        <Text style={styles.text}>Notification</Text>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.containerTab,
          tabBarLabelStyle: styles.tabLabel,
          tabBarIndicatorStyle: {backgroundColor: '#5E4EA0'},
        }}>
        <Tab.Screen name="All" component={AllScreen} />
        <Tab.Screen name="Mentions" component={MentionsScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default TopTabNa;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTab: {
    paddingTop: Constants.statusBarHeight,
  },
  tabLabel: {
    color: '#484848',
    width: 70,
    height: 21,
    lineHeight: 21,
  },
  header: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: 56,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5E4EA0',
    padding: 10,
  },
});
