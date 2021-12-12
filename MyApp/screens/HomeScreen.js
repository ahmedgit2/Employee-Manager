import React, { useState, useRef } from 'react';
import { SafeAreaView } from "react-native";

import { HomeHeader } from '../components/homeHeader';
import { NavigateToAddEmbButton } from "../components/navigateToAddEmbButton";
import { EmployeeList } from '../components/employeeListForm'
import { styles } from "../components/employeeListForm/style";

export function HomeScreen({ navigation }) {
    const [ RefreshButton, setRefreshButton ] = useState(false)    // For Refresh Buttons 
    const listRef = useRef(null);                              // For Scroll Buttons 

    return (
        <SafeAreaView style={ styles.container }>
            <HomeHeader
                onPressDrawer={ () => navigation.openDrawer() }
                onPressRefresh={ () => setRefreshButton(!RefreshButton) }
                onPressUp={ () => listRef.current.scrollToOffset({ offset: 0, animated: true }) }
                onPressDown={ () => listRef.current.scrollToEnd({ animated: true }) }
            />

            <EmployeeList
                RefreshButton={ RefreshButton }
                listRef={ listRef }
            />

            <NavigateToAddEmbButton onPress={ () => navigation.navigate('AddEmployee') } />

        </SafeAreaView >

    );
}
