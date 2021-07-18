/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigator from './navigation/Navigator';
import configureStore from './redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
const {persistor, store} = configureStore();

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <StatusBar barStyle={'dark-content'} />
            <Navigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default App;
