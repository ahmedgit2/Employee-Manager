import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { logoutStack } from './logoutStack'
import { HomeStack } from './HomeStack'
import { Logout } from '../Components/Logout'
import { Colors } from '../utils/Colors';

const Drawer = createDrawerNavigator();

export function HomeDrower() {
    return (
        <NavigationContainer >
            <Drawer.Navigator screenOptions={ { headerTintColor: Colors.white } }>
                <Drawer.Screen name="HomeStack" component={ HomeStack } options={ { title: '', headerStyle: { backgroundColor: Colors.Main_COLOR } } } />
                <Drawer.Screen name="Logout" component={ Logout } options={ { headerShown: false } } />
            </Drawer.Navigator >
        </NavigationContainer>
    );
}
