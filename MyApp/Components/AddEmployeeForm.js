import React from 'react';
import { Button, StyleSheet, ScrollView, View, Text } from 'react-native'

import { useForm, Controller } from "react-hook-form";

import { ButtonStyle } from '../styles/ButtonStyle'
import { Input } from '../Components/TextInputWithIcon'
import { Roundimage } from '../Components/Roundimage'
import { MyButton } from '../Components/MyButton'
import { RoundButton } from '../Components/RoundButton'

export function AddEmployeeForm() {

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm()

    const onSubmit = data => console.log(data);

    return (
        <ScrollView style={ styles.Container }>

            <Roundimage size={ 110 } otherstyle={ { marginVertical: 20 } } />

            <Controller
                control={ control }
                name="name"
                defaultValue=""
                rules={ {
                    required: {
                        value: true,
                        message: 'Name is required!'
                    }
                } }
                render={ ({ field: { onChange, value, onBlur } }) => (
                    <View>
                        <Input
                            placeholder={ 'Employee Name' }
                            onBlur={ onBlur }
                            onChangeText={ onChange }
                            value={ value }

                        />
                        { errors.firstName && <Text>This is required.</Text> }
                    </View>

                ) }
            />

            <Input placeholder={ 'Email' } />
            <Input placeholder={ 'Phone' } />
            <Input placeholder={ 'Description' }
                height={ 120 }
                textAlignVertical={ 'top' }
                multiline numberOfLines={ 7 } />

            <View style={ {
                flex: 1, alignItems: 'center',
                justifyContent: 'center',
                alignContent: 'center',
            } }>
                <MyButton
                    title={ '+ Add' }
                    task={ handleSubmit(onSubmit) } />
            </View>
        </ScrollView>

    );
}



const styles = StyleSheet.create({
    Container: {
        flex: 1,
    }
})
