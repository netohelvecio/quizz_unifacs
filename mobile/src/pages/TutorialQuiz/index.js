import React from 'react';
import { ImageBackground, StatusBar, StyleSheet } from 'react-native';
import { RNSlidingButton, SlideDirection } from 'rn-sliding-button';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import {
  Container,
  TextTutorialTitle,
  TextTutorial,
  SliderButtonText,
  ButtonSliderContainer,
  ButtonSliderIconBorder,
} from './styles';

// import imgBackground from '../../assets/bg-image.jpg';

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

const TutorialQuiz = () => {
  const navigation = useNavigation();

  function goToPlayQuiz() {
    navigation.navigate('QuestionPlay');
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#3c234a" />

      {/* <ImageBackground
        source={imgBackground}
        style={{ flex: 1, resizeMode: 'center', alignItems: 'center', padding: 20 }}
      > */}
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
      {/* </ImageBackground> */}
    </Container>
  );
};

export default TutorialQuiz;
