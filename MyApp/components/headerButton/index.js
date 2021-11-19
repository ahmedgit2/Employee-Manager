import React from 'react';
import { Pressable, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../utils/Colors';


export function HeaderButton({
    onPress,
    icon,
    size = 30,
    ...rest
}) {
    return (
        <Pressable onPress={ onPress } >
            <Icon name={ icon } size={ size } color={ Colors.white } />
        </Pressable>
    )
}