// this is sample config file for navigation
import App from "@/App";
import { LoginScreen } from "@/screens";
import React, { ReactElement } from "react";
import AppBottomTab from "./bottom_tab";

export enum AppStackNames {
  HomeBottomTab="HomeBottomTab",
  Screen1 = "Screen1",
  Screen2 = "Screen2",

}

export type RootStackParamList = {
  [AppStackNames.HomeBottomTab]: undefined;
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
    name: AppStackNames.Screen1,
    component: LoginScreen,
    options: {}
  },
  {
    name: AppStackNames.Screen2,
    component: LoginScreen,
    options: {}
  }
];
