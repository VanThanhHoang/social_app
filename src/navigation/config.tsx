// this is sample config file for navigation
import React, { ReactElement } from "react";
import SampleScreen from "@/screens";

export enum AppStackNames {
  Screen1 = "Screen1",
  Screen2 = "Screen2",
}

export type RootStackParamList = {
  [AppStackNames.Screen1]: undefined;
  [AppStackNames.Screen2]: { userId: string };//this is sample if the screen has params
};

interface StackProps {
  name: AppStackNames;
  component: () => React.JSX.Element;
  options?: any;
}

export const AppStacks: StackProps [] = [
  {
    name: AppStackNames.Screen1,
    component: SampleScreen,
    options: {}
  },
  {
    name: AppStackNames.Screen2,
    component: SampleScreen,
    options: {}
  }
];
