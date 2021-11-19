
import { StyleSheet } from 'react-native';

export const InputTextStyle = StyleSheet.create({
    inputtext: {
        height: 40,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#bbb',
        marginHorizontal: 20,
        paddingLeft: 10,
    },
    imageStyle: {
        position: 'absolute',
        left: 8,
        right: 5,
        top: 8,
        bottom: 5,
        height: 25,
        width: 25,
        borderRadius: 50,
    },
    errorMessage: {
        flex: 1,
        paddingHorizontal: 10,
        marginLeft: 10,
        fontSize: 14,
        color: 'red',
        textAlign: 'left',
        paddingTop: 1,
        paddingBottom: 7

    },
});

