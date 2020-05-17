import React from 'react';
import { TextInput } from 'react-native';

import { TextInputStyle, TextAreaInputStyle } from './styles';

const TextInputComponent = () => {
  return (
    <TextInput
    // placeholder={placeholder}
    // placeholderTextColor="#333"
    // returnKeyType="next"
    />
  );
};

const TextAreaInputComponent = ({ placeholder }) => {
  return (
    <TextAreaInputStyle
      placeholder={placeholder}
      multiline
      numberOfLines={2}
      placeholderTextColor="#333"
      textAlignVertical="top"
    />
  );
};

export { TextAreaInputComponent, TextInputComponent };
