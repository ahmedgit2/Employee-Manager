import React from 'react';
import { View } from 'react-native'
import { Controller } from "react-hook-form";

import { Input } from '../textInputWithIcon'

export function InputControler({
    name,
    placeholder,
    defaultValue,
    rules,
    control,
    errors,
    otherStyle,
    multiline,
    numberOfLines,
}) {

    return (
        <Controller
            name={ name }
            defaultValue={ defaultValue }
            control={ control }
            rules={ rules }
            render={ ({ field: { onChange, onBlur, value } }) => (
                <View>
                    <Input
                        placeholder={ placeholder }
                        onBlur={ onBlur }
                        onChangeText={ onChange }
                        value={ value }
                        errors={ errors }
                        otherStyle={ otherStyle }
                        multiline={ multiline }
                        numberOfLines={ numberOfLines }
                    />
                </View>

            ) }
        />



    );
}

