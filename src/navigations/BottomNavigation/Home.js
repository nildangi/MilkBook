//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

// create a component
const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.TextStyle}>Welcome</Text>
                <Text style={styles.TextStyle}>Mangilal Doodhwale</Text>
            </View>

            <View style={{ flex: 3, flexDirection: 'row', flexWrap: 'wrap' }}>
                <View>
                    <View style={styles.boxStyle}>
                        <Image source={require('../../assest/icon/apartment.png')} />
                        <Text style={{ fontSize: 15, color: 'black', fontWeight: '500' }}>Total Society</Text>
                        <Text style={{ fontSize: 17, color: '#04C6F1' }}>10</Text>
                        <TouchableOpacity style={styles.viewStyle} onPress={() => navigation.navigate('Society')}>
                            <Text style={{ color: '#FFFF' }}>View Society</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.boxStyle}>
                        <Image source={require('../../assest/icon/Group.png')} />
                        <Text style={{ fontSize: 15, color: 'black', fontWeight: '500' }}>Total Delivery Partner</Text>
                        <Text style={{ fontSize: 17, color: '#04C6F1' }}>3</Text>
                        <TouchableOpacity style={styles.viewStyle}>
                            <Text style={{ color: '#FFFF' }}>View Partner</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View style={styles.boxStyle}>
                        <Image source={require('../../assest/icon/3User.png')} />
                        <Text style={{ fontSize: 15, color: 'black', fontWeight: '500' }}>Total Customer</Text>
                        <Text style={{ fontSize: 17, color: '#04C6F1' }}>440</Text>
                        <TouchableOpacity style={styles.viewStyle}>
                            <Text style={{ color: '#FFFF' }}>View Customer</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.boxStyle}>
                        <Image source={require('../../assest/icon/milk-bottle.png')} />
                        <Text style={{ fontSize: 15, color: 'black', fontWeight: '500' }}>Total Milk Delivered</Text>
                        <Text style={{ fontSize: 17, color: '#04C6F1' }}>1000 Liter</Text>
                        <TouchableOpacity style={styles.viewStyle}>
                            <Text style={{ color: '#FFFF' }}>View Details</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

            <View style={{ flex: 1 }}>

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
    TextStyle: {
        color: 'black',
        fontSize: 24,
        fontWeight: '400',
        fontFamily: 'Roboto-Medium'
    },
    boxStyle: {
        backgroundColor: 'white',
        flex: 1,
        width: 194,
        height: 150, margin: 5,
        borderRadius: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        elevation: 10
    },
    viewStyle: {
        backgroundColor: '#04C6F1',
        width: scale(95),
        height: verticalScale(30),
        borderRadius: moderateScale(30),
        justifyContent: 'center',
        // alignContent: 'center',
        alignItems: 'center',
        // alignSelf:'center',
        // paddingLeft: 10,
        margin: 5,
        elevation: 10

    }
});

//make this component available to the app
export default Home;
