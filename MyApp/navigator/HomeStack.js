import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

import { Colors } from '../utils/Colors'

import { EmployeeList } from '../Components/EmployeeListForm'
import { AddEmployee } from '../Screens/AddEmployee'
import { EmployeeDetails } from '../Screens/EmployeeDetails'

const Stack = createStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator initialRouteName={ 'EmployeeList' } screenOptions={ {
      headerShown: false,
    } } >

      <Stack.Screen name="EmployeeList" component={ EmployeeList } />
      <Stack.Screen name="AddEmployee" component={ AddEmployee } />
      <Stack.Screen name="EmployeeDetails" component={ EmployeeDetails } />
    </Stack.Navigator >
  );
}
