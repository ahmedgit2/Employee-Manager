import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from "react-native";

import Modal from 'react-native-modal';

import { ModalStyle } from './style';


export function ImagePickerModal({ Visible, onBack, onPressChoosePic, onPressOpenCam, onPressDelete }) {

    return (

        <Modal
            transparent={ true }
            animationIn={ 'fadeIn' }
            backdropTransitionOutTiming={ 0 }
            animationInTiming={ 500 }
            animationOutTiming={ 200 }
            isVisible={ Visible }
            backdropOpacity={ 0.4 }
            onBackdropPress={ onBack }
        >

            <View style={ ModalStyle.centeredView }>
                <View style={ ModalStyle.modalView }>

                    <Text style={ ModalStyle.modalText }>Select Image :</Text>

                    <TouchableOpacity
                        style={ [ ModalStyle.button, ModalStyle.buttonClose ] }
                        onPress={ onPressChoosePic }
                    >
                        <Text style={ ModalStyle.textStyle }>Choose Image</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={ [ ModalStyle.button, ModalStyle.buttonOpen ] }
                        onPress={ onPressOpenCam }
                    >
                        <Text style={ ModalStyle.textStyle }>Open Camera</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={ [ ModalStyle.button, ModalStyle.buttonDel ] }
                        onPress={ onPressDelete }
                    >
                        <Text style={ ModalStyle.textStyle }>Delete Image</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </Modal >
    );
};
