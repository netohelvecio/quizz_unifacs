import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #3c234a;
  padding: 20px 40px;
`;

export const TimeText = styled.Text`
  font-size: 20px;
  color: #ebb9fe;
  margin-bottom: 15px;
`;
export const QuestionCurrentNumber = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #b262c6;
`;

export const QuestionTotalNumber = styled.Text`
  font-size: 18px;
  color: #b262c6;
`;

export const AskText = styled.Text`
  color: #fff;
  font-size: 20px;
  margin-top: 15px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  width: 100%;
  background: #cc3578;
  justify-content: center;
  align-items: center;
  height: 48px;
  border-radius: 50px;
  margin-top: 15px;
`;

export const ButtonSubmitText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
