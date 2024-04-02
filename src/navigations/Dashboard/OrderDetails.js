//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

// create a component
const Society = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ flex: 0.1, backgroundColor: '#04C6F1',alignItems:'center',flexDirection:'row' }}>
                    <View>  
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Image style={{ margin: 10 }}
                            source={require('../../assest/Arrow-Right.png')} />
                    </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'space-around', alignItems: 'center', marginLeft: 100 }}>
                        <Text style={{ color: '#FFFF', fontSize: 18, fontWeight: '600' }}> Order Details</Text>
                    </View>
                </View>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <View style={styles.InputStyle}>
                        <Text style={{ margin: 5, fontWeight: '600' }}>Indore Bypass</Text>
                        <Image
                            style={{ margin: 10, width: scale(20), height: verticalScale(20), marginRight: scale(16) }}
                            source={require('../../assest/Search.png')} />
                    </View>
                    <View>
                        <TouchableOpacity style={styles.addSociety} onPress={() => navigation.navigate('Society')}>
                            <Text style={{ color: '#FFFF' }}>Add Society</Text>
                        </TouchableOpacity></View>
                </View>

                <View style={{ flex: 3, flexDirection: 'row', flexWrap: 'wrap' }}>
                    <View>
                        <View style={styles.boxStyle}>
                            <Image source={require('../../assest/milktenk.png')} />
                            <Text style={{ fontSize: 15, color: 'black', fontWeight: '500' }}>Silver Spring PH-1</Text>
                            <Text style={{ fontSize: 17, color: '#04C6F1' }}>0 Liter - Order</Text>
                            <TouchableOpacity style={styles.viewStyle} onPress={() => navigation.navigate('SocietyDetails')}>
                                <Text style={{ color: '#FFFF' }}>Order Society</Text>
                            </TouchableOpacity>
                        </View>


                        <View style={styles.boxStyle}>
                            <Image source={require('../../assest/milktenk.png')} />
                            <Text style={{ fontSize: 15, color: 'black', fontWeight: '500' }}>Kalindi Kunj</Text>
                            <Text style={{ fontSize: 17, color: '#04C6F1' }}>0 Liter - Order</Text>
                            <TouchableOpacity style={styles.viewStyle}>
                                <Text style={{ color: '#FFFF' }}>Order Customer</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View style={styles.boxStyle}>
                            <Image source={require('../../assest/milktenk.png')} />
                            <Text style={{ fontSize: 15, color: 'black', fontWeight: '500' }}>Empire Victoria</Text>
                            <Text style={{ fontSize: 17, color: '#04C6F1' }}>0 Liter - Orde</Text>
                            <TouchableOpacity style={styles.viewStyle}>
                                <Text style={{ color: '#FFFF' }}>Order Customer</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.boxStyle}>
                            <Image source={require('../../assest/milktenk.png')} />
                            <Text style={{ fontSize: 15, color: 'black', fontWeight: '500' }}>Kalindi Kunj</Text>
                            <Text style={{ fontSize: 17, color: '#04C6F1' }}>0 Liter - Order</Text>
                            <TouchableOpacity style={styles.viewStyle}>
                                <Text style={{ color: '#FFFF' }}>Order Society</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View style={styles.boxStyle}>
                            <Image source={require('../../assest/milktenk.png')} />
                            <Text style={{ fontSize: 15, color: 'black', fontWeight: '500' }}>Empire Victoria</Text>
                            <Text style={{ fontSize: 17, color: '#04C6F1' }}>0 Liter - Order</Text>
                            <TouchableOpacity style={styles.viewStyle}>
                                <Text style={{ color: '#FFFF' }}>Order Customer</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.boxStyle}>
                            <Image source={require('../../assest/milktenk.png')} />
                            <Text style={{ fontSize: 15, color: 'black', fontWeight: '500' }}>Silver Spring PH-1</Text>
                            <Text style={{ fontSize: 17, color: '#04C6F1' }}>0 Liter - Order</Text>
                            <TouchableOpacity style={styles.viewStyle}>
                                <Text style={{ color: '#FFFF' }}>Order Society</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View style={styles.boxStyle}>
                            <Image source={require('../../assest/milktenk.png')} />
                            <Text style={{ fontSize: 15, color: 'black', fontWeight: '500' }}>Silver Spring PH-1</Text>
                            <Text style={{ fontSize: 17, color: '#04C6F1' }}>0 Liter - Order</Text>
                            <TouchableOpacity style={styles.viewStyle}>
                                <Text style={{ color: '#FFFF' }}>Order Customer</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.boxStyle}>
                            <Image source={require('../../assest/milktenk.png')} />
                            <Text style={{ fontSize: 15, color: 'black', fontWeight: '500' }}>Silver Spring PH-1</Text>
                            <Text style={{ fontSize: 17, color: '#04C6F1' }}>0 Liter - Order</Text>
                            <TouchableOpacity style={styles.viewStyle}>
                                <Text style={{ color: '#FFFF' }}>Order Society</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

                <View style={{ flex: 1 }}>

                </View>
            </ScrollView>
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
    InputStyle: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: scale(210),
        height: verticalScale(42),
        borderRadius: moderateScale(30),
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        alignSelf: 'center',
        margin: 5,
        borderWidth: 0.1,
        borderColor: 'black',
        elevation: 10
    },
    viewStyle: {
        backgroundColor: 'black',
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
    },
    addSociety: {
        backgroundColor: '#04C6F1',
        width: scale(125),
        height: verticalScale(42),
        borderRadius: moderateScale(30),
        justifyContent: 'center',
        // alignContent: 'center',
        alignItems: 'center',
        // alignSelf:'center',
        // paddingLeft: 10,
        margin: 5,
        elevation: 10
    },
    boxStyle: {
        backgroundColor: 'white',
        flex: 1, width: 194,
        height: 190,
        margin: 5,
        borderRadius: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        elevation: 10
    },
});

//make this component available to the app
export default Society;
