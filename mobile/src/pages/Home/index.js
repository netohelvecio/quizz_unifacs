import React, { useState, useEffect } from 'react';
import { Animated, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  ButtonPlay,
  ButtonPlayText,
  ButtonCreateQuestion,
  ButtonCreateQuestionText,
} from './styles';

import logo from '../../assets/logo.png';

const style = StyleSheet.create({
  container: {
    width: '100%',
  },
  logoImage: {
    width: 325,
    marginBottom: 25,
  },
});

const Home = () => {
  const [logoImageY, setLogoImageY] = useState(new Animated.Value(500));
  const [containerButtonY, setContainerButtonY] = useState(
    new Animated.Value(500)
  );
  const [containerButtonQuizzY, setContainerButtonQuizzY] = useState(
    new Animated.Value(500)
  );

  const navigation = useNavigation();

  useEffect(() => {
    Animated.spring(logoImageY, {
      toValue: 0,
      tension: 5,
      friction: 15,
    }).start();

    Animated.spring(containerButtonY, {
      toValue: 0,
      tension: 4,
      delay: 1200,
    }).start();

    Animated.spring(containerButtonQuizzY, {
      toValue: 0,
      tension: 3,
      delay: 1800,
    }).start();
  }, [logoImageY, containerButtonY, containerButtonQuizzY]);

  function goToCreateQuizz() {
    navigation.navigate('Question');
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <Animated.Image
        source={logo}
        style={[style.logoImage, { bottom: logoImageY }]}
        resizeMode="contain"
      />

      <Animated.View style={[style.container, { top: containerButtonY }]}>
        <ButtonPlay onPress={() => {}}>
          <ButtonPlayText>Jogar</ButtonPlayText>
        </ButtonPlay>
      </Animated.View>

      <Animated.View style={[style.container, { top: containerButtonQuizzY }]}>
        <ButtonCreateQuestion onPress={goToCreateQuizz}>
          <ButtonCreateQuestionText>Adicionar quiz</ButtonCreateQuestionText>
        </ButtonCreateQuestion>
      </Animated.View>
    </Container>
  );
};

export default Home;
