//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Navigations from './src/Navigations';
import Splash from './src/screens/Splash';
import BottomNavigation from './src/navigations/BottomNavigation/BottomNavigation';

// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#04C6F1" />
      <Navigations />
      {/* <BottomNavigation /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
