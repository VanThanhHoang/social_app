// this is sample config file for navigation
import {LoginScreen} from '@/screens';
import React, {ReactElement} from 'react';
import TopTabNa from './TopTabNa';
import BottomNavigation from './BottomNavigation';

export enum AppStackNames {
  Screen1 = 'Screen1',
  Screen2 = 'Screen2',
  Screen3 = 'Screen3',
}

export type RootStackParamList = {
  [AppStackNames.Screen1]: undefined;
  [AppStackNames.Screen2]: {userId: string};
  [AppStackNames.Screen3]: undefined;
};

interface StackProps {
  name: AppStackNames;
  component: () => React.JSX.Element;
  options?: any;
}

export const AppStacks: StackProps[] = [
  {
    name: AppStackNames.Screen1,
    component: LoginScreen,
    options: {},
  },
  {
    name: AppStackNames.Screen2,
    component: LoginScreen,
    options: {},
  },
  {
    name: AppStackNames.Screen3,
    component: BottomNavigation,
    options: {},
  },
];
