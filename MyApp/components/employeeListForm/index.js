import React, { useState, useEffect, useRef } from "react";
import { FlatList, StyleSheet, SafeAreaView, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { getEmployees } from "../../firebase/useFirestore";

import { NoDataView } from '../noDataView';
import { Loading } from '../spinner';
import { Spinner } from '../spinner';
import { ListItem } from '../listItem';
import { ListItemSeparator } from "../listItemSeparator";


export function EmployeeList({ RefreshButton, listRef }) {

    const navigation = useNavigation();

    const [ Page, SetPage ] = useState(1);
    const [ empList, setEmpList ] = useState([]);
    const [ lastVisible, setlastVisible ] = useState({});// the firestore object of the last item loaded
    const [ isRefresh, setisRefresh ] = useState(false); //  for the big indicator => refresh all
    const [ isLoadingMore, setIsLoadingMore ] = useState(false); // for down screen indicator => load More
    const [ lastPage, setLastPage ] = useState(false); // used to prevent loading More if No Data Returned 

    useEffect(() => {
        LoadEmployeeData();
    }, [ Page ])

    useEffect(() => { // use to Refresh : on press Header Refresh button
        SetPage(1);
        if (Page == 1) LoadEmployeeData();
    }, [ RefreshButton ])

    const LoadEmployeeData = async () => {
        try {
            // Set the Loading and Refresh state 
            if (Page == 1) { setisRefresh(true); setLastPage(false) }
            if (Page > 1) { if (lastPage) return; else setIsLoadingMore(true) }

            // load Employees 
            const EmployeeData = await getEmployees(Page, lastVisible)
            // if No Data Returned Set lastPage To True 
            if (EmployeeData.employeesData.length == 0) { setLastPage(true); return; }

            //set Employee List 
            setlastVisible(EmployeeData.lastDoc);
            if (Page == 1) setEmpList(EmployeeData.employeesData);
            if (Page > 1) setEmpList([ ...empList, ...EmployeeData.employeesData ]);

        }
        catch (error) { console.log('error'); }
        finally { setisRefresh(false); setIsLoadingMore(false); }
    }

    // Return :=> FlatList Component 
    if (empList) {
        if (isRefresh)
            return <Loading />
        else
            return (
                <FlatList
                    onRefresh={ () => SetPage(1) }
                    refreshing={ isRefresh }
                    onEndReached={ () => SetPage(Page + 1) }
                    ListFooterComponent={ () => isLoadingMore && <Spinner /> }
                    ListFooterComponentStyle={ !lastPage && { marginBottom: 40 } }
                    ItemSeparatorComponent={ ListItemSeparator }
                    ref={ listRef }

                    data={ empList }
                    keyExtractor={ (emp) => emp.id.toString() }
                    renderItem={ ({ item }) => (
                        <ListItem
                            id={ item.id }
                            name={ item.name }
                            email={ item.email }
                            phone={ item.phone }
                            img={ item.image }
                            onPress={ () => navigation.navigate('EmployeeDetails', item) }
                        />
                    ) }
                />
            )
    }
    else return <NoDataView />
}