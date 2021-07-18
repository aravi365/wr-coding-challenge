import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import List from '../screens/List';
const HomeStack = createStackNavigator();

export default function Navigation() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="List" children={List} />
    </HomeStack.Navigator>
  );
}
