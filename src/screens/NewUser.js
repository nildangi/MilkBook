//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Register from './Register';
// create a component
const NewUser = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.4, backgroundColor: 'green', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Image source={require('../assest/Arrow-Right.png')} />
                </TouchableOpacity>
            </View>

            <View style={{ flex: 0.9, backgroundColor: '#EC7063', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    style={{}}
                    source={require('../assest/milkbook.png')} />
                <Text>Hello</Text>
            </View>

            <View style={{ flex: 0.5, backgroundColor: '#148F77', alignItems: 'center' }}>
                <Image source={require('../assest/uploadlogo.png')}
                    style={{ width: 80, height: 80 }}
                />
                <Text>Hello</Text>
            </View>

            <View style={{ flex: 3, backgroundColor: '#5499C7' }}>
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
                <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.navigate('NewUser')}>
                    <Text style={{ color: '#FFFF' }}>Register</Text>
                </TouchableOpacity >
            </View>

            <View style={{ flex: 0.7, backgroundColor: '#566573', alignSelf: 'flex-start', justifyContent: 'space-around' }}>
                <Image
                    style={{}}
                    source={require('../assest/pngwing.png')} />
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
        width: 328,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignContent: 'center',
        // alignItems: 'center',
        paddingLeft: 10,
        alignSelf: 'center',
        margin: 5
    },
    TextStyle: {
        color: 'black',
        fontWeight: '900',
    },
    btnStyle: {
        backgroundColor: '#000000',
        width: 328,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        margin: 5
    },
});

//make this component available to the app
export default NewUser;
