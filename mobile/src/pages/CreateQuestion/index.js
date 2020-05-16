import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

// import { Container } from './styles';

const CreateQuestion = () => {
  const route = useRoute();

  const { theme } = route.params;

  console.log(theme);

  return (
    <View>
      <Text>{theme}</Text>
    </View>
  );
};

export default CreateQuestion;
