import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/core'

import { EmployeeList } from '../Components/EmployeeListForm'
import { Logout } from '../Components/Logout'

import { Colors } from '../utils/Colors';

const Drawer = createDrawerNavigator();

export function HomeDrower() {
    const navigation = useNavigation();

    return (
        <Drawer.Navigator
            initialRouteName={ 'Home' }
            screenOptions={ { headerTintColor: Colors.white } }>

            <Drawer.Screen name="Home"

                component={ EmployeeList }
                options={ {
                    title: '',
                    drawerLabel: 'Home',
                    headerStyle: { backgroundColor: Colors.Main_COLOR }
                } }
            />

            <Drawer.Screen name="Logout" component={ Logout } options={ { headerShown: false } } />
        </Drawer.Navigator >
    );
}
