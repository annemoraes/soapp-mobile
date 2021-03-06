import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login/index';

const { Navigator, Screen } = createStackNavigator();

export default function Routes(){
  return(
    <NavigationContainer>
      <Navigator screenOptions = {{ headerShown: false }}>
        <Screen 
          name="Home" 
          component={Home} 
        />
        <Screen 
          name="Login" 
          component={Login} 
        />
        <Screen 
          name="Register" 
          component={Register} 
        />
      </Navigator>
    </NavigationContainer>
  );
}