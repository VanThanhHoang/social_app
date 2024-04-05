// this is sample config file for navigation
import App from "@/App";
import { LoginScreen } from "@/screens";
import React, { ReactElement } from "react";
import AppBottomTab from "./bottom_tab";
import HomeDetailNavigator from "./HomeNavigator";
import { NavigatorScreenParams } from "@react-navigation/native";
import { HomeStackParamList } from "./HomeNavigator/config";

export enum AppStackNames {
  HomeBottomTab="HomeBottomTab",
  HomeDetailNavigator = "HomeDetailNavigator",
  Screen1 = "Screen1",
  Screen2 = "Screen2",

}

export type RootStackParamList = {
  [AppStackNames.HomeBottomTab]: undefined;
  [AppStackNames.HomeDetailNavigator]: NavigatorScreenParams<HomeStackParamList> | undefined;
  [AppStackNames.Screen1]: undefined;
  [AppStackNames.Screen2]: { userId: string };
};

interface StackProps {
  name: AppStackNames;
  component: () => React.JSX.Element;
  options?: any;
}

export const AppStacks: StackProps [] = [
  {
    name: AppStackNames.HomeBottomTab,
    component: AppBottomTab,
    options: {}
  },
  {
    name: AppStackNames.HomeDetailNavigator,
    component: HomeDetailNavigator,
    options: {}
  },
  {
    name: AppStackNames.Screen2,
    component: LoginScreen,
    options: {}
  }
];
