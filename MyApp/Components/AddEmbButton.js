import React from 'react';
import { View } from 'react-native';

import { MyButton } from './MyButton';

import { ButtonStyle } from '../styles/ButtonStyle';

export function AddEmbButton({ onPress }) {
    return (

        <View style={ ButtonStyle.addEmbButton }>
            <MyButton
                title={ '+ Add' }
                task={ onPress } />
        </View>
    )
}