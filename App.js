import React, {useState,useEffect} from 'react';
import { Text, View, Button, Alert } from 'react-native';
import {css} from './assets/css/Css';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/Home';
import Login from './views/Login';
import Rastreio from './views/Rastreio';

export default function App() {

  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={Home}
            options=
            {{
              title: "Track it",
              headerStyle: {backgroundColor: '#0e71a8' },
              headerTintColor: '#333',
              headerTitleStyle: 
              {
                fontWeight: 'bold', 
                alignSelf: 'center',
                color: '#fff', 
                fontSize: 30
              }
            }} 
          />
          <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
          <Stack.Screen name="Rastreio" component={Rastreio} />
          {/* <Stack.Screen name="AreaRestrita" component={AreaRestrita} /> */}
        </Stack.Navigator>
      </NavigationContainer>
  );
};