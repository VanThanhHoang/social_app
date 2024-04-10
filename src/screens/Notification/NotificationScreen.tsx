import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllScreen from './AllScreen';
import MentionsScreen from './MentionsScreen';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const Notification = () => {
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
        <Tab.Screen
          name="All"
          component={AllScreen}
          options={{tabBarLabel: 'All'}}
        />
        <Tab.Screen
          name="Mentions"
          component={MentionsScreen}
          options={{tabBarLabel: 'Mentions'}}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Notification;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTab: {},
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
