import React, { useState, useRef } from 'react';
import { useRoute } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';

import Loading from '../../components/Loading';

import api from '../../services/api';

import {
  Container,
  FormText,
  TextError,
  ButtonSubmit,
  ButtonSubmitText,
} from './styles';

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: '#eee',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 10,
    fontSize: 18,
    borderWidth: 2,
  },
});

const CreateQuestion = () => {
  const [loading, setLoading] = useState(false);
  const route = useRoute();

  const answer1 = useRef();
  const answer2 = useRef();
  const answer3 = useRef();
  const answerCorrect = useRef();

  const { theme } = route.params;
  const { control, handleSubmit, errors } = useForm();

  async function handleForm({ ask, answer_1,  answer_2, answer_3, answer_correct}) {
    try {
      setLoading(true);

      await api.post('questions', {
        ask,
        answer_1,
        answer_2,
        answer_3,
        answer_correct,
        theme,
      });

      setLoading(false);
      Alert.alert('Pergunta cadastrada com sucesso!');
    } catch (err) {
      console.log(err.response.data.error);
      Alert.alert('Erro ao cadastrar pergunta, tente novamente');
      setLoading(false);
    }
  }

  return (
    <Container>
      <FormText>Preencha os campos e crie sua pergunta</FormText>

      <Controller
        as={
          <TextInput
            placeholder="Digite qual será a pergunta!"
            multiline
            numberOfLines={3}
            textAlignVertical="top"
            placeholderTextColor="#666"
            style={[
              styles.inputStyle,
              { borderColor: errors.ask ? '#CB394B' : '#999' },
            ]}
            returnKeyType="next"
            onSubmitEditing={() => answer1.current.focus()}
          />
        }
        control={control}
        name="ask"
        onChange={(args) => args[0].nativeEvent.text}
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.ask && <TextError>Campo obrigatório</TextError>}

      <Controller
        as={
          <TextInput
            placeholder="Resposta da primeira alternativa!"
            placeholderTextColor="#666"
            style={[
              styles.inputStyle,
              { borderColor: errors.answer_1 ? '#CB394B' : '#999' },
            ]}
            ref={answer1}
            returnKeyType="next"
            onSubmitEditing={() => answer2.current.focus()}
          />
        }
        control={control}
        name="answer_1"
        onChange={(args) => args[0].nativeEvent.text}
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.answer_1 && <TextError>Campo obrigatório</TextError>}

      <Controller
        as={
          <TextInput
            placeholder="Resposta da segunda alternativa!"
            placeholderTextColor="#666"
            style={[
              styles.inputStyle,
              { borderColor: errors.answer_2 ? '#CB394B' : '#999' },
            ]}
            ref={answer2}
            returnKeyType="next"
            onSubmitEditing={() => answer3.current.focus()}
          />
        }
        control={control}
        name="answer_2"
        onChange={(args) => args[0].nativeEvent.text}
        rules={{ required: true }}
        defaultValue=""
      />

      {errors.answer_2 && <TextError>Campo obrigatório</TextError>}

      <Controller
        as={
          <TextInput
            placeholder="Resposta da terceira alternativa!"
            placeholderTextColor="#666"
            style={[
              styles.inputStyle,
              { borderColor: errors.answer_3 ? '#CB394B' : '#999' },
            ]}
            ref={answer3}
            returnKeyType="next"
            onSubmitEditing={() => answerCorrect.current.focus()}
          />
        }
        control={control}
        name="answer_3"
        onChange={(args) => args[0].nativeEvent.text}
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.answer_3 && <TextError>Campo obrigatório</TextError>}

      <Controller
        as={
          <TextInput
            placeholder="Resposta CORRETA!"
            placeholderTextColor="#666"
            style={[
              styles.inputStyle,
              { borderColor: errors.answer_correct ? '#CB394B' : '#999' },
            ]}
            ref={answerCorrect}
            returnKeyType="send"
            onSubmitEditing={handleSubmit(handleForm)}
          />
        }
        control={control}
        name="answer_correct"
        onChange={(args) => args[0].nativeEvent.text}
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.answer_correct && <TextError>Campo obrigatório</TextError>}

      <ButtonSubmit onPress={handleSubmit(handleForm)}>
        {loading ? <Loading color="#fff" size={26} /> : <ButtonSubmitText>Criar pergunta</ButtonSubmitText>}
      </ButtonSubmit>
    </Container>
  );
};

export default CreateQuestion;
