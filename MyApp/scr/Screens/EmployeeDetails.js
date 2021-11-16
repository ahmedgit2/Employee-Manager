import React from 'react';
import { Text, View, StyleSheet } from 'react-native'

import { Roundimage } from '../Components/Roundimage'
import { TextStyles } from '../styles/TextStyle'

import { useFirestore } from "../../firebase/firestore";

export function EmployeeDetails({ route }) {

    const item = route.params;

    return (
        <View style={ styles.Container }>
            <Roundimage size={ 120 } otherstyle={ { marginTop: 20, marginBottom: 15 } } />
            <Text style={ TextStyles.HeadText } >{ item.name }</Text>
            <Text style={ TextStyles.SubHeadText } >{ item.email }</Text>
            <Text style={ TextStyles.DetailText } >{ item.phone }</Text>
            <Text style={ TextStyles.DetailText } >{ item.desc }</Text>
        </View>
    );
}



const styles = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    }
})
