import React from 'react';
import { Pressable, Text } from 'react-native';

import { ButtonStyle } from './style'

export function MyButton(props) {
    const { title, task, mystyle, textstyle } = props
    return (
        <Pressable
            style={
                mystyle ? { ...mystyle } :
                    ButtonStyle.SquerButton
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

