import styled from 'styled-components/native';

export const NavigationContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  border-top-width: 1px;
  border-top-color: #ccc;
  padding-block: 10px;
`;

export const NavigationItem = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  color: #888;
`;

export const Icon = styled.Text`
  font-size: 24px;
`;

export const Label = styled.Text`
  font-size: 12px;
  margin-top: 3px;
`;
