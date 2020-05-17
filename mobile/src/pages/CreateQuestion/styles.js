import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  flex: 1;
  padding: 12px;
`;

export const FormText = styled.Text`
  font-size: 20px;
  color: #46036b;
  font-weight: bold;
  text-align: center;
  margin-bottom: 7px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  margin-top: 14px;
  width: 100%;
  background: #46036b;
  padding: 15px 0;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const ButtonSubmitText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const TextError = styled.Text`
  font-size: 10px;
  color: #CB394B;
`;
