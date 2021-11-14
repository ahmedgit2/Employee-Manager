import React from 'react';
import { Text, View, StyleSheet } from 'react-native'

import { Roundimage } from '../Components/Roundimage'
import { TextStyles } from '../styles/TextStyle'


export function EmployeeDetails(props) {

    const {
        img_uri = 'https://reactnative.dev/docs/scr/p_cat2.png',
        Name = 'Ali',
        email = 'Ali@gmail.com',
        phone = '01234567891',
        about = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remainin essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum ",
    } = props
    return (
        <View style={ styles.Container }>
            <Roundimage size={ 120 } otherstyle={ { marginVertical: 10 } } />
            <Text style={ TextStyles.HeadText } >{ Name }</Text>
            <Text style={ TextStyles.SubHeadText } >{ email }</Text>
            <Text style={ TextStyles.DetailText } >{ phone }</Text>
            <Text style={ TextStyles.DetailText } >{ about }</Text>
        </View>
    );
}



const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    }
})
