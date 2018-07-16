import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Dimensions
} from 'react-native';
import { createDrawerNavigator, createStackNavigator, createSwitchNavigator   } from 'react-navigation'

// Hide Warning
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])

import { Home } from './screenName'
var { width } = Dimensions.get('window');

// Components
import HomeScreen from './src/components/HomeScreen'
import NotificationScreen from './src/components/Notifications'
import SelectDowncreen from './src/components/SelectDown'
import RabuDownScreen from './src/components/RabuDown'
import SelectYearScreen from './src/components/SelectYear'
import ShowdataScreen from './src/components/Showdata'
import InputDownScreen from './src/components/InputDown'

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    SelectDown: {
      screen: SelectDowncreen
    },
    RabuDown: {
      screen: RabuDownScreen
    },
    SelectYear: {
      screen: SelectYearScreen
    },
    Showdata: {
      screen: ShowdataScreen
    },
    InputDown: {
      screen: InputDownScreen
    }
  },
  {
    headerMode: 'none'
  }
);

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
const AppDrawer = createDrawerNavigator(routeConfig, drawerNavigatorConfig);

const App =  createSwitchNavigator(
  {
    App: AppDrawer,
    Cal: RootStack
  },
  {
    initialRouteName: 'App',
  }
);
export default RootStack
