import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Modal from 'react-native-modal';


export function ViewImageModal({
    Visible,
    onBack,
    onPressChangePic,
    img_uri,
    changePic = false }) {

    return (

        <Modal
            transparent={ true }
            animationIn={ 'slideInUp' }
            backdropTransitionOutTiming={ 0 }
            animationInTiming={ 600 }
            animationOutTiming={ 200 }
            isVisible={ Visible }
            backdropOpacity={ 0.4 }
            onBackdropPress={ onBack }
        >

            <View style={ [ ModalStyle.modalView, changePic && { marginHorizontal: 10, marginVertical: 92 } ] }>
                <Image
                    source={ { uri: img_uri } }
                    style={ {
                        borderRadius: 2,
                        padding: 145
                    } }
                />
                { changePic &&
                    <TouchableOpacity
                        style={ ModalStyle.button }
                        onPress={ onPressChangePic }
                    >
                        <Text style={ ModalStyle.textStyle }>Change Image 🔃</Text>
                    </TouchableOpacity>
                }

            </View>
        </Modal >
    );
};


const ModalStyle = StyleSheet.create({


    modalView: {
        marginHorizontal: 10,
        marginVertical: 114,
        flex: 1,
        backgroundColor: "white",
        borderRadius: 5,
        padding: 10,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10
    },

    button: {
        flex: 1,
        marginHorizontal: 5,
        marginTop: 10,
        borderRadius: 2,
        padding: 3,
        elevation: 2,
        backgroundColor: "#A6E5F3",
        alignSelf: "stretch"
    },

    textStyle: {
        fontSize: 15,
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
    },


})

