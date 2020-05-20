import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import {
  Container,
  AnswerText,
  CheckAnswer,
  ContainerAnswer,
  ButtonSelect,
} from './styles';

const SelectCorrectAnswer = ({
  answer,
  check,
  setCheck,
  numberAnswer,
  setUserResponse,
}) => {
  function handlePress() {
    if (numberAnswer === 1) {
      setCheck.setCheck1(true);
      setCheck.setCheck2(false);
      setCheck.setCheck3(false);
      setCheck.setCheck4(false);
      setUserResponse(answer);
    } else if (numberAnswer === 2) {
      setCheck.setCheck1(false);
      setCheck.setCheck2(true);
      setCheck.setCheck3(false);
      setCheck.setCheck4(false);
      setUserResponse(answer);
    } else if (numberAnswer === 3) {
      setCheck.setCheck1(false);
      setCheck.setCheck2(false);
      setCheck.setCheck3(true);
      setCheck.setCheck4(false);
      setUserResponse(answer);
    } else {
      setCheck.setCheck1(false);
      setCheck.setCheck2(false);
      setCheck.setCheck3(false);
      setCheck.setCheck4(true);
      setUserResponse(answer);
    }
  }

  return (
    <ButtonSelect onPress={handlePress}>
      <Container>
        <ContainerAnswer>
          <AnswerText>{answer}</AnswerText>
        </ContainerAnswer>

        <CheckAnswer>
          {!check || <AntDesign name="check" size={20} color="#fff" />}
        </CheckAnswer>
      </Container>
    </ButtonSelect>
  );
};

export default SelectCorrectAnswer;
