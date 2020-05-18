import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #3c234a;
  padding: 20px;
`;

export const ButtonSliderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
`;

export const TextTutorialTitle = styled.Text`
  color: #fff;
  font-size: 22px;
  margin-top: 35%;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const TextTutorial = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
  margin-bottom: 50%;
`;

export const SliderButtonText = styled.Text`
  color: #ccc;
  font-weight: bold;
  font-size: 25px;
  justify-content: center;
  margin-right: 45px;
`;

export const ButtonSliderIconBorder = styled.View`
  justify-content: center;
  align-items: center;
  width: 86px;
  height: 86px;
  border-radius: 43px;
  border: 1px solid #ccc;
`;
