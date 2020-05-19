import React, { useState, useEffect } from 'react';
import { StatusBar, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';

import api from '../../services/api';

import Loading from '../../components/Loading';

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

const QuestionPlay = () => {
  const [questions, setQuestions] = useState([
    { ask: '', answer_1: '', answer_2: '', answer_3: '', answer_correct: '' },
  ]);
  const [loading, setLoading] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);

  const route = useRoute();
  const { theme } = route.params;

  useEffect(() => {
    async function loadQuestions() {
      try {
        setLoading(true);

        const response = await api.get('correct_anwser', {
          params: {
            name: 'Tecnologia', // MUDAR ISSO AQUI DEPOIS
          },
        });

        console.log(response.data);

        setQuestions(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err.response.data.error);
        Alert.alert('Erro ao listar pergunta, tente novamente!');
      }
    }

    loadQuestions();
  }, []);

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#3c234a" />

      {loading ? (
        <Loading color="#fff" size={100} style={{ marginTop: '70%' }} />
      ) : (
        <>
          <TimeText>60 seg</TimeText>
          <QuestionCurrentNumber>
            Questão 1<QuestionTotalNumber>/5</QuestionTotalNumber>
          </QuestionCurrentNumber>
          <AskText>{questions[0].ask || ''}</AskText>
          <SelectCorrectAnswer
            answer={questions[0].answer_1 || ''}
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
            answer={questions[0].answer_2 || ''}
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
            answer={questions[0].answer_3 || ''}
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
            answer={questions[0].answer_correct || ''}
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
        </>
      )}
    </Container>
  );
};

export default QuestionPlay;
