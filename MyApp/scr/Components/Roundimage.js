import React from 'react';
import { Image, StyleSheet, View } from 'react-native'

const img = "http://www.diaraltamer.com/Admin/Uploads/AR/201910131655599168.jpg";

export function Roundimage(props) {
    const {
        img_uri = '',
        size = 130,
        otherstyle
    } = props

    return (
        <View style={ [ styles.Container ] }>

            <Image style={ [ {
                height: size,
                width: size,
                borderRadius: size / 2,

            }, otherstyle ]
            }
                source={ {
                    uri: img_uri === "" ? img : img_uri
                } } />
        </View>
    );
}


const styles = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    }
})
