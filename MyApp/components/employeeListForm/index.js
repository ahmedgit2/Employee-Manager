import React, { useState, useEffect, useRef } from "react";
import { FlatList, ActivityIndicator, StyleSheet, SafeAreaView, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { getMore, getFirstPage } from "../../firebase/useFirestore";

import { HomeHeader } from '../homeHeader';
import { NoDataView } from '../noDataView';
import { Spinner } from '../spinner';
import { Loading } from '../spinner';
import { NavegateToAddEmbButton } from "../navegateToAddEmbButton";
import { ListItem } from '../listItem';
import { ListItemSeparator } from "../listItemSeparator";
import { object } from "yup";


export function EmployeeList() {

    const navigation = useNavigation();
    const listRef = useRef(null);

    const [ emplist, setemplist ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ lastVisible, setlastVisible ] = useState(object);
    const [ lastPage, setllastPage ] = useState(false);
    const [ isRefresh, setisRefresh ] = useState(false);

    useEffect(() => {
        getFirstPage().then((response) => {
            console.log(emplist)
            setemplist(response.employees);
            setlastVisible(response.lastVisible);
            setisRefresh(false);
            setllastPage(false)
        }).catch((error) => {
            console.log(" first open call error", error);
            alert(error.message);
        })
    }, [ isRefresh ])

    function loadMore() {
        if (!lastPage) {
            setIsLoading(true);
            getMore(lastVisible).then((response) => {
                setllastPage(false);
                setemplist([ ...emplist, ...response.employees ]);
                setlastVisible(response.lastVisible);
                setIsLoading(false);
                console.log(emplist)
                response.employees.length === 0 ? setllastPage(true)
                    : setllastPage(false)
            }).catch((error) => {
                console.log("Get More call error", error);
                alert(error.message);
            })
        }
    }


    // To Do Later ==> (Delete employee) 
    // const handleDelete = (emp) => {
    //    setemplist(emp.filter((m) => m.id !== emp.id));
    //  };

    return (
        <SafeAreaView style={ styles.container }>
            <HomeHeader
                onPressDrawer={ () => navigation.openDrawer() }
                onPressRefresh={ () => setisRefresh(true) }
                onPressUp={ () => {
                    listRef.current.scrollToOffset({ offset: 0, animated: true })
                } }
                onPressDown={ () => {
                    listRef.current.scrollToEnd({ animated: true })
                } }
            />

            { emplist ?
                <FlatList
                    ref={ listRef }
                    onEndReached={ () => loadMore() }
                    onRefresh={ () => setisRefresh(true) }
                    refreshing={ isRefresh }
                    ListFooterComponent={ () => isLoading && <Spinner /> }
                    contentContainerStyle={ { paddingBottom: 20 } }
                    ItemSeparatorComponent={ ListItemSeparator }

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
                />
                :
                <NoDataView />

            }
            <NavegateToAddEmbButton onPress={ () => navigation.navigate('AddEmployee') } />


        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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



});

