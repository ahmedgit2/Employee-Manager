import React from 'react';
import { StyleSheet, View } from 'react-native'

import { MyButton } from '../Components/MyButton'

export function AddEmpButton(onPress) {

    return (

        <View style={ {
            flex: 1, alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
        } }>
            <MyButton
                title={ '+ Add' }
                task={ onPress } />
        </View>
    );
}



const styles = StyleSheet.create({
    Container: {
        flex: 1,
    }
})
