import React, { useState, useEffect } from 'react';
import { StatusBar, Alert, View, Text } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { inject, observer } from 'mobx-react';

import api from '../../services/api';
import { rondomizerComponents } from '../../utils/rondomizerComponents';

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

const QuestionPlayComponent = ({ questionStore }) => {
  const [questions, setQuestions] = useState([
    { ask: '', answer_1: '', answer_2: '', answer_3: '', answer_correct: '' },
  ]);
  const [loading, setLoading] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [countQuestions, setCountQuestions] = useState(0);
  const [userResponse, setUserResponse] = useState('');

  const navigation = useNavigation();
  const route = useRoute();
  const { theme } = route.params;

  const arrayComponents = [
    <SelectCorrectAnswer
      answer={questions[countQuestions].answer_1 || ''}
      numberAnswer={1}
      check={check1}
      setUserResponse={setUserResponse}
      setCheck={{
        setCheck1,
        setCheck2,
        setCheck3,
        setCheck4,
      }}
    />,
    <SelectCorrectAnswer
      answer={questions[countQuestions].answer_2 || ''}
      numberAnswer={2}
      check={check2}
      setUserResponse={setUserResponse}
      setCheck={{
        setCheck1,
        setCheck2,
        setCheck3,
        setCheck4,
      }}
    />,
    <SelectCorrectAnswer
      answer={questions[countQuestions].answer_3 || ''}
      numberAnswer={3}
      check={check3}
      setUserResponse={setUserResponse}
      setCheck={{
        setCheck1,
        setCheck2,
        setCheck3,
        setCheck4,
      }}
    />,
    <SelectCorrectAnswer
      answer={questions[countQuestions].answer_correct || ''}
      numberAnswer={4}
      check={check4}
      setUserResponse={setUserResponse}
      setCheck={{
        setCheck1,
        setCheck2,
        setCheck3,
        setCheck4,
      }}
    />,
  ];

  useEffect(() => {
    async function loadQuestions() {
      try {
        setLoading(true);

        const response = await api.get('correct_anwser', {
          params: {
            name: theme,
          },
        });

        setQuestions(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err.response.data.error);
        Alert.alert('Erro ao listar pergunta, tente novamente!');
      }
    }

    loadQuestions();
  }, []);

  const randomComponents = rondomizerComponents(arrayComponents);

  async function checkCorrectQuestion() {
    try {
      const response = await api.post('correct_anwser', {
        id: questions[countQuestions]._id,
        answer_user: userResponse,
      });

      setUserResponse('');
      setCheck1(false);
      setCheck2(false);
      setCheck3(false);
      setCheck4(false);

      if (response.data.mensagem) {
        questionStore.setQuestionCount();
      }
    } catch (err) {
      console.log(err.response.data.error);
      Alert.alert('Erro ao enviar pergunta!');
    }
  }

  async function nextQuestion() {
    if (!userResponse) {
      Alert.alert('Escolha um das alternativas!');
    } else {
      await checkCorrectQuestion();
      setCountQuestions(countQuestions + 1);
    }
  }

  async function goToEndQuiz() {
    if (!userResponse) {
      Alert.alert('Escolha um das alternativas!');
    } else {
      await checkCorrectQuestion();
      navigation.navigate('EndQuiz', {
        count: questionStore.questionCorrectCount,
        theme: questions[countQuestions].theme.name,
      });
    }
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#3c234a" />

      {loading ? (
        <Loading color="#fff" size={100} style={{ marginTop: '70%' }} />
      ) : (
        <>
          <TimeText>60 seg</TimeText>
          <QuestionCurrentNumber>
            Questão {countQuestions + 1}
            <QuestionTotalNumber>/5</QuestionTotalNumber>
          </QuestionCurrentNumber>
          <AskText>{questions[countQuestions].ask || ''}</AskText>

          {randomComponents.map((component) => {
            return <View key={component}>{component}</View>;
          })}

          <ButtonSubmit
            onPress={countQuestions === 4 ? goToEndQuiz : nextQuestion}
          >
            {countQuestions === 4 ? (
              <ButtonSubmitText>Finalizar</ButtonSubmitText>
            ) : (
              <ButtonSubmitText>Próxima</ButtonSubmitText>
            )}
          </ButtonSubmit>

          {/* <Text>{questionStore.questionCorrectCount}</Text> */}
        </>
      )}
    </Container>
  );
};

export const QuestionPlay = inject('questionStore')(
  observer(QuestionPlayComponent)
);
