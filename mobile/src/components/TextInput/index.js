import React from 'react';

import { TextInputStyle, TextAreaInputStyle } from './styles';

const TextInputComponent = ({ placeholder }) => {
  return (
    <TextInputStyle
      placeholder={placeholder}
      placeholderTextColor="#333"
      returnKeyType="next"
    />
  );
};

const TextAreaInputComponent = ({ placeholder }) => {
  return (
    <TextAreaInputStyle
      placeholder={placeholder}
      multiline
      numberOfLines={4}
      placeholderTextColor="#333"
      textAlignVertical="top"
    />
  );
};

export { TextAreaInputComponent, TextInputComponent };
