
import { StyleSheet } from 'react-native';

export const ModalStyle = StyleSheet.create({

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 5,
        padding: 35,
        paddingHorizontal: 50,
        alignItems: "center",
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
        borderRadius: 2,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        fontSize: 15,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 20,
        textAlign: "center",
        fontSize: 16,
        fontWeight: 'bold'
    }
})

