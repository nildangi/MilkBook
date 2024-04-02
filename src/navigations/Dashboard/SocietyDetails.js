//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Society from './Society';


// create a component
const SocietyDetails = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.15, backgroundColor: '#04C6F1', flexDirection: 'row', alignItems: 'center' }}>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('OrderDetails')}>
                        <Image
                            style={{ margin: 10, justifyContent: 'center' }}
                            source={require('../../assest/Arrow-Right.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'space-around', alignItems: 'center', marginLeft: 100 }}>
                    <Text style={{ color: '#FFFF',fontSize:18,fontWeight:'600' }}> Society Details</Text>
                </View>
            </View>


            <View style={{ flex: 0.8, backgroundColor: '#F5F5F5', justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.InputStyle} >
                    <TextInput style={styles.TextStyle} placeholder='Society Name' />
                </View >
                <View style={styles.InputStyle} >
                    <TextInput style={styles.TextStyle} placeholder='Address' />
                </View >
                <View style={styles.InputStyle} >
                    <TextInput style={styles.TextStyle} placeholder='Area Pin Code' />
                </View >
                <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.navigate('BottomNavigation')}>
                    <Text style={{ color: '#FFFF' }}>Submit</Text>
                </TouchableOpacity >
            </View>
            <View style={{ flex: 1.2 }}></View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    btnStyle: {
        backgroundColor: '#000000',
        width: scale(335),
        height: verticalScale(42),
        borderRadius: moderateScale(30),
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 5
    },
    InputStyle: {
        backgroundColor: 'white',
        width: scale(335),
        height: verticalScale(42),
        borderRadius: moderateScale(30),
        justifyContent: 'center',
        alignContent: 'center',
        paddingLeft: 10,
        alignSelf: 'center',
        margin: 5,
        elevation: 10
    },
    TextStyle: {
        color: 'black',
        fontWeight: '500',
    },
});

//make this component available to the app
export default SocietyDetails;
