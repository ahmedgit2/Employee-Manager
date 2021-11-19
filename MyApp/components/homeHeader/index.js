import React from 'react';
import { View } from 'react-native';

import { HeaderButton } from '../headerButton';
import { Styles } from './style';

export function HomeHeader({
    onPressUp,
    onPressDown,
    onPressRefresh,
    onPressDrawer
}) {
    return (

        <View style={ Styles.header } >
            <View style={ Styles.buttons } >
                <HeaderButton onPress={ onPressUp } icon={ 'arrow-up-circle' } />
            </View>
            <View style={ Styles.buttons } >
                <HeaderButton onPress={ onPressDown } icon={ 'arrow-down-circle' } />
            </View>
            <View style={ Styles.buttons } >
                <HeaderButton onPress={ onPressRefresh } icon={ 'refresh-circle' } />
            </View>
            <View style={ Styles.draweBbutton } >
                <HeaderButton onPress={ onPressDrawer } icon={ 'menu' } />
            </View>
        </View>
    )
}
