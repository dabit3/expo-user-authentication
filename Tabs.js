import { createBrowserApp } from '@react-navigation/web';
import { Platform } from 'react-native';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import SignIn from './SignIn';
import SignUp from './SignUp';

const createApp = Platform.select({
  web: createBrowserApp,
  default: createAppContainer,
});

export default createApp(
  createBottomTabNavigator(
    {
      SignIn,
      SignUp,
    },
    {
      tabBarOptions: {
        labelStyle: {
          fontSize: 16,
        },
        tabStyle: {
          justifyContent: 'center',
          flex: 1,
        },
        showIcon: false,
      },
    },
  ),
);
