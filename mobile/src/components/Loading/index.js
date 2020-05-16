import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';

const Loading = ({ color, size, style }) => {
  return (
    <Container>
      <ActivityIndicator style={style} color={color} size={size} />
    </Container>
  );
};

export default Loading;
