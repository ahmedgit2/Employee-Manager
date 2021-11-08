import React from 'react';
import { Text, View } from 'react-native'

import { Controller } from "react-hook-form";

import { styles } from '../styles/InputTextStyle'
import { Input } from '../Components/TextInputWithIcon'

export function InputTextControler({
    name, value, placeholder, defaultValue, control, rules, errors
}) {

    return (
        <Controller
            control={ control }
            rules={ rules }
            render={ ({ field: { onChange, onBlur, value } }) => (
                <View>
                    <Input
                        placeholder={ placeholder }
                        onBlur={ onBlur }
                        onChangeText={ onChange } s
                        value={ value }
                    />
                    { errors ? <Text style={ { fontWeight: 'bold', fontSize: 14, color: 'red', textAlign: 'left' } }> This is required.</Text> : null }
                </View>
            ) }
            name={ name }
            defaultValue={ defaultValue }
        />

    );
}

