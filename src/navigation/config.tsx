// this is sample config file for navigation
import { LoginScreen } from "@/screens";
import React, { ReactElement } from "react";

export enum AppStackNames {
  Screen1 = "Screen1",
  Screen2 = "Screen2",
}

export type RootStackParamList = {

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
