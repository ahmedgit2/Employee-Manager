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
    exraStyles,
    ...rest
  } = props;
  return (
    <View>
      <TextInput
        placeholder={ placeholder }
        style={ [ InputTextStyle.inputtext, exraStyles, errors ? { borderColor: 'red' } : { marginBottom: 10 } ] }
        { ...rest }
      />
      { props.imagesource && (
        <Image
          source={ imagesource }
          style={ [ InputTextStyle.imageStyle, { tintColor: colr }, errors ? { tintColor: 'red' } : null ] }
        />
      ) }
      { errors ? (
        <Text style={ InputTextStyle.errorMessage }>
          { errors }
        </Text>
      ) : null }
    </View>
  );
}
