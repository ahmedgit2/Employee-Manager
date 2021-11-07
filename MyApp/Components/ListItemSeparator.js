import React from "react";
import { StyleSheet, View } from "react-native";

import Colors from "../utils/Colors";

export function ListItemSeparator() {
    return <View style={ styles.separator } />;
}

const styles = StyleSheet.create({
    separator: {
        width: "100%",
        height: 2,
        backgroundColor: '#d3d3d3',
    },
});

