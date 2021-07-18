import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import List from '../screens/List';
import Detail from '../screens/Detail';
const HomeStack = createStackNavigator();

export default function Navigation() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="List" children={List} />
      <HomeStack.Screen name="Detail" children={Detail} />
    </HomeStack.Navigator>
  );
}
