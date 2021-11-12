import React, { useState } from 'react';
import { Text, Pressable, View } from "react-native";

import { useNavigation } from '@react-navigation/core';

import Modal from 'react-native-modal';

import { ModalStyle } from '../styles/ModalStyle';


export function LogoutModal({ Visible = false }) {

    const [ ModalVisible, setModalVisible ] = useState(Visible);

    const navigation = useNavigation();

    return (

        <Modal
            transparent={ true }
            animationIn={ 'slideInUp' }
            animationInTiming={ 500 }
            animationOutTiming={ 500 }
            isVisible={ ModalVisible }
            backdropOpacity={ 0.01 }
            onBackdropPress={ () => setModalVisible(false) }
            onModalHide={ () => { navigation.navigate('Logingout') } }

        >

            <View style={ ModalStyle.centeredView }>
                <View style={ ModalStyle.modalView }>
                    <Text style={ ModalStyle.modalText }>Are You Sure ! 😥</Text>
                    <Pressable
                        style={ [ ModalStyle.button, ModalStyle.buttonClose ] }
                        onPress={ () => { setModalVisible(false) } }
                    >
                        <Text style={ ModalStyle.textStyle }>🏃🏾‍♂️💨  Logout</Text>
                    </Pressable>
                </View>
            </View>
        </Modal >
    );
};
