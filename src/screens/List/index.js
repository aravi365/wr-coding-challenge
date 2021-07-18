import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ListItem from '../../components/ListItem';

export default function List() {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {id: 1, name: 'hi'},
          {id: 2, name: 'hello'},
        ]}
        renderItem={() => <ListItem />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
