import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native'

import { useForm } from "react-hook-form";
import { AddEmp } from '../../firebase/AddEmp'
import { useNavigation } from '@react-navigation/core';

import { InputControler } from '../Components/InputControler'
import { Roundimage } from '../Components/Roundimage'
import { AddEmbButton } from '../Components/AddEmbButton'

import { Colors } from '../../utils/Colors';

export function AddEmployeeForm() {
    const { getValues, control, reset, handleSubmit, formState: { errors } } = useForm();

    const navigation = useNavigation();

    const onSubmit = () => {
        AddEmp(
            {
                name: getValues('name'),
                email: getValues('email'),
                phone: getValues('phone'),
                desc: getValues('Description'),
                image: ''
            }
        );
        reset();

        navigation.goBack();
    }

    return (
        <ScrollView style={ styles.Container }>

            <Roundimage size={ 100 }
                otherstyle={ {
                    borderWidth: 2,
                    borderColor: Colors.Main_COLOR,
                    marginVertical: 12,

                } }
            />

            <InputControler
                control={ control }
                name="name"
                defaultValue=""
                placeholder={ 'Employee Name' }
                rules={ { required: (true, 'Employee Name Is Required') } }
                errors={ errors.name ? errors.name.message : null }
            />

            <InputControler
                control={ control }
                name="email"
                defaultValue=""
                placeholder={ 'Email' }
                rules={ {
                    required: (true, 'Email Is Required'),
                    pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Please enter valid email',
                    },
                } }
                errors={ errors.email ? errors.email.message : null }
            />

            <InputControler
                control={ control }
                name="phone"
                defaultValue=""
                placeholder={ 'Phone' }
                rules={ {
                    required: (true, 'Phone Is Required'),
                    pattern: {
                        value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                        message: 'Please enter valid Phone Number',
                    },
                } }
                errors={ errors.phone ? errors.phone.message : null }
            />
            <InputControler
                control={ control }
                name="Description"
                defaultValue=""
                placeholder={ 'Description' }
                rules={ {
                    required: (true, 'Description Is Required'),
                    maxLength: {
                        value: 10,
                        message: 'Too Long (Maximum 10)'
                    },
                    minLength: {
                        value: 5,
                        message: 'Too Short (Minimum 5)'
                    }
                } }
                errors={ errors.Description ? errors.Description.message : null }

                otherStyle={ {
                    height: 125,
                    textAlignVertical: 'top',
                } }

                multiline={ true }
                numberOfLines={ 12 }
            />


            <AddEmbButton onPress={ handleSubmit(onSubmit) } />
        </ScrollView>

    );
}



const styles = StyleSheet.create({
    Container: {
        flex: 1,
    }
})
