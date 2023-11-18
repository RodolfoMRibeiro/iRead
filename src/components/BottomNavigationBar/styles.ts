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
  padding-block: 8px;
`;

export const NavigationItem = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
`;

export const NavigationItemLabel = styled.Text`
  font-size: 10px;
  color: #000;
`;
