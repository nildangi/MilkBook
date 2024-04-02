//import liraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Morning from './Morning';
import Evening from './Evening';
import { useNavigation } from '@react-navigation/native';

// create a component
const Tab = createMaterialTopTabNavigator();
const DeliveredMilk = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.4, backgroundColor: '#04C6F1', flexDirection: 'row', alignItems: 'center' }}>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('SocietyDetails')}>
                        <Image
                            style={{ margin: 10, justifyContent: 'center' }}
                            source={require('../../assest/Arrow-Right.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'space-around', alignItems: 'center', marginLeft: 100 }}>
                    <Text style={{ color: '#FFFF',fontWeight:'600',fontSize:18 }}> Delivered Milk</Text>
                </View>
            </View>
            <View style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <View style={styles.InputStyle}>
                    <Text style={{ margin: 5 }}>12/09/2022</Text>
                    <Image
                        style={{ margin: 10 }}
                        source={require('../../assest/Calendar.png')} />
                </View>
                <View>
                    <TouchableOpacity style={styles.addSociety} onPress={() => navigation.navigate('AddCustomer')}>
                        <Text style={{ color: '#FFFF' }}>Add Customer</Text>
                    </TouchableOpacity></View>
            </View>
            <View style={{flex:6}}>
            <Tab.Navigator>
                <Tab.Screen name="Morning" component={Morning} />
                <Tab.Screen name="Evening" component={Evening} />
            </Tab.Navigator>
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
        margin: 5
    },
    addSociety: {
        backgroundColor: '#04C6F1',
        width: scale(120),
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
});

//make this component available to the app
export default DeliveredMilk;
