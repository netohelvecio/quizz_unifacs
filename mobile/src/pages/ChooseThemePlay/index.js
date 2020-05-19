import React, { useState, useEffect } from 'react';
import { Image, StatusBar, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import Loading from '../../components/Loading';

import {
  Container,
  ThemeTitle,
  ThemesList,
  ButtonTheme,
  ButtonThemeText,
} from './styles';

import logo from '../../assets/logo-white.png';

const ChooseThemePlay = () => {
  const [themes, setThemes] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    async function loadThemes() {
      try {
        setLoading(true);
        const response = await api.get('themes');
        setThemes(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        Alert.alert('Erro ao listar temas');
        setLoading(false);
      }
    }

    loadThemes();
  }, []);

  function goToQuestionPlay(name) {
    navigation.navigate('QuestionPlay', { theme: name });
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#3c234a" />
      <Image source={logo} resizeMode="center" />

      <ThemeTitle>Escolha uma categoria</ThemeTitle>

      {loading ? (
        <Loading style={{ marginTop: '40%' }} color="#fff" size={80} />
      ) : (
        <ThemesList
          data={themes}
          keyExtractor={(theme) => theme._id}
          renderItem={({ item }) => (
            <ButtonTheme onPress={() => goToQuestionPlay(item.name)}>
              <ButtonThemeText>{item.name}</ButtonThemeText>
            </ButtonTheme>
          )}
        />
      )}
    </Container>
  );
};

export default ChooseThemePlay;
