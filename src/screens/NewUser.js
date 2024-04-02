//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

// create a component
const NewUser = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.3, justifyContent: 'center',marginLeft:scale(5) }}>
                <TouchableOpacity onPress={() => navigation.navigate('Registers')}>
                    <Image source={require('../assest/Arrow-Right.png')} />
                </TouchableOpacity>
            </View>

            <View style={{ flex: 0.9, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    style={{}}
                    source={require('../assest/milkbook.png')} />
                    <Text style={{fontWeight:'800'}}>Create yout account</Text>
            </View>

            <View style={{ flex: 0.5, alignItems: 'center', }}>
                <Image source={require('../assest/uploadlogo.png')}
                    style={{ width: scale(70), height: verticalScale(70) }}
                />
                <Text>Hello</Text>
            </View>

            <View style={{ flex: 3}}>
                <View style={styles.InputStyle} >
                    <TextInput style={styles.TextStyle} placeholder='Dairy Shop Name' />
                </View >
                <View style={styles.InputStyle} >
                    <TextInput style={styles.TextStyle} placeholder='Dairy Owner Full Name' />
                </View >
                <View style={styles.InputStyle} >
                    <TextInput style={styles.TextStyle} placeholder='Mobile Number' />
                </View >
                <View style={styles.InputStyle} >
                    <TextInput style={styles.TextStyle} placeholder='Address' />
                </View >
                <View style={styles.InputStyle} >
                    <TextInput style={styles.TextStyle} placeholder='Area Pin Code' />
                </View >
                <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.navigate('Login')}>
                    <Text style={{ color: '#FFFF' }}>Register</Text>
                </TouchableOpacity >
            </View>

            <View style={{ flex: 0.7, alignSelf: 'flex-start', justifyContent: 'space-around' }}>
                <Image source={require('../assest/pngwing.png')} />
                <Text>Hellos</Text>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#04C6F1',
    },
    InputStyle: {
        backgroundColor: 'white',
        width: scale(280),
        height: verticalScale(42),
        borderRadius: moderateScale(30),
        justifyContent: 'center',
        alignContent: 'center',
        // alignItems: 'center',
        paddingLeft: 10,
        alignSelf: 'center',
        margin: 5
    },
    TextStyle: {
        color: 'black',
        fontWeight: '500',
    },
    btnStyle: {
        backgroundColor: '#000000',
        width: scale(280),
        height: verticalScale(42),
        borderRadius: moderateScale(30),
        justifyContent: 'center',
        // alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        margin: 5
    },
});

//make this component available to the app
export default NewUser;
