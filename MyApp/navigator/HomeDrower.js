import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { EmployeeList } from '../Components/EmployeeListForm';
import { LogoutModal } from '../Components/LogOutModal';

import { Colors } from '../utils/Colors';

const Drawer = createDrawerNavigator();

export function HomeDrower() {

    return (
        <Drawer.Navigator
            initialRouteName={ 'Home' }
            screenOptions={ { headerTintColor: Colors.white } }>

            <Drawer.Screen
                name="Home"
                component={ EmployeeList }
                options={ {
                    title: '',
                    drawerLabel: 'Home',
                    headerStyle: { backgroundColor: Colors.Main_COLOR }
                } }
            />

            <Drawer.Screen
                name={ 'Logout' }
                children={ () => {
                    return (<LogoutModal Visible={ true } />)
                } }
                options={ {
                    title: '',
                    drawerLabel: 'Logout 🚪',
                    headerShown: false,
                } }
            />
        </Drawer.Navigator >
    );
}
