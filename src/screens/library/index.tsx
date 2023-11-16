import React from 'react';
import { ScrollView, View } from 'react-native';

import { Book } from '../../components/Book';
import { NavigationTitle } from '../../components/NavigationTitle';

export const LibraryScreen = () => {
  const books = [
    {
      title: 'Game Of Thrones',
      author: 'George R. R. Martin',
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg',
    },
    {
      title: 'Game Of Thrones',
      author: 'George R. R. Martin',
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg',
    },
    {
      title: 'Game Of Thrones',
      author: 'George R. R. Martin',
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg',
    },
    {
      title: 'Game Of Thrones',
      author: 'George R. R. Martin',
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg',
    },
    {
      title: 'Game Of Thrones',
      author: 'George R. R. Martin',
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg',
    },
    {
      title: 'Game Of Thrones',
      author: 'George R. R. Martin',
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg',
    },
    {
      title: 'Game Of Thrones',
      author: 'George R. R. Martin',
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg',
    },
    {
      title: 'Game Of Thrones',
      author: 'George R. R. Martin',
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg',
    },
  ];

  return (
    <ScrollView style={{ width: '100%' }}>
      <View>
        <NavigationTitle title="Library" />
      </View>
      {books.map((book, index) => (
        <Book
          key={index}
          title={book.title}
          author={book.author}
          imageUrl={book.imageUrl}
        />
      ))}
    </ScrollView>
  );
};
