import React, { useState } from "react";
import { FlatList, StyleSheet, SafeAreaView, View, TouchableHighlight, Text } from "react-native";

import { useNavigation } from "@react-navigation/core";

import { NavegateToAddEmbButton } from "../Components/NavegateToAddEmbButton";
import { ListItem } from '../Components/ListItem'
import { ListItemSeparator } from "../Components/ListItemSeparator";

import { useFirestore } from "../../firebase/useFirestore";

export function EmployeeList() {

    const navigation = useNavigation();
    const emplist = useFirestore();

    // Delete employee from EmpData
    // const handleDelete = (emp) => {
    //    setemplist(emp.filter((m) => m.id !== emp.id));
    //  };

    return (
        <SafeAreaView style={ styles.container }>
            { emplist ?
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

                            onPress={ () => navigation.navigate('EmployeeDetails', item) }

                        />) }

                    ItemSeparatorComponent={ ListItemSeparator }
                />
                :
                <View style={ styles.noData }>
                    <Text style={ styles.title }>No Employees Yet</Text>
                    <Text>
                        You Can Add New Employees
                        By ........asddsfsdffsf</Text>
                </View>
            }
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
        flex: 1
    },
    title: {
        fontSize: 25,
    },
    noData: {
        flex: 1,
        alignContent: "center",
        alignItems: "center",
        justifyContent: 'center'
    }
});

