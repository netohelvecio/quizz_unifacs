import React from 'react';
import { StatusBar, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
  Container,
  ContainerScore,
  TextCongratulations,
  TextCongratulationsSubTitle,
  TextScore,
  TextAnswerTotal,
  ButtonShare,
  ButtonShareText,
  ButtonBack,
  ButtonBackText,
} from './styles';

// import imgBackground from '../../assets/bg-quiz.png';
import logo from '../../assets/logo-white.png';

const TutorialQuiz = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { count } = route.params;

  function goToHome() {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#3c234a" />
      <Image source={logo} resizeMode="center" />

      <ContainerScore>
        <TextCongratulations>Parabéns</TextCongratulations>
        <TextCongratulationsSubTitle>Você acertou:</TextCongratulationsSubTitle>

        <TextScore>
          {count}
          <TextAnswerTotal>/5</TextAnswerTotal>
        </TextScore>
      </ContainerScore>

      <ButtonShare onPress={() => {}}>
        <ButtonShareText>Compartilhar pontuação</ButtonShareText>
      </ButtonShare>

      <ButtonBack onPress={goToHome}>
        <ButtonBackText>Voltar</ButtonBackText>
      </ButtonBack>
    </Container>
  );
};

export default TutorialQuiz;
