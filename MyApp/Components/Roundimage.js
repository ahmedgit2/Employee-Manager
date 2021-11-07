import React from 'react';
import { Image, StyleSheet, View } from 'react-native'

export function Roundimage(props) {
    const {
        img_uri = 'https://reactjs.org/logo-og.png',
        size = 130,
        otherstyle
    } = props

    return (
        <View style={ [ styles.Container, { ...otherstyle } ] }>

            <Image style={ {
                height: size,
                width: size,
                borderRadius: size / 2
            }
            }

                source={ { uri: img_uri } } />
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
