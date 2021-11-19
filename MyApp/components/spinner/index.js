import React from 'react';
import AwesomeLoading from 'react-native-awesome-loading';
import { UIActivityIndicator } from 'react-native-indicators';
import { Colors } from '../../utils/Colors';

export function Spinner({
    indicatorId = 8,
    size = 40,
    isActive = true,
    text = ""
}) {

    return (

        <UIActivityIndicator
            color={ Colors.Main_COLOR }
            size={ 35 }
            count={ 12 }
        />
    );
}

export function Loading({
    indicatorId = 13,
    size = 40,
    isActive = true,
    text = ""
}) {

    return (

        <AwesomeLoading
            indicatorId={ indicatorId }
            size={ size }
            isActive={ isActive }
            text={ text }
        />
    );
}
