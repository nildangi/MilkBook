//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

// create a component
const Otp = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={{ flex: 0.25, backgroundColor: 'green', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('NewUser')}>
                    <Image source={require('../assest/Arrow-Right.png')} />
                </TouchableOpacity>
            </View>
            <></>
            <View style={{ flex: 1, backgroundColor: '#EB984E', justifyContent: 'center', alignItems: 'center', width: '100' }}>
                <Image
                    style={{}}
                    source={require('../assest/milkbook.png')} />
            </View>

            <View style={{ flex: 0.8, backgroundColor: '#16A085' }}>
                <Image
                    style={{}}
                    source={require('../assest/pngwing.png')} />
                <Text>Hello</Text>

            </View>

            <View style={{ flex: 1.2, backgroundColor: '#1A5276', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#04C6F1' }}>Verification</Text>
                <Text>Enter your OTP</Text>
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

            <View style={{ flex: 1.8, backgroundColor: '#D98880', alignItems: 'center' }}>
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
        alignItems: 'center'
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
