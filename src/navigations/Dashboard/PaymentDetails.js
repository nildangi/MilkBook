//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

// create a component
const Payment = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ flex: 0.1, backgroundColor: '#04C6F1', justifyContent: 'center', alignItems: 'center', height: verticalScale(30),flexDirection:'row' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
                        <Image style={{ marginLeft: scale(-70) }}
                            source={require('../../assest/Arrow-Right.png')} />
                    </TouchableOpacity>
                    <Text style={{ color: '#FFFF', fontWeight: '500',fontSize:18 }}> Customer Payment Details</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', margin: scale(5) }}>
                    <View style={styles.InputStyle}>
                        <Text style={{ margin: 5 }}>Silver Spring PH-1</Text>
                        <Image
                            style={{ marginRight: 15, marginBottom: 10, width: 30, height: 30 }}
                            source={require('../../assest/Arrow-Down.png')} />
                    </View>
                </View>

                <View style={{ flex: 3, flexDirection: 'row', flexWrap: 'wrap' }}>

                </View>
                <ScrollView>
                    <View style={styles.mainView}>
                     <TouchableOpacity onPress={() => navigation.navigate('MilkDetailsCard')} activeOpacity={3}>
                        <View style={{ marginLeft: scale(10) }}>
                            <Text style={styles.nameStyle}>Pooja Sharma</Text>
                            <Text style={{ fontWeight: '400', fontSize: 14 }}>Blsck No B- Flat No 102</Text>
                            <Text style={{ color: '#04C6F1', fontSize: 14 }}>60 Liter <Text style={{ fontSize: 14, color: 'black' }}>₹
                                <Text style={{ fontSize: 14, color: '#04C6F1' }}>3,600</Text></Text></Text>
                        </View>
                    </TouchableOpacity>
                        <View>
                            <TouchableOpacity style={styles.addSociety} onPress={() => navigation.navigate('Society')}>
                                <Text style={{ color: '#FFFF' }}>Payment Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.mainView}>
                        <View style={{ marginLeft: scale(10) }}>
                            <Text style={styles.nameStyle}>Pooja Sharma</Text>
                            <Text style={{ fontWeight: '400', fontSize: 14 }}>Blsck No B- Flat No 102</Text>
                            <Text style={{ color: '#04C6F1', fontSize: 14 }}>60 Liter <Text style={{ fontSize: 14, color: 'black' }}>₹
                                <Text style={{ fontSize: 14, color: '#04C6F1' }}>3,600</Text></Text></Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.onTheWay} onPress={() => navigation.navigate('Society')}>
                                <Text style={{ color: '#FFFF' }}>Payment Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.mainView}>
                        <View style={{ marginLeft: scale(10) }}>
                            <Text style={styles.nameStyle}>Pooja Sharma</Text>
                            <Text style={{ fontWeight: '400', fontSize: 14 }}>Blsck No B- Flat No 102</Text>
                            <Text style={{ color: '#04C6F1', fontSize: 14 }}>60 Liter <Text style={{ fontSize: 14, color: 'black' }}>₹
                                <Text style={{ fontSize: 14, color: '#04C6F1' }}>3,600</Text></Text></Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.addSociety} onPress={() => navigation.navigate('Society')}>
                                <Text style={{ color: '#FFFF' }}>Payment Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.mainView}>
                        <View style={{ marginLeft: scale(10) }}>
                            <Text style={styles.nameStyle}>Pooja Sharma</Text>
                            <Text style={{ fontWeight: '400', fontSize: 14 }}>Blsck No B- Flat No 102</Text>
                            <Text style={{ color: '#04C6F1', fontSize: 14 }}>60 Liter <Text style={{ fontSize: 14, color: 'black' }}>₹
                                <Text style={{ fontSize: 14, color: '#04C6F1' }}>3,600</Text></Text></Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.onTheWay} onPress={() => navigation.navigate('Society')}>
                                <Text style={{ color: '#FFFF' }}>Payment Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.mainView}>
                        <View style={{ marginLeft: scale(10) }}>
                            <Text style={styles.nameStyle}>Pooja Sharma</Text>
                            <Text style={{ fontWeight: '400', fontSize: 14 }}>Blsck No B- Flat No 102</Text>
                            <Text style={{ color: '#04C6F1', fontSize: 14 }}>60 Liter <Text style={{ fontSize: 14, color: 'black' }}>₹
                                <Text style={{ fontSize: 14, color: '#04C6F1' }}>3,600</Text></Text></Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.addSociety} onPress={() => navigation.navigate('Society')}>
                                <Text style={{ color: '#FFFF' }}>Payment Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.mainView}>
                        <View style={{ marginLeft: scale(10) }}>
                            <Text style={styles.nameStyle}>Pooja Sharma</Text>
                            <Text style={{ fontWeight: '400', fontSize: 14 }}>Blsck No B- Flat No 102</Text>
                            <Text style={{ color: '#04C6F1', fontSize: 14 }}>60 Liter <Text style={{ fontSize: 14, color: 'black' }}>₹
                                <Text style={{ fontSize: 14, color: '#04C6F1' }}>3,600</Text></Text></Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.onTheWay} onPress={() => navigation.navigate('Society')}>
                                <Text style={{ color: '#FFFF' }}>Payment Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.mainView}>
                        <View style={{ marginLeft: scale(10) }}>
                            <Text style={styles.nameStyle}>Pooja Sharma</Text>
                            <Text style={{ fontWeight: '400', fontSize: 14 }}>Blsck No B- Flat No 102</Text>
                            <Text style={{ color: '#04C6F1', fontSize: 14 }}>60 Liter <Text style={{ fontSize: 14, color: 'black' }}>₹
                                <Text style={{ fontSize: 14, color: '#04C6F1' }}>3,600</Text></Text></Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.addSociety} onPress={() => navigation.navigate('Society')}>
                                <Text style={{ color: '#FFFF' }}>Payment Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.mainView}>
                        <View style={{ marginLeft: scale(10) }}>
                            <Text style={styles.nameStyle}>Pooja Sharma</Text>
                            <Text style={{ fontWeight: '400', fontSize: 14 }}>Blsck No B- Flat No 102</Text>
                            <Text style={{ color: '#04C6F1', fontSize: 14 }}>60 Liter <Text style={{ fontSize: 14, color: 'black' }}>₹
                                <Text style={{ fontSize: 14, color: '#04C6F1' }}>3,600</Text></Text></Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.onTheWay} onPress={() => navigation.navigate('Society')}>
                                <Text style={{ color: '#FFFF' }}>Payment Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.mainView}>
                        <View style={{ marginLeft: scale(10) }}>
                            <Text style={styles.nameStyle}>Pooja Sharma</Text>
                            <Text style={{ fontWeight: '400', fontSize: 14 }}>Blsck No B- Flat No 102</Text>
                            <Text style={{ color: '#04C6F1', fontSize: 14 }}>60 Liter <Text style={{ fontSize: 14, color: 'black' }}>₹
                                <Text style={{ fontSize: 14, color: '#04C6F1' }}>3,600</Text></Text></Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.addSociety} onPress={() => navigation.navigate('Society')}>
                                <Text style={{ color: '#FFFF' }}>Payment Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.mainView}>
                        <View style={{ marginLeft: scale(10) }}>
                            <Text style={styles.nameStyle}>Pooja Sharma</Text>
                            <Text style={{ fontWeight: '400', fontSize: 14 }}>Blsck No B- Flat No 102</Text>
                            <Text style={{ color: '#04C6F1', fontSize: 14 }}>60 Liter <Text style={{ fontSize: 14, color: 'black' }}>₹
                                <Text style={{ fontSize: 14, color: '#04C6F1' }}>3,600</Text></Text></Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.onTheWay} onPress={() => navigation.navigate('Society')}>
                                <Text style={{ color: '#FFFF' }}>Payment Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>



                </ScrollView >
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
        width: '95%',
        height: verticalScale(42),
        borderRadius: moderateScale(30),
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        alignSelf: 'center',
        margin: scale(5),
        borderWidth: 0.1,
        borderColor: 'black',
        elevation: 10
    },
    addSociety: {
        backgroundColor: '#04C6F1',
        width: scale(110),
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
    onTheWay: {
        backgroundColor: '#000000',
        width: scale(110),
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
    mainView:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        elevation: 10,
        marginBottom: scale(10)
    },
    nameStyle:
    {
        color: 'black',
        fontWeight: '400',
        fontSize: 18
    }

});

//make this component available to the app
export default Payment;
