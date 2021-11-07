import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//import { Login } from ''
//import { registration } from '';
import { HomeStack } from './HomeStack';

const Stack = createStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator>

      {/*
      <Stack.Screen
        name="Login"
        component={ Login }
        options={ { headerShown: false } }
      />

      <Stack.Screen name="registration" component={ registration } />
      */}

      <Stack.Screen name="HomeStack" component={ HomeStack } options={ { headerShown: false } } />
    </Stack.Navigator>
  );
}
