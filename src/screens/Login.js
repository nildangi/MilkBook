//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


// create a component
const Register = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.25, backgroundColor: 'green', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('NewUser')}>
                    <Image source={require('../assest/Arrow-Right.png')} />
                </TouchableOpacity>
            </View>

            <View style={{ flex: 0.9, backgroundColor: '#EB984E', justifyContent: 'center', alignItems: 'center', width: '100' }}>
                <Image source={require('../assest/milkbook.png')} />
            </View>

            <View style={{ flex: 0.6, backgroundColor: '#16A085',justifyContent:'space-between'}}>
                <Image source={require('../assest/pngwing.png')}/>
               
            </View> 

            <View style={{ flex: 0.8, backgroundColor: '#1A5276', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{color:'#04C6F1',fontWeight:'700'}}>Login With OTP</Text>
                <View style={styles.InputStyle} >
                    <TextInput style={styles.TextStyle} placeholder='Mobile Number' />
                </View >
                <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.navigate('Otp')}>
                    <Text style={{ color: '#FFFF' }}>OTP</Text>
                </TouchableOpacity >
            </View>

            <View style={{ flex: 1.8, backgroundColor: '#D98880', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../assest/pngwing1.png')} />
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
    btnStyle: {
        backgroundColor: '#000000',
        width: scale(280),
        height: verticalScale(42),
        borderRadius: moderateScale(30),
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
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
        fontWeight: '600',
    },
});

//make this component available to the app
export default Register;
