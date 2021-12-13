import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native'

import { ViewImageModal } from "../viewImageModal";
import { Roundimage } from '../roundImage'
import { TextStyles } from './style'

export function EmployeeDetailsForm({ item }) {
    const [ isViewModalVisible, setViewModalVisible ] = useState(false);

    return (
        <View style={ styles.Container }>
            <ScrollView>
                <ViewImageModal
                    Visible={ isViewModalVisible }
                    onBack={ () => setViewModalVisible(false) }
                    img_uri={ item.image }
                />

                <Roundimage
                    onPress={ () => setViewModalVisible(true) }
                    img_uri={ item.image }
                    size={ 120 }
                    otherstyle={ { marginTop: 20, marginBottom: 15 } }
                />
                <Text style={ TextStyles.HeadText } >{ item.name }</Text>
                <Text style={ TextStyles.SubHeadText } >{ item.email }</Text>
                <Text style={ TextStyles.DetailText } >{ item.phone }</Text>
                <Text style={ TextStyles.DetailText } >{ item.desc }</Text>
            </ScrollView>
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