/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Tonight lets rock to the guitar bite.</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    // width: 100%,
    // height: 100%,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15%',
  },
  content: {
    fontSize: 25,
    fontFamily: 'kalam_bold',
  },
});
