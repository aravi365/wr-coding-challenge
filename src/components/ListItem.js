import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import colors from '../config/colors';
import metrics from '../config/metrics';

export default function ListItem() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.profileImage}
          source={{uri: 'https://randomuser.me/api/portraits/men/10.jpg'}}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Name</Text>
        <Text style={styles.textStyle}>Company Name</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.warmGrey,
    height: 100,
    width: metrics.screenWidth - 20,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  textContainer: {
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  textStyle: {
    fontSize: 15,
    lineHeight: 28,
    color: colors.charcoalGrey,
  },
});
