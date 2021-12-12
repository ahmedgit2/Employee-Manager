import React from 'react';
import { TouchableHighlight } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../utils/Colors';
import { Styles } from './style';

export function AddImageButton({ onPress }) {
    return (
        <TouchableHighlight
            underlayColor={ 'skyblue' }
            style={ Styles.AddImageButton }
            onPress={ onPress }
        >

            <Icon name="photo-camera" size={ 22 } color={ Colors.white } />

        </TouchableHighlight>
    )
}