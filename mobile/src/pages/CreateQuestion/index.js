import React from 'react';
import { useRoute } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

import {
  TextAreaInputComponent,
  TextInputComponent,
} from '../../components/TextInput';

import {
  Container,
  FormText,
  TextError,
  ButtonSubmit,
  ButtonSubmitText,
} from './styles';

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
          <TextAreaInputComponent placeholder="Digite qual será a pergunta!" />
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
          <TextInputComponent placeholder="Resposta da primeira alternativa!" />
        }
        control={control}
        name="answer_1"
        onChange={(args) => args[0].nativeEvent.text}
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.ask && <TextError>Campo obrigatório</TextError>}

      <Controller
        as={
          <TextInputComponent placeholder="Resposta da segunda alternativa!" />
        }
        control={control}
        name="answer_2"
        onChange={(args) => args[0].nativeEvent.text}
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.ask && <TextError>Campo obrigatório</TextError>}

      <Controller
        as={
          <TextInputComponent placeholder="Resposta da terceira alternativa!" />
        }
        control={control}
        name="answer_3"
        onChange={(args) => args[0].nativeEvent.text}
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.ask && <TextError>Campo obrigatório</TextError>}

      <Controller
        as={<TextInputComponent placeholder="Resposta CORRETA!" />}
        control={control}
        name="answer_correct"
        onChange={(args) => args[0].nativeEvent.text}
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.ask && <TextError>Campo obrigatório</TextError>}

      <ButtonSubmit onPress={handleSubmit(handleForm)}>
        <ButtonSubmitText>Criar pergunta</ButtonSubmitText>
      </ButtonSubmit>
    </Container>
  );
};

export default CreateQuestion;
