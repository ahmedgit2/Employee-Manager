
import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';

export const ModalStyle = StyleSheet.create({

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignContent: 'center'
    },
    modalView: {
        height: 220,
        width: 210,
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 5,
        padding: 20,
        paddingHorizontal: 40,
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
        height: 40,
        width: 150,
        borderRadius: 2,
        padding: 10,
        elevation: 2,
        marginBottom: 10
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonDel: {
        backgroundColor: Colors.danger,
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

