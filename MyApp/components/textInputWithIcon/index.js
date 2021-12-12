import React from 'react';
import { Text, TextInput, View, Image } from 'react-native';

import { InputTextStyle } from './style'

export function Input(props) {

  const {
    style,
    imagesource,
    placeholder,
    errors,
    colr,
    otherStyle,
    multiline,
    numberOfLines,
    keyboardType,
    ...rest
  } = props;

  return (
    <View>
      <TextInput

        multiline={ multiline }
        numberOfLines={ numberOfLines }
        placeholder={ placeholder }
        keyboardType={ keyboardType }

        style={ [ InputTextStyle.inputtext, { ...otherStyle }, errors ? { borderColor: 'red' } : { marginBottom: 10 } ] }
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
