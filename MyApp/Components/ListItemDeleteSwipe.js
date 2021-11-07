import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export function ListItemDeleteSwipe({ onPress }) {
    return (
        <TouchableWithoutFeedback onPress={ onPress }>
            <View style={ styles.container }>
                <MaterialCommunityIcons
                    name="trash-can"
                    size={ 35 }
                    color={ 'white' }
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "ff5253",
        width: 70,
        justifyContent: "center",
        alignItems: "center",
    },
});


