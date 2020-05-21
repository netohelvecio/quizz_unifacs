import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { StatusBar, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { inject, observer } from 'mobx-react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import api from '../../services/api';
import { randomizerAnswer } from '../../utils/randomizerAnswer';

import Loading from '../../components/Loading';
import SelectCorrectAnswer from '../../components/SelectCorrectAnswer';

import {
  Container,
  ContainerQuestion,
  TimeText,
  QuestionCurrentNumber,
  QuestionTotalNumber,
  AskText,
  ButtonSubmit,
  ButtonSubmitText,
} from './styles';

const arrayAnswer = ['answer_1', 'answer_2', 'answer_3', 'answer_correct'];

const QuestionPlayComponent = ({ questionStore }) => {
  const [questions, setQuestions] = useState([
    { ask: '', answer_1: '', answer_2: '', answer_3: '', answer_correct: '' },
  ]);
  const [loading, setLoading] = useState(true);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [countQuestions, setCountQuestions] = useState(0);
  const [userResponse, setUserResponse] = useState('');
  const [secondsEllapsed, setSecondsEllapsed] = useState(0);
  // const [answerOptions, setAnswerOptions] = useState(arrayAnswer);

  const progress = useMemo(() => (secondsEllapsed * 100) / 60, [
    secondsEllapsed,
  ]);

  const navigation = useNavigation();
  const route = useRoute();
  const { theme } = route.params;

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

  useEffect(() => {
    const time = setInterval(() => {
      setSecondsEllapsed(secondsEllapsed + 1);
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, [secondsEllapsed]);

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
        const correctAnswerPoints = 100;
        const timeLeftPoints = 60 - secondsEllapsed;

        questionStore.setQuestionCount(correctAnswerPoints + timeLeftPoints);
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
      setSecondsEllapsed(0);
      randomizerAnswer(arrayAnswer);
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

  const onAnimationComplete = useCallback(() => {
    if (secondsEllapsed === 60) {
      if (countQuestions === 4) {
        navigation.navigate('EndQuiz', {
          count: questionStore.questionCorrectCount,
          theme: questions[countQuestions].theme.name,
        });
      } else {
        setSecondsEllapsed(0);
        setCheck1(false);
        setCheck2(false);
        setCheck3(false);
        setCheck4(false);
        setCountQuestions(countQuestions + 1);
      }
    }
  }, [secondsEllapsed]);

  return (
    <Container>
      {loading ? (
        <Loading color="#fff" size={100} style={{ marginTop: '70%' }} />
      ) : (
        <>
          <StatusBar barStyle="light-content" backgroundColor="#3c234a" />

          <ContainerQuestion>
            <QuestionCurrentNumber>
              Questão {countQuestions + 1}
              <QuestionTotalNumber>/5</QuestionTotalNumber>
            </QuestionCurrentNumber>

            <AnimatedCircularProgress
              size={50}
              width={3}
              fill={progress}
              rotation={0}
              tintColor="#b262c6"
              backgroundColor="#fff"
              onAnimationComplete={onAnimationComplete}
            >
              {() => <TimeText>{secondsEllapsed}</TimeText>}
            </AnimatedCircularProgress>
          </ContainerQuestion>

          <AskText>{questions[countQuestions].ask || ''}</AskText>

          <SelectCorrectAnswer
            answer={questions[countQuestions][arrayAnswer[0]] || ''}
            numberAnswer={1}
            check={check1}
            setUserResponse={setUserResponse}
            setCheck={{
              setCheck1,
              setCheck2,
              setCheck3,
              setCheck4,
            }}
          />
          <SelectCorrectAnswer
            answer={questions[countQuestions][arrayAnswer[1]] || ''}
            numberAnswer={2}
            check={check2}
            setUserResponse={setUserResponse}
            setCheck={{
              setCheck1,
              setCheck2,
              setCheck3,
              setCheck4,
            }}
          />
          <SelectCorrectAnswer
            answer={questions[countQuestions][arrayAnswer[2]] || ''}
            numberAnswer={3}
            check={check3}
            setUserResponse={setUserResponse}
            setCheck={{
              setCheck1,
              setCheck2,
              setCheck3,
              setCheck4,
            }}
          />
          <SelectCorrectAnswer
            answer={questions[countQuestions][arrayAnswer[3]] || ''}
            numberAnswer={4}
            check={check4}
            setUserResponse={setUserResponse}
            setCheck={{
              setCheck1,
              setCheck2,
              setCheck3,
              setCheck4,
            }}
          />

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
