import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 150px;
  height: 150px;
  resize: contain;
  margin-bottom: 20px;
`;

export const Text = styled.Text`
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
`;

export const SocialButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 10px;
`;
