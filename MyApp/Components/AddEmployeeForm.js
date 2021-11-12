import React from 'react';
import { StyleSheet, ScrollView } from 'react-native'

import { useForm } from "react-hook-form";

import { InputControler } from './InputControler'
import { Roundimage } from '../Components/Roundimage'
import { AddEmbButton } from './AddEmbButton'

export function AddEmployeeForm() {
    const { control, reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = () => reset();

    return (
        <ScrollView style={ styles.Container }>
            <Roundimage size={ 100 } otherstyle={ { marginBottom: 25, marginTop: 15 } } />
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

                exraStyles={ {
                    height: 125,
                    textAlignVertical: 'top',
                    multiline: true,
                    numberOfLines: 12
                } }

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
