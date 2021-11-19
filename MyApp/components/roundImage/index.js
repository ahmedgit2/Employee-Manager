import React from 'react';
import { Image, View } from 'react-native'
import { styles } from './style'

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

