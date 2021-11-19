import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './style';

export function NoDataView() {
    return (

        <View style={ styles.noData }>
            <Text style={ styles.title }>No Employees Yet</Text>
            <Text style={ styles.subtitle }>
                You Can Add New Employees by
                clicking the ➕ button below</Text>
        </View>
    )
}