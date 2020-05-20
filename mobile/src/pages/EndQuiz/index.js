import React from 'react';
import { StatusBar, Image, Linking } from 'react-native';
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

import logo from '../../assets/logo-white.png';

const TutorialQuiz = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { count, theme } = route.params;

  const text = `Acertei ${count} questões do tema ${theme} no app QuizIdea!!!`;

  function goToHome() {
    navigation.navigate('Home');
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?text=${text}`);
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

      <ButtonShare onPress={sendWhatsapp}>
        <ButtonShareText>Compartilhar pontuação</ButtonShareText>
      </ButtonShare>

      <ButtonBack onPress={goToHome}>
        <ButtonBackText>Voltar</ButtonBackText>
      </ButtonBack>
    </Container>
  );
};

export default TutorialQuiz;
