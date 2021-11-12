import React from 'react';
import { View } from 'react-native'
import { Controller } from "react-hook-form";

import { Input } from '../Components/TextInputWithIcon'

export function InputControler({
    name,
    placeholder,
    defaultValue,
    rules,
    control,
    errors,
    exraStyles
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
                        exraStyles={ exraStyles }
                    />
                </View>

            ) }
        />



    );
}

