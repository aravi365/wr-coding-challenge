import React from 'react';
import {StyleSheet, Text, Image, View, Linking} from 'react-native';
import colors from '../../config/colors';
import metrics from '../../config/metrics';
const dummyUrl =
  'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y';

export default function Detail(props) {
  const {userData} = props.route.params;
  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={{
          uri: userData.profile_image ? userData.profile_image : dummyUrl,
        }}
      />
      <Text style={styles.nameStyle}>{userData.name}</Text>
      <Text style={styles.userName}>@{userData.username}</Text>
      <Text>email: {userData.email}</Text>
      <View>
        <Text style={styles.titleText}>Address</Text>
        <Text style={styles.addressText}>
          Street: {userData?.address?.street},
        </Text>
        <Text style={styles.addressText}>
          Suite: {userData?.address?.suite},
        </Text>
        <Text style={styles.addressText}>City: {userData?.address?.city},</Text>
        <Text style={styles.addressText}>
          Zip: {userData?.address?.zipcode}
        </Text>
        <View style={styles.other}>
          <Text>Phone: {userData?.phone || 'N/A'}</Text>
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('http://' + userData?.website)}>
            <Text style={styles.normalText}>Website:</Text> {userData?.website}
          </Text>
        </View>
        <Text style={styles.addressText}>
          Company: {userData?.company?.name}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingTop: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  nameStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 28,
    color: colors.charcoalGrey,
    marginTop: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20,
    color: colors.brownishGrey,
  },
  email: {
    fontSize: 18,
    lineHeight: 20,
    color: colors.warmGrey,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.charcoalGrey,
    marginTop: 10,
  },
  addressText: {
    fontSize: 15,
    color: colors.charcoalGrey,
  },
  other: {marginTop: 10},
  link: {color: 'blue'},
  normalText: {color: 'black'},
});
