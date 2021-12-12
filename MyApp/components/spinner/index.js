import React from 'react';
import { View, Text } from 'react-native';
import { UIActivityIndicator, BarIndicator } from 'react-native-indicators';
import { Colors } from '../../utils/Colors';

export function Spinner() {
    return (
        <View style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }>

            <UIActivityIndicator
                color={ Colors.Main_COLOR }
                size={ 35 }
                count={ 12 }
            />
        </View>

    );
}

export function Loading() {

    return (
        <View style={ {
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
        } }>
            <View style={ { paddingVertical: 25 } }>
                <BarIndicator
                    color={ Colors.Main_COLOR }
                    size={ 40 }
                    count={ 6 }
                />
            </View >
            <Text style={ {
                fontSize: 18,
                color: Colors.Main_COLOR,
                textAlign: 'center'

            } }>Loading</Text>

        </View >
    );
}
