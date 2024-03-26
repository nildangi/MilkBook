//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Navigations from '../navigations/Navigations';
import NewUser from './NewUser';

// create a component
const Register = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, backgroundColor: '#EB984E', justifyContent: 'flex-end', alignItems: 'center', width: '100' }}>
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

            <View style={{ flex: 0.7, backgroundColor: '#1A5276', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={styles.btnStyle}onPress={() => navigation.navigate('NewUser')}>
                    <Text style={{ color: '#FFFF' }}>Register</Text>
                </TouchableOpacity >
                <Text style={{ alignSelf: 'center', alignContent: 'center' }}>Already have an account ?<TouchableOpacity>
                    <Text style={{ color: '#04C6F1', marginTop: 20, padding: 10 }}>Login</Text>
                </TouchableOpacity></Text>

            </View>

            <View style={{ flex: 1.8, backgroundColor: '#D98880', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    style={{}}
                    source={require('../assest/cow.png')} />
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
        width: 328,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'


    },
});

//make this component available to the app
export default Register;
