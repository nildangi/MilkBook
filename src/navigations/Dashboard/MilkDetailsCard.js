//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Modal from "react-native-modal";
import { Calendar } from 'react-native-calendars';

// create a component
const MilkDetailsCard = ({navigation}) => {
   
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.1, backgroundColor: '#04C6F1', justifyContent: 'center', alignItems: 'center', height: verticalScale(30), flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.navigate('PaymentDetails')}>
                    <Image style={{ marginLeft: scale(-80) }}
                        source={require('../../assest/Arrow-Right.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#FFFF', fontWeight: '500', fontSize: 18 }}> Customer Milk Details</Text>
            </View>
            <View style={styles.mainView}>
                <View style={{ marginLeft: scale(10) }}>
                    <Text style={styles.nameStyle}>Pooja Sharma</Text>
                    <Text style={{ fontWeight: '400', fontSize: 14 }}>Blsck No B- Flat No 102</Text>
                    <Text style={{ color: '#04C6F1', fontSize: 14 }}>60 Liter <Text style={{ fontSize: 14, color: 'black' }}>₹
                        <Text style={{ fontSize: 14, color: '#04C6F1' }}>3,600</Text></Text></Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.addSociety} onPress={() => navigation.navigate('BottomNavigation')}>
                        <Text style={{ color: '#FFFF' }}>Payment Done</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <Calendar
                    onDayPress={(day) => console.log('selected day', day)}
                    hideExtraDays={true}
                    markedDates={{
                        '2022-04-05': { selected: true, marked: true, selectedColor: 'blue' },
                        '2022-04-06': { marked: true },
                        '2022-04-07': { marked: true, dotColor: 'red', activeOpacity: 0 },
                    }}
                />
            <View>
                <TouchableOpacity style={styles.LogoutBtn} onPress={() => navigation.navigate('MonthalyBill')}>
                    <Text style={{ color: '#FFFF' }}>View Bill Details</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    nameStyle:
    {
        color: 'black',
        fontWeight: '400',
        fontSize: 18
    },
    addSociety: {
        backgroundColor: '#04C6F1',
        width: scale(110),
        height: verticalScale(30),
        borderRadius: moderateScale(30),
        justifyContent: 'center',
        // alignContent: 'center',
        alignItems: 'center',
        // alignSelf:'center',
        // paddingLeft: 10,
        margin: 5,
        elevation: 10
    },
    mainView:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: scale(10),
        backgroundColor: '#FFFF',
        marginTop: 10,
        // elevation: 10,
        alignItems: 'center'
    },
    LogoutBtn: {
        backgroundColor: '#000000',
        width: scale(335),
        height: verticalScale(41),
        borderRadius: moderateScale(30),
        justifyContent: 'center',
        // alignContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        // paddingLeft: 10,
        margin: 5,
        elevation: 10
    },
});

//make this component available to the app
export default MilkDetailsCard;
