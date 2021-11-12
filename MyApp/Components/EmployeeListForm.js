import React, { useState } from "react";
import { FlatList, StyleSheet, SafeAreaView, View, TouchableHighlight } from "react-native";

import { useNavigation } from "@react-navigation/core";

import { NavegateToAddEmbButton } from "./NavegateToAddEmbButton";
import { ListItem } from './ListItem'
import { ListItemSeparator } from "./ListItemSeparator";

const EmpData = [
    {
        id: 1,
        name: "Ali",
        email: "ali@gmail.com",
        phone: '123132132',
        image: 'https://reactjs.org/logo-og.png',
    },
    {
        id: 2,
        name: "Hossam",
        email: "hossam@yahoo.com",
        phone: '5554555415',
        image: 'https://reactjs.org/logo-og.png',
    }, {
        id: 3,
        name: "ssssss",
        email: "ssssssssss@yahoo.com",
        phone: '23234234234',
        image: 'https://reactjs.org/logo-og.png',
    },
];


export function EmployeeList() {

    const [ emplist, setemplist ] = useState(EmpData);
    const [ refreshing, setRefreshing ] = useState(false);
    const navigation = useNavigation();

    // Delete employee from EmpData
    const handleDelete = (emp) => {
        setemplist(emp.filter((m) => m.id !== emp.id));
    };

    return (
        <SafeAreaView style={ styles.container }>
            <FlatList
                data={ emplist }
                keyExtractor={ (emp) => emp.id.toString() }
                renderItem={ ({ item }) => (
                    <ListItem
                        id={ item.id }
                        name={ item.name }
                        email={ item.email }
                        phone={ item.phone }
                        img={ item.image }
                        onPress={ () => navigation.navigate('EmployeeDetails') }

                    />) }

                ItemSeparatorComponent={ ListItemSeparator }

            />

            <NavegateToAddEmbButton onPress={ () => navigation.navigate('AddEmployee') } />

        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10,

    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

