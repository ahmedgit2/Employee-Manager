import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { HomeDrower } from './HomeDrower'

export function AppContainer() {

  return (

    <NavigationContainer>
      <HomeDrower />
    </NavigationContainer>

  );
}
