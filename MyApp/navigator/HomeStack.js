import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'

import { AddEmployee } from '../assets/Screens/AddEmployee'
import { EmployeeDetails } from '../assets/Screens/EmployeeDetails'
import { HomeScreen } from '../assets/Screens/HomeScreen'


import { Colors } from '../utils/Colors';

const Stack = createStackNavigator();

export function HomeStack() {

  return (
    <Stack.Navigator
      screenOptions={ { headerTintColor: Colors.white } }
    >

      <Stack.Screen
        name="HomeScreen"
        component={ HomeScreen }
        options={ {
          title: '',
          headerShown: false
        } }
      />

      <Stack.Screen
        screenOptions={ { headerShown: false } }
        name="AddEmployee"
        component={ AddEmployee }
        options={ {
          title: '',
          headerStyle: { backgroundColor: Colors.Main_COLOR }
        } }
      />
      <Stack.Screen
        name="EmployeeDetails"
        component={ EmployeeDetails }
        options={ {
          title: '',
          headerStyle: { backgroundColor: Colors.Main_COLOR }
        } }
      />

    </Stack.Navigator >
  );
}
