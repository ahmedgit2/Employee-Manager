import React from 'react';
import { Text, View } from 'react-native';


export const LogoutSplash = () => {


    return (
        <View style={ {
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            flex: 1
        } }>
            <Text style={ {
                textAlign: 'center',
                fontSize: 30,
            } }>
                Good Bye
            </Text>

        </View>
    )
};
