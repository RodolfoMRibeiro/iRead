import React from 'react';
import {
  BookAuthor,
  BookContainer,
  BookDetails,
  BookImage,
  BookTitle,
} from './styles';

interface BookProps {
  title: string;
  author: string;
  imageUrl: string;
}

export const Book: React.FC<BookProps> = ({ title, author, imageUrl }) => {
  return (
    <BookContainer>
      <BookImage source={{ uri: imageUrl }} />
      <BookDetails>
        <BookTitle>{title}</BookTitle>
        <BookAuthor>{author}</BookAuthor>
      </BookDetails>
    </BookContainer>
  );
};
