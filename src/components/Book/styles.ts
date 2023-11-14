import styled from 'styled-components/native';

export const BookContainer = styled.View`
  flex-direction: row;
  margin: 10px;
  padding: 10px;
  border-width: 1px;
  border-color: #ddd;
  border-radius: 6px;
`;

export const BookImage = styled.Image`
  width: 80px;
  height: 120px;
  margin-right: 10px;
  border-radius: 6px;
`;

export const BookDetails = styled.View`
  flex: 1;
`;

export const BookTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const BookAuthor = styled.Text`
  font-size: 14px;
  color: #888;
`;
