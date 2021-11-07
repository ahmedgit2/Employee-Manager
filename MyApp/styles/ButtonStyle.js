
import { StyleSheet } from 'react-native';
import { Colors } from '../utils/Colors';

export const ButtonStyle = StyleSheet.create({
    Round: {
        flex: 1,
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 25,
        backgroundColor: Colors.Main_COLOR,
    },
    Squer: {
        flex: 1,
        height: 42,
        width: 130,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 2,
        backgroundColor: Colors.Main_COLOR,

    },
    text: {
        fontSize: 22,
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center'

    },

});

