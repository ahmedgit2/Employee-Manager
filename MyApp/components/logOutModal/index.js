import React, { useState } from 'react';
import { Text, Pressable, View } from "react-native";

import { useNavigation } from '@react-navigation/core';

import Modal from 'react-native-modal';

import { ModalStyle } from './style';


export function LogoutModal({ Visible, onBack, onPress }) {

    return (

        <Modal
            transparent={ true }
            animationIn={ 'slideInUp' }
            animationInTiming={ 500 }
            animationOutTiming={ 200 }
            isVisible={ Visible }
            backdropOpacity={ 0.4 }
            onBackdropPress={ onBack }
        >

            <View style={ ModalStyle.centeredView }>
                <View style={ ModalStyle.modalView }>

                    <Text style={ ModalStyle.modalText }>Are You Sure ! 😥</Text>
                    <Pressable
                        style={ [ ModalStyle.button, ModalStyle.buttonClose ] }
                        onPress={ onPress }
                    >
                        <Text style={ ModalStyle.textStyle }>🏃🏾‍♂️💨  Logout</Text>
                    </Pressable>
                </View>
            </View>
        </Modal >
    );
};
