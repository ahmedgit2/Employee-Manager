import React from 'react';
import { TouchableHighlight } from 'react-native';

import Icon from 'react-native-vector-icons/Fontisto';
import { Colors } from '../../utils/Colors';
import { ButtonStyle } from '../styles/ButtonStyle';

export function NavegateToAddEmbButton({ onPress }) {
    return (
        <TouchableHighlight
            underlayColor={ 'skyblue' }
            style={ ButtonStyle.navegateToAddEmp }
            onPress={ onPress }
        >

            <Icon name="plus-a" size={ 20 } color={ Colors.white } />

        </TouchableHighlight>
    )
}