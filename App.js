//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Navigations from './src/navigations/Navigations';
import Splash from './src/screens/Splash';

// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#04C6F1" />
      <Navigations />
      {/* <Splash /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
