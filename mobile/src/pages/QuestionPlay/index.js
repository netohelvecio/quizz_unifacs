import React, { useState } from 'react';
import { ImageBackground, StatusBar, StyleSheet } from 'react-native';
import { RNSlidingButton, SlideDirection } from 'rn-sliding-button';

import SelectCorrectAnswer from '../../components/SelectCorrectAnswer';

import {
  Container,
  TimeText,
  QuestionCurrentNumber,
  QuestionTotalNumber,
  AskText,
  ButtonSubmit,
  ButtonSubmitText,
} from './styles';

import imgBackground from '../../assets/bg-image.jpg';

const QuestionPlay = () => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#3c234a" />
      {/* <ImageBackground
        source={imgBackground}
        style={{ flex: 1, resizeMode: 'center', alignItems: 'center', padding: 20 }}
      > */}

      <TimeText>60 seg</TimeText>

      <QuestionCurrentNumber>
        Questão 1<QuestionTotalNumber>/5</QuestionTotalNumber>
      </QuestionCurrentNumber>

      <AskText>
        Qual das tags HTML abaixo apresenta uma solicitação de input responsavel
        por receber o email.
      </AskText>

      <SelectCorrectAnswer
        answer="Input email"
        numberAnswer={1}
        check={check1}
        setCheck={{
          setCheck1,
          setCheck2,
          setCheck3,
          setCheck4,
        }}
      />

      <SelectCorrectAnswer
        answer="Input email"
        numberAnswer={2}
        check={check2}
        setCheck={{
          setCheck1,
          setCheck2,
          setCheck3,
          setCheck4,
        }}
      />

      <SelectCorrectAnswer
        answer="Input email"
        numberAnswer={3}
        check={check3}
        setCheck={{
          setCheck1,
          setCheck2,
          setCheck3,
          setCheck4,
        }}
      />

      <SelectCorrectAnswer
        answer="Input email"
        numberAnswer={4}
        check={check4}
        setCheck={{
          setCheck1,
          setCheck2,
          setCheck3,
          setCheck4,
        }}
      />

      <ButtonSubmit onPress={() => {}}>
        <ButtonSubmitText>Próxima</ButtonSubmitText>
      </ButtonSubmit>

      {/* </ImageBackground> */}
    </Container>
  );
};

export default QuestionPlay;
