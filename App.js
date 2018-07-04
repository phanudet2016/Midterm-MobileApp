import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Dimensions
} from 'react-native';
import { createDrawerNavigator  } from 'react-navigation'

// Hide Warning
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])

import { Home } from './screenName'
var { width } = Dimensions.get('window');

// Components
import HomeScreen from './src/components/HomeScreen'
import NotificationScreen from './src/components/Notifications'

// congig Drawer
let routeConfig = {
  Home: {
    screen: HomeScreen
  },
  Notifications: {
    screen: NotificationScreen
  }
};
let drawerNavigatorConfig = {
  initialRouteName: Home,
  drawerWidth: width / 2,
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  contentOption: {
    activeTiniColor: 'red',
  },
  contentOptions: {
    activeTintColor: 'rgb(50,63,164)',
  },
  drawerBackgroundColor: '#FFF',
};

// const App = createDrawerNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
//   Notifications: {
//     screen: NotificationScreen,
//   },
// });

const App = createDrawerNavigator(routeConfig, drawerNavigatorConfig);
export default App
