import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px 32px;
  background: #fff;
`;

export const ThemeTitle = styled.Text`
  color: #333;
  font-size: 20px;
  font-weight: bold;
  margin-top: -10px;
`;

export const ThemesList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  width: 100%;
`;

export const ButtonTheme = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background: #46036b;
  height: 62px;
  margin-top: 20px;
  border-radius: 50px;
`;

export const ButtonThemeText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
