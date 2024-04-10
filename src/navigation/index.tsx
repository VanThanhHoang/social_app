import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStacks, RootStackParamList } from "@/navigation/config";
import { LoadingModal } from "@/components";
import { useAppSelector } from "@/redux/store";
import AppBottomTab from "./bottom_tab";
import i18n from "@/language/i18n";



const useAsynsLanguage = () => {
  const language = useAppSelector(state => state.language.language);
  React.useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);
};

export default function AppNavigator() {
  const AppStack = createNativeStackNavigator<RootStackParamList>();
  const {isLoading} = useAppSelector(state => state.app);
  useAsynsLanguage();
  return (
    <>
    <LoadingModal visible={isLoading}/>
    <NavigationContainer>
      <AppStack.Navigator
       screenOptions={{
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
    </>
  );
}
