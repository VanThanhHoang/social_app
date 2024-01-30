import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStacks, RootStackParamList } from "@/navigation/config";

export default function AppNavigator() {
  const AppStack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{
        headerShown: false
      }}>
        {AppStacks.map((stack, index) => {
            return <AppStack.Screen
              key={index}
              name={stack.name}
              component={stack.component}
              options={stack.options}
            />;
          })}
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
