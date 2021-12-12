import React from 'react';
import { Pressable, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../utils/Colors';


export function HeaderButton({
    onPress,
    icon = 'plus',
    size = 35,
    color = Colors.white,
    otherStyle
}) {
    return (
        <Pressable style={ { ...otherStyle } } onPress={ onPress } >
            <Icon name={ icon } size={ size } color={ color } />
        </Pressable>
    )
}