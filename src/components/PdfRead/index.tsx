import React from 'react';
import { Container, PdfView } from './styles';

const PdfResource = {
  uri: 'https://books-library.net/files/books-library.online-01052042Lx2L3.pdf',
  cache: true,
};

export const PdfRead: React.FC = () => {
  return (
    <Container>
      <PdfView
        source={PdfResource}
        trustAllCerts={false}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`number of pages: ${numberOfPages}`);
          console.log(`file path: ${filePath}`);
        }}
      />
    </Container>
  );
};
