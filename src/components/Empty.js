import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Empty() {
  return (
    <View style={styles.container}>
      <Text>Nothing to display here!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
