import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import { HomeDrower } from './HomeDrower'

export function AppContainer() {

  const Stack = createStackNavigator();

  return (

    <NavigationContainer>
      <HomeDrower />
    </NavigationContainer>

  );
}
