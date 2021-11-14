import React from 'react';
import { Pressable, Text } from 'react-native';

import { ButtonStyle } from '../styles/ButtonStyle'

export function MyButton(props) {
    const { title, task, mystyle, textstyle } = props
    return (
        <Pressable
            style={
                mystyle ? { ...mystyle } :
                    ButtonStyle.Squer
            }
            onPress={ task }
        >
            <Text style={ textstyle ? { ...textstyle } :
                ButtonStyle.text }>
                { title }
            </Text>

        </Pressable >
    )
}

