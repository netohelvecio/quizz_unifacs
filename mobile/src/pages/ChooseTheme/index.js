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

import logo from '../../assets/logo.png';

const ChooseTheme = () => {
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

  function goToCreateQuestion(id) {
    navigation.navigate('CreateQuestion', { theme: id });
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Image source={logo} resizeMode="center" />

      <ThemeTitle>Escolha uma categoria</ThemeTitle>

      {loading ? (
        <Loading style={{ marginTop: '40%' }} color="#46036b" size={80} />
      ) : (
        <ThemesList
          data={themes}
          keyExtractor={(theme) => theme._id}
          renderItem={({ item }) => (
            <ButtonTheme onPress={() => goToCreateQuestion(item._id)}>
              <ButtonThemeText>{item.name}</ButtonThemeText>
            </ButtonTheme>
          )}
        />
      )}
    </Container>
  );
};

export default ChooseTheme;
