import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 40px;
  padding-top: 40%;
  background: #fff;
`;

export const ButtonPlay = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background: #46036b;
  height: 62px;
  width: 100%;
  margin-top: 30px;
  border-radius: 50px;
`;

export const ButtonPlayText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const ButtonCreateQuestion = styled(ButtonPlay)`
  background: #fff;
  border: 3px solid #46036b;
`;

export const ButtonCreateQuestionText = styled(ButtonPlayText)`
  color: #46036b;
`;
