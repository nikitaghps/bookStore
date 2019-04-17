import React from 'react';
import { createAppContainer, createSwitchNavigator,createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
//import dashboard from '../screens/dashboard'
import list from '../screens/list'
import details from '../screens/details'
import login from '../screens/login'
import cart from  '../screens/cart'
const HomeStack = createStackNavigator({
  //Home: dashboard,
  Home: login,
  loginScreen:{screen: login},
  detailsScreen: {screen: details},
  listScreen: {screen: list},
  cartScreen:{screen: cart}
//  Home: details
//Home: login
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};


export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: HomeStack,
}));