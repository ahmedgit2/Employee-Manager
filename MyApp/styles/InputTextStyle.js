
import { StyleSheet } from 'react-native';

export const InputTextStyle = StyleSheet.create({
    inputtext: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#bbb',
        marginHorizontal: 20,
        marginBottom: 5,
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
    err: {
        position: 'absolute',
        paddingHorizontal: 10,
        top: 40,
        marginBottom: 50,
    },
});

