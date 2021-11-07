import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native'

import { ButtonStyle } from '../styles/ButtonStyle'

import { Input } from '../Components/TextInputWithIcon'
import { Roundimage } from '../Components/Roundimage'
import { MyButton } from '../Components/MyButton'
import { RoundButton } from '../Components/RoundButton'


export function AddEmployee() {

    return (
        <ScrollView style={ styles.Container }>
            <Roundimage size={ 110 } otherstyle={ { marginVertical: 20 } } />
            <Input placeholder={ 'Name' } />
            <Input placeholder={ 'Email' } />
            <Input placeholder={ 'Phone' } />
            <Input placeholder={ 'Description' }
                height={ 120 }
                textAlignVertical={ 'top' }
                multiline numberOfLines={ 7 } />
            <View style={ {
                flex: 1, alignItems: 'center',
                justifyContent: 'center',
                alignContent: 'center',
            } }>
                <MyButton
                    title={ '+ Add' }
                    task={ () => { console.log('ffffffffff') } } />
            </View>
        </ScrollView>

    );
}



const styles = StyleSheet.create({
    Container: {
        flex: 1,
    }
})
