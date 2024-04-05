//import liraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

// create a component
const Profile = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.3, backgroundColor: '#04C6F1', justifyContent: 'center', alignItems: 'center', height: verticalScale(30), flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.navigate('OrderDetail')}>
                    <Image style={{ marginLeft: scale(-140) }}
                        source={require('../../assest/Arrow-Right.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#FFFF', fontWeight: '500', fontSize: 18 }}> Profile</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: '#F5F5F5', justifyContent: 'center', alignItems: 'center' }}>
                <Image  
                source={require('../../assest/Ellipse2.png')} />
                <View style={{ margin: scale(-10),height:20,width:80,alignItems:'center' }}>
                    <Text style={{ marginTop: -35, backgroundColor: '#00000060', color: '#FFFF', fontSize: 12 }}>Edit Photo</Text>
                </View>
            </View>
            <View style={{ flex: 3}}>
                <View style={styles.InputStyle} >
                    <TextInput style={styles.TextStyle} placeholder='Manhilal Doodhwale' />
                </View>
                <View style={styles.InputStyle} >
                    <TextInput style={styles.TextStyle} placeholder='Sachin Sharma' />
                </View>
                <View style={styles.InputStyle} >
                    <TextInput style={styles.TextStyle} placeholder='+91 1234567890' />
                </View>
                <View style={styles.InputStyle} >
                    <TextInput style={styles.TextStyle} placeholder='Race Course Rd, New Palasia, Indore' />
                </View>
                <View style={styles.InputStyle} >
                    <TextInput style={styles.TextStyle} placeholder='452001' />
                </View>
                <View>
                    <TouchableOpacity style={styles.UpdateBtn} onPress={() => navigation.navigate('Society')}>
                        <Text style={{ color: '#FFFF' }}>Update Profile</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.LogoutBtn} onPress={() => navigation.navigate('Society')}>
                        <Text style={{ color: '#FFFF' }}>Logout</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={{ flex: 1}}></View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    InputStyle: {
        backgroundColor: 'white',
        width: scale(335),
        height: verticalScale(42),
        borderRadius: moderateScale(30),
        justifyContent: 'center',
        alignContent: 'center',
        // alignItems: 'center',
        paddingLeft: verticalScale(10),
        alignSelf: 'center',
        margin: scale(5),
        elevation: 10
    },
    TextStyle: {
        color: 'black',
        fontWeight: '600',
    },
    UpdateBtn: {
        backgroundColor: '#04C6F1',
        width: scale(335),
        height: verticalScale(41),
        borderRadius: moderateScale(30),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        // paddingLeft: 10,
        margin: scale(5),
        elevation: 10
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
        margin: scale(5),
        elevation: 10
    },
});

export default Profile;
