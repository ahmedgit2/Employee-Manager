import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors } from '../../utils/Colors';
import { styles } from './style'

const defaultImage = "http://www.diaraltamer.com/Admin/Uploads/AR/201910131655599168.jpg";

export function Roundimage({
    img_uri,
    size = 130,
    otherstyle,
    onPress,
    addIcon = false
}) {
    return (
        <View style={ [ styles.Container ] }>
            <TouchableOpacity activeOpacity={ addIcon ? 0.2 : 100 } onPress={ onPress }>
                <View >
                    <Image
                        source={ { uri: img_uri ? img_uri : defaultImage } }
                        style={ [ {
                            height: size,
                            width: size,
                            borderRadius: size / 2,

                        }, { ...otherstyle } ] }
                    />
                    { addIcon && <Icon
                        name={ "add-circle" }
                        size={ 30 }
                        color={ '#F0FFF0' }
                        style={ {
                            position: 'absolute',
                            backgroundColor: Colors.Main_COLOR,
                            top: 17,
                            borderRadius: 100,

                        } } /> }
                </View>
            </TouchableOpacity>

        </View>
    );
}

