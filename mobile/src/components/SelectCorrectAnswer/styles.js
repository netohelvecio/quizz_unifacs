import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const ButtonSelect = styled(RectButton)`
  margin-top: 10px;
  border-radius: 30px;
  background: #3c234a;
`;

export const Container = styled.View`
  border: 1px solid #e9bcf9;
  width: 100%;
  border-radius: 30px;
  padding: 12px 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerAnswer = styled.View`
  width: 90%;
`;

export const AnswerText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const CheckAnswer = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: #cb3675;
  justify-content: center;
  align-items: center;
`;
