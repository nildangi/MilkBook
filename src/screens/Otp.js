//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

// create a component
const Otp = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={{ flex: 0.25, justifyContent: 'center',marginLeft:scale(5) }}>
                <TouchableOpacity onPress={() => navigation.navigate('NewUser')}>
                    <Image source={require('../assest/Arrow-Right.png')} />
                </TouchableOpacity>
            </View>
            <></>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100' }}>
                <Image source={require('../assest/milkbook.png')} />
            </View>

            <View style={{ flex: 0.8}}>
                <Image source={require('../assest/pngwing.png')} />
                <Text>Hello</Text>

            </View>

            <View style={{ flex: 1.3,backgroundColor:'#FFFF', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#04C6F1',fontWeight:'800',fontSize:18 }}>Verification</Text>
                <Text style={{ color: '#000000',fontWeight:'400',fontSize:14 }}>Enter your OTP</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput style={styles.InputStyle} />
                    <TextInput style={styles.InputStyle} />
                    <TextInput style={styles.InputStyle} />
                    <TextInput style={styles.InputStyle} />
                </View>

                <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.navigate('BottomNavigation')}>
                    <Text style={{ color: '#FFFF' }}>OTP</Text>
                </TouchableOpacity>
                <Text>Didn't your received any code?</Text>
                <Text style={{ color: '#04C6F1' }}>Resend New Code</Text>


            </View>

            <View style={{ flex: 2, backgroundColor: '#FFFF', alignItems: 'center' }}>
                <Image source={require('../assest/cow.png')} />
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
        alignItems: 'center',
        margin:scale(6)
    },
    InputStyle: {
        backgroundColor: 'white',
        width: scale(42),
        height: verticalScale(40),
        borderRadius: moderateScale(40),
        justifyContent: 'center',
        alignContent: 'center',
        paddingLeft: 10,
        alignSelf: 'center',
        borderColor: '#04C6F1',
        borderWidth: 1,
        margin: scale(2)
    },
});

//make this component available to the app
export default Otp;
