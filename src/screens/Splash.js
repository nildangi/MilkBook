import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Animated, Easing } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Splash = () => {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000, // Adjust the duration as needed
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, []);

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-200, 0], // Adjust the value to control the end position
  });

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#01C5F0', '#73E0F7']} style={styles.gradient}>
        <Animated.View style={[styles.logoContainer, { transform: [{ translateY }] }]}>
          <Image source={require('../assest/logo.png')} style={styles.logo} />
        </Animated.View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 169, // Adjust size as needed
    height: 200, // Adjust size as needed
  },
});

export default Splash;
