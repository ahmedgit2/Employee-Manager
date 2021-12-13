import React, { useState } from 'react';
import { ScrollView } from 'react-native'

import { useForm } from "react-hook-form";
import { useNavigation } from '@react-navigation/core';
import { UploadPicAndAddEmp } from '../../firebase/uploadPicThenAddEmp'

import { InputControler } from '../inputControler'
import { Roundimage } from '../roundImage'
import { AddEmbButton } from '../addEmpButton'
import { ImagePickerModal } from '../imagePickerModal'
import { LoadingModal } from '../loadingModal'
import { chooseImage, openCamera } from '../imagePicker'
import { Colors } from '../../utils/Colors';

const defaultImage = "http://www.diaraltamer.com/Admin/Uploads/AR/201910131655599168.jpg";

export function AddEmployeeForm() {
    const [ isAdding, setIsAdding ] = useState(false);
    const [ isModalVisible, setModalVisible ] = useState(false);
    const [ imageUri, setImageUri ] = useState(defaultImage);
    const navigation = useNavigation();

    const { getValues, control, reset, handleSubmit, formState: { errors } } = useForm({ mode: 'onBlur' });

    const onSubmit = async () => {
        setIsAdding(true);

        await UploadPicAndAddEmp({
            name: getValues('name'),
            email: getValues('email'),
            phone: getValues('phone'),
            desc: getValues('Description'),
            image: imageUri
        })

        reset();
        setIsAdding(false);
        navigation.goBack();

    }

    const choosePicture = async (OpenCam) => {
        const res = OpenCam
            ? await openCamera()
            : await chooseImage()
        if (res) {
            setImageUri(res.path)
            setModalVisible(false);
        }
    }


    return (
        <ScrollView style={ { flex: 1 } }>
            <Roundimage
                addIcon={ true }
                img_uri={ imageUri }
                size={ 100 }
                onPress={ () => setModalVisible(true) }
                otherstyle={ {
                    borderWidth: 2,
                    borderColor: Colors.Main_COLOR,
                    marginVertical: 13,
                } }
            />
            <LoadingModal Visible={ isAdding } />

            <ImagePickerModal
                Visible={ isModalVisible }
                onBack={ () => setModalVisible(false) }
                onPressChoosePic={ () => choosePicture(false) }
                onPressOpenCam={ () => choosePicture(true) }
                onPressDelete={ () => { setImageUri(defaultImage); setModalVisible(false) } }
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
                keyboardType={ 'phone-pad' }
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
                        value: 600,
                        message: 'Too Long (Maximum 600)'
                    },
                    minLength: {
                        value: 10,
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
