import React from 'react';
import { useRoute } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, StyleSheet } from 'react-native';

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
  const route = useRoute();

  const { theme } = route.params;
  const { control, handleSubmit, errors } = useForm();

  function handleForm(data) {
    const form = JSON.stringify(data);
    console.log(form);
  }

  return (
    <Container>
      <FormText>Preencha os campos e crie sua pergunta</FormText>

      <Controller
        as={
          <TextInput placeholder="Digite qual será a pergunta!" multiline numberOfLines={3} textAlignVertical="top" placeholderTextColor="#666" style={[styles.inputStyle, {borderColor: errors.answer_1 ? '#CB394B' : '#999'}]}/>
        }
        control={control}
        name="ask"
        onChange={args => args[0].nativeEvent.text}
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.ask && <TextError>Campo obrigatório</TextError>}

      <Controller
        as={<TextInput placeholder="Resposta da primeira alternativa!" placeholderTextColor="#666" style={[styles.inputStyle, {borderColor: errors.answer_1 ? '#CB394B' : '#999'}]} />}
        control={control}
        name="answer_1"
        onChange={(args) => args[0].nativeEvent.text}
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.answer_1 && <TextError>Campo obrigatório</TextError>}

      <Controller
        as={
          <TextInput placeholder="Resposta da segunda alternativa!" placeholderTextColor="#666" style={[styles.inputStyle, {borderColor: errors.answer_1 ? '#CB394B' : '#999'}]} />
        }
        control={control}
        name="answer_2"
        onChange={args => args[0].nativeEvent.text}
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.answer_2 && <TextError>Campo obrigatório</TextError>}

      <Controller
        as={
          <TextInput placeholder="Resposta da terceira alternativa!" placeholderTextColor="#666" style={[styles.inputStyle, {borderColor: errors.answer_1 ? '#CB394B' : '#999'}]} />
        }
        control={control}
        name="answer_3"
        onChange={args => args[0].nativeEvent.text}
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.answer_3 && <TextError>Campo obrigatório</TextError>}

      <Controller
        as={<TextInput placeholder="Resposta CORRETA!" placeholderTextColor="#666" style={[styles.inputStyle, {borderColor: errors.answer_1 ? '#CB394B' : '#999'}]} />}
        control={control}
        name="answer_correct"
        onChange={args => args[0].nativeEvent.text}
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.answer_correct && <TextError>Campo obrigatório</TextError>}

      <ButtonSubmit onPress={handleSubmit(handleForm)}>
        <ButtonSubmitText>Criar pergunta</ButtonSubmitText>
      </ButtonSubmit>
    </Container>
  );
};

export default CreateQuestion;
