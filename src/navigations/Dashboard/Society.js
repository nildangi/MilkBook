//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomNavigation from '../BottomNavigation/BottomNavigation';

// create a component
const Society = () => {
    return (
        <View style={styles.container}>
            <Text>Society</Text>
            < BottomNavigation />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Society;
