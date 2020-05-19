import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #3c234a;
  padding: 16px 28px;
`;

export const ContainerScore = styled.View`
  background: #1cd685;
  padding: 18px 12px;
  border-radius: 25px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const TextCongratulations = styled.Text`
  color: #fff;
  font-size: 48px;
  font-weight: bold;
`;

export const TextCongratulationsSubTitle = styled.Text`
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 18px;
`;

export const TextScore = styled.Text`
  font-size: 84px;
  color: #10472f;
  font-weight: bold;
`;

export const TextAnswerTotal = styled.Text`
  font-size: 64px;
  color: #10472f;
  font-weight: bold;
`;

export const ButtonShare = styled.TouchableOpacity`
  width: 100%;
  height: 45px;
  border-radius: 16px;
  border: 2px solid #83c7b5;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const ButtonShareText = styled.Text`
  color: #83c7b5;
  font-size: 16px;
  font-weight: bold;
`;

export const ButtonBack = styled.TouchableOpacity`
  background: #cc3578;
  width: 100%;
  height: 45px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const ButtonBackText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;