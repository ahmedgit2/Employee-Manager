import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './AuthStack';
import { HomeStack } from './HomeStack';

export function AppContainer({ isAuth }) {
  return (
    <NavigationContainer>
      { isAuth ? <HomeStack /> : <AuthStack /> }
    </NavigationContainer>
  );
}
