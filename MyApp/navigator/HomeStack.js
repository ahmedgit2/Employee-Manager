import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'

import { AddEmployee } from '../Screens/AddEmployee'
import { EmployeeDetails } from '../Screens/EmployeeDetails'
import { HomeDrower } from './HomeDrower'

import { Colors } from '../utils/Colors';

const Stack = createStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName={ 'EmployeeList' }
      screenOptions={ { headerTintColor: Colors.white } }
    >
      <Stack.Screen
        name="HomeDrower"
        component={ HomeDrower }
        options={ {
          title: '',
          headerShown: false
        } }
      />
      <Stack.Screen
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
