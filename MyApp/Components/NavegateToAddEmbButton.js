import React from 'react';
import { TouchableHighlight } from 'react-native';

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { ButtonStyle } from '../styles/ButtonStyle';

export function NavegateToAddEmbButton({ onPress }) {
    return (
        <TouchableHighlight
            underlayColor={ 'skyblue' }
            style={ ButtonStyle.navegateToAddEmp }
            onPress={ onPress }
        >

            <MaterialCommunityIcons name='plus-circle' size={ 40 } ></MaterialCommunityIcons>

        </TouchableHighlight>
    )
}