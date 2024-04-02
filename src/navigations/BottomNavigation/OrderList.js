//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DeliveredMilk from '../Dashboard/DeliveredMilk';

// create a component
const OrderList = () => {
    return (
       <DeliveredMilk />
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default OrderList;
