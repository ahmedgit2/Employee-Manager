import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import { HomeStack } from './HomeStack';
import { LogoutSplash } from '../assets/Screens/LogoutSplash';

import { DrawerContent } from '../assets/Components/DrawerContent';

import { Colors } from '../utils/Colors';

const Drawer = createDrawerNavigator();

export function HomeDrower() {

    return (
        <Drawer.Navigator
            drawerContent={ (props) => <DrawerContent { ...props } /> }
            initialRouteName={ 'Home' }
            screenOptions={ { headerTintColor: Colors.white } }
        >
            <Drawer.Screen
                name="Home"
                component={ HomeStack }
                options={ ({ route }) => {
                    const routeName = getFocusedRouteNameFromRoute(route) ?? 'HomeScreen'
                    if (routeName == "HomeScreen") {
                        return ({
                            title: '',
                            drawerLabel: 'Home',
                            headerStyle: { backgroundColor: Colors.Main_COLOR }
                        })
                    }
                    else {
                        return ({
                            headerShown: false
                        })
                    }
                } }

            />

            <Drawer.Screen
                name={ 'LogoutSplash' }
                component={ LogoutSplash }
                options={ {
                    swipeEnabled: false,
                    headerShown: false,
                    gestureEnabled: false
                } }
            />


        </Drawer.Navigator >
    );
}
