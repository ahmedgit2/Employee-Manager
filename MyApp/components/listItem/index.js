import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { Roundimage } from '../roundImage'
import { TextStyles } from './style'

export function ListItem(props) {

    const { id = 1,
        name = 'Ali',
        email = 'Ali@gmail.com',
        phone = '01234567891',
        img,
        onPress,
    } = props;

    return (
        <TouchableHighlight
            style={ { flex: 1, paddingVertical: 5 } }
            underlayColor={ "#f8f4f4" }
            onPress={ onPress }>

            <View style={ { flexDirection: 'row' } } >


                <Roundimage img_uri={ img } size={ 67 } otherstyle={ { marginLeft: 15 } } />

                <View style={ { marginLeft: 15, justifyContent: 'center' } } >
                    <Text style={ TextStyles.ItemText }>Name</Text>
                    <Text style={ TextStyles.ItemText }>Email</Text>
                    <Text style={ TextStyles.ItemText }>Phone</Text>
                </View>
                <View style={ { marginLeft: 15, justifyContent: 'center' } }>
                    <Text style={ TextStyles.ItemText }>{ name }</Text>
                    <Text style={ TextStyles.ItemText }>{ email }</Text>
                    <Text style={ TextStyles.ItemText }>{ phone }</Text>
                </View>

            </View>
        </TouchableHighlight>

    );
}


