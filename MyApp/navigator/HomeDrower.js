import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { HomeStack } from './HomeStack';
import { LogoutSplash } from '../screens/LogoutSplash';
import { DrawerContent } from '../components/drawerContent';

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
                options={ { headerShown: false } }

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


// Header option : show heder only on home screen

/*
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

options={ ({ route }) => {
     const routeName = getFocusedRouteNameFromRoute(route) ?? 'HomeScreen'
     if (routeName == "HomeScreen") {
         return ({
             title: '',
             drawerLabel: 'Home',
             headerStyle: { backgroundColor: Colors.Main_COLOR },
             headerRight: () => (
                 <HeaderButtons
                     size={ 30 }
                     iconLeft={ 'arrow-down-circle' }
                     iconMiddle={ 'arrow-up-circle' }
                     iconRight={ 'refresh-circle' }
                     onPressLeft={ () => alert('left') }
                     onPressMiddle={ () => alert('Middle') }
                     onPressRight={ () => alert('right') } />
             )
         })
     }
     else {
         return ({
             headerShown: false
         })
     }
 } }
*/