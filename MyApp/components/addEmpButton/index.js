import React from 'react';
import { View } from 'react-native';

import { MyButton } from '../myButton';

import { ButtonStyle } from './style';

export function AddEmbButton({ onPress }) {
    return (

        <View style={ ButtonStyle.addEmbButton }>
            <MyButton
                title={ '+ Add' }
                task={ onPress } />
        </View>
    )
}