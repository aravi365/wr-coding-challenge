import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import colors from '../config/colors';
import metrics from '../config/metrics';
const dummyUrl =
  'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y';

export default function ListItem({item, navigation}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', {userData: item})}>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.profileImage}
            source={{uri: item.profile_image ? item.profile_image : dummyUrl}}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.nameStyle}>{item?.name}</Text>
          <Text style={styles.companyStyle}>{item?.company?.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderWidth: 0.5,
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
  nameStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 28,
    color: colors.charcoalGrey,
  },
  companyStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 24,
    color: colors.grey,
  },
});
