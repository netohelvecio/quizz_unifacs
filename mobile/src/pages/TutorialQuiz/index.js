import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { RNSlidingButton, SlideDirection } from 'rn-sliding-button';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { inject, observer } from 'mobx-react';

import {
  Container,
  TextTutorialTitle,
  TextTutorial,
  SliderButtonText,
  ButtonSliderContainer,
  ButtonSliderIconBorder,
} from './styles';

const styles = StyleSheet.create({
  slideButton: {
    display: 'flex',
    flexDirection: 'row',
    width: 310,
    borderRadius: 70,
    paddingHorizontal: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderColor: '#ccc',
    borderWidth: 0.5,
  },
});

const TutorialQuizComponent = ({ questionStore }) => {
  const navigation = useNavigation();

  function goToPlayQuiz() {
    questionStore.questionCorrectCount = 0;
    navigation.navigate('ChooseThemePlay');
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#3c234a" />

      <TextTutorialTitle>Tutorial</TextTutorialTitle>
      <TextTutorial>
        Serão 5 questões sobre o tema escolhido, você tem 1 minuto para
        responder cada uma delas, deslize para começar a jogar. Boa Sorte!
      </TextTutorial>

      <RNSlidingButton
        style={styles.slideButton}
        height={100}
        onSlidingSuccess={goToPlayQuiz}
        slideDirection={SlideDirection.RIGHT}
      >
        <ButtonSliderContainer>
          <ButtonSliderIconBorder>
            <AntDesign name="arrowright" size={54} color="#ccc" />
          </ButtonSliderIconBorder>

          <SliderButtonText>DESLIZE</SliderButtonText>
        </ButtonSliderContainer>
      </RNSlidingButton>
    </Container>
  );
};

export const TutorialQuiz = inject('questionStore')(
  observer(TutorialQuizComponent)
);
