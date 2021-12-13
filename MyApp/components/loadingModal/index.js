import React from 'react';
import { View, StyleSheet, Text } from "react-native";
import Modal from 'react-native-modal';
import { SkypeIndicator } from 'react-native-indicators';
import { Colors } from '../../utils/Colors';

export function LoadingModal({
    Visible,
}) {

    return (

        <Modal
            transparent={ true }
            animationIn={ 'slideInUp' }
            backdropTransitionOutTiming={ 0 }
            animationInTiming={ 600 }
            animationOutTiming={ 200 }
            isVisible={ Visible }
            backdropOpacity={ 0.4 }
        >
            <SkypeIndicator
                color={ Colors.Main_COLOR }
                size={ 70 }
            />

        </Modal >
    );
};


