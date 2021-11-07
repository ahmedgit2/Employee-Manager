import React from 'react';
import { Text, TextInput, StyleSheet, View, Image } from 'react-native';

import { InputTextStyle } from '../styles/InputTextStyle'

export function Input(props) {
  const {
    style,
    imagesource,
    placeholder,
    errors,
    colr,
    ...rest
  } = props;
  return (
    <View>
      <View style={ styles.Container }>
        <TextInput
          placeholder={ placeholder }
          style={ [ InputTextStyle.inputtext, errors ? { borderColor: 'red', marginBottom: 16 } : null ] }
          { ...rest }
        />
        { props.imagesource && (
          <Image
            source={ imagesource }
            style={ [ InputTextStyle.imageStyle, { tintColor: colr }, errors ? { tintColor: 'red' } : null ] }
          />
        ) }
      </View>
      <View style={ InputTextStyle.err }>
        { errors ? (
          <Text style={ { fontWeight: 'bold', fontSize: 14, color: 'red', textAlign: 'left' } }>
            { errors }
          </Text>
        ) : null }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    paddingBottom: 10,

  },

});
