import React from 'react';
import { ScrollView, View } from 'react-native';

import { Book } from '../../components/Book';
import { NavigationTitle } from '../../components/NavigationTitle';

export const Library = () => {
  const books = [{ title: '', author: '', imageUrl: 'https://' }];

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
